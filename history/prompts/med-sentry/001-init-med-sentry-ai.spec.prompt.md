---
id: "001"
title: "init-med-sentry-ai"
stage: "spec"
date: "2025-11-30"
surface: "agent"
model: "gemini-2.0-pro-exp"
feature: "med-sentry"
branch: "main"
user: "user"
command: "build"
labels: ["init", "spec", "plan", "tasks"]
links:
  spec: "specs/med-sentry/spec.md"
  ticket: null
  adr: null
  pr: null
files_yaml:
  - "specs/med-sentry/spec.md"
  - "specs/med-sentry/plan.md"
  - "specs/med-sentry/tasks.md"
  - ".specify/memory/constitution.md"
tests_yaml: []
prompt_text: |
  Build MedSentry AI, a fully safe, conservative, evidence-based medical assistant using Next.js 16, Tailwind CSS, TypeScript frontend, and Python FastAPI backend with Gemini AI integration, that allows users to input symptoms via text or chat, upload medical reports (PDF/Image) and prescriptions for analysis, automatically performs OCR and extracts key data, summarizes medical information in clear, patient-friendly language, assigns triage levels (low/medium/high), asks clarifying questions when data is missing, detects red-flag or emergency symptoms and immediately triggers emergency guidance, never provides definitive diagnosis or prescription instructions, always includes a disclaimer ‘This is not medical advice. Consult a licensed doctor’, outputs structured responses including summary, triage level, suggested next steps, clarifying questions, emergency warnings, and source references if applicable, supports multi-language input/output, stores user data securely with encryption, implements IP and session-based free usage limits, optionally routes critical cases or low-confidence outputs to clinician review, tracks conversation and report history for audit, integrates dashboard for patients and clinicians, provides notifications for report analysis and triage updates, follows all ethical, legal, and HIPAA/GDPR compliance requirements, delivers fast, accurate AI-powered medical guidance in a scalable, maintainable, production-ready architecture, and has fully updated agent configuration files constitution.md, plan.md, specify.md, and tasks.md reflecting all features, safety rules, structured outputs, triage logic, emergency escalation, report analysis, prescription handling, and integration with frontend and backend systems
response_text: |
  Initiating MedSentry AI project. Creating comprehensive spec, plan, and tasks files to cover all requirements including Next.js/FastAPI stack, Gemini integration, symptom analysis, OCR, triage logic, and safety compliance.
outcome: "Project initialization and documentation"
evaluation: "Pending"
---
