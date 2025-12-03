"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Bot,
    BrainCircuit,
    MessageSquare,
    FileText,
    Languages,
    Shield,
    Zap,
    CheckCircle,
    ArrowRight,
    Sparkles
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

export default function ChatbotPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-300 mb-6 backdrop-blur-sm">
                            <Bot className="w-4 h-4" />
                            <span>AI-Powered Medical Assistant</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Meet Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">AI Health Companion</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            Our advanced chatbot combines cutting-edge AI with clinical expertise to provide instant, accurate medical guidance.
                        </p>
                        <Link
                            href="/chat"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                        >
                            Start Chatting Now
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </FadeIn>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h2 className="text-4xl font-bold mb-12 text-center">Core Capabilities</h2>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: BrainCircuit,
                                title: "Clinical Reasoning",
                                desc: "Advanced AI trained on millions of medical cases, capable of understanding complex symptom patterns and medical history."
                            },
                            {
                                icon: MessageSquare,
                                title: "Natural Conversation",
                                desc: "Chat naturally as you would with a doctor. Our AI understands context, follow-up questions, and nuanced descriptions."
                            },
                            {
                                icon: FileText,
                                title: "Document Analysis",
                                desc: "Upload lab results, prescriptions, or medical reports. The chatbot can read and interpret medical documents."
                            },
                            {
                                icon: Languages,
                                title: "Multilingual Support",
                                desc: "Communicate in your preferred language. We support 95+ languages with native-level understanding."
                            },
                            {
                                icon: Shield,
                                title: "Safety-First Approach",
                                desc: "Conservative recommendations that err on the side of caution. We'll always tell you when to seek immediate care."
                            },
                            {
                                icon: Zap,
                                title: "Instant Responses",
                                desc: "Get answers in under 100ms. No waiting, no appointments—just immediate, reliable guidance."
                            }
                        ].map((capability, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all group">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <capability.icon className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                                    <p className="text-slate-400">{capability.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Makes It Special */}
            <section className="py-20 px-6 bg-slate-900/30">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <h2 className="text-4xl font-bold mb-12 text-center">What Makes Our Chatbot Special</h2>
                    </FadeIn>

                    <div className="space-y-12">
                        {[
                            {
                                title: "Context-Aware Intelligence",
                                desc: "Unlike simple symptom checkers, our chatbot remembers your conversation history, understands context, and asks relevant follow-up questions to provide accurate assessments.",
                                features: [
                                    "Maintains conversation context",
                                    "Asks clarifying questions",
                                    "Considers your medical history",
                                    "Adapts to your communication style"
                                ]
                            },
                            {
                                title: "Evidence-Based Recommendations",
                                desc: "Every suggestion is grounded in peer-reviewed medical literature and clinical guidelines. We cite our sources and explain our reasoning.",
                                features: [
                                    "Based on clinical protocols",
                                    "Regularly updated with latest research",
                                    "Transparent reasoning process",
                                    "Conservative when uncertain"
                                ]
                            },
                            {
                                title: "Comprehensive Assessment",
                                desc: "We don't just identify conditions—we provide a complete picture including severity, urgency, potential complications, and clear next steps.",
                                features: [
                                    "Severity classification",
                                    "Urgency assessment",
                                    "Risk factor analysis",
                                    "Actionable recommendations"
                                ]
                            }
                        ].map((feature, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                                        <p className="text-slate-400 text-lg leading-relaxed">{feature.desc}</p>
                                    </div>
                                    <div className="space-y-3">
                                        {feature.features.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                                                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                                <span className="text-slate-300">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h2 className="text-4xl font-bold mb-12 text-center">Perfect For</h2>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Late-Night Concerns",
                                desc: "When symptoms appear at 2 AM and you're not sure if it can wait until morning or needs immediate attention."
                            },
                            {
                                title: "Travel Emergencies",
                                desc: "Dealing with health issues in unfamiliar locations or countries where language barriers exist."
                            },
                            {
                                title: "Chronic Condition Management",
                                desc: "Daily questions about managing ongoing health conditions, medication interactions, or symptom changes."
                            },
                            {
                                title: "Parenting Worries",
                                desc: "Quick, reliable answers when your child has symptoms and you need to know if it's serious."
                            },
                            {
                                title: "Pre-Appointment Preparation",
                                desc: "Organize your symptoms and questions before seeing a doctor to make the most of your appointment."
                            },
                            {
                                title: "Lab Result Interpretation",
                                desc: "Understanding what your test results mean before your follow-up appointment."
                            }
                        ].map((useCase, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                        <Sparkles className="w-5 h-5 text-cyan-400" />
                                        {useCase.title}
                                    </h3>
                                    <p className="text-slate-400">{useCase.desc}</p>
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
                            Ready to Experience the Future of Healthcare?
                        </h2>
                        <p className="text-xl text-slate-300 mb-8">
                            Start chatting with our AI medical assistant now. It's free, instant, and available 24/7.
                        </p>
                        <Link
                            href="/chat"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-lg"
                        >
                            Launch Chatbot
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
