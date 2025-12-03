"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Activity,
    FileText,
    HeartPulse,
    Shield,
    Zap,
    Globe,
    BrainCircuit,
    CheckCircle,
    Clock,
    Users
} from "lucide-react";
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

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <FadeIn>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Do</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Comprehensive AI-powered medical services designed to give you clarity and confidence in your health decisions.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Activity,
                                title: "Symptom Assessment",
                                desc: "Describe your symptoms and receive an instant, clinical-grade assessment. Our AI evaluates your condition against thousands of medical protocols to provide accurate triage recommendations.",
                                features: [
                                    "Multi-symptom analysis",
                                    "Severity classification",
                                    "Recommended next steps",
                                    "Red flag detection"
                                ]
                            },
                            {
                                icon: FileText,
                                title: "Medical Report Analysis",
                                desc: "Upload lab results, imaging reports, or medical documents. We translate complex medical jargon into clear, understandable insights and highlight key findings.",
                                features: [
                                    "PDF & image support",
                                    "Lab value interpretation",
                                    "Trend analysis",
                                    "Abnormality highlighting"
                                ]
                            },
                            {
                                icon: HeartPulse,
                                title: "Chronic Condition Management",
                                desc: "Track and manage ongoing health conditions with personalized guidance. Get medication reminders, symptom tracking, and proactive health recommendations.",
                                features: [
                                    "Condition-specific advice",
                                    "Medication tracking",
                                    "Symptom journaling",
                                    "Progress monitoring"
                                ]
                            },
                            {
                                icon: Users,
                                title: "Family Health Support",
                                desc: "Specialized guidance for parents and caregivers. Quick, reliable answers for children's health concerns with age-appropriate recommendations.",
                                features: [
                                    "Pediatric assessments",
                                    "Growth tracking",
                                    "Vaccination reminders",
                                    "Emergency guidance"
                                ]
                            }
                        ].map((service, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/30 transition-all group shadow-lg hover:shadow-cyan-500/5 h-full">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-800/50 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-white/5 group-hover:border-cyan-500/20">
                                        <service.icon className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-100 transition-colors">{service.title}</h3>
                                    <p className="text-slate-400 mb-6 leading-relaxed">{service.desc}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-slate-300">
                                                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 px-6 bg-slate-900/30">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>
                    </FadeIn>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Describe",
                                desc: "Share your symptoms, upload reports, or ask a health question."
                            },
                            {
                                step: "02",
                                title: "Analyze",
                                desc: "Our AI processes your information using advanced clinical reasoning."
                            },
                            {
                                step: "03",
                                title: "Assess",
                                desc: "Receive a detailed assessment with severity classification and recommendations."
                            },
                            {
                                step: "04",
                                title: "Act",
                                desc: "Follow evidence-based guidance on next steps, from self-care to seeking immediate care."
                            }
                        ].map((step, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="text-center">
                                    <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-purple-400 mb-4">
                                        {step.step}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-slate-400">{step.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Our Services</h2>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Clock,
                                title: "24/7 Availability",
                                desc: "Get medical guidance anytime, anywhere. No appointments, no waiting rooms."
                            },
                            {
                                icon: Shield,
                                title: "Evidence-Based",
                                desc: "All recommendations are grounded in peer-reviewed medical literature and clinical guidelines."
                            },
                            {
                                icon: Zap,
                                title: "Instant Results",
                                desc: "Receive comprehensive assessments in under 100ms. No more anxious waiting."
                            },
                            {
                                icon: BrainCircuit,
                                title: "AI-Powered",
                                desc: "Leveraging cutting-edge AI trained on millions of medical cases for accuracy."
                            },
                            {
                                icon: Users,
                                title: "User-Friendly",
                                desc: "Simple, intuitive interface designed for everyone, regardless of technical expertise."
                            }
                        ].map((benefit, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/30 transition-all group shadow-lg hover:shadow-cyan-500/5 h-full">
                                    <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform border border-white/5 group-hover:border-cyan-500/20">
                                        <benefit.icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-100 transition-colors">{benefit.title}</h3>
                                    <p className="text-slate-400">{benefit.desc}</p>
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
