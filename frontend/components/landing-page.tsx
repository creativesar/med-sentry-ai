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
  Headphones
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
      title: "Multilingual Support",
      description: "Communicate in your preferred language with our AI translation capabilities supporting 20+ languages."
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
    "Evidence-based medical guidance using latest AI technology",
    "Secure and private - your health data is always protected",
    "Developed by healthcare professionals for patient safety",
    "Continuously updated with latest medical research and protocols"
  ];

  const chatbotCapabilities = [
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Natural Conversation",
      description: "Chat naturally about your symptoms and health concerns with intelligent follow-up questions."
    },
    {
      icon: <Activity className="w-12 h-12" />,
      title: "Symptom Analysis",
      description: "Advanced AI analyzes symptoms and provides evidence-based triage recommendations instantly."
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Document Reading",
      description: "Upload medical reports, prescriptions, and lab results for instant AI-powered analysis."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Health Insights",
      description: "Get personalized health insights and track your wellness journey over time."
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Instant Response",
      description: "Get medical guidance in seconds, available 24/7 without appointment scheduling."
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "Maximum Privacy",
      description: "Military-grade encryption ensures your health data stays completely private and secure."
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
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 dark:text-slate-300">{point}</span>
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
            {/* Accuracy Counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {counters.accuracy.toFixed(1)}%
              </div>
              <div className="text-blue-100 text-lg font-semibold">Accuracy Rate</div>
              <p className="text-blue-50 text-sm mt-2">Verified clinical accuracy</p>
            </motion.div>

            {/* Response Time Counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {counters.responseTime.toFixed(2)}s
              </div>
              <div className="text-blue-100 text-lg font-semibold">Response Time</div>
              <p className="text-blue-50 text-sm mt-2">Average response time</p>
            </motion.div>

            {/* Uptime Counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {counters.uptime.toFixed(1)}%
              </div>
              <div className="text-blue-100 text-lg font-semibold">Uptime</div>
              <p className="text-blue-50 text-sm mt-2">24/7 Availability</p>
            </motion.div>

            {/* Users Counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {(counters.patients / 1000).toFixed(0)}K+
              </div>
              <div className="text-blue-100 text-lg font-semibold">Assessments</div>
              <p className="text-blue-50 text-sm mt-2">Health assessments completed</p>
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