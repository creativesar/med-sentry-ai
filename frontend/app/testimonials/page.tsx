"use client";

import React from 'react';
import { Testimonials } from '@/components/testimonials';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <div className="p-4 md:p-8">
                <Link href="/">
                    <Button variant="ghost" className="gap-2 mb-4 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Button>
                </Link>
            </div>
            <Testimonials />
        </main>
    );
}
