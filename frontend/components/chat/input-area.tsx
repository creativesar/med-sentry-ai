import React, { useState } from 'react';
import { Send, Paperclip, X, ShieldCheck, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FileUpload } from '../file-upload';
import { VoiceInput } from '../voice-input';
import { cn } from '@/lib/utils';

interface InputAreaProps {
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    onSendMessage: () => void;
    onFileUpload: (file: File) => void;
    isLoading: boolean;
}

export function InputArea({ input, setInput, onSendMessage, onFileUpload, isLoading }: InputAreaProps) {
    const [showUpload, setShowUpload] = useState(false);

    const handleFileSelect = (file: File) => {
        setShowUpload(false);
        onFileUpload(file);
    };

    return (
        <div className="p-4 md:p-6 bg-slate-100 dark:bg-[#0F172A] border-t border-slate-300 dark:border-slate-800 z-20">
            <div className="max-w-4xl mx-auto">
                {showUpload && (
                    <div className="mb-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg animate-in slide-in-from-bottom-2">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                                <Paperclip className="w-4 h-4 text-primary" />
                                Attach Medical Record
                            </h3>
                            <Button variant="ghost" size="sm" onClick={() => setShowUpload(false)} className="h-6 w-6 p-0 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700">
                                <X className="w-4 h-4" />
                            </Button>
                        </div>
                        <FileUpload onFileSelect={handleFileSelect} />
                    </div>
                )}

                <div className={cn(
                    "flex gap-3 items-end bg-slate-50 dark:bg-slate-900 p-2 rounded-2xl border transition-all duration-200",
                    "border-slate-200 dark:border-slate-700 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 focus-within:shadow-lg focus-within:shadow-primary/5"
                )}>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setShowUpload(!showUpload)}
                        className={cn(
                            "text-slate-400 hover:text-primary hover:bg-white dark:hover:bg-slate-800 rounded-xl h-10 w-10 shrink-0 transition-all",
                            showUpload && "text-primary bg-white dark:bg-slate-800 shadow-sm"
                        )}
                        title="Upload File"
                    >
                        <Paperclip className="w-5 h-5" />
                    </Button>

                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                onSendMessage();
                            }
                        }}
                        placeholder="Describe your symptoms or ask a medical question..."
                        className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2.5 min-h-[44px] max-h-32 resize-none text-slate-900 dark:text-slate-100 placeholder:text-slate-400 font-medium"
                        disabled={isLoading}
                        rows={1}
                    />

                    <VoiceInput onTranscript={(text) => setInput(prev => prev + " " + text)} />

                    <Button
                        onClick={onSendMessage}
                        disabled={!input.trim() || isLoading}
                        className={cn(
                            "rounded-xl h-10 w-10 shrink-0 p-0 shadow-sm transition-all duration-200",
                            !input.trim() || isLoading
                                ? "bg-slate-200 dark:bg-slate-800 text-slate-400"
                                : "bg-primary hover:bg-primary/90 text-white hover:scale-105 active:scale-95"
                        )}
                    >
                        <Send className="w-4 h-4" />
                    </Button>
                </div>

                <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-slate-400 font-medium">
                    <ShieldCheck className="w-3 h-3 text-emerald-500" />
                    <span>HIPAA Compliant • End-to-End Encrypted • Educational Use Only</span>
                </div>
            </div>
        </div>
    );
}
