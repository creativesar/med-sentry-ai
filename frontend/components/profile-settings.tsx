"use client";

import React, { useState } from 'react';
import { User, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface UserProfile {
    name: string;
    age: string;
    gender: string;
    conditions: string;
    allergies: string;
}

interface ProfileSettingsProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (profile: UserProfile) => void;
}

const defaultProfile: UserProfile = {
        name: '',
        age: '',
        gender: '',
        conditions: '',
        allergies: ''
};

const getStoredProfile = (): UserProfile => {
    if (typeof window === 'undefined') return { ...defaultProfile };
    const saved = window.localStorage.getItem('medsentry_profile');
    if (!saved) return { ...defaultProfile };
    try {
        const parsed = JSON.parse(saved) as UserProfile;
        return { ...defaultProfile, ...parsed };
    } catch {
        return { ...defaultProfile };
    }
};

export function ProfileSettings({ isOpen, onClose, onSave }: ProfileSettingsProps) {
    const [profile, setProfile] = useState<UserProfile>(getStoredProfile);

    const handleSave = () => {
        localStorage.setItem('medsentry_profile', JSON.stringify(profile));
        onSave(profile);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border-2 border-slate-200 dark:border-slate-800"
            >
                <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-between">
                    <h2 className="text-xl font-bold flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                            <User className="w-5 h-5" />
                        </div>
                        <span className="text-slate-900 dark:text-white">Profile Settings</span>
                    </h2>
                    <button 
                        onClick={onClose} 
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 w-8 h-8 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center transition-colors"
                    >
                        ✕
                    </button>
                </div>

                <div className="p-6 space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Name</label>
                        <input
                            type="text"
                            value={profile.name}
                            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                            className="w-full p-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Age</label>
                            <input
                                type="number"
                                value={profile.age}
                                onChange={(e) => setProfile({ ...profile, age: e.target.value })}
                                className="w-full p-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                                placeholder="Age"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Gender</label>
                            <select
                                value={profile.gender}
                                onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                                className="w-full p-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                            >
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Pre-existing Conditions</label>
                        <textarea
                            value={profile.conditions}
                            onChange={(e) => setProfile({ ...profile, conditions: e.target.value })}
                            className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent h-20 resize-none"
                            placeholder="e.g., Asthma, Diabetes..."
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Allergies</label>
                        <textarea
                            value={profile.allergies}
                            onChange={(e) => setProfile({ ...profile, allergies: e.target.value })}
                            className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent h-20 resize-none"
                            placeholder="e.g., Penicillin, Peanuts..."
                        />
                    </div>
                </div>

                <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex justify-end gap-2">
                    <Button variant="ghost" onClick={onClose} className="rounded-xl">Cancel</Button>
                    <Button 
                        onClick={handleSave} 
                        className="gap-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl"
                    >
                        <Save className="w-4 h-4" /> Save Profile
                    </Button>
                </div>
            </motion.div>
        </motion.div>
    );
}
