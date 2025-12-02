"use client";

import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { History, MessageSquare, Calendar } from 'lucide-react';
import Link from 'next/link';

interface Conversation {
    id: number;
    title: string;
    created_at: string;
    message_count: number;
}

export default function Dashboard() {
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await fetch('http://localhost:8000/history');
                if (response.ok) {
                    const data = await response.json();
                    setConversations(data);
                }
            } catch (error) {
                console.error("Failed to fetch history:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchHistory();
    }, []);

    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-5xl mx-auto space-y-8">
                <header className="flex justify-between items-center border-b border-border pb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
                        <p className="text-muted-foreground">Your consultation history</p>
                    </div>
                    <Link
                        href="/"
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        New Consultation
                    </Link>
                </header>

                {isLoading ? (
                    <div className="flex justify-center py-12">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    </div>
                ) : conversations.length === 0 ? (
                    <div className="text-center py-12 bg-card rounded-xl border border-border">
                        <History className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-foreground">No history found</h3>
                        <p className="text-muted-foreground mt-2">Start a new consultation to see it here.</p>
                    </div>
                ) : (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {conversations.map((conv) => (
                            <div key={conv.id} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <MessageSquare className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                                        {conv.message_count} messages
                                    </span>
                                </div>
                                <h3 className="font-semibold text-foreground mb-2 truncate" title={conv.title}>
                                    {conv.title}
                                </h3>
                                <div className="flex items-center text-xs text-muted-foreground mt-4">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    {format(new Date(conv.created_at), 'MMM d, yyyy • h:mm a')}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
