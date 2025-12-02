import { TriageResponse } from '../components/triage-card';

export interface Message {
    id: string;
    role: 'user' | 'ai';
    content?: string;
    triage?: TriageResponse;
    attachmentName?: string;
    timestamp?: string;
}

export interface Conversation {
    id: number;
    title: string;
    created_at: string;
    message_count: number;
}

export interface HistoryMessage {
    sender: 'user' | 'ai';
    text: string;
    structured_data?: TriageResponse | null;
    timestamp?: string;
}
