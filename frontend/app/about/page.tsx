"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Heart, Users, Award, Sparkles, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <FadeIn>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">MedSentry</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            We're on a mission to democratize access to quality medical guidance through the power of artificial intelligence.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <FadeIn>
                            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6">
                                    <Target className="w-7 h-7 text-cyan-400" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                                <p className="text-slate-400 leading-relaxed text-lg">
                                    To provide instant, accurate, and safe medical triage to everyone, everywhere. We believe that quality healthcare guidance should be accessible 24/7, regardless of location or economic status.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6">
                                    <Sparkles className="w-7 h-7 text-purple-400" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                                <p className="text-slate-400 leading-relaxed text-lg">
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
                        <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
                        <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
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
                        <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
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
                                <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                                        <value.icon className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                    <p className="text-slate-400">{value.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
