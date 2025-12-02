# MedSentry AI - Product Specification

## 1. Overview
MedSentry AI is a comprehensive, safe, and evidence-based medical assistant designed to provide users with preliminary symptom analysis, medical report summarization, and triage guidance. It leverages Gemini AI for intelligence, Next.js 16 for a responsive frontend, and FastAPI for a robust backend.

## 2. Goals
- Provide accurate, conservative medical triage (Low/Medium/High).
- Simplify complex medical reports for patients.
- Ensure strict adherence to safety protocols (no diagnosis, mandatory disclaimers).
- Securely handle sensitive user data (HIPAA/GDPR).

## 3. User Stories

### 3.1. Symptom Analysis
- **As a user**, I want to describe my symptoms in plain text so that I can understand the potential severity.
- **As a user**, I want the system to ask me clarifying questions if I haven't provided enough detail.
- **As a user**, I want to be immediately warned if my symptoms indicate a medical emergency.

### 3.2. Report & Prescription Analysis
- **As a user**, I want to upload a PDF or image of a medical report so that I can get a simplified summary.
- **As a user**, I want to upload a prescription to understand what the medications are for.
- **As a system**, I need to perform OCR on these uploads to extract text for analysis.

### 3.3. Triage & Output
- **As a user**, I want a clear "Low", "Medium", or "High" urgency rating for my situation.
- **As a user**, I want to see a disclaimer reminding me this is not a doctor's advice.
- **As a user**, I want actionable next steps (e.g., "See a GP within 3 days", "Go to ER immediately").

### 3.4. Dashboard & History
- **As a user**, I want to see a history of my past conversations and reports.
- **As a clinician**, I want a dashboard to review cases flagged for human attention.

### 3.5. Security & Compliance
- **As a user**, I want my data to be encrypted so that my privacy is protected.
- **As a system admin**, I want to limit free usage by IP/Session to prevent abuse.

## 4. Functional Requirements

### 4.1. Input Handling
- **Text/Chat**: Real-time chat interface.
- **File Upload**: Support for .pdf, .jpg, .png. Max file size 10MB.

### 4.2. AI Processing (Gemini)
- **Context**: System prompt must enforce "Conservative Medical Assistant" persona.
- **Safety**: Strict filtering of harmful content.
- **Structured Output**: JSON format for Triage Level, Summary, Next Steps, etc.

### 4.3. Triage Logic
- **High**: Immediate emergency. Keywords: Chest pain, difficulty breathing, severe bleeding, stroke signs.
- **Medium**: Urgent but not life-threatening. High fever, persistent pain, infection signs.
- **Low**: Routine. Mild cold, minor injuries, general inquiries.

### 4.4. Output Format
- **Summary**: 2-3 sentences.
- **Triage Level**: Badge (Green/Yellow/Red).
- **Next Steps**: Bullet points.
- **Disclaimer**: Fixed text footer on every message.

## 5. Non-Functional Requirements
- **Performance**: AI response time < 5 seconds for text, < 15 seconds for OCR.
- **Security**: AES-256 encryption for stored data. TLS 1.3 for transit.
- **Compliance**: HIPAA compliant data handling (BAA with AI provider if applicable, local storage encryption).
- **Scalability**: Stateless backend containers.

## 6. Constraints
- No definitive diagnosis.
- No prescription generation (only analysis of existing).
- English primary, multi-language support via AI translation.
