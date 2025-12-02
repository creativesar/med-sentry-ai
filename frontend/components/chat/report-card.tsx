import React from 'react';
import { FileSearch, AlertCircle, CheckCircle, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ReportCardProps {
    abnormalFindings?: string[];
    normalFindings?: string[];
}

export function ReportCard({ abnormalFindings, normalFindings }: ReportCardProps) {
    if ((!abnormalFindings || abnormalFindings.length === 0) && (!normalFindings || normalFindings.length === 0)) return null;

    return (
        <div className="space-y-4 mt-4">
            <h3 className="text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                <FileSearch className="w-4 h-4 text-purple-500" />
                Report Analysis
            </h3>

            {abnormalFindings && abnormalFindings.length > 0 && (
                <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                        <AlertCircle className="w-3 h-3" />
                        Attention Required
                    </h4>
                    <div className="grid gap-2">
                        {abnormalFindings.map((finding, index) => (
                            <motion.div
                                key={`abnormal-${index}`}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-3 rounded-lg border border-red-100 dark:border-red-900/30 bg-red-50/50 dark:bg-red-900/10 text-sm text-slate-700 dark:text-slate-300"
                            >
                                <div dangerouslySetInnerHTML={{ __html: finding.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            {normalFindings && normalFindings.length > 0 && (
                <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle className="w-3 h-3" />
                        Normal Findings
                    </h4>
                    <div className="grid gap-2">
                        {normalFindings.map((finding, index) => (
                            <motion.div
                                key={`normal-${index}`}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-3 rounded-lg border border-emerald-100 dark:border-emerald-900/30 bg-emerald-50/50 dark:bg-emerald-900/10 text-sm text-slate-600 dark:text-slate-400"
                            >
                                <div className="flex items-center gap-2">
                                    <Activity className="w-3 h-3 text-emerald-500 shrink-0" />
                                    <span dangerouslySetInnerHTML={{ __html: finding.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
