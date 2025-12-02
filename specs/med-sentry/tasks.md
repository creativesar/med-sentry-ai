# MedSentry AI - Tasks

## Phase 1: Foundation & Setup
- [x] **Task 1.1**: Initialize Next.js 16 project with Tailwind CSS & TypeScript. <!-- id: 1.1 -->
- [x] **Task 1.2**: Initialize Python FastAPI backend structure. <!-- id: 1.2 -->
- [x] **Task 1.3**: Configure environment variables (.env) for Gemini API Key and DB URL. <!-- id: 1.3 -->
- [ ] **Task 1.4**: Create shared types/interfaces between FE and BE (or manual sync strategy). <!-- id: 1.4 -->

## Phase 2: Backend Core (FastAPI + Gemini)
- [x] **Task 2.1**: Implement `TriageResponse` Pydantic models. <!-- id: 2.1 -->
- [x] **Task 2.2**: Create Gemini Service module with system prompt for "Conservative Medical Assistant". <!-- id: 2.2 -->
- [x] **Task 2.3**: Implement `POST /api/v1/chat/analyze` endpoint. <!-- id: 2.3 -->
- [x] **Task 2.4**: Implement `POST /api/v1/upload/analyze` with Gemini Vision for OCR. <!-- id: 2.4 -->
- [ ] **Task 2.5**: Add mock tests for API endpoints. <!-- id: 2.5 -->

## Phase 3: Frontend Core (UI/UX)
- [x] **Task 3.1**: Create main layout with Navigation and Footer. <!-- id: 3.1 -->
- [x] **Task 3.2**: Build `ChatInterface` component with streaming support (optional) or loading states. <!-- id: 3.2 -->
- [x] **Task 3.3**: Implement `FileUpload` component for images/PDFs. <!-- id: 3.3 -->
- [x] **Task 3.4**: Create `TriageCard` component to display results (Green/Yellow/Red). <!-- id: 3.4 -->

## Phase 4: Data & History
- [x] **Task 4.1**: Set up SQLite database with SQLAlchemy. <!-- id: 4.1 -->
- [x] **Task 4.2**: Implement `Conversation` and `Message` models. <!-- id: 4.2 -->
- [x] **Task 4.3**: Save chat history and analysis results to DB. <!-- id: 4.3 -->
- [x] **Task 4.4**: Create `/dashboard` page to list past sessions. <!-- id: 4.4 -->

## Phase 5: Security & Polish
- [x] **Task 5.1**: Implement IP-based rate limiting on Backend. <!-- id: 5.1 -->
- [ ] **Task 5.2**: Add encryption for stored message content. <!-- id: 5.2 -->
- [ ] **Task 5.3**: Add multi-language support toggle (prompt engineering). <!-- id: 5.3 -->
- [ ] **Task 5.4**: Final UI polish (animations, responsive check). <!-- id: 5.4 -->
