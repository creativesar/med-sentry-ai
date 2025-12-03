import React from "react";
import Link from "next/link";
import { Stethoscope, Mail, MapPin, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800 mt-20">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                                <Stethoscope className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">MedSentry AI</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Your trusted AI medical assistant, providing instant, accurate health guidance 24/7.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {[
                                { icon: Twitter, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: Github, href: "#" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all"
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { label: "Home", href: "/" },
                                { label: "About Us", href: "/about" },
                                { label: "Services", href: "/services" },
                                { label: "Chatbot", href: "/chatbot" }
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-3">
                            {[
                                { label: "Features", href: "/features" },
                                { label: "Contact", href: "/contact" },
                                { label: "Privacy Policy", href: "#" },
                                { label: "Terms of Service", href: "#" }
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-sm">
                                <Mail className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                <a href="mailto:support@medsentry.ai" className="text-slate-400 hover:text-cyan-400 transition-colors">
                                    support@medsentry.ai
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-sm">
                                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-400">
                                    San Francisco, CA
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-sm">
                            © 2025 MedSentry AI. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        </footer>
    );
}
