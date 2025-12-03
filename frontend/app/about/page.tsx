"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Target, Heart, Users, Award, Sparkles, TrendingUp, ArrowRight, CheckCircle, Brain, Shield, Zap, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AnimatedCounter = ({ target, suffix = "", decimals = 0 }: { target: number; suffix?: string; decimals?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000; // 2 seconds
        const start = Date.now();
        const startValue = 0;

        const timer = setInterval(() => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const currentValue = Math.floor(startValue + (target - startValue) * progress);
            setCount(currentValue);

            if (progress === 1) {
                clearInterval(timer);
            }
        }, 50);

        return () => clearInterval(timer);
    }, [target]);

    return (
        <span>
            {count.toFixed(decimals)}
            {suffix}
        </span>
    );
};

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

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar />

            {/* Hero Section - Enhanced */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <FadeIn>
                        <p className="text-cyan-400 font-semibold text-lg mb-4">ABOUT MEDSENTRY AI</p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Transforming Healthcare with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">AI</span>
                        </h1>
                        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                            We're revolutionizing medical triage by making clinical-grade healthcare assessment accessible to everyone, anytime, anywhere.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Impact Stats Section */}
            <section className="py-20 px-6 bg-gradient-to-b from-slate-900/50 to-slate-950/30">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: 500, suffix: "+", label: "Healthcare Partners" },
                            { value: 2, suffix: "M+", label: "Assessments Completed" },
                            { value: 99, suffix: ".2%", label: "Triage Accuracy" },
                            { value: 150, suffix: "+", label: "Countries Served" }
                        ].map((stat, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="text-center p-6 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-md hover:border-cyan-500/50 transition-all shadow-lg hover:shadow-cyan-500/10 group relative overflow-hidden h-full flex flex-col justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2 relative z-10">
                                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <p className="text-slate-400 text-base md:text-lg relative z-10">{stat.label}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <FadeIn>
                            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 h-full">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6">
                                    <Target className="w-7 h-7 text-cyan-400" />
                                </div>
                                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                                <p className="text-slate-400 leading-relaxed text-base">
                                    To provide instant, accurate, and safe medical triage to everyone, everywhere. We believe that quality healthcare guidance should be accessible 24/7, regardless of location or economic status.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 h-full">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6">
                                    <Sparkles className="w-7 h-7 text-purple-400" />
                                </div>
                                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                                <p className="text-slate-400 leading-relaxed text-base">
                                    A world where every person has immediate access to clinical-grade medical assessment, reducing unnecessary ER visits while ensuring critical cases get the urgent care they need.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 px-6 bg-slate-900/30">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
                        <div className="space-y-6 text-slate-300 text-base leading-relaxed">
                            <p>
                                MedSentry was born from a simple yet powerful observation: millions of people worldwide struggle to access timely medical guidance. Whether it's the middle of the night, a remote location, or simply the anxiety of not knowing if symptoms warrant immediate attention, people need help.
                            </p>
                            <p>
                                Our founding team, composed of AI researchers, medical professionals, and healthcare innovators, came together with a shared vision: to leverage cutting-edge artificial intelligence to bridge this gap. We spent years developing and refining our clinical reasoning engine, training it on millions of anonymized medical cases and peer-reviewed clinical protocols.
                            </p>
                            <p>
                                Today, MedSentry serves thousands of users daily, providing instant medical triage that's both conservative and accurate. We're not here to replace doctors—we're here to empower people with the information they need to make informed healthcare decisions.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Heart,
                                title: "Patient-First",
                                desc: "Every decision we make prioritizes user safety and wellbeing above all else."
                            },
                            {
                                icon: Award,
                                title: "Clinical Excellence",
                                desc: "We maintain the highest standards of medical accuracy and evidence-based recommendations."
                            },
                            {
                                icon: Users,
                                title: "Accessibility",
                                desc: "Quality medical guidance should be available to everyone, regardless of background or location."
                            },
                            {
                                icon: TrendingUp,
                                title: "Continuous Improvement",
                                desc: "We constantly refine our AI models based on the latest medical research and user feedback."
                            },
                            {
                                icon: Target,
                                title: "Transparency",
                                desc: "We're open about our capabilities and limitations, never overpromising or misleading users."
                            },
                            {
                                icon: Sparkles,
                                title: "Innovation",
                                desc: "We push the boundaries of what's possible in AI-powered healthcare while maintaining safety."
                            }
                        ].map((value, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-md hover:border-cyan-500/50 transition-all shadow-lg hover:shadow-cyan-500/10 group relative overflow-hidden h-full">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/5 group-hover:border-cyan-500/30 relative z-10">
                                        <value.icon className="w-7 h-7 text-cyan-400" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-100 transition-colors relative z-10">{value.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed relative z-10">{value.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Led by Experts Section */}
            <section className="py-20 px-6 bg-slate-900/30">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h2 className="text-3xl font-bold mb-8 text-center">Led by Experts</h2>
                        <p className="text-lg text-slate-300 text-center mb-12 max-w-3xl mx-auto">
                            Our team combines deep expertise in artificial intelligence, medicine, and healthcare innovation to deliver safe, accurate, and compassionate care.
                        </p>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Brain,
                                title: "AI Researchers",
                                desc: "Leading minds in machine learning and neural networks specializing in medical AI"
                            },
                            {
                                icon: Heart,
                                title: "Medical Professionals",
                                desc: "Licensed physicians and medical experts ensuring clinical accuracy and safety"
                            },
                            {
                                icon: Zap,
                                title: "Healthcare Innovators",
                                desc: "Visionaries transforming how people access and understand medical guidance"
                            }
                        ].map((role, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-md hover:border-cyan-500/50 transition-all shadow-lg hover:shadow-cyan-500/10 group relative overflow-hidden h-full">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/5 group-hover:border-cyan-500/30 relative z-10">
                                        <role.icon className="w-8 h-8 text-cyan-400" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-100 transition-colors relative z-10">{role.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed relative z-10">{role.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Commitment Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <h2 className="text-3xl font-bold mb-8 text-center">Our Commitment</h2>
                        <div className="space-y-4">
                            {[
                                { icon: CheckCircle, text: "Medical accuracy verified against clinical protocols" },
                                { icon: Shield, text: "Privacy-first approach with enterprise-grade security" },
                                { icon: Award, text: "HIPAA compliant and continuously audited" },
                                { icon: Globe, text: "Available 24/7 with 99.9% uptime guarantee" }
                            ].map((item, i) => (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                                        <item.icon className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                                        <p className="text-slate-300 text-base">{item.text}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-purple-900/20">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Join the Healthcare Revolution
                        </h2>
                        <p className="text-lg text-slate-300 mb-8">
                            Experience AI-powered medical guidance that's safe, accurate, and always available.
                        </p>
                        <motion.a
                            href="/chat"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-lg"
                        >
                            Start Using MedSentry Now
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </div>
    );
}