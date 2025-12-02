import React from 'react';
import { Menu, ShieldCheck, Phone, Settings, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface ChatHeaderProps {
    onOpenSidebar: () => void;
    onOpenProfile: () => void;
}

export function ChatHeader({ onOpenSidebar, onOpenProfile }: ChatHeaderProps) {
    return (
        <header className="flex justify-between items-center px-6 py-4 bg-slate-100 dark:bg-[#0F172A] border-b border-slate-300 dark:border-slate-800 z-20 sticky top-0">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={onOpenSidebar} className="md:hidden text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
                    <Menu className="w-5 h-5" />
                </Button>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-sm">
                        <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="font-bold text-lg leading-tight text-slate-900 dark:text-white tracking-tight">MedSentry AI</h1>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">System Online</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
                <Button
                    variant="outline"
                    size="sm"
                    className="hidden md:flex gap-2 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 dark:border-red-900/30 dark:text-red-400 dark:hover:bg-red-900/10 rounded-full px-4"
                >
                    <Phone className="w-4 h-4" />
                    <span className="font-semibold">Emergency: 911</span>
                </Button>

                <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-1 hidden md:block" />

                <Button
                    variant="ghost"
                    size="icon"
                    className="text-slate-400 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
                >
                    <Bell className="w-5 h-5" />
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onOpenProfile}
                    className="text-slate-400 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
                >
                    <Settings className="w-5 h-5" />
                </Button>
            </div>
        </header>
    );
}
