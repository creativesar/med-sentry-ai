import json
import re
import logging
import asyncio
from time import time
from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from slowapi import Limiter
from slowapi.util import get_remote_address

from .. import models, schemas, database
from ..services import gemini
from ..utils import limiter

router = APIRouter(tags=["Triage"])
logger = logging.getLogger(__name__)

@router.post("/triage", response_model=schemas.TriageResponse)
@limiter.limit("20/minute")
async def triage_symptoms(triage_request: schemas.TriageRequest, request: Request, db: Session = Depends(database.get_db)):
    start_time = time()
    logger.info(f"Triage request received: {triage_request.symptoms[:50]}...")
    
    # 1. Get or Create Conversation
    if triage_request.conversation_id:
        conversation = db.query(models.Conversation).filter(models.Conversation.id == triage_request.conversation_id).first()
        if not conversation:
             conversation = models.Conversation(title=f"Symptom Check {datetime.utcnow().strftime('%Y-%m-%d %H:%M')}")
             db.add(conversation)
             db.commit()
             db.refresh(conversation) 
    else:
        conversation = models.Conversation(title=f"Symptom Check {datetime.utcnow().strftime('%Y-%m-%d %H:%M')}")
        db.add(conversation)
        db.commit()
        db.refresh(conversation)

    # 2. Save User Message
    user_msg = models.Message(
        conversation_id=conversation.id,
        sender="user",
        text_content=triage_request.symptoms
    )
    db.add(user_msg)
    db.commit()

    try:
        # Construct Prompt with User Context
        context_str = ""
        if triage_request.user_context:
            context_str = f"""
            PATIENT CONTEXT:
            - Name: {triage_request.user_context.get('name', 'Unknown')}
            - Age: {triage_request.user_context.get('age', 'Unknown')}
            - Gender: {triage_request.user_context.get('gender', 'Unknown')}
            - Pre-existing Conditions: {triage_request.user_context.get('conditions', 'None')}
            - Allergies: {triage_request.user_context.get('allergies', 'None')}
            
            Please tailor your analysis considering the above patient context. 
            If the patient is a child, provide pediatric advice. 
            If they have allergies, warn about potential medication conflicts.
            """

        # Get conversation history for context
        conversation_history = ""
        if conversation.id:
            prev_messages = db.query(models.Message).filter(
                models.Message.conversation_id == conversation.id
            ).order_by(models.Message.timestamp.asc()).limit(10).all()
            
            if prev_messages:
                conversation_history = "\n\nPREVIOUS CONVERSATION HISTORY:\n"
                for msg in prev_messages:
                    if msg.sender == "user":
                        conversation_history += f"Patient: {msg.text_content}\n"
                    elif msg.sender == "ai" and msg.structured_data:
                        try:
                            prev_data = json.loads(msg.structured_data)
                            conversation_history += f"AI: {prev_data.get('summary', msg.text_content)}\n"
                        except:
                            conversation_history += f"AI: {msg.text_content}\n"

        prompt = gemini.build_triage_prompt(
            symptoms=triage_request.symptoms,
            context_str=context_str,
            conversation_history=conversation_history
        )

        model = gemini.get_model()
        
        if model is None:
            logger.error("All Gemini models failed to initialize")
            raise HTTPException(
                status_code=500,
                detail="AI service is currently unavailable. Please check your API key and try again later."
            )
        
        # Use async generation with timeout
        try:
            response = await asyncio.wait_for(model.generate_content_async(prompt), timeout=30.0)
        except asyncio.TimeoutError:
            logger.error("Gemini API timeout")
            raise HTTPException(status_code=504, detail="Request timeout. Please try again.")
        except Exception as api_error:
            logger.error(f"Gemini API error: {api_error}")
            raise HTTPException(status_code=500, detail=f"AI service error: {str(api_error)}")
        
        if not response or not hasattr(response, 'text') or not response.text:
            logger.error("Empty response from Gemini API")
            raise HTTPException(status_code=500, detail="Empty response from AI service. Please try again.")
        
        # Clean response text to ensure valid JSON
        text = response.text.replace('```json', '').replace('```', '').strip()
        
        try:
            data = json.loads(text)
        except json.JSONDecodeError as json_error:
            logger.error(f"JSON parsing error: {json_error}. Response text: {text[:200]}")
            # Try to extract JSON from the response
            json_match = re.search(r'\{.*\}', text, re.DOTALL)
            if json_match:
                try:
                    data = json.loads(json_match.group())
                except:
                    raise HTTPException(status_code=500, detail="Failed to parse AI response. Please try again.")
            else:
                raise HTTPException(status_code=500, detail="Invalid response format from AI service. Please try again.")
        
        # Add standard disclaimer if missing
        if "disclaimer" not in data:
            data["disclaimer"] = "This analysis is generated by AI for educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition."

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

        response_time = time() - start_time
        logger.info(f"Triage completed in {response_time:.2f}s - Level: {data.get('triage_level')}")
        
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
            disclaimer=data.get("disclaimer", "⚠️ EDUCATIONAL PURPOSES ONLY - This is NOT real medical advice. This information is for educational purposes only and should NOT be used for actual medical decisions. Always consult a licensed healthcare professional for medical advice, diagnosis, or treatment."),
            conversation_id=conversation.id
        )

    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error in triage: {e}", exc_info=True)
        raise HTTPException(
            status_code=500,
            detail="An error occurred while processing your request. Please try again or contact support if the issue persists."
        )
