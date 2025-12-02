from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

class User(BaseModel):
    username: str
    email: Optional[str] = None
    is_active: Optional[bool] = True

class UserInDB(User):
    hashed_password: str

class UserCreate(BaseModel):
    username: str
    email: Optional[str] = None
    password: str

class UserLogin(BaseModel):
    username: str
    password: str

class UserResponse(BaseModel):
    id: int
    username: str
    email: Optional[str] = None
    is_active: bool
    created_at: datetime

    class Config:
        from_attributes = True

class TriageRequest(BaseModel):
    symptoms: str
    conversation_id: Optional[int] = None
    user_context: Optional[dict] = None
    language: Optional[str] = "en"  # Language code: "en", "ur", "hi"

class TriageResponse(BaseModel):
    summary: str
    triage_level: str
    possible_conditions: Optional[List[str]] = []
    diagnosis: Optional[str] = None
    medications: Optional[List[str]] = []
    treatment_plan: Optional[List[str]] = []
    suggested_next_steps: List[str]
    clarifying_questions: List[str]
    emergency_warning: Optional[str] = None
    red_flags: Optional[List[str]] = []
    prevention_tips: Optional[List[str]] = []
    abnormal_findings: Optional[List[str]] = []
    normal_findings: Optional[List[str]] = []
    disclaimer: str
    conversation_id: int
