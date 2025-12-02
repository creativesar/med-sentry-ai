"use client";

import React from 'react';
import { MessageSquare, Plus, Trash2, ChevronLeft, Activity, FileText, Settings, LogOut, Pill, FileBarChart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface Conversation {
    id: number;
    title: string;
    created_at: string;
    message_count: number;
}

interface SidebarProps {
    conversations: Conversation[];
    currentConversationId: number | null;
    onSelectConversation: (id: number) => void;
    onNewChat: () => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    onDeleteConversation: (id: number) => void;
    onClearHistory: () => void;
}

export function Sidebar({
    conversations,
    currentConversationId,
    onSelectConversation,
    onNewChat,
    isOpen,
    setIsOpen,
    onDeleteConversation,
    onClearHistory
}: SidebarProps) {
    return (
        <>
            {/* Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 md:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar Container */}
            <div className={cn(
                "fixed inset-y-0 left-0 z-50 w-80 bg-slate-100 dark:bg-slate-900 border-r border-slate-300 dark:border-slate-800 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 flex flex-col shadow-2xl md:shadow-none",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                {/* Header */}
                <div className="p-6 border-b border-slate-300 dark:border-slate-800 flex items-center justify-between bg-slate-200 dark:bg-slate-900">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-sm">
                            <Activity className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">MedSentry</h1>
                            <p className="text-[10px] font-bold text-primary uppercase tracking-wider">AI Medical Assistant</p>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-slate-500 hover:text-slate-900 dark:hover:text-white"
                        onClick={() => setIsOpen(false)}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </Button>
                </div>

                {/* Actions */}
                <div className="p-4 space-y-3">
                    <Button
                        onClick={() => {
                            onNewChat();
                            if (window.innerWidth < 768) setIsOpen(false);
                        }}
                        className="w-full bg-primary hover:bg-primary/90 text-white shadow-sm border-0 h-12 rounded-xl font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <Plus className="w-5 h-5 mr-2" />
                        New Consultation
                    </Button>

                    <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" className="h-10 rounded-xl border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">
                            <Pill className="w-3.5 h-3.5 mr-2 text-primary" /> Medications
                        </Button>
                        <Button variant="outline" className="h-10 rounded-xl border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">
                            <FileBarChart className="w-3.5 h-3.5 mr-2 text-primary" /> Reports
                        </Button>
                    </div>
                </div>

                {/* History List */}
                <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800">
                    <div className="px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                        <span>Recent History</span>
                        <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 px-1.5 py-0.5 rounded text-[9px]">{conversations.length}</span>
                    </div>

                    {conversations.length === 0 ? (
                        <div className="px-4 py-12 text-center">
                            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 mx-auto flex items-center justify-center mb-3">
                                <MessageSquare className="w-5 h-5 text-slate-400" />
                            </div>
                            <p className="text-xs text-slate-500">No consultation history yet.</p>
                        </div>
                    ) : (
                        <div className="space-y-1">
                            {conversations.map((conv) => (
                                <motion.button
                                    key={conv.id}
                                    layout
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    onClick={() => {
                                        onSelectConversation(conv.id);
                                        if (window.innerWidth < 768) setIsOpen(false);
                                    }}
                                    className={cn(
                                        "w-full text-left px-3 py-3 rounded-xl text-sm transition-all duration-200 group flex items-center gap-3 border",
                                        currentConversationId === conv.id
                                            ? "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm"
                                            : "border-transparent hover:bg-slate-100 dark:hover:bg-slate-800/50 text-slate-500 dark:text-slate-400"
                                    )}
                                >
                                    <MessageSquare className={cn(
                                        "w-4 h-4 shrink-0 transition-colors",
                                        currentConversationId === conv.id ? "text-primary" : "text-slate-400 group-hover:text-primary"
                                    )} />
                                    <div className="flex-1 min-w-0">
                                        <div className={cn(
                                            "font-medium truncate leading-tight mb-0.5",
                                            currentConversationId === conv.id ? "text-slate-900 dark:text-slate-100" : "text-slate-600 dark:text-slate-400"
                                        )}>{conv.title}</div>
                                        <div className="text-[10px] text-slate-400 flex items-center gap-2">
                                            <span>{new Date(conv.created_at).toLocaleDateString()}</span>
                                            {currentConversationId === conv.id && (
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-slate-400 hover:text-red-500 transition-all"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onDeleteConversation(conv.id);
                                        }}
                                    >
                                        <Trash2 className="w-3.5 h-3.5" />
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 space-y-2">
                    <Button
                        variant="ghost"
                        onClick={onClearHistory}
                        className="w-full justify-start gap-2 h-9 text-xs text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg"
                    >
                        <Trash2 className="w-3.5 h-3.5" />
                        Clear All History
                    </Button>

                    <div className="pt-2 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold text-xs shadow-sm">
                            JD
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <div className="text-sm font-semibold text-slate-700 dark:text-slate-200 truncate">John Doe</div>
                            <div className="text-[10px] text-slate-500 truncate">Premium Member</div>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                            <Settings className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
