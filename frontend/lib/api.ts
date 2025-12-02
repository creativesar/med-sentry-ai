import { Message, HistoryMessage, Conversation } from '../types/chat';
import { TriageResponse } from '../components/triage-card';

const API_BASE_URL = 'http://localhost:8000';

export async function fetchHistory(): Promise<Conversation[]> {
    const res = await fetch(`${API_BASE_URL}/history`);
    if (!res.ok) throw new Error('Failed to fetch history');
    return res.json();
}

export async function fetchConversation(id: number): Promise<HistoryMessage[]> {
    const res = await fetch(`${API_BASE_URL}/history/${id}`);
    if (!res.ok) throw new Error('Failed to load conversation');
    return res.json();
}

export async function deleteConversation(id: number): Promise<void> {
    const res = await fetch(`${API_BASE_URL}/history/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete conversation');
}

export async function clearHistory(): Promise<void> {
    const res = await fetch(`${API_BASE_URL}/history`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to clear history');
}

export async function sendTriageRequest(
    symptoms: string,
    conversationId: number | null,
    userContext: any
): Promise<TriageResponse> {
    const response = await fetch(`${API_BASE_URL}/triage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            symptoms,
            conversation_id: conversationId,
            user_context: userContext,
            language: "en"
        })
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch response: ${response.status}`);
    }

    return response.json();
}

export async function uploadFile(
    file: File,
    conversationId: number | null
): Promise<TriageResponse> {
    const formData = new FormData();
    formData.append('file', file);

    const url = new URL(`${API_BASE_URL}/upload/analyze`);
    if (conversationId) {
        url.searchParams.append('conversation_id', conversationId.toString());
    }

    const response = await fetch(url.toString(), {
        method: 'POST',
        body: formData
    });

    if (!response.ok) {
        throw new Error(`Failed to upload/analyze: ${response.status}`);
    }

    return response.json();
}
