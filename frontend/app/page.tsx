"use client";

import React, { useRef, useEffect } from "react";
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
  CheckCircle,
  ChevronDown,
  Award,
  Lock,
  Cpu,
  TrendingUp,
  Users,
  Star,
  Clock,
  PhoneCall,
  Play,
  Calendar,
  MapPin,
  Video,
  Monitor,
  AlertTriangle,
  HelpCircle,
  BarChart3
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
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

const HeroButton = ({ onClick, variant = "primary" }: { onClick: () => void; variant?: "primary" | "secondary" }) => {
  if (variant === "secondary") {
    return (
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-bold text-white backdrop-blur-3xl transition-colors gap-2 group-hover:bg-slate-900">
          Start Free Assessment
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(6 182 212 / 0.4), 0 8px 10px -6px rgb(6 182 212 / 0.4)" }}
      whileTap={{ scale: 0.95 }}
      className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 group shadow-xl shadow-cyan-500/20"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#a855f7_50%,#06b6d4_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-8 py-1 text-base font-bold text-white backdrop-blur-3xl transition-all gap-3 group-hover:bg-slate-900/80">
        <span className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">Get Instant Medical Guidance</span>
        <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
      </span>
    </motion.button>
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

const CTAButton = ({
  onClick,
  children,
  variant = "primary",
  size = "medium",
  className = ""
}: {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "small" | "medium" | "large";
  className?: string;
}) => {
  const baseClasses = "font-bold rounded-full transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 relative overflow-hidden";

  const variantClasses = {
    primary: "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg hover:shadow-cyan-500/50 focus:ring-cyan-500 shadow-lg shadow-cyan-500/30",
    secondary: "bg-slate-800 text-white hover:bg-slate-700 focus:ring-slate-500 border border-slate-700 hover:shadow-lg hover:shadow-slate-500/20",
    ghost: "text-cyan-400 hover:text-cyan-300 focus:ring-cyan-500 hover:bg-cyan-500/10"
  };

  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3",
    large: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} cta-button touch-interactive group`}
    >
      {/* Animated shine effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          transform: 'translateX(-100%)',
        }} />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};

// --- 3D Hero Component ---

const Hero3D = ({ onClick }: { onClick: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  // Check if device supports hover (not touch)
  const [isHoverSupported, setIsHoverSupported] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const hoverSupported = window.matchMedia("(hover: hover)").matches &&
      window.matchMedia("(pointer: fine)").matches;
    const touchSupported = window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(hover: none)").matches;

    setIsHoverSupported(hoverSupported);
    setIsTouchDevice(touchSupported);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Only apply 3D effect on devices with hover support
    if (!isHoverSupported || !ref.current) return;

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

  const handleTouchMove = (e: React.TouchEvent) => {
    // Provide subtle touch feedback on touch devices
    if (!isTouchDevice || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const touch = e.touches[0];
    const xPct = (touch.clientX - rect.left) / rect.width - 0.5;
    const yPct = (touch.clientY - rect.top) / rect.height - 0.5;

    // Subtle effect for touch devices
    x.set(xPct * 0.3);
    y.set(yPct * 0.3);
  };

  const handleMouseLeave = () => {
    if (!isHoverSupported) return;
    x.set(0);
    y.set(0);
  };

  const handleTouchEnd = () => {
    if (!isTouchDevice) return;
    x.set(0);
    y.set(0);
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-20 overflow-hidden perspective-1000"
      onMouseMove={isHoverSupported ? handleMouseMove : undefined}
      onMouseLeave={isHoverSupported ? handleMouseLeave : undefined}
      onTouchMove={isTouchDevice ? handleTouchMove : undefined}
      onTouchEnd={isTouchDevice ? handleTouchEnd : undefined}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950 pointer-events-none" />

      {/* Floating Elements for Depth - Hidden on mobile */}
      {isHoverSupported && (
        <>
          <motion.div
            className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-cyan-500/20 blur-xl hidden md:block"
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-20 w-24 h-24 rounded-full bg-purple-500/20 blur-xl hidden md:block"
            animate={{
              y: [0, 40, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </>
      )}

      {/* Content Layer */}
      <div className="relative z-20 text-center space-y-8 max-w-4xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-300 mb-4 backdrop-blur-sm"
        >
          <motion.span
            className="relative flex h-2 w-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </motion.span>
          <span className="font-medium">MedSentry v2.0</span> • Trusted by 500+ Healthcare Providers
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[14rem] font-extrabold tracking-tight text-white leading-[1.1] mb-6 readability-high"
        >
          <span className="block mb-2">Your Personal AI Medical</span>
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 animate-gradient-x text-gradient"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Companion
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 readability-high px-4"
        >
          Experience the future of healthcare with our cutting-edge AI medical assistant.
          Get instant, accurate health guidance backed by clinical expertise and advanced neural networks.
          <span className="block mt-4 font-semibold text-cyan-300">Trusted by 500+ healthcare providers worldwide.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <HeroButton onClick={onClick} />
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-12 text-slate-400"
        >
          <motion.div
            className="flex items-center gap-2"
            whileHover={isHoverSupported ? { scale: 1.05 } : {}}
          >
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span>4.9/5 from 50K+ Medical Professionals</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2"
            whileHover={isHoverSupported ? { scale: 1.05 } : {}}
          >
            <Shield className="w-5 h-5 text-cyan-400" />
            <span>HIPAA & GDPR Compliant</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2"
            whileHover={isHoverSupported ? { scale: 1.05 } : {}}
          >
            <Clock className="w-5 h-5 text-purple-400" />
            <span>Available 24/7/365</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2"
            whileHover={isHoverSupported ? { scale: 1.05 } : {}}
          >
            <Award className="w-5 h-5 text-amber-400" />
            <span>99.9% Accuracy Rate</span>
          </motion.div>
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
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl rounded-t-3xl border border-white/10 shadow-2xl overflow-hidden"
          style={{ transform: "translateZ(50px)" }}
        >
          {/* Mock UI Header */}
          <div className="h-12 border-b border-white/10 flex items-center px-6 gap-4">
            <div className="flex gap-2">
              <motion.div
                className="w-3 h-3 rounded-full bg-red-500/50"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="w-3 h-3 rounded-full bg-yellow-500/50"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="w-3 h-3 rounded-full bg-green-500/50"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </div>
            <div className="h-6 w-64 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full" />
            <div className="ml-auto flex gap-2">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <Zap className="w-3 h-3 text-cyan-400" />
              </div>
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <Shield className="w-3 h-3 text-purple-400" />
              </div>
            </div>
          </div>
          {/* Mock UI Body */}
          <div className="p-8 grid grid-cols-12 gap-8 h-full">
            <div className="col-span-3 space-y-4 border-r border-white/5 pr-8">
              {[
                { icon: Stethoscope, title: "Symptom Checker" },
                { icon: FileText, title: "Report Analysis" },
                { icon: HeartPulse, title: "Health Tracker" },
                { icon: Users, title: "Family Care" }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    className="p-3 bg-white/5 rounded-xl hover:bg-cyan-500/10 transition-all cursor-pointer group"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.1)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 mb-2" />
                    <p className="text-xs text-slate-300 group-hover:text-white">{item.title}</p>
                  </motion.div>
                );
              })}
            </div>
            <div className="col-span-9 space-y-6">
              <div className="flex justify-end">
                <motion.div
                  className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-6 py-3 rounded-2xl rounded-tr-sm max-w-[80%] shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 text-cyan-200 text-xs mb-1">
                    <span>You</span>
                    <span>•</span>
                    <span>Just now</span>
                  </div>
                  I've had a persistent headache for 3 days and I'm feeling nauseous.
                </motion.div>
              </div>
              <div className="flex justify-start">
                <motion.div
                  className="bg-slate-800/80 text-slate-200 px-6 py-3 rounded-2xl rounded-tl-sm max-w-[80%] border border-white/5 shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex items-center gap-2 text-cyan-400 font-bold mb-2">
                    <Activity className="w-4 h-4" />
                    <span>Analysis Complete</span>
                    <span className="ml-auto text-xs text-slate-400">1 min ago</span>
                  </div>
                  <p className="mb-3">Based on your symptoms, this could indicate a migraine or tension headache. Since you're experiencing nausea, I recommend:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Rest in a dark, quiet room</li>
                    <li>Stay hydrated</li>
                    <li>Consider over-the-counter pain relief</li>
                  </ul>
                  <div className="mt-3 p-3 bg-cyan-900/30 rounded-lg border border-cyan-500/30">
                    <div className="flex items-center gap-2 text-yellow-400 font-bold mb-1">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Important Notice</span>
                    </div>
                    <p className="text-sm">Seek immediate medical attention if you experience vision changes or severe neck stiffness.</p>
                  </div>
                </motion.div>
              </div>
              <div className="flex justify-end">
                <motion.div
                  className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-2xl rounded-tr-sm max-w-[80%] shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <div className="flex items-center gap-2 text-purple-200 text-xs mb-1">
                    <span>Follow-up</span>
                    <span>•</span>
                    <span>Suggestion</span>
                  </div>
                  Would you like me to explain any of these recommendations in more detail?
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          style={{ transform: "translateZ(100px)" }}
          className="absolute -right-10 top-20 p-4 bg-slate-800/90 backdrop-blur rounded-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.2, rotate: 10 }}
        >
          <HeartPulse className="w-8 h-8 text-cyan-400" />
        </motion.div>

        <motion.div
          style={{ transform: "translateZ(80px)" }}
          className="absolute -left-10 bottom-40 p-4 bg-slate-800/90 backdrop-blur rounded-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20"
          animate={{
            y: [0, 10, 0],
            rotate: [0, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          whileHover={{ scale: 1.2, rotate: -10 }}
        >
          <BrainCircuit className="w-8 h-8 text-purple-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// --- FAQ Component ---
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqItems = [
    {
      question: "Is MedSentry AI a replacement for doctors?",
      answer: "No. MedSentry AI provides preliminary guidance and education about your health. Always consult with qualified healthcare professionals for diagnosis and treatment decisions.",
      category: "General"
    },
    {
      question: "How is my health data protected?",
      answer: "We use military-grade encryption (AES-256) and HIPAA-compliant infrastructure. Your data is never stored without consent and is never shared with third parties.",
      category: "Security"
    },
    {
      question: "Can I access MedSentry at any time?",
      answer: "Yes! MedSentry AI is available 24/7/365. Our servers have 99.9% uptime guarantee with automatic failover systems.",
      category: "Availability"
    },
    {
      question: "How accurate is the symptom analysis?",
      answer: "Our AI has been trained on millions of clinical cases and achieves 99.2% accuracy in preliminary triage assessment. However, always seek professional medical advice for confirmation.",
      category: "Accuracy"
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! Sign up for our free tier to get 5 free assessments per month. No credit card required.",
      category: "Pricing"
    }
  ];

  return (
    <section className="py-24 relative z-10 section-padding">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-300 mb-4 backdrop-blur-sm">
            <HelpCircle className="w-4 h-4" />
            <span className="font-medium">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 readability-high">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-gradient">Questions</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed readability-high">
            Everything you need to know about MedSentry AI
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all text-left group touch-interactive"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-1 text-xs font-semibold text-cyan-300 bg-cyan-900/30 rounded-full">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {item.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    className="text-cyan-400 flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-slate-300 pl-8"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Pricing Component ---
const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying MedSentry",
      features: ["5 assessments/month", "Symptom checking", "Basic report review", "Standard security"],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "/month",
      description: "For individuals and health seekers",
      features: ["Unlimited assessments", "Full symptom analysis", "Medical report upload", "Chat history", "Priority support", "Advanced analytics"],
      cta: "Start 7-Day Trial",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For healthcare organizations",
      features: ["Custom API access", "Team collaboration", "Advanced analytics", "Compliance training", "Dedicated support", "Custom integrations"],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <section className="py-24 relative z-10 bg-slate-900/30 section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 readability-high">
            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-gradient">Pricing</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed readability-high">
            Choose the plan that works best for you. Always transparent, no hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-8 transition-all ${plan.highlighted
                ? "bg-gradient-to-br from-cyan-600/20 to-purple-600/20 border-2 border-cyan-500/50 relative transform md:scale-105"
                : "bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30"
                }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.period && <span className="text-slate-400">{plan.period}</span>}
              </div>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all mb-8 ${plan.highlighted
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg hover:shadow-cyan-500/50"
                  : "bg-slate-800 text-white hover:bg-slate-700"
                  }`}
              >
                {plan.cta}
              </button>
              <div className="space-y-3">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Animated Counter Component ---
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

// --- Trust Badges Component ---
const TrustBadges = () => {
  const trustMetrics = [
    {
      icon: Shield,
      label: "HIPAA Compliant",
      color: "text-cyan-400",
      description: "Military-grade encryption for all patient data",
      stat: "100%",
      statLabel: "Compliant"
    },
    {
      icon: Award,
      label: "ISO 27001 Certified",
      color: "text-purple-400",
      description: "International security management standard",
      stat: "ISO",
      statLabel: "27001"
    },
    {
      icon: Globe,
      label: "24/7 Support",
      color: "text-cyan-400",
      description: "Global support team always available",
      stat: "24",
      statLabel: "Hours/Day"
    },
    {
      icon: Zap,
      label: "99.9% Uptime",
      color: "text-purple-400",
      description: "Enterprise-grade infrastructure reliability",
      stat: "99.9",
      statLabel: "% Uptime"
    },
    {
      icon: Users,
      label: "Expert Verified",
      color: "text-cyan-400",
      description: "Reviewed by board-certified physicians",
      stat: "150+",
      statLabel: "Experts"
    },
    {
      icon: Lock,
      label: "GDPR Compliant",
      color: "text-purple-400",
      description: "European data protection standards met",
      stat: "100%",
      statLabel: "Compliant"
    },
    {
      icon: Calendar,
      label: "24/7 Availability",
      color: "text-cyan-400",
      description: "Access to medical guidance anytime, anywhere",
      stat: "365",
      statLabel: "Days/Year"
    },
    {
      icon: MapPin,
      label: "Global Access",
      color: "text-purple-400",
      description: "Available in 150+ countries worldwide",
      stat: "150+",
      statLabel: "Countries"
    }
  ];

  return (
    <section className="py-32 relative z-10 bg-gradient-to-b from-slate-950/50 via-slate-900/30 to-slate-950/50 overflow-hidden section-padding">
      {/* Background gradient elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-cyan-400 font-semibold text-lg mb-4">TRUSTED GLOBALLY</p>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 readability-high">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-gradient">Healthcare Professionals</span> Worldwide
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed readability-high">
              MedSentry is certified and trusted by healthcare organizations globally. Our commitment to security, compliance, and excellence ensures your data is always protected.
            </p>
          </motion.div>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {trustMetrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Card */}
                <div className="relative h-full p-6 rounded-2xl bg-slate-900/60 border border-slate-800/50 group-hover:border-cyan-500/50 backdrop-blur-sm transition-all duration-300 flex flex-col">
                  {/* Icon and Stats */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`w-6 h-6 ${metric.color}`} />
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                        {metric.stat}
                      </div>
                      <p className="text-xs text-slate-400 mt-1">{metric.statLabel}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="font-bold text-white mb-2">{metric.label}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{metric.description}</p>
                  </div>

                  {/* Check mark indicator */}
                  <div className="mt-4 pt-3 border-t border-slate-800/50">
                    <div className="flex items-center gap-2 text-cyan-400 text-xs">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verified & Certified</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-slate-800/50"
        >
          {[
            { value: "500+", label: "Healthcare Partners" },
            { value: "2M+", label: "User Assessments" },
            { value: "150+", label: "Countries Served" },
            { value: "99.99%", label: "Data Accuracy" }
          ].map((stat, i) => (
            <div key={i} className="text-center py-6">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                {stat.value}
              </div>
              <p className="text-slate-400 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Certification Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-12 border-t border-slate-800/50"
        >
          <p className="text-center text-slate-400 mb-8">Recognized by Leading Healthcare Institutions</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-70">
            {[
              "Mayo Clinic",
              "Johns Hopkins",
              "Cleveland Clinic",
              "Stanford Health",
              "Harvard Medical",
              "UCLA Health"
            ].map((institution, i) => (
              <div key={i} className="text-slate-300 font-medium text-lg">
                {institution}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- New Features Section ---
const FeaturesSection = () => {
  const features = [
    {
      icon: BrainCircuit,
      title: "AI-Powered Diagnosis",
      description: "Advanced neural networks trained on millions of medical cases for accurate health assessments.",
      badge: "AI-Powered"
    },
    {
      icon: FileText,
      title: "Report Analysis",
      description: "Upload medical reports and get instant, easy-to-understand analysis with actionable insights.",
      badge: "Document AI"
    },
    {
      icon: HeartPulse,
      title: "Health Tracking",
      description: "Monitor your health metrics over time with personalized trends and recommendations.",
      badge: "Wellness"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Military-grade encryption and strict privacy controls to protect your sensitive health data.",
      badge: "Secure"
    },
    {
      icon: Users,
      title: "Family Accounts",
      description: "Manage health information for your entire family from a single secure account.",
      badge: "Family"
    },
    {
      icon: PhoneCall,
      title: "Emergency Guidance",
      description: "Clear, immediate guidance on when to seek emergency care based on your symptoms.",
      badge: "24/7"
    }
  ];

  return (
    <section className="py-24 relative z-10 section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-300 mb-4 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span className="font-medium">ADVANCED FEATURES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 readability-high">
            Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-gradient">Features</span> for Better Health
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed readability-high">
            Everything you need to make informed health decisions, all in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/30 transition-all group h-full relative overflow-hidden shadow-lg hover:shadow-cyan-500/5"
              >
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center group-hover:scale-105 transition-transform border border-white/5 group-hover:border-cyan-500/20">
                    <Icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <span className="px-3 py-1 text-xs font-bold tracking-wider text-cyan-300 bg-cyan-950/30 border border-cyan-500/10 rounded-full uppercase">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-cyan-100 transition-colors">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8 relative z-10 text-base">{feature.description}</p>
                <CTAButton onClick={() => { }} variant="ghost" size="small" className="pl-0 hover:pl-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </CTAButton>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- Testimonials Section ---
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "MedSentry helped me understand my symptoms when I was worried about going to the ER. The guidance was clear and accurate, saving me an unnecessary trip.",
      author: "Sarah J.",
      role: "Registered Nurse",
      rating: 5,
      avatar: "SJ"
    },
    {
      quote: "As a busy professional, I don't always have time for doctor visits. MedSentry gives me peace of mind and helps me decide when I really need to see a specialist.",
      author: "Michael T.",
      role: "Software Engineer",
      rating: 5,
      avatar: "MT"
    },
    {
      quote: "The report analysis feature is incredible. I uploaded my blood work and got explanations that my doctor didn't have time to provide during my appointment.",
      author: "Dr. Jennifer K.",
      role: "Family Physician",
      rating: 5,
      avatar: "JK"
    }
  ];

  return (
    <section className="py-24 relative z-10 bg-slate-900/30 section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-300 mb-4 backdrop-blur-sm">
            <Users className="w-4 h-4" />
            <span className="font-medium">USER TESTIMONIALS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 readability-high">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-gradient">Thousands</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed readability-high">
            Hear from our community of users and healthcare professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-cyan-500/30 transition-all touch-interactive"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <CTAButton onClick={() => { }} variant="secondary" size="large">
            See all testimonials
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

// --- Page Component ---

export default function LandingPage() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const scrollToChat = () => {
    router.push("/chat");
  };

  return (
    <AuroraBackground>
      <Navbar />

      <div className="flex flex-col w-full overflow-x-hidden">
        <Hero3D onClick={scrollToChat} />



        {/* --- Features Section --- */}
        <FeaturesSection />

        {/* --- Quick Features --- */}
        <section className="py-24 relative z-10 bg-slate-900/30 section-padding">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-300 mb-4 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-medium">COMPREHENSIVE HEALTH SOLUTIONS</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 readability-high">
                  Everything you need for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-gradient">better health decisions</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8 readability-high">
                  From symptom checking to lab result analysis, MedSentry provides comprehensive medical guidance when you need it most.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    { icon: FileText, text: "Upload and analyze medical reports" },
                    { icon: Activity, text: "Real-time symptom assessment" },
                    { icon: HeartPulse, text: "Chronic condition management" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h3 className="font-semibold text-white">{item.text}</h3>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton onClick={scrollToChat} variant="primary" size="large">
                    Start Free Assessment
                  </CTAButton>
                </div>
              </motion.div>

              <motion.div
                className="relative aspect-square rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />
                <div className="relative h-full w-full flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                  </div>
                  <div className="relative z-10 text-center">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Sparkles className="w-20 h-20 text-cyan-400 mx-auto mb-4" />
                    </motion.div>
                    <p className="text-2xl font-bold text-white">AI-Powered</p>
                    <p className="text-slate-400">Medical Assistant</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* --- Capabilities Section --- */}
        <section className="py-24 relative z-10 bg-slate-900/30 section-padding">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-300 mb-4 backdrop-blur-sm">
                <Cpu className="w-4 h-4" />
                <span className="font-medium">ADVANCED CAPABILITIES</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 readability-high">
                Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-gradient">AI Capabilities</span> for Better Health
              </h2>
              <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed readability-high">
                Our advanced AI technology delivers comprehensive medical guidance with unmatched accuracy and reliability.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: BrainCircuit,
                  title: "Neural Processing",
                  description: "Advanced neural networks trained on millions of medical cases for accurate health assessments.",
                  stat: "99.2%",
                  statLabel: "Accuracy"
                },
                {
                  icon: FileText,
                  title: "Document AI",
                  description: "Sophisticated natural language processing for instant medical document analysis.",
                  stat: "< 3s",
                  statLabel: "Processing"
                },
                {
                  icon: HeartPulse,
                  title: "Pattern Recognition",
                  description: "Advanced algorithms detect subtle health patterns invisible to the human eye.",
                  stat: "24/7",
                  statLabel: "Monitoring"
                },
                {
                  icon: Shield,
                  title: "Privacy Protection",
                  description: "Military-grade encryption and strict privacy controls to protect your sensitive health data.",
                  stat: "100%",
                  statLabel: "Secure"
                }
              ].map((capability, i) => {
                const Icon = capability.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-cyan-500/30 transition-all group touch-interactive"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                          {capability.stat}
                        </div>
                        <p className="text-xs text-slate-400">{capability.statLabel}</p>
                      </div>
                    </div>
                    <h3 className="font-bold text-white mb-2">{capability.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{capability.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- Testimonials Section --- */}
        <TestimonialsSection />

        {/* --- Trust Badges Section --- */}
        <TrustBadges />

        {/* --- How It Works Section --- */}
        <section className="py-24 relative z-10 section-padding">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-300 mb-4 backdrop-blur-sm">
                <Cpu className="w-4 h-4" />
                <span className="font-medium">HOW IT WORKS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 readability-high">
                How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-gradient">Works</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed readability-high">
                Get medical guidance in 3 simple steps
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  icon: Stethoscope,
                  title: "Describe Your Symptoms",
                  desc: "Tell us about your symptoms in your own words. Be as detailed or brief as you like.",
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  step: "02",
                  icon: Cpu,
                  title: "AI Analysis",
                  desc: "Our advanced AI analyzes your symptoms against millions of medical cases and clinical protocols.",
                  color: "from-purple-500 to-indigo-500"
                },
                {
                  step: "03",
                  icon: CheckCircle,
                  title: "Get Guidance",
                  desc: "Receive instant, evidence-based recommendations with clear next steps and emergency alerts.",
                  color: "from-cyan-500 to-purple-500"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all group touch-interactive"
                >
                  <div className={`absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {item.step}
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mt-4">
                    <item.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm mb-6">{item.desc}</p>
                  <CTAButton onClick={scrollToChat} variant="ghost" size="small">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </CTAButton>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Pricing Section --- */}
        <PricingSection />



        {/* --- FAQ Section --- */}
        <FAQSection />



        {/* --- Final CTA --- */}
        <section className="py-32 relative overflow-hidden flex flex-col items-center justify-center text-center section-padding">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-purple-900/20 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-20 px-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-300 mb-4 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                <span className="font-medium">READY TO GET STARTED?</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                Your Health Decisions <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Made with Confidence
                </span>
              </h2>

              <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Join over 10,000 healthcare professionals and patients who trust MedSentry for instant, accurate, and safe medical guidance. Experience the future of healthcare today.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <CTAButton onClick={scrollToChat} variant="primary" size="large">
                  Get Instant Health Guidance
                </CTAButton>
                <CTAButton onClick={() => { }} variant="secondary" size="large">
                  Book a Consultation
                </CTAButton>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-slate-400">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-400" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span>10K+ Users</span>
                </div>
              </div>

              <p className="text-slate-500 text-sm mt-8">
                No credit card required • Free 7-day trial on Pro plan
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </AuroraBackground>
  );
}