import React from 'react';
import { AlertTriangle, CheckCircle, Info, FileText, Download, ShieldAlert, Activity, Pill, Stethoscope, FileSearch, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { motion } from 'framer-motion';
import { MedicationCard } from './chat/medication-card';
import { ReportCard } from './chat/report-card';

type PdfWithAutoTable = jsPDF & {
    lastAutoTable?: {
        finalY: number;
    };
};

export interface TriageResponse {
    summary: string;
    triage_level: string;
    possible_conditions?: string[];
    diagnosis?: string;
    medications?: string[];
    treatment_plan?: string[];
    suggested_next_steps: string[];
    clarifying_questions: string[];
    emergency_warning?: string;
    red_flags?: string[];
    prevention_tips?: string[];
    abnormal_findings?: string[];
    normal_findings?: string[];
    disclaimer: string;
    conversation_id: number;
}

interface TriageCardProps {
    data: TriageResponse;
}

export function TriageCard({ data }: TriageCardProps) {
    const getTriageColor = (level: string) => {
        switch (level?.toLowerCase()) {
            case 'high': return 'bg-red-600 text-white border-red-700 shadow-red-500/20';
            case 'medium': return 'bg-amber-500 text-white border-amber-600 shadow-amber-500/20';
            case 'low': return 'bg-emerald-600 text-white border-emerald-700 shadow-emerald-500/20';
            default: return 'bg-slate-600 text-white border-slate-700';
        }
    };

    const downloadPDF = () => {
        const doc = new jsPDF();
        const docWithTable = doc as PdfWithAutoTable;

        // Header
        doc.setFontSize(20);
        doc.setTextColor(40, 40, 40);
        doc.text("MedSentry AI - Medical Report", 14, 22);

        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 30);

        // Triage Level
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.text(`Triage Level: ${data.triage_level}`, 14, 45);

        // Summary
        doc.setFontSize(12);
        doc.text("Summary", 14, 55);
        doc.setFontSize(10);
        doc.setTextColor(60, 60, 60);
        const splitSummary = doc.splitTextToSize(data.summary, 180);
        doc.text(splitSummary, 14, 62);

        let yPos = 62 + (splitSummary.length * 5) + 10;

        // Possible Conditions
        if (data.possible_conditions && data.possible_conditions.length > 0) {
            autoTable(doc, {
                startY: yPos,
                head: [['Possible Conditions']],
                body: data.possible_conditions.map(c => [c]),
                theme: 'grid',
                headStyles: { fillColor: [2, 132, 199] } // Medical Blue
            });
            if (docWithTable.lastAutoTable?.finalY) {
                yPos = docWithTable.lastAutoTable.finalY + 10;
            }
        }

        // Medications
        if (data.medications && data.medications.length > 0) {
            autoTable(doc, {
                startY: yPos,
                head: [['Suggested Medications / Analysis']],
                body: data.medications.map(m => [m.replace(/\*\*/g, '')]), // Strip markdown for PDF
                theme: 'grid',
                headStyles: { fillColor: [2, 132, 199] }
            });
            if (docWithTable.lastAutoTable?.finalY) {
                yPos = docWithTable.lastAutoTable.finalY + 10;
            }
        }

        // Treatment Plan
        if (data.treatment_plan && data.treatment_plan.length > 0) {
            autoTable(doc, {
                startY: yPos,
                head: [['Treatment Plan']],
                body: data.treatment_plan.map(t => [t.replace(/\*\*/g, '')]),
                theme: 'grid',
                headStyles: { fillColor: [2, 132, 199] }
            });
            if (docWithTable.lastAutoTable?.finalY) {
                yPos = docWithTable.lastAutoTable.finalY + 10;
            }
        }

        // Abnormal Findings (for Reports)
        if (data.abnormal_findings && data.abnormal_findings.length > 0) {
            autoTable(doc, {
                startY: yPos,
                head: [['Abnormal Findings']],
                body: data.abnormal_findings.map(f => [f.replace(/\*\*/g, '')]),
                theme: 'grid',
                headStyles: { fillColor: [220, 38, 38] } // Red for abnormal
            });
            if (docWithTable.lastAutoTable?.finalY) {
                yPos = docWithTable.lastAutoTable.finalY + 10;
            }
        }

        // Disclaimer
        doc.setFontSize(8);
        doc.setTextColor(200, 0, 0);
        const splitDisclaimer = doc.splitTextToSize(data.disclaimer, 180);
        doc.text(splitDisclaimer, 14, 280);

        doc.save("MedSentry_Report.pdf");
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-[#1E293B] rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm"
        >
            {/* Clinical Header */}
            <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-[#0F172A] flex justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                    <div className={cn(
                        "flex items-center justify-center w-10 h-10 rounded-xl border shadow-sm transition-colors",
                        getTriageColor(data.triage_level)
                    )}>
                        <Activity className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 leading-tight">
                            Clinical Analysis
                        </h3>
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            {data.triage_level} Priority
                        </p>
                    </div>
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={downloadPDF}
                    className="gap-2 h-8 text-xs border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors rounded-lg"
                >
                    <Download className="w-3 h-3" />
                    <span className="hidden sm:inline">Export PDF</span>
                </Button>
            </div>

            {/* Content */}
            <div className="p-5 space-y-6">
                {/* Emergency Warning */}
                {data.triage_level === 'High' && data.emergency_warning && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 p-4 rounded-xl flex gap-3 shadow-sm"
                    >
                        <ShieldAlert className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5 animate-pulse" />
                        <div>
                            <p className="font-bold text-sm text-red-700 dark:text-red-300 whitespace-pre-line">{data.emergency_warning}</p>
                        </div>
                    </motion.div>
                )}

                {/* Summary */}
                <div className="space-y-2">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                        <Info className="w-3 h-3" /> Clinical Summary
                    </h4>
                    <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                        {data.summary}
                    </p>
                </div>

                {/* Conditions & Diagnosis */}
                {data.possible_conditions && data.possible_conditions.length > 0 && (
                    <div className="space-y-2">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                            <Stethoscope className="w-3 h-3" /> Potential Conditions
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                            {data.possible_conditions.map((condition, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white dark:bg-slate-800 px-4 py-3 rounded-xl text-sm font-medium border border-slate-200 dark:border-slate-700 flex items-start gap-3 shadow-sm"
                                >
                                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0"></span>
                                    <span className="text-slate-700 dark:text-slate-200">{condition}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Clarifying Questions */}
                {data.clarifying_questions && data.clarifying_questions.length > 0 && (
                    <div className="space-y-2">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                            <HelpCircle className="w-3 h-3" /> Need More Information?
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                            {data.clarifying_questions.map((question, idx) => (
                                <div
                                    key={idx}
                                    className="bg-blue-50 dark:bg-blue-900/20 px-4 py-3 rounded-xl text-sm font-medium border border-blue-100 dark:border-blue-900/30 flex items-start gap-3 shadow-sm"
                                >
                                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                                    <span className="text-blue-800 dark:text-blue-200">{question}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                            Please answer these questions to help us provide a more accurate assessment.
                        </p>
                    </div>
                )}

                {/* New Report Card for Lab/Imaging Results */}
                <ReportCard
                    abnormalFindings={data.abnormal_findings}
                    normalFindings={data.normal_findings}
                />

                {/* New Medication Card */}
                <MedicationCard medications={data.medications || []} />

                {/* Treatment Plan */}
                {data.treatment_plan && data.treatment_plan.length > 0 && (
                    <div className="space-y-2">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                            <CheckCircle className="w-3 h-3" /> Treatment Plan
                        </h4>
                        <ul className="space-y-2">
                            {data.treatment_plan.map((step, idx) => (
                                <li
                                    key={idx}
                                    className="text-sm flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800 transition-colors"
                                >
                                    <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                                        {idx + 1}
                                    </span>
                                    <span className="text-slate-700 dark:text-slate-300" dangerouslySetInnerHTML={{ __html: step.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Disclaimer */}
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex gap-3 items-start">
                    <AlertTriangle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                        {data.disclaimer}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
