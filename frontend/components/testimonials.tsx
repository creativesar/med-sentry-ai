"use client";

import React from 'react';
import { Star, Quote, User, ArrowRight, MessageSquarePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "General Practitioner",
    content: "MedSentry AI has revolutionized my preliminary triage process. The accuracy of the symptom analysis is impressive, and it helps patients articulate their concerns more clearly before they even step into my office.",
    rating: 5,
    initials: "SC"
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Patient",
    content: "I was anxious about my symptoms, but the AI provided a calm, structured breakdown that helped me understand what to do next. It's like having a knowledgeable friend available 24/7.",
    rating: 5,
    initials: "JW"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Nurse Practitioner",
    content: "The report analysis feature is a game-changer. It breaks down complex lab results into understandable language, empowering patients to take charge of their health literacy.",
    rating: 4,
    initials: "ER"
  },
  {
    id: 4,
    name: "Michael Chang",
    role: "Patient",
    content: "Clean, fast, and reliable. I love that it emphasizes safety and always reminds me to see a doctor for a real diagnosis. It feels responsible and trustworthy.",
    rating: 5,
    initials: "MC"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 px-4 md:px-8 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight"
          >
            Trusted by Professionals & Patients
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg"
          >
            See how MedSentry AI is making healthcare information more accessible and understandable for everyone.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-sky-500 fill-sky-500' : 'text-slate-300 dark:text-slate-700'}`} 
                  />
                ))}
              </div>
              
              <div className="mb-6 flex-grow">
                <Quote className="w-8 h-8 text-sky-100 dark:text-sky-900/30 mb-2" />
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-full bg-sky-50 dark:bg-sky-900/20 flex items-center justify-center text-sky-600 dark:text-sky-400 font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button 
            size="lg" 
            className="bg-sky-600 hover:bg-sky-700 text-white rounded-xl px-8 shadow-sm hover:shadow transition-all"
          >
            <MessageSquarePlus className="w-4 h-4 mr-2" />
            Share Your Story
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl px-8"
          >
            View All Reviews
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
