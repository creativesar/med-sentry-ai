import React from 'react';
import { ClipboardList, Activity, Syringe, AlertTriangle, FileSearch, Stethoscope, Pill, HeartPulse } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface QuickActionsProps {
    onQuickPrompt: (prompt: string) => void;
}

export function QuickActions({ onQuickPrompt }: QuickActionsProps) {
    const quickActions = [
        {
            id: 'symptom-check',
            title: 'Triage Symptoms',
            description: 'Structured symptom analysis',
            prompt: 'Symptom checklist:\n• Primary concern:\n• Duration:\n• Severity (1-10):\n• Triggers or relief:\n• Relevant medical history:',
            icon: Stethoscope,
            color: "text-blue-500",
            bg: "bg-blue-50 dark:bg-blue-900/20",
            border: "border-blue-200 dark:border-blue-800"
        },
        {
            id: 'medication',
            title: 'Medication Info',
            description: 'Dosage, side effects & interactions',
            prompt: 'Medication inquiry:\n• Medication name:\n• Dosage (if known):\n• Specific question (side effects, interactions, etc.):',
            icon: Pill,
            color: "text-emerald-500",
            bg: "bg-emerald-50 dark:bg-emerald-900/20",
            border: "border-emerald-200 dark:border-emerald-800"
        },
        {
            id: 'report-analysis',
            title: 'Analyze Report',
            description: 'Interpret lab results or imaging',
            prompt: 'I have a medical report I need help understanding. [Please upload your report image or PDF]',
            icon: FileSearch,
            color: "text-purple-500",
            bg: "bg-purple-50 dark:bg-purple-900/20",
            border: "border-purple-200 dark:border-purple-800"
        },
        {
            id: 'vital-signs',
            title: 'Log Vitals',
            description: 'Track BP, HR, Temp, etc.',
            prompt: 'Vital signs update:\n• Temperature:\n• Blood pressure:\n• Heart rate:\n• Oxygen saturation:\n• Notes:',
            icon: HeartPulse,
            color: "text-rose-500",
            bg: "bg-rose-50 dark:bg-rose-900/20",
            border: "border-rose-200 dark:border-rose-800"
        }
    ];

    return (
        <div className="px-6 py-6 bg-slate-100 dark:bg-slate-900/50 border-b border-slate-300 dark:border-slate-800">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-1">Quick Actions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {quickActions.map((action, index) => (
                        <motion.button
                            key={action.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => onQuickPrompt(action.prompt)}
                            className={cn(
                                "flex flex-col items-start p-4 rounded-xl border transition-all duration-200 group relative overflow-hidden",
                                "bg-white dark:bg-slate-800 hover:shadow-md hover:-translate-y-0.5",
                                action.border
                            )}
                        >
                            <div className={cn(
                                "w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors",
                                action.bg
                            )}>
                                <action.icon className={cn("w-5 h-5", action.color)} />
                            </div>

                            <span className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-primary transition-colors">
                                {action.title}
                            </span>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight text-left font-medium">
                                {action.description}
                            </p>
                        </motion.button>
                    ))}
                </div>
            </div>
        </div>
    );
}
