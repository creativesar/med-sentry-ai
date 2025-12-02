# MedSentry AI – Constitution

This document outlines the foundational principles, rules, and architectural guidelines for the MedSentry AI project. All development must adhere to this constitution to ensure the system is safe, compliant, and effective.

## 1. Core Purpose
MedSentry AI is a fully safe, conservative, and evidence-based medical assistant. Its purpose is to help users understand their symptoms and medical data, receive a safe triage assessment, and get clear guidance on next steps. It is designed to augment, not replace, professional medical advice.

## 2. Guiding Principles
1.  **Safety First, Always:** The system must prioritize user safety above all else. All guidance shall be conservative, risk-averse, and aimed at preventing harm. In cases of ambiguity, err on the side of caution.
2.  **Evidence-Based:** All medical information and guidance should be based on established, reputable medical sources.
3.  **Strictly Non-Diagnostic:** The AI must never provide a definitive medical diagnosis or prescribe, recommend, or adjust specific medications or treatments.
4.  **Mandatory Disclaimer:** Every interaction that provides medical-style information must prominently and clearly display the disclaimer: "This is not medical advice. Consult a licensed doctor."
5.  **Emergency Escalation:** The system must be trained to detect red-flag or emergency symptoms and, upon detection, immediately provide clear, actionable emergency guidance and escalate the triage level to "High".
6.  **Patient-Friendly Communication:** All output must be in clear, simple, and accessible language, avoiding overly technical jargon.
7.  **Accessibility:** The system must support multi-language input and output to be accessible to a diverse user base.

## 3. Data Privacy & Compliance
1.  **Confidentiality:** All user-provided data (symptoms, chat history, uploaded documents) is to be treated as confidential medical information.
2.  **Compliance:** The system must be designed and built to meet or exceed the requirements of **HIPAA** (for US users) and **GDPR** (for EU users).
3.  **Secure Storage:** All user data must be stored securely using strong, industry-standard encryption at rest and in transit.
4.  **Auditability:** The system must maintain a secure and immutable history of conversations and analyzed reports for audit and quality assurance purposes.

## 4. Functional Requirements
1.  **Multi-Modal Input:** The system must accept user input via text/chat and file uploads (PDF, common image formats).
2.  **Automated Data Extraction:** The system must be capable of performing **Optical Character Recognition (OCR)** on uploaded documents to automatically extract and structure key medical data.
3.  **Structured Triage Output:** Every analysis must result in a structured response containing all of the following fields:
    *   `summary`: A clear, patient-friendly summary of the analysis.
    *   `triage_level`: A "Low", "Medium", or "High" risk assessment.
    *   `suggested_next_steps`: Safe, conservative, and actionable next steps.
    *   `clarifying_questions`: A list of questions to ask the user if data is incomplete.
    *   `emergency_warning`: A clear warning message if the triage level is "High".
    *   `source_references`: (If applicable) Links to evidence-based sources.
    *   `disclaimer`: The mandatory legal disclaimer.
4.  **Clinician Review Loop:** The system should include a mechanism to optionally route high-risk, low-confidence, or sensitive cases to a qualified human clinician for review.

## 5. Architectural Principles
1.  **Scalability & Maintainability:** The architecture must be production-ready, scalable to handle a high volume of users, and maintainable for future development.
2.  **Technology Stack:**
    *   **Frontend:** Next.js 16, Tailwind CSS, TypeScript.
    *   **Backend:** Python 3.11+, FastAPI.
    *   **AI Engine:** Gemini AI (Pro & Vision).
3.  **Usage Limiting:** The system must implement IP and/or session-based free usage limits to prevent abuse and manage operational costs.
