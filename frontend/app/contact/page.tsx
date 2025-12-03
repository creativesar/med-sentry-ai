"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageSquare, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
    >
        {children}
    </motion.div>
);

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <FadeIn>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Touch</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Have questions? We're here to help. Reach out to our team anytime.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <FadeIn>
                            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
                                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                            placeholder="How can we help?"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                                            placeholder="Tell us more..."
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2"
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </FadeIn>

                        {/* Contact Info & FAQ */}
                        <div className="space-y-8">
                            <FadeIn delay={0.1}>
                                <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
                                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                                                <Mail className="w-5 h-5 text-cyan-400" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-white">Email</div>
                                                <div className="text-slate-400">support@medsentry.ai</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                                                <Phone className="w-5 h-5 text-cyan-400" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-white">Phone</div>
                                                <div className="text-slate-400">+1 (555) 123-4567</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                                                <MapPin className="w-5 h-5 text-cyan-400" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-white">Address</div>
                                                <div className="text-slate-400">
                                                    123 Health Tech Ave<br />
                                                    San Francisco, CA 94102
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                        <HelpCircle className="w-6 h-6 text-cyan-400" />
                                        Quick FAQ
                                    </h2>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="font-medium text-white mb-1">Is MedSentry free to use?</div>
                                            <div className="text-slate-400 text-sm">
                                                Yes! Our basic medical triage service is completely free.
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-medium text-white mb-1">Is my data secure?</div>
                                            <div className="text-slate-400 text-sm">
                                                Absolutely. We use enterprise-grade encryption and are SOC2 compliant.
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-medium text-white mb-1">Can I use this for emergencies?</div>
                                            <div className="text-slate-400 text-sm">
                                                MedSentry is for guidance only. For emergencies, always call 911.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-slate-800/50 text-slate-400 text-sm bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    © 2025 MedSentry AI. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
