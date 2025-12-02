import React from 'react';
import { Pill, AlertTriangle, CheckCircle2, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface MedicationCardProps {
    medications: string[];
}

export function MedicationCard({ medications }: MedicationCardProps) {
    if (!medications || medications.length === 0) return null;

    return (
        <div className="space-y-3 mt-4">
            <h3 className="text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                <Pill className="w-4 h-4 text-emerald-500" />
                Medication Analysis
            </h3>
            <div className="grid gap-3">
                {medications.map((med, index) => {
                    // Simple parsing logic to detect type of info based on keywords
                    const isWarning = med.toLowerCase().includes('warning') || med.toLowerCase().includes('contraindication');
                    const isSideEffect = med.toLowerCase().includes('side effect');

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "p-4 rounded-xl border text-sm leading-relaxed",
                                isWarning
                                    ? "bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/30 text-red-800 dark:text-red-200"
                                    : "bg-emerald-50/50 dark:bg-emerald-900/10 border-emerald-100 dark:border-emerald-900/30 text-slate-700 dark:text-slate-300"
                            )}
                        >
                            <div className="flex gap-3 items-start">
                                <div className="mt-0.5 shrink-0">
                                    {isWarning ? (
                                        <AlertTriangle className="w-4 h-4 text-red-500" />
                                    ) : isSideEffect ? (
                                        <Info className="w-4 h-4 text-blue-500" />
                                    ) : (
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    )}
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: med.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
