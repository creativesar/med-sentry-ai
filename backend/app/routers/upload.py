import json
import re
import logging
import asyncio
import base64
from time import time
from datetime import datetime
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Request
from sqlalchemy.orm import Session

from .. import models, schemas, database
from ..services import gemini
from ..utils import limiter

router = APIRouter(tags=["Upload"])
logger = logging.getLogger(__name__)

@router.post("/upload/analyze", response_model=schemas.TriageResponse)
@limiter.limit("20/minute")
async def analyze_upload(
    request: Request,
    file: UploadFile = File(...), 
    conversation_id: Optional[int] = None,
    db: Session = Depends(database.get_db)
):
    start_time = time()
    logger.info(f"Document upload request received: {file.filename}")
    
    if file.content_type not in ["image/jpeg", "image/png", "image/webp", "application/pdf"]:
        raise HTTPException(status_code=400, detail="Invalid file type.")

    # 1. Handle Conversation
    if conversation_id:
        conversation = db.query(models.Conversation).filter(models.Conversation.id == conversation_id).first()
        if not conversation:
            conversation = models.Conversation(title=f"Report Analysis {datetime.utcnow().strftime('%Y-%m-%d %H:%M')}")
            db.add(conversation)
            db.commit()
            db.refresh(conversation)
    else:
        conversation = models.Conversation(title=f"Report Analysis {datetime.utcnow().strftime('%Y-%m-%d %H:%M')}")
        db.add(conversation)
        db.commit()
        db.refresh(conversation)

    # 2. Save User Upload Record (Message)
    user_msg = models.Message(
        conversation_id=conversation.id,
        sender="user",
        text_content=f"Uploaded file: {file.filename}"
    )
    db.add(user_msg)
    db.commit()

    try:
        content = await file.read()
        
        system_prompt = gemini.build_analysis_prompt()

        model = gemini.get_model(model_names=['gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-1.5-pro', 'gemini-pro'])
        
        if model is None:
            logger.error("All Gemini models failed to initialize for document analysis")
            raise HTTPException(
                status_code=500,
                detail="AI service is currently unavailable. Please check your API key and try again later."
            )
        
        # Encode content as base64 for Gemini API
        encoded_content = base64.b64encode(content).decode('utf-8')
        
        content_parts = [system_prompt]
        if file.content_type == "application/pdf":
             content_parts.append({"mime_type": "application/pdf", "data": encoded_content})
        else:
             content_parts.append({"mime_type": file.content_type, "data": encoded_content})

        # Use async generation with timeout
        try:
            response = await asyncio.wait_for(model.generate_content_async(content_parts), timeout=30.0)
        except asyncio.TimeoutError:
            logger.error("Gemini API timeout for document analysis")
            raise HTTPException(status_code=504, detail="Request timeout. Please try again.")
        except Exception as api_error:
            logger.error(f"Gemini API error for document analysis: {api_error}")
            raise HTTPException(status_code=500, detail=f"AI service error: {str(api_error)}")
        
        if not response or not hasattr(response, 'text') or not response.text:
            logger.error("Empty response from Gemini API for document analysis")
            raise HTTPException(status_code=500, detail="Empty response from AI service. Please try again.")
        
        cleaned_response_text = response.text.strip().replace("```json", "").replace("```", "").strip()
        
        try:
            data = json.loads(cleaned_response_text)
        except json.JSONDecodeError as json_error:
            logger.error(f"JSON parsing error in document analysis: {json_error}. Response text: {cleaned_response_text[:200]}")
            # Try to extract JSON from the response
            json_match = re.search(r'\{.*\}', cleaned_response_text, re.DOTALL)
            if json_match:
                try:
                    data = json.loads(json_match.group())
                except:
                    raise HTTPException(status_code=500, detail="Failed to parse AI response. Please try again.")
            else:
                raise HTTPException(status_code=500, detail="Invalid response format from AI service. Please try again.")

        # 3. Save AI Response
        readable_content = f"[{data.get('triage_level')}] {data.get('summary')}"
        ai_msg = models.Message(
            conversation_id=conversation.id,
            sender="ai",
            text_content=readable_content,
            structured_data=json.dumps(data)
        )
        db.add(ai_msg)
        db.commit()

        return schemas.TriageResponse(
            summary=data.get("summary"),
            triage_level=data.get("triage_level"),
            possible_conditions=data.get("possible_conditions", []),
            diagnosis=data.get("diagnosis"),
            medications=data.get("medications", []),
            treatment_plan=data.get("treatment_plan", []),
            suggested_next_steps=data.get("suggested_next_steps", []),
            clarifying_questions=data.get("clarifying_questions", []),
            emergency_warning=data.get("emergency_warning"),
            red_flags=data.get("red_flags", []),
            prevention_tips=data.get("prevention_tips", []),
            abnormal_findings=data.get("abnormal_findings", []),
            normal_findings=data.get("normal_findings", []),
            disclaimer=data.get("disclaimer", "⚠️ EDUCATIONAL PURPOSES ONLY"),
            conversation_id=conversation.id
        )

    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error in document analysis: {e}", exc_info=True)
        raise HTTPException(
            status_code=500,
            detail="An error occurred while processing your request. Please try again."
        )
