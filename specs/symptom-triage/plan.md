# MedSentry AI – Architectural Plan

## 1. Technology Stack
*   **Frontend:** Next.js (TypeScript), Tailwind CSS
*   **Backend:** Python, FastAPI
*   **AI Engine:** Google Gemini
*   **Database:** SQLite for local development; PostgreSQL (or similar robust SQL database) for production, for user data, conversation history, and audit trails.
*   **OCR Service:** A dedicated OCR library (e.g., Tesseract, PyMuPDF) or a cloud service (e.g., Google Cloud Vision).
*   **Deployment:** Docker containers for frontend and backend services, hosted on a HIPAA-compliant cloud provider (e.g., AWS, GCP, Azure).

## 2. Phased Implementation Roadmap

This project will be developed in three main phases to ensure a manageable and iterative rollout.

---

### **Phase 1: Core Triage Prototype (Completed)**

This phase establishes the foundational end-to-end functionality of the application.

*   **Objective:** Allow a user to input symptoms and receive a safe, AI-generated triage assessment.
*   **Architecture:**
    *   **Frontend:** A single-page chat interface for symptom input and response display. No user accounts or persistent history.
    *   **Backend:** A single `/triage` API endpoint that accepts symptoms, formats a prompt for the Gemini API, and returns a structured response.
    *   **Data:** Stateless; no data is stored.
*   **Status:** The initial prototype, including frontend UI, backend API, and Gemini integration, has been built and verified.

---

### **Phase 2: Document Analysis & User Persistence**

This phase introduces document handling, user accounts, and history.

*   **Objective:** Enable users to upload medical documents, create accounts, and view their interaction history.
*   **Architecture:**
    *   **Frontend:**
        *   Implement user authentication (e.g., using NextAuth.js).
        *   Develop a secure file upload component.
        *   Build a user dashboard to display a list of past conversations and reports.
    *   **Backend:**
        *   Add user management APIs (`/register`, `/login`).
        *   Create a new `/upload` endpoint to handle PDF/Image files.
        *   Integrate an OCR service to extract text from uploaded documents.
        *   Modify the `/triage` logic to accept both text symptoms and extracted document text as context for the AI.
    *   **Database:**
        *   **`users` table:** Store hashed passwords and profile information.
        *   **`conversations` table:** Store the history of chat interactions, linked to users.
        *   **`documents` table:** Store metadata about uploaded files. The files themselves will be stored in a secure, encrypted object storage (e.g., S3 bucket) with a reference in the table.

---

### **Phase 3: Advanced Features & Compliance Hardening**

This phase adds advanced operational features and completes the compliance picture.

*   **Objective:** Implement the clinician review loop, notifications, multi-language support, and finalize all requirements for production deployment.
*   **Architecture:**
    *   **Frontend:**
        *   Develop a separate, secure clinician dashboard for reviewing flagged cases.
        *   Add UI elements for language selection.
        *   Integrate a notification display center.
    *   **Backend:**
        *   Implement logic to flag low-confidence or high-risk cases for review.
        *   Create APIs for clinicians to view and comment on flagged cases (`/review/...`).
        *   Integrate a notification service (e.g., for email).
        *   Enhance the AI prompt and logic to handle multi-language requests.
        *   Implement robust IP/session-based rate limiting.
    *   **Compliance & Security:**
        *   Conduct a full security audit of the application and infrastructure.
        *   Implement detailed logging and monitoring for HIPAA/GDPR audit trails.
        *   Finalize all data handling policies and ensure they are enforced in code.
        *   Set up required Business Associate Agreements (BAA) with all cloud service providers.
