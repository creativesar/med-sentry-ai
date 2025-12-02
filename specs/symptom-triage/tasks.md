# MedSentry AI – Development Tasks

This document breaks down the development plan into actionable tasks, organized by phase.

---

### **Phase 1: Core Triage Prototype (Completed)**

*   [x] **Project Setup:** Create a monorepo with `frontend` and `backend` directories.
*   [x] **Backend:** Initialize a Python FastAPI application.
*   [x] **Backend:** Create a `/triage` endpoint with Pydantic models for request and response.
*   [x] **Backend:** Integrate the Google Gemini API, loading the API key from environment variables.
*   [x] **Backend:** Engineer a detailed system prompt to enforce safety, non-diagnostic replies, and structured JSON output.
*   [x] **Frontend:** Initialize a Next.js (TypeScript/Tailwind) application.
*   [x] **Frontend:** Build a clean, responsive chat interface for user interaction.
*   [x] **Frontend:** Implement state management for messages, input, and loading/error states.
*   [x] **Integration:** Connect the frontend to the backend `/triage` endpoint.
*   [x] **Integration:** Parse the structured JSON response and display it in a user-friendly component.
*   [x] **Testing:** Perform end-to-end testing of the symptom-to-triage flow.

---

### **Phase 2: Document Analysis & User Persistence**

*   [x] **Database:** Set up a SQLite database and define the schema for `users`, `conversations`, `messages`, and `documents`.
*   [ ] **Backend:** Implement user authentication APIs (registration, login, session management) using secure password hashing.
*   [ ] **Frontend:** Build login and registration pages.
*   [ ] **Frontend:** Implement client-side authentication state management.
*   [ ] **Backend:** Create a secure `/upload` endpoint that accepts PDF and image files.
*   [ ] **Backend:** Integrate an OCR library/service and create a pipeline to extract text from uploaded files.
*   [ ] **Backend:** Store uploaded file metadata in the database and the files themselves in a secure object store.
*   [ ] **Backend:** Update the triage logic to incorporate extracted text from documents as context for the AI.
*   [ ] **Frontend:** Build the user dashboard page.
*   [ ] **Frontend:** Create a component to list past conversations and link to their details.
*   [ ] **Frontend:** Create a view to display the content and analysis of a past conversation/report.

---

### **Phase 3: Advanced Features & Compliance Hardening**

*   [ ] **Backend:** Implement a flagging system for AI responses (e.g., based on triage level or confidence scores).
*   [ ] **Backend:** Create a set of secure APIs for clinicians to access and manage a queue of flagged cases.
*   [ ] **Frontend:** Build the clinician dashboard, including a case queue and a review interface.
*   [ ] **Backend:** Integrate an email or notification service.
*   [ ] **Backend:** Create triggers for sending notifications (e.g., "Your report is ready").
*   [ ] **Backend:** Implement robust rate-limiting middleware for the API.
*   [ ] **Backend:** Enhance AI prompting and processing to support multiple languages.
*   [ ] **Frontend:** Add a language selector to the UI.
*   [ ] **Ops/Compliance:** Conduct a full security audit and penetration test.
*   [ ] **Ops/Compliance:** Implement structured logging for all system access and actions to create HIPAA-compliant audit trails.
*   [ ] **Ops/Compliance:** Configure infrastructure and deployment pipeline on a HIPAA-eligible cloud provider.
*   [ ] **Ops/Compliance:** Ensure Business Associate Agreements (BAAs) are in place with all third-party service providers (cloud, AI, etc.).
