"use client";

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface VoiceInputProps {
    onTranscript: (text: string) => void;
}

export function VoiceInput({ onTranscript }: VoiceInputProps) {
    const [isListening, setIsListening] = useState(false);
    const [mounted, setMounted] = useState(false);
    const recognitionRef = useRef<SpeechRecognition | null>(null);
    const isSupported = useMemo(() => {
        if (typeof window === 'undefined') return false;
        return Boolean(window.SpeechRecognition || window.webkitSpeechRecognition);
    }, []);

    // Prevent hydration mismatch by only rendering after mount
    useEffect(() => {
        setMounted(true);
    }, []);

    const stopListening = useCallback(() => {
        const recognition = recognitionRef.current;
        if (recognition && isListening) {
            recognition.stop();
            setIsListening(false);
        }
    }, [isListening]);

    const startListening = useCallback(() => {
        const recognition = recognitionRef.current;
        if (recognition && !isListening) {
            try {
                recognition.start();
                setIsListening(true);
            } catch (e) {
                console.error("Failed to start recognition:", e);
            }
        }
    }, [isListening]);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            return;
        }

        const recognitionInstance = new SpeechRecognition();
        recognitionInstance.continuous = false;
        recognitionInstance.interimResults = false;
        recognitionInstance.lang = 'en-US';

        recognitionInstance.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            onTranscript(transcript);
            stopListening();
        };

        recognitionInstance.onerror = (event) => {
            console.error('Speech recognition error', event.error);
            stopListening();
        };

        recognitionInstance.onend = () => {
            stopListening();
        };

        recognitionRef.current = recognitionInstance;

        return () => {
            recognitionInstance.onresult = null as any;
            recognitionInstance.onerror = null as any;
            recognitionInstance.onend = null as any;
            recognitionInstance.stop();
            recognitionRef.current = null;
        };
    }, [onTranscript, stopListening]);

    const toggleListening = () => {
        if (isListening) {
            stopListening();
        } else {
            startListening();
        }
    };

    if (!mounted || !isSupported) return null;

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleListening}
            className={cn(
                "rounded-full transition-all duration-300",
                isListening
                    ? "bg-red-100 text-red-600 hover:bg-red-200 animate-pulse"
                    : "text-slate-500 hover:text-primary hover:bg-slate-100"
            )}
            title={isListening ? "Stop Listening" : "Start Voice Input"}
        >
            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
        </Button>
    );
}
