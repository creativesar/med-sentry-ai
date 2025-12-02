"use client";

import React, { useState, useEffect } from 'react';
import { TrendingUp, Activity, AlertTriangle, FileText, Calendar, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

interface AnalyticsData {
    totalConsultations: number;
    highPriorityCount: number;
    mediumPriorityCount: number;
    lowPriorityCount: number;
    recentActivity: Array<{
        id: number;
        title: string;
        triage_level: string;
        created_at: string;
    }>;
}

export function AnalyticsDashboard() {
    const [data, setData] = useState<AnalyticsData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch analytics data
        const fetchAnalytics = async () => {
            try {
                const response = await fetch('http://localhost:8000/analytics');
                if (response.ok) {
                    const analyticsData = await response.json();
                    setData(analyticsData);
                }
            } catch (error) {
                console.error('Failed to fetch analytics:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAnalytics();
    }, []);

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-32 bg-slate-200 dark:bg-slate-800 rounded-xl skeleton"></div>
                ))}
            </div>
        );
    }

    if (!data) return null;

    const stats = [
        {
            label: 'Total Consultations',
            value: data.totalConsultations,
            icon: FileText,
            iconBg: 'bg-blue-100 dark:bg-blue-900/40',
            iconColor: 'text-blue-700 dark:text-blue-200',
            bgColor: 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800'
        },
        {
            label: 'High Priority',
            value: data.highPriorityCount,
            icon: AlertTriangle,
            iconBg: 'bg-red-100 dark:bg-red-900/40',
            iconColor: 'text-red-700 dark:text-red-200',
            bgColor: 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800'
        },
        {
            label: 'Medium Priority',
            value: data.mediumPriorityCount,
            icon: Activity,
            iconBg: 'bg-amber-100 dark:bg-amber-900/40',
            iconColor: 'text-amber-700 dark:text-amber-200',
            bgColor: 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800'
        },
        {
            label: 'Low Priority',
            value: data.lowPriorityCount,
            icon: TrendingUp,
            iconBg: 'bg-emerald-100 dark:bg-emerald-900/40',
            iconColor: 'text-emerald-700 dark:text-emerald-200',
            bgColor: 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800'
        }
    ];

    return (
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className={`${stat.bgColor} rounded-2xl p-6 transition-all duration-300 shadow hover:shadow-lg`}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow ${stat.iconBg}`}>
                                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">{stat.value}</p>
                            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{stat.label}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Recent Activity */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white">
                        <BarChart3 className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Recent Activity</h3>
                </div>
                <div className="space-y-3">
                    {data.recentActivity.map((activity, index) => (
                        <motion.div
                            key={activity.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-3 h-3 rounded-full ${
                                    activity.triage_level === 'High' ? 'bg-red-500' :
                                    activity.triage_level === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                                }`}></div>
                                <div>
                                    <p className="font-semibold text-slate-900 dark:text-slate-100">{activity.title}</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                                        <Calendar className="w-3 h-3" />
                                        {format(new Date(activity.created_at), 'MMM d, yyyy • h:mm a')}
                                    </p>
                                </div>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                activity.triage_level === 'High' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                                activity.triage_level === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                            }`}>
                                {activity.triage_level}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

