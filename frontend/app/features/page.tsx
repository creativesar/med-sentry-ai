"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Shield,
    Zap,
    Globe,
    BrainCircuit,
    Lock,
    Users,
    BarChart3,
    FileText,
    HeartPulse,
    Activity,
    CheckCircle,
    Sparkles,
    ArrowRight
} from "lucide-react";
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

export default function FeaturesPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <FadeIn>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Features</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Everything you need for comprehensive medical guidance, powered by cutting-edge AI technology.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Technical Features */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: BrainCircuit,
                                title: "Neural Processing Engine",
                                desc: "Proprietary AI model trained on millions of medical cases, capable of understanding complex symptom patterns and medical context."
                            },
                            {
                                icon: Zap,
                                title: "Micro-Latency Responses",
                                desc: "Get comprehensive medical assessments in under 100ms. Our optimized infrastructure ensures instant results."
                            },
                            {
                                icon: Shield,
                                title: "Enterprise-Grade Security",
                                desc: "SOC2 compliant with end-to-end encryption. Your medical data is protected with bank-level security."
                            },
                            {
                                icon: Globe,
                                title: "95+ Languages",
                                desc: "Communicate in your native language. Our AI understands medical terminology across all supported languages."
                            },
                            {
                                icon: FileText,
                                title: "Document Intelligence",
                                desc: "Upload and analyze PDFs, images, and medical reports. OCR and NLP extract key medical information."
                            },
                            {
                                icon: HeartPulse,
                                title: "Continuous Monitoring",
                                desc: "Track symptoms over time, identify patterns, and receive proactive health recommendations."
                            },
                            {
                                icon: Lock,
                                title: "Privacy-First Design",
                                desc: "Your data is never sold or shared. All processing happens in secure, HIPAA-compliant environments."
                            },
                            {
                                icon: BarChart3,
                                title: "Health Analytics",
                                desc: "Visual dashboards showing health trends, symptom patterns, and progress over time."
                            },
                            {
                                icon: Users,
                                title: "Family Profiles",
                                desc: "Manage health for your entire family with separate profiles and age-appropriate guidance."
                            }
                        ].map((feature, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all group">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <feature.icon className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-slate-400">{feature.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-6 bg-slate-900/30">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h2 className="text-4xl font-bold mb-12 text-center">By the Numbers</h2>
                    </FadeIn>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { value: "10,000+", label: "Active Users", icon: Users },
                            { value: "99.9%", label: "Triage Accuracy", icon: CheckCircle },
                            { value: "< 100ms", label: "Response Time", icon: Zap },
                            { value: "24/7", label: "Availability", icon: Globe }
                        ].map((stat, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="text-center p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                                        <stat.icon className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-slate-400 font-medium">{stat.label}</div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h2 className="text-4xl font-bold mb-12 text-center">What Users Say</h2>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                quote: "I was panicking about my blood work, but MedSentry explained it clearly and calmed me down instantly.",
                                author: "Sarah Chen",
                                role: "User"
                            },
                            {
                                quote: "It's like having a doctor in your pocket. The triage advice was spot on.",
                                author: "Marcus Johnson",
                                role: "Parent"
                            },
                            {
                                quote: "Finally an AI that is conservative and safe. It doesn't just guess.",
                                author: "Elena Rodriguez",
                                role: "Med Student"
                            },
                            {
                                quote: "The report analysis feature is a game changer. I actually understand my lab results now.",
                                author: "David Kim",
                                role: "User"
                            }
                        ].map((testimonial, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="p-8 rounded-xl bg-slate-900/50 border border-slate-800">
                                    <div className="flex gap-1 mb-4">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Sparkles key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                        ))}
                                    </div>
                                    <p className="text-slate-300 mb-6 leading-relaxed text-lg">"{testimonial.quote}"</p>
                                    <div>
                                        <div className="font-semibold text-white">{testimonial.author}</div>
                                        <div className="text-sm text-slate-500">{testimonial.role}</div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-purple-900/20">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Experience These Features Yourself
                        </h2>
                        <p className="text-xl text-slate-300 mb-8">
                            Join thousands of users who trust MedSentry for instant, accurate medical guidance.
                        </p>
                        <Link
                            href="/chat"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-lg"
                        >
                            Start Chatting Now
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </FadeIn>
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
