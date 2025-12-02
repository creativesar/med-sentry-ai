import React from 'react';
import { motion } from 'framer-motion';

export function MessageSkeleton() {
    return (
        <div className="flex gap-4 max-w-3xl mx-auto">
            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 skeleton shrink-0"></div>
            <div className="flex-1 space-y-3">
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded skeleton w-3/4"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded skeleton w-1/2"></div>
            </div>
        </div>
    );
}

export function TriageCardSkeleton() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl p-6 space-y-4"
        >
            <div className="flex justify-between items-center">
                <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded skeleton w-32"></div>
                <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded skeleton w-24"></div>
            </div>
            <div className="space-y-2">
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded skeleton w-full"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded skeleton w-5/6"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded skeleton w-4/6"></div>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div className="h-20 bg-slate-200 dark:bg-slate-800 rounded-xl skeleton"></div>
                <div className="h-20 bg-slate-200 dark:bg-slate-800 rounded-xl skeleton"></div>
            </div>
        </motion.div>
    );
}

export function ConversationSkeleton() {
    return (
        <div className="space-y-2 p-2">
            {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 bg-slate-800 rounded-xl skeleton"></div>
            ))}
        </div>
    );
}

