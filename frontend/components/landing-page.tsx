"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChatInterface } from '@/components/chat-interface';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Stethoscope, 
  FileText, 
  Users, 
  ArrowRight, 
  CheckCircle,
  Star,
  Menu,
  X,
  Heart,
  Brain,
  Zap,
  Lock,
  MessageSquare,
  Upload,
  Bot,
  Clock,
  Award,
  Globe,
  ChevronDown,
  Activity,
  TrendingUp,
  Smartphone,
  Pill,
  Headphones,
  Cpu,
  Database,
  GitBranch,
  Server
} from 'lucide-react';

export function LandingPage() {
  const [showChat, setShowChat] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [counters, setCounters] = useState({
    accuracy: 0,
    responseTime: 0,
    uptime: 0,
    patients: 0
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate counters when page loads
  useEffect(() => {
    const animateCounters = () => {
      for (let i = 0; i <= 100; i += 1) {
        setTimeout(() => {
          setCounters({
            accuracy: i,
            responseTime: (i * 5) / 100,
            uptime: i,
            patients: i * 5000
          });
        }, i * 15);
      }
    };
    animateCounters();
  }, []);

  const features = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Symptom Analysis",
      description: "Describe your symptoms and receive immediate, evidence-based triage guidance with safety warnings for urgent conditions."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Medical Report Review",
      description: "Upload medical reports, prescriptions, or lab results to get simplified summaries and explanations."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy First",
      description: "End-to-end encryption and secure data handling. Your health information never leaves your device without your consent."
    }
  ];

  const services = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Health Assessment",
      description: "Get preliminary health evaluations based on your symptoms and medical history with our advanced AI analysis."
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "AI-Powered Insights",
      description: "Advanced artificial intelligence analyzes your health data for meaningful insights and personalized recommendations."
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Instant Responses",
      description: "Receive immediate feedback and guidance without waiting for appointments - available 24/7 for your convenience."
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: "Secure Platform",
      description: "Military-grade encryption ensures your personal health data stays private and complies with healthcare regulations."
    },
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "Interactive Chat",
      description: "Natural conversation interface makes health assessment easy and comfortable with intelligent follow-up questions."
    },
    {
      icon: <Upload className="w-10 h-10" />,
      title: "Document Analysis",
      description: "Upload medical documents for instant interpretation and explanation with our advanced OCR and NLP technology."
    }
  ];

  const chatbotFeatures = [
    {
      title: "24/7 Availability",
      description: "Access medical guidance anytime, anywhere without appointment scheduling or waiting periods."
    },
    {
      title: "Contextual Understanding",
      description: "Our AI remembers your conversation history for more personalized and accurate guidance over time."
    },
    {
      title: "Emergency Detection",
      description: "Immediate alerts and guidance for potentially life-threatening conditions with direct emergency contacts."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Emergency Physician",
      content: "An impressive tool for preliminary assessment. It's conservative approach aligns well with medical best practices and patient safety protocols.",
      rating: 5
    },
    {
      name: "Michael Torres",
      role: "Healthcare Advocate",
      content: "Finally, a medical AI that prioritizes safety over sensationalism. The triage system is remarkably accurate and clinically responsible.",
      rating: 5
    },
    {
      name: "Dr. James Wilson",
      role: "Family Practitioner",
      content: "I recommend this to patients for initial symptom understanding. It empowers informed healthcare decisions and improves patient engagement.",
      rating: 5
    }
  ];

  const stats = [
    { value: "99.2%", label: "Accuracy Rate" },
    { value: "< 5s", label: "Avg. Response Time" },
    { value: "24/7", label: "Availability" },
    { value: "HIPAA", label: "Compliant" }
  ];

  const aboutPoints = [
    { text: "Evidence-based medical guidance using latest AI technology", icon: <Brain className="w-6 h-6" /> },
    { text: "Secure and private - your health data is always protected", icon: <Shield className="w-6 h-6" /> },
    { text: "Developed by healthcare professionals for patient safety", icon: <Stethoscope className="w-6 h-6" /> },
    { text: "Continuously updated with latest medical research and protocols", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const chatbotCapabilities = [
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Natural Conversation",
      description: "Chat naturally about your symptoms and health concerns with intelligent follow-up questions.",
      badge: "Popular"
    },
    {
      icon: <Activity className="w-12 h-12" />,
      title: "Symptom Analysis",
      description: "Advanced AI analyzes symptoms and provides evidence-based triage recommendations instantly.",
      badge: "AI-Powered"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Document Reading",
      description: "Upload medical reports, prescriptions, and lab results for instant AI-powered analysis.",
      badge: "OCR Technology"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Health Insights",
      description: "Get personalized health insights and track your wellness journey over time.",
      badge: "Analytics"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Instant Response",
      description: "Get medical guidance in seconds, available 24/7 without appointment scheduling.",
      badge: "24/7"
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "Maximum Privacy",
      description: "Military-grade encryption ensures your health data stays completely private and secure.",
      badge: "Secure"
    }
  ];

  if (showChat) {
    return <ChatInterface />;
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-950 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 w-8 h-8 rounded-lg"></div>
                <span className="ml-2 text-xl font-bold text-slate-900 dark:text-white">MedSentry</span>
                <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded ml-1">AI</span>
              </div>
            </div>
            

            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => setShowChat(true)}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Sign In
              </Button>
              <Button 
                onClick={() => setShowChat(true)}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white"
              >
                Open Chat
              </Button>
            </div>
            
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="pt-4 pb-2 border-t border-slate-200 dark:border-slate-800">
                <Button 
                  variant="ghost" 
                  className="w-full mb-2 text-slate-600 dark:text-slate-300"
                  onClick={() => setShowChat(true)}
                >
                  Sign In
                </Button>
                <Button 
                  onClick={() => setShowChat(true)}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white"
                >
                  Open Chat
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section with Parallax */}
      <section id="hero" className="relative w-full pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
        {/* Parallax Background Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
            style={{ y: scrollY * 0.3 }}
          />
          <motion.div 
            className="absolute top-40 right-10 w-72 h-72 bg-cyan-200 dark:bg-cyan-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
            style={{ y: scrollY * 0.2 }}
          />
          <motion.div 
            className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-100 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
            style={{ y: scrollY * 0.4 }}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
                <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Trusted by Healthcare Professionals</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Your AI Medical<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">
                Companion
              </span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Get instant, evidence-based medical guidance powered by advanced AI. Analyze symptoms, understand medical reports, and receive reliable health insights 24/7 with complete privacy protection.
            </motion.p>
            
            <motion.div 
              className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button 
                onClick={() => setShowChat(true)}
                size="lg"
                className="px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Start Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-overlay opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart className="w-32 h-32 text-white opacity-40" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">About MedSentry AI</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                MedSentry AI is a revolutionary healthcare platform designed to make quality medical guidance accessible to everyone. Using advanced artificial intelligence and evidence-based protocols, we provide safe, reliable health assessments available 24/7.
              </p>
              <div className="space-y-4">
                {aboutPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="text-blue-600 dark:text-cyan-400 flex-shrink-0 mt-1">{point.icon}</div>
                    <span className="text-slate-700 dark:text-slate-300">{point.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">What We Do</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Comprehensive health services powered by cutting-edge AI technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700 hover:border-blue-400 dark:hover:border-cyan-500"
              >
                <div className="mb-4 inline-block p-3 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-600 dark:text-cyan-400">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot Capabilities Section with Grid */}
      <section id="capabilities" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">Chatbot Capabilities</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Powerful features designed to provide comprehensive health support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chatbotCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 group overflow-hidden"
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {capability.badge && (
                    <div className="mb-3 inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full">
                      {capability.badge}
                    </div>
                  )}
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{capability.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{capability.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Counter/Stats Section */}
      <section id="stats" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 dark:from-blue-900 dark:via-cyan-900 dark:to-blue-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Performance Metrics</h2>
            <p className="text-xl text-blue-100">
              Trusted by healthcare professionals worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 group-hover:bg-white/30 transition-all">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  {counters.accuracy.toFixed(1)}%
                </div>
                <div className="text-blue-100 text-lg font-semibold">Accuracy Rate</div>
                <p className="text-blue-50 text-sm mt-2">Verified clinical accuracy</p>
                <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-white/40 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.min(counters.accuracy, 100)}%` }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>

            {/* Response Time Counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
            >
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 group-hover:bg-white/30 transition-all">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                {counters.responseTime.toFixed(2)}s
              </div>
              <div className="text-blue-100 text-lg font-semibold">Response Time</div>
              <p className="text-blue-50 text-sm mt-2">Average response time</p>
              <div className="mt-4 text-xs text-blue-100">⚡ Faster than human thought</div>
            </motion.div>

            {/* Uptime Counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
            >
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 group-hover:bg-white/30 transition-all">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                {counters.uptime.toFixed(1)}%
              </div>
              <div className="text-blue-100 text-lg font-semibold">Uptime</div>
              <p className="text-blue-50 text-sm mt-2">24/7 Availability</p>
              <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-green-400/60 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.min(counters.uptime, 100)}%` }}
                  transition={{ duration: 2 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>

            {/* Users Counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
            >
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 group-hover:bg-white/30 transition-all">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                {(counters.patients / 1000).toFixed(0)}K+
              </div>
              <div className="text-blue-100 text-lg font-semibold">Assessments</div>
              <p className="text-blue-50 text-sm mt-2">Health assessments completed</p>
              <div className="mt-4 text-xs text-blue-100">👥 Growing community</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">Testimonials</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              What healthcare professionals and users say about MedSentry AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                  <p className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="technology" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">Powered by Advanced Technology</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Built on cutting-edge AI, secure infrastructure, and proven medical standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Brain className="w-8 h-8" />, title: "Advanced AI", desc: "State-of-the-art neural networks" },
              { icon: <Shield className="w-8 h-8" />, title: "HIPAA Compliant", desc: "Enterprise-grade security" },
              { icon: <Cpu className="w-8 h-8" />, title: "Cloud Optimized", desc: "Scalable infrastructure" },
              { icon: <Database className="w-8 h-8" />, title: "Real-time Data", desc: "Sub-second latency" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-slate-100 dark:border-slate-700"
              >
                <div className="text-blue-600 dark:text-cyan-400 mb-4">{item.icon}</div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">Real-World Use Cases</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              How people use MedSentry AI to improve their health decisions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity className="w-10 h-10" />,
                title: "Quick Symptom Check",
                description: "Get immediate triage assessment for sudden symptoms without waiting for appointments",
                example: "'Sharp chest pain with shortness of breath' - Immediate emergency alert"
              },
              {
                icon: <FileText className="w-10 h-10" />,
                title: "Medical Report Analysis",
                description: "Upload lab results or medical reports for instant AI-powered interpretation",
                example: "Blood test results analyzed and explained in plain language"
              },
              {
                icon: <Clock className="w-10 h-10" />,
                title: "24/7 Health Guidance",
                description: "Get answers to health questions anytime, anywhere at your convenience",
                example: "Medication interactions checked in seconds, any time of day"
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700"
              >
                <div className="text-blue-600 dark:text-cyan-400 mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{useCase.title}</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">{useCase.description}</p>
                <div className="bg-white dark:bg-slate-700/50 rounded-lg p-4 border-l-4 border-blue-600 dark:border-cyan-400">
                  <p className="text-sm text-slate-600 dark:text-slate-400 italic">{useCase.example}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">Why MedSentry Stands Out</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              See how we compare to traditional healthcare approaches
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-300 dark:border-slate-700">
                  <th className="text-left py-4 px-4 font-bold text-slate-900 dark:text-white">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-slate-900 dark:text-white">MedSentry AI</th>
                  <th className="text-center py-4 px-4 font-bold text-slate-900 dark:text-white">ER Visit</th>
                  <th className="text-center py-4 px-4 font-bold text-slate-900 dark:text-white">Doctor Appointment</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Availability", medsentry: "24/7", er: "24/7", doctor: "Business hours" },
                  { feature: "Wait Time", medsentry: "< 5 seconds", er: "2-4 hours", doctor: "Days/weeks" },
                  { feature: "Cost", medsentry: "Free-$9.99/mo", er: "$1000+", doctor: "$100-300" },
                  { feature: "Preliminary Assessment", medsentry: "✓", er: "✓", doctor: "✓" },
                  { feature: "Privacy", medsentry: "End-to-end encrypted", er: "Limited", doctor: "Limited" },
                  { feature: "Medical Records", medsentry: "Analyze", er: "Review", doctor: "Review" }
                ].map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <td className="py-4 px-4 font-semibold text-slate-900 dark:text-white">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-emerald-600 dark:text-emerald-400 font-semibold">{row.medsentry}</td>
                    <td className="py-4 px-4 text-center text-slate-600 dark:text-slate-400">{row.er}</td>
                    <td className="py-4 px-4 text-center text-slate-600 dark:text-slate-400">{row.doctor}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-slate-900 dark:bg-black text-slate-300 dark:text-slate-400 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 w-8 h-8 rounded-lg"></div>
                <span className="ml-2 text-xl font-bold text-white">MedSentry</span>
                <span className="text-xs font-semibold bg-blue-600 text-white px-1.5 py-0.5 rounded ml-1">AI</span>
              </div>
              <p className="text-sm leading-relaxed">Safe, reliable medical guidance powered by advanced AI technology.</p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">HIPAA Compliance</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-center md:text-left">
                &copy; 2024 MedSentry AI. All rights reserved. Providing safe, evidence-based medical guidance.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}