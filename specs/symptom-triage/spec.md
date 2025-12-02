# MedSentry AI – Feature Specification

## 1. System Overview
MedSentry AI is a comprehensive, AI-powered medical assistant designed to provide safe, evidence-based guidance. It allows users to input symptoms and medical documents, and in return, it provides a structured analysis that includes a triage assessment, a layperson's summary, and clear next steps, while strictly adhering to safety and privacy protocols.

## 2. User-Facing Features

### 2.1. Symptom & Document Input
*   **Text/Chat Input:** Users can describe their symptoms in a natural language chat interface.
*   **Multi-Language Support:** The system shall accept input and provide output in multiple languages.
*   **Medical Report Upload:** Users can upload medical documents in **PDF** and common image formats (e.g., JPG, PNG).
*   **Prescription Upload:** Users can upload images or PDFs of prescriptions for analysis.

### 2.2. AI-Powered Analysis & Output
*   **OCR & Data Extraction:** The system will automatically perform OCR on uploaded documents to extract and structure key information.
*   **Patient-Friendly Summary:** The AI will summarize complex medical information from symptoms and reports into clear, easy-to-understand language.
*   **Triage Level Assignment:** Every analysis will result in a triage level of **Low, Medium, or High**.
*   **Clarifying Questions:** If user input is ambiguous or incomplete, the AI will generate questions to gather necessary information.
*   **Red-Flag Detection & Emergency Guidance:** The system must identify symptoms indicative of a medical emergency and immediately trigger a prominent, clear emergency warning with guidance (e.g., "Call 911").
*   **Structured Response:** All analytical outputs must be returned in a structured format containing:
    *   `summary` (string)
    *   `triage_level` ("Low" | "Medium" | "High")
    *   `suggested_next_steps` (string)
    *   `clarifying_questions` (array of strings)
    *   `emergency_warning` (string | null)
    *   `source_references` (array of strings, if applicable)
    *   `disclaimer` (string)

### 2.3. User Dashboards & History
*   **Patient Dashboard:** Registered users will have a dashboard to view their history of conversations and analyzed reports.
*   **Clinician Dashboard:** A separate, secure dashboard for registered clinicians to review cases that have been routed to them.
*   **Conversation & Report History:** The system will securely track and store all interactions for user reference and auditing.

### 2.4. Notifications
*   Users will receive notifications (e.g., email, in-app) when their report analysis is complete or when a triage assessment has been updated.

## 3. System & Architectural Requirements

### 3.1. Safety & Compliance
*   **No Definitive Diagnosis:** The system is explicitly forbidden from providing a specific medical diagnosis.
*   **No Prescription Instructions:** The system will not interpret, validate, or provide instructions on how to take medication. It can only summarize the prescription's content.
*   **Mandatory Disclaimer:** All outputs must contain the text: "This is not medical advice. Consult a licensed doctor."
*   **Ethical & Legal:** All operations must adhere to the highest ethical standards for medical information handling.
*   **HIPAA & GDPR Compliance:** The system architecture, data handling, and storage must be fully compliant with HIPAA and GDPR regulations.

### 3.2. Security
*   **Data Encryption:** All user data, both at rest and in transit, must be encrypted using industry-standard protocols.
*   **Secure User Data Storage:** User PII and medical information must be stored in a secure, compliant database.

### 3.3. Operational
*   **IP & Session-Based Usage Limits:** To prevent abuse and manage costs, the system will implement usage limits for free-tier users.
*   **Clinician Review Routing:** The system must have a configurable mechanism to route low-confidence or high-risk AI outputs to a human clinician for review.
*   **Audit Trails:** Secure, immutable logs of system actions and data access must be maintained for auditing purposes.

## 4. Performance
*   **Fast & Accurate:** AI analysis should be completed in a timely manner to provide a good user experience.
*   **Scalable Architecture:** The system must be built on a production-ready architecture capable of scaling to meet user demand.
*   **Maintainability:** Code and infrastructure must be well-documented and structured to allow for future maintenance and feature expansion.
