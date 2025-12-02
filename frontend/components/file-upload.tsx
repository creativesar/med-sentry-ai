import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { UploadCloud, X, FileText, Image as ImageIcon } from 'lucide-react';

interface FileUploadProps {
    onFileSelect: (file: File) => void;
    className?: string;
    disabled?: boolean;
}

export function FileUpload({ onFileSelect, className, disabled }: FileUploadProps) {
    const [dragActive, setDragActive] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleFile = (file: File) => {
        if (disabled) return;

        // Validate type
        const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
        if (!validTypes.includes(file.type)) {
            alert("Please upload a valid image (JPEG, PNG, WebP) or PDF.");
            return;
        }

        setSelectedFile(file);
        onFileSelect(file);

        // Create preview
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewUrl(null); // No preview for PDF yet
        }
    };

    const clearFile = () => {
        setSelectedFile(null);
        setPreviewUrl(null);
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    return (
        <div className={cn("w-full", className)}>
            {!selectedFile ? (
                <div
                    className={cn(
                        "relative border-2 border-dashed rounded-xl p-8 transition-all duration-200 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer hover:bg-accent/50",
                        dragActive ? "border-primary bg-accent" : "border-muted-foreground/25",
                        disabled && "opacity-50 cursor-not-allowed"
                    )}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => !disabled && inputRef.current?.click()}
                >
                    <input
                        ref={inputRef}
                        type="file"
                        className="hidden"
                        accept=".jpg,.jpeg,.png,.webp,.pdf"
                        onChange={handleChange}
                        disabled={disabled}
                    />
                    <div className="p-4 rounded-full bg-primary/10 mb-4">
                        <UploadCloud className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Click to upload or drag and drop</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                        Medical Reports (PDF) or Symptom Images (JPG, PNG)
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Max file size 10MB</p>
                </div>
            ) : (
                <div className="relative rounded-xl border border-border bg-card p-4 flex items-center gap-4 shadow-sm">
                    <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center overflow-hidden shrink-0 border border-border">
                        {previewUrl ? (
                            <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                        ) : (
                            <FileText className="w-8 h-8 text-muted-foreground" />
                        )}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground truncate">{selectedFile.name}</p>
                        <p className="text-xs text-muted-foreground">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                    <button
                        onClick={clearFile}
                        className="p-2 hover:bg-destructive/10 hover:text-destructive rounded-full transition-colors"
                        disabled={disabled}
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            )}
        </div>
    );
}
