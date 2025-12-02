"use client";

import React from 'react';
import { AnalyticsDashboard } from '@/components/analytics-dashboard';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function AnalyticsPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between"
                >
                    <div className="flex items-center gap-4">
                        <Link href="/">
                            <Button variant="ghost" size="icon" className="rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800">
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                                Analytics Dashboard
                            </h1>
                            <p className="text-sm text-muted-foreground mt-1">
                                Insights into your medical consultations
                            </p>
                        </div>
                    </div>
                </motion.div>

                <AnalyticsDashboard />
            </div>
        </div>
    );
}

