"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Stethoscope,
  Activity,
  HeartPulse,
  FileText,
  Shield,
  Zap,
  Globe,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- Utility Components ---

const AuroraBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-slate-950 text-slate-50 transition-bg">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            pointer-events-none absolute -inset-[10px] opacity-50
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,#3b82f6_10%,#a855f7_15%,#06b6d4_20%,#a855f7_25%,#3b82f6_30%)]
            [background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[''] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50
            will-change-transform
          "
        ></div>
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

const HeroButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors gap-2 group-hover:bg-slate-900">
        Start Chatting Now
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </button>
  );
};

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// --- 3D Hero Component ---

const Hero3D = ({ onClick }: { onClick: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-20 overflow-hidden perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950 pointer-events-none" />

      {/* Content Layer */}
      <div className="relative z-20 text-center space-y-8 max-w-4xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-300 mb-4 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          MedSentry v2.0
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.1]"
        >
          Medical Triage <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 animate-gradient-x">
            Reimagined.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          The world's most advanced AI medical assistant. Clinical precision meets neural understanding.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <HeroButton onClick={onClick} />
        </motion.div>
      </div>

      {/* 3D Interface Layer */}
      <motion.div
        ref={ref}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 w-full max-w-5xl mx-auto aspect-[16/9] hidden md:block"
      >
        <div
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl rounded-t-3xl border border-white/10 shadow-2xl overflow-hidden"
          style={{ transform: "translateZ(50px)" }}
        >
          {/* Mock UI Header */}
          <div className="h-12 border-b border-white/10 flex items-center px-6 gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="h-6 w-64 bg-white/5 rounded-full" />
          </div>
          {/* Mock UI Body */}
          <div className="p-8 grid grid-cols-12 gap-8 h-full">
            <div className="col-span-3 space-y-4 border-r border-white/5 pr-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-16 bg-white/5 rounded-xl animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
            <div className="col-span-9 space-y-6">
              <div className="flex justify-end">
                <div className="bg-purple-600/80 text-white px-6 py-3 rounded-2xl rounded-tr-sm max-w-[80%]">
                  I have a severe headache and sensitivity to light.
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-slate-800/80 text-slate-200 px-6 py-3 rounded-2xl rounded-tl-sm max-w-[80%] border border-white/5">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold mb-2">
                    <Activity className="w-4 h-4" />
                    <span>Analysis in progress...</span>
                  </div>
                  <p>Based on your symptoms, this could be a migraine. Are you experiencing any nausea?</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          style={{ transform: "translateZ(100px)" }}
          className="absolute -right-10 top-20 p-4 bg-slate-800/90 backdrop-blur rounded-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
        >
          <HeartPulse className="w-8 h-8 text-cyan-400" />
        </motion.div>

        <motion.div
          style={{ transform: "translateZ(80px)" }}
          className="absolute -left-10 bottom-40 p-4 bg-slate-800/90 backdrop-blur rounded-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20"
        >
          <BrainCircuit className="w-8 h-8 text-purple-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// --- Page Component ---

export default function LandingPage() {
  const router = useRouter();

  const scrollToChat = () => {
    router.push("/chat");
  };

  return (
    <AuroraBackground>
      <Navbar />

      <div className="flex flex-col w-full overflow-x-hidden">
        <Hero3D onClick={scrollToChat} />

        {/* --- Value Proposition --- */}
        <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">MedSentry</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Experience the future of medical triage with AI-powered precision and human-centered care.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: BrainCircuit,
                  title: "Clinical Intelligence",
                  desc: "Advanced AI trained on millions of medical cases for accurate triage and assessment."
                },
                {
                  icon: Shield,
                  title: "Safety First",
                  desc: "Conservative, evidence-based recommendations that prioritize your wellbeing above all."
                },
                {
                  icon: Zap,
                  title: "Instant Response",
                  desc: "Get immediate answers to your health questions, 24/7, without waiting rooms."
                }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-cyan-500/30 transition-all group">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <item.icon className="w-7 h-7 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* --- Quick Features --- */}
        <section className="py-24 relative z-10 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Everything you need for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">better health decisions</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  From symptom checking to lab result analysis, MedSentry provides comprehensive medical guidance when you need it most.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: FileText, text: "Upload and analyze medical reports" },
                    { icon: Activity, text: "Real-time symptom assessment" },
                    { icon: HeartPulse, text: "Chronic condition management" },
                    { icon: Shield, text: "HIPAA-compliant security" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <span className="text-slate-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="relative aspect-square rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />
                  <div className="relative h-full w-full flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
                      <div className="w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
                    </div>
                    <div className="relative z-10 text-center">
                      <Sparkles className="w-20 h-20 text-cyan-400 mx-auto mb-4" />
                      <p className="text-2xl font-bold text-white">AI-Powered</p>
                      <p className="text-slate-400">Medical Assistant</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* --- Final CTA --- */}
        <section className="py-32 relative overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-purple-900/20 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-20 px-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                Your health. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Clarified.
                </span>
              </h2>

              <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Join thousands of users who trust MedSentry for instant, accurate, and safe medical guidance.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <HeroButton onClick={scrollToChat} />
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </AuroraBackground>
  );
}