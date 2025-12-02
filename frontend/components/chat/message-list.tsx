import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User as UserIcon, Loader2, Volume2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Message } from '@/types/chat';
import { TriageCard } from '../triage-card';

interface MessageListProps {
    messages: Message[];
    isLoading: boolean;
    onSpeak: (text: string) => void;
}

export function MessageList({ messages, isLoading, onSpeak }: MessageListProps) {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    return (
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 scroll-smooth bg-[#F8FAFC] dark:bg-[#0B1120]">
            <AnimatePresence initial={false}>
                {messages.map((msg) => (
                    <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={cn(
                            "flex gap-4 max-w-4xl mx-auto",
                            msg.role === 'user' ? "flex-row-reverse" : ""
                        )}
                    >
                        <div className={cn(
                            "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-1 shadow-sm border",
                            msg.role === 'user'
                                ? "bg-white border-slate-200 text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300"
                                : "bg-[#0284C7] border-[#0284C7] text-white"
                        )}>
                            {msg.role === 'user' ? <UserIcon className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                        </div>

                        <div className={cn("flex flex-col max-w-[85%] md:max-w-[75%]", msg.role === 'user' ? "items-end" : "items-start")}>
                            {msg.content && (
                                <div className={cn(
                                    "p-4 text-sm leading-relaxed shadow-sm relative group border",
                                    msg.role === 'user'
                                        ? "bg-[#0284C7] text-white rounded-2xl rounded-tr-sm border-[#0284C7]"
                                        : "bg-white dark:bg-[#1E293B] text-slate-800 dark:text-slate-200 rounded-2xl rounded-tl-sm border-slate-200 dark:border-slate-700"
                                )}>
                                    {msg.content}
                                    {msg.role === 'ai' && (
                                        <button
                                            onClick={() => onSpeak(msg.content || "")}
                                            className="absolute -right-8 top-2 opacity-0 group-hover:opacity-100 transition-all p-1.5 rounded-md text-slate-400 hover:text-[#0284C7] hover:bg-slate-100 dark:hover:bg-slate-800"
                                        >
                                            <Volume2 className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            )}

                            {msg.triage && (
                                <div className="w-full mt-2">
                                    <TriageCard data={msg.triage} />
                                </div>
                            )}

                            <span className="text-[10px] text-slate-400 mt-1 px-1">
                                {msg.timestamp || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>

            {isLoading && (
                <div className="flex gap-4 max-w-4xl mx-auto">
                    <div className="w-8 h-8 rounded-lg bg-[#0284C7] flex items-center justify-center shrink-0 mt-1 shadow-sm">
                        <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700 p-4 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-3">
                        <Loader2 className="w-5 h-5 animate-spin text-[#0284C7]" />
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Processing medical data...</span>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>
    );
}
