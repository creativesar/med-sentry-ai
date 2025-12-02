"use client";

import React, { useState } from 'react';
import { Heart, Activity, Thermometer, Plus, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';

interface HealthMetric {
    id: string;
    type: 'temperature' | 'heart_rate' | 'blood_pressure' | 'weight' | 'symptoms';
    value: string;
    unit?: string;
    notes?: string;
    timestamp: string;
}

const getStoredMetrics = (): HealthMetric[] => {
    if (typeof window === 'undefined') return [];
    const saved = window.localStorage.getItem('medsentry_health_metrics');
    if (!saved) return [];
    try {
        return JSON.parse(saved) as HealthMetric[];
    } catch {
        return [];
    }
};

const getInitialMetric = (): Partial<HealthMetric> => ({
    type: 'temperature',
    value: '',
    unit: '°F',
    notes: ''
});

export function HealthTracker() {
    const [metrics, setMetrics] = useState<HealthMetric[]>(() => getStoredMetrics());
    const [showAddForm, setShowAddForm] = useState(false);
    const [newMetric, setNewMetric] = useState<Partial<HealthMetric>>(getInitialMetric);

    const saveMetrics = (newMetrics: HealthMetric[]) => {
        localStorage.setItem('medsentry_health_metrics', JSON.stringify(newMetrics));
        setMetrics(newMetrics);
    };

    const addMetric = () => {
        if (!newMetric.value) return;

        const metric: HealthMetric = {
            id: Date.now().toString(),
            type: newMetric.type || 'temperature',
            value: newMetric.value || '',
            unit: newMetric.unit,
            notes: newMetric.notes,
            timestamp: new Date().toISOString()
        };

        saveMetrics([...metrics, metric]);
        setNewMetric(getInitialMetric());
        setShowAddForm(false);
    };

    const deleteMetric = (id: string) => {
        saveMetrics(metrics.filter(m => m.id !== id));
    };

    const getIcon = (type: string) => {
        switch (type) {
            case 'temperature': return Thermometer;
            case 'heart_rate': return Heart;
            case 'blood_pressure': return Activity;
            default: return Activity;
        }
    };

    const getColor = (type: string) => {
        switch (type) {
            case 'temperature':
                return { background: 'bg-red-100 dark:bg-red-900/40', icon: 'text-red-600 dark:text-red-200' };
            case 'heart_rate':
                return { background: 'bg-rose-100 dark:bg-rose-900/40', icon: 'text-rose-600 dark:text-rose-200' };
            case 'blood_pressure':
                return { background: 'bg-blue-100 dark:bg-blue-900/40', icon: 'text-blue-600 dark:text-blue-200' };
            default:
                return { background: 'bg-slate-200 dark:bg-slate-800', icon: 'text-slate-700 dark:text-slate-200' };
        }
    };

    const recentMetrics = metrics.slice(-5).reverse();

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Health Tracker</h3>
                <Button
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="gap-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl"
                    size="sm"
                >
                    <Plus className="w-4 h-4" />
                    Add Metric
                </Button>
            </div>

            {showAddForm && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 space-y-3"
                >
                    <select
                        value={newMetric.type}
                        onChange={(e) => setNewMetric({ ...newMetric, type: e.target.value as HealthMetric['type'] })}
                        className="w-full p-2 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-transparent"
                    >
                        <option value="temperature">Temperature</option>
                        <option value="heart_rate">Heart Rate</option>
                        <option value="blood_pressure">Blood Pressure</option>
                        <option value="weight">Weight</option>
                        <option value="symptoms">Symptoms</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Value"
                        value={newMetric.value}
                        onChange={(e) => setNewMetric({ ...newMetric, value: e.target.value })}
                        className="w-full p-2 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-transparent"
                    />
                    <textarea
                        placeholder="Notes (optional)"
                        value={newMetric.notes}
                        onChange={(e) => setNewMetric({ ...newMetric, notes: e.target.value })}
                        className="w-full p-2 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-transparent h-20 resize-none"
                    />
                    <div className="flex gap-2">
                        <Button onClick={addMetric} className="flex-1 bg-sky-600 hover:bg-sky-700 text-white">Save</Button>
                        <Button onClick={() => setShowAddForm(false)} variant="ghost" className="flex-1">Cancel</Button>
                    </div>
                </motion.div>
            )}

            <div className="space-y-2">
                {recentMetrics.length === 0 ? (
                    <div className="text-center py-8 text-slate-500">
                        <Activity className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p>No health metrics recorded yet</p>
                    </div>
                ) : (
                    recentMetrics.map((metric, index) => {
                        const Icon = getIcon(metric.type);
                        const color = getColor(metric.type);
                        return (
                            <motion.div
                                key={metric.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 flex items-center gap-4 hover:shadow-md transition-all"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow ${color.background}`}>
                                    <Icon className={`w-6 h-6 ${color.icon}`} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <p className="font-semibold text-slate-900 dark:text-slate-100 capitalize">
                                            {metric.type.replace('_', ' ')}
                                        </p>
                                        <p className="text-xs text-slate-500">
                                            {format(new Date(metric.timestamp), 'MMM d, h:mm a')}
                                        </p>
                                    </div>
                                    <p className="text-lg font-bold text-primary">
                                        {metric.value} {metric.unit}
                                    </p>
                                    {metric.notes && (
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{metric.notes}</p>
                                    )}
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => deleteMetric(metric.id)}
                                    className="text-slate-400 hover:text-red-500"
                                    title="Delete entry"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </motion.div>
                        );
                    })
                )}
            </div>
        </div>
    );
}

