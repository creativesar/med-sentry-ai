import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded

from app import models, database, utils
from app.routers import auth, users, triage, upload, history

# Configure logging
try:
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
        handlers=[
            logging.FileHandler('medsentry.log'),
            logging.StreamHandler()
        ]
    )
except Exception as log_error:
    # If file logging fails, just use console
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
        handlers=[logging.StreamHandler()]
    )
logger = logging.getLogger(__name__)

app = FastAPI()
app.state.limiter = utils.limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router)
app.include_router(users.router)
app.include_router(triage.router)
app.include_router(upload.router)
app.include_router(history.router)

@app.on_event("startup")
async def startup_event():
    models.Base.metadata.create_all(bind=database.engine)

@app.get("/")
def read_root():
    return {
        "message": "MedSentry AI Backend is running.",
        "version": "2.0",
        "features": [
            "Comprehensive symptom triage with emergency detection",
            "Medical document analysis (PDF, images)",
            "Medication interaction checking",
            "Laboratory value interpretation",
            "Medical Q&A with evidence-based answers",
            "Conversation history and context awareness",
            "Patient context-aware responses",
            "Red flag symptom detection",
            "Prevention and wellness tips"
        ],
        "endpoints": {
            "POST /triage": "Analyze symptoms and provide triage assessment",
            "POST /upload/analyze": "Analyze medical documents (PDF, images)",
            "POST /medication/check": "Check medication interactions and safety",
            "POST /lab/interpret": "Interpret laboratory test values",
            "POST /medical/question": "Answer general medical questions",
            "GET /history": "Get conversation history",
            "GET /history/{id}": "Get specific conversation messages",
            "POST /register": "Register new user",
            "POST /token": "Login and get access token",
            "GET /users/me": "Get current user info"
        }
    }

@app.get("/favicon.ico")
async def favicon():
    # Return empty response for favicon to prevent 404 errors
    return {}
