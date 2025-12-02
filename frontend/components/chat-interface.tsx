"use client";

import React, { useState, useEffect } from 'react';
import { Sidebar } from './sidebar';
import { ProfileSettings } from './profile-settings';
import { ChatHeader } from './chat/header';
import { QuickActions } from './chat/quick-actions';
import { MessageList } from './chat/message-list';
import { InputArea } from './chat/input-area';
import { Message, Conversation, HistoryMessage } from '@/types/chat';
import * as api from '@/lib/api';
import { TriageResponse } from './triage-card';
import { AnimatePresence, motion } from 'framer-motion';

export function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome',
            role: 'ai',
            content: "Hello. I am MedSentry AI. I can help you analyze symptoms, review medical reports, or answer medication questions. How can I assist you today?"
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [conversationId, setConversationId] = useState<number | null>(null);
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    // Fetch history on mount
    useEffect(() => {
        loadHistory();
    }, []);

    const loadHistory = async () => {
        try {
            const data = await api.fetchHistory();
            setConversations(data);
        } catch (error) {
            console.error("Failed to fetch history:", error);
        }
    };

    const loadConversation = async (id: number) => {
        setIsLoading(true);
        setConversationId(id);
        try {
            const data = await api.fetchConversation(id);
            const mappedMessages: Message[] = data.map((msg, index: number) => ({
                id: `hist-${index}-${Date.now()}`,
                role: msg.sender,
                content: msg.text,
                triage: msg.structured_data || undefined,
                timestamp: msg.timestamp
            }));
            setMessages(mappedMessages);
        } catch (error) {
            console.error("Failed to load conversation:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const startNewChat = () => {
        setConversationId(null);
        setMessages([{
            id: 'welcome',
            role: 'ai',
            content: "Hello. I am MedSentry AI. I can help you analyze symptoms, review medical reports, or answer medication questions. How can I assist you today?"
        }]);
        setInput('');
    };

    const speakText = (text: string) => {
        if ('speechSynthesis' in window) {
            if (isSpeaking) {
                window.speechSynthesis.cancel();
                setIsSpeaking(false);
                return;
            }

            const utterance = new SpeechSynthesisUtterance(text);
            utterance.onend = () => setIsSpeaking(false);
            window.speechSynthesis.speak(utterance);
            setIsSpeaking(true);
        }
    };

    const handleSendMessage = async () => {
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        const profile = localStorage.getItem('medsentry_profile');
        const userContext = profile ? JSON.parse(profile) : null;

        try {
            const data = await api.sendTriageRequest(userMsg.content || '', conversationId, userContext);

            if (data.conversation_id) {
                setConversationId(data.conversation_id);
                if (!conversationId) loadHistory();
            }

            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'ai',
                triage: data
            };

            setMessages(prev => [...prev, aiMsg]);
        } catch (error) {
            console.error(error);
            let errorMessage = "I apologize, but I encountered an error processing your request. Please try again.";

            if (error instanceof Error) {
                if (error.message.includes('Failed to fetch')) {
                    errorMessage = "Unable to connect to the backend server. Please ensure the backend is running on http://localhost:8000.";
                } else {
                    errorMessage = `Error: ${error.message}`;
                }
            }

            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                role: 'ai',
                content: errorMessage
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleFileUpload = async (file: File) => {
        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: `Uploaded file: ${file.name}`,
            attachmentName: file.name
        };
        setMessages(prev => [...prev, userMsg]);
        setIsLoading(true);

        try {
            const data = await api.uploadFile(file, conversationId);

            if (data.conversation_id) {
                setConversationId(data.conversation_id);
                if (!conversationId) loadHistory();
            }

            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'ai',
                triage: data
            };

            setMessages(prev => [...prev, aiMsg]);
        } catch (error) {
            console.error(error);
            let errorMessage = "I apologize, but I encountered an error analyzing the document.";

            if (error instanceof Error) {
                errorMessage = `Error analyzing document: ${error.message}`;
            }

            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                role: 'ai',
                content: errorMessage
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDeleteConversation = async (id: number) => {
        try {
            await api.deleteConversation(id);
            if (conversationId === id) {
                startNewChat();
            }
            loadHistory();
        } catch (error) {
            console.error(error);
        }
    };

    const handleClearHistory = async () => {
        try {
            await api.clearHistory();
            startNewChat();
            loadHistory();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden font-sans text-slate-900 dark:text-slate-100">
            <Sidebar
                conversations={conversations}
                currentConversationId={conversationId}
                onSelectConversation={loadConversation}
                onNewChat={startNewChat}
                isOpen={isSidebarOpen}
                setIsOpen={setIsSidebarOpen}
                onDeleteConversation={handleDeleteConversation}
                onClearHistory={handleClearHistory}
            />

            <ProfileSettings
                isOpen={isProfileOpen}
                onClose={() => setIsProfileOpen(false)}
                onSave={(profile) => console.log("Profile saved", profile)}
            />

            <div className="flex-1 flex flex-col h-full relative w-full bg-slate-50/50 dark:bg-slate-950/50">
                <ChatHeader
                    onOpenSidebar={() => setIsSidebarOpen(true)}
                    onOpenProfile={() => setIsProfileOpen(true)}
                />

                <QuickActions onQuickPrompt={setInput} />

                <MessageList
                    messages={messages}
                    isLoading={isLoading}
                    onSpeak={speakText}
                />

                <InputArea
                    input={input}
                    setInput={setInput}
                    onSendMessage={handleSendMessage}
                    onFileUpload={handleFileUpload}
                    isLoading={isLoading}
                />
            </div>
        </div>
    );
}
