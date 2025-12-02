from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import func
from typing import List
from datetime import datetime

from .. import models, database

router = APIRouter(tags=["History"])

@router.get("/history")
async def get_conversations(db: Session = Depends(database.get_db)):
    """Get all conversations with message counts"""
    conversations = db.query(
        models.Conversation.id,
        models.Conversation.title,
        models.Conversation.created_at,
        func.count(models.Message.id).label('message_count')
    ).outerjoin(
        models.Message, models.Conversation.id == models.Message.conversation_id
    ).group_by(
        models.Conversation.id
    ).order_by(
        models.Conversation.created_at.desc()
    ).all()
    
    return [
        {
            "id": conv.id,
            "title": conv.title,
            "created_at": conv.created_at.isoformat() if isinstance(conv.created_at, datetime) else conv.created_at,
            "message_count": conv.message_count
        }
        for conv in conversations
    ]

@router.get("/history/{conversation_id}")
async def get_conversation_messages(conversation_id: int, db: Session = Depends(database.get_db)):
    """Get all messages for a specific conversation"""
    import json
    
    conversation = db.query(models.Conversation).filter(models.Conversation.id == conversation_id).first()
    if not conversation:
        raise HTTPException(status_code=404, detail="Conversation not found")
    
    messages = db.query(models.Message).filter(
        models.Message.conversation_id == conversation_id
    ).order_by(models.Message.timestamp.asc()).all()
    
    result = []
    for msg in messages:
        structured = None
        if msg.structured_data:
            try:
                structured = json.loads(msg.structured_data)
            except:
                structured = None
        
        result.append({
            "sender": msg.sender,
            "text": msg.text_content,
            "structured_data": structured,
            "timestamp": msg.timestamp.isoformat() if isinstance(msg.timestamp, datetime) else msg.timestamp
        })
    
    return result

@router.delete("/history/{conversation_id}")
async def delete_conversation(conversation_id: int, db: Session = Depends(database.get_db)):
    """Delete a specific conversation and its messages"""
    conversation = db.query(models.Conversation).filter(models.Conversation.id == conversation_id).first()
    if not conversation:
        raise HTTPException(status_code=404, detail="Conversation not found")
    
    # Delete all messages in the conversation
    db.query(models.Message).filter(models.Message.conversation_id == conversation_id).delete()
    
    # Delete the conversation
    db.delete(conversation)
    db.commit()
    
    return {"message": "Conversation deleted successfully"}

@router.delete("/history")
async def clear_all_history(db: Session = Depends(database.get_db)):
    """Delete all conversations and messages"""
    db.query(models.Message).delete()
    db.query(models.Conversation).delete()
    db.commit()
    
    return {"message": "All history cleared successfully"}
