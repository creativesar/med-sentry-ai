import React from 'react';
import { Pill, AlertTriangle, CheckCircle2, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface MedicationCardProps {
    medications: string[];
}

export function MedicationCard({ medications }: MedicationCardProps) {
    if (!medications || medications.length === 0) return null;

    // Check if this is a suggestion (contains "Suggested Medication")
    const isSuggestion = medications.some(med => med.includes('Suggested Medication'));

    return (
        <div className="space-y-3 mt-4">
            <h3 className="text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                <Pill className="w-4 h-4 text-emerald-500" />
                {isSuggestion ? "Suggested Medications" : "Medication Analysis"}
            </h3>
            <div className="grid gap-3">
                {medications.map((med, index) => {
                    // Parsing logic to detect type of info based on keywords
                    const isWarning = med.toLowerCase().includes('warning') || med.toLowerCase().includes('contraindication') || med.includes('⚠️');
                    const isSideEffect = med.toLowerCase().includes('side effect');
                    const isSuggestion = med.includes('Suggested Medication');
                    const isUseCase = med.includes('Use Case');
                    const isDosage = med.includes('Dosage');

                    // Determine icon based on content type
                    let icon = <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
                    if (isWarning) {
                        icon = <AlertTriangle className="w-4 h-4 text-red-500" />;
                    } else if (isSideEffect) {
                        icon = <Info className="w-4 h-4 text-blue-500" />;
                    } else if (isSuggestion) {
                        icon = <Pill className="w-4 h-4 text-purple-500" />;
                    } else if (isUseCase) {
                        icon = <Info className="w-4 h-4 text-indigo-500" />;
                    } else if (isDosage) {
                        icon = <Info className="w-4 h-4 text-amber-500" />;
                    }

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
                                    : isSuggestion
                                        ? "bg-purple-50 dark:bg-purple-900/10 border-purple-100 dark:border-purple-900/30 text-purple-800 dark:text-purple-200"
                                        : isUseCase
                                            ? "bg-indigo-50 dark:bg-indigo-900/10 border-indigo-100 dark:border-indigo-900/30 text-indigo-800 dark:text-indigo-200"
                                            : isDosage
                                                ? "bg-amber-50 dark:bg-amber-900/10 border-amber-100 dark:border-amber-900/30 text-amber-800 dark:text-amber-200"
                                                : "bg-emerald-50/50 dark:bg-emerald-900/10 border-emerald-100 dark:border-emerald-900/30 text-slate-700 dark:text-slate-300"
                            )}
                        >
                            <div className="flex gap-3 items-start">
                                <div className="mt-0.5 shrink-0">
                                    {icon}
                                </div>
                                <div 
                                    className={isWarning ? "font-semibold" : ""}
                                    dangerouslySetInnerHTML={{ __html: med.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} 
                                />
                            </div>
                        </motion.div>
                    );
                })}
                
                {/* Additional disclaimer for medication suggestions */}
                {isSuggestion && (
                    <div className="p-4 rounded-xl border border-amber-100 dark:border-amber-900/30 bg-amber-50 dark:bg-amber-900/10 text-amber-800 dark:text-amber-200 text-sm mt-3">
                        <div className="flex gap-3 items-start">
                            <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                            <div>
                                <strong>Important Note:</strong> These are general suggestions only. Always consult with a healthcare provider before taking any medication, especially if you have underlying health conditions or are taking other medications.
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
