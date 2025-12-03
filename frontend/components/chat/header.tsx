import React from 'react';
import { Menu, ShieldCheck, Phone, Settings, Bell, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface ChatHeaderProps {
    onOpenSidebar: () => void;
    onOpenProfile: () => void;
}

export function ChatHeader({ onOpenSidebar, onOpenProfile }: ChatHeaderProps) {
    return (
        <header className="flex justify-between items-center px-6 py-4 bg-slate-100 dark:bg-[#0F172A] border-b border-slate-300 dark:border-slate-800 z-20 sticky top-0">
            <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" onClick={onOpenSidebar} className="text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
                    <Menu className="w-5 h-5" />
                </Button>

                <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-md">
                    <Activity className="w-5 h-5 text-white" />
                    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full border border-slate-900 animate-pulse" />
                </div>

                <div>
                    <h3 className="font-semibold text-sm leading-tight text-slate-900 dark:text-white">MedSentry AI</h3>
                    <div className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                        <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">System Online</p>
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
