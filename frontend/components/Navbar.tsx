"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Chatbot", href: "/chatbot" },
    { name: "Features", href: "/features" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
                            <Stethoscope className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-white">MedSentry AI</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive
                                            ? "text-white"
                                            : "text-slate-400 hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute inset-0 bg-white/10 rounded-lg border border-white/20"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/chat"
                            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                        >
                            Start Chat
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10"
                    >
                        <div className="px-6 py-4 space-y-2">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                                                ? "bg-white/10 text-white border border-white/20"
                                                : "text-slate-400 hover:text-white hover:bg-white/5"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <Link
                                href="/chat"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-3 rounded-lg text-sm font-medium bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-center"
                            >
                                Start Chat
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}