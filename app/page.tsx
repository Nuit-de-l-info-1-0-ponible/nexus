"use client";

import { useState } from "react";
import NexusForm from "@/components/nexus/NexusForm";
import NexusConfirmation from "@/components/nexus/NexusConfirmation";
import { motion, AnimatePresence } from "framer-motion";

export default function NexusPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [data, setData] = useState<any>(null);

    const handleSubmit = (formData: any) => {
        setData(formData);
        setIsSubmitted(true);
    };

    const handleReset = () => {
        setIsSubmitted(false);
        setData(null);
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-nexus-cyan/20 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-nexus-purple/20 rounded-full blur-[100px] animate-pulse-slow delay-1000" />

            <div className="relative z-10 w-full max-w-4xl">
                <header className="text-center mb-12">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                        NEXUS <span className="text-nexus-cyan">CONNECTÉ</span>
                    </h1>
                    <p className="text-nexus-light/60 font-mono text-sm md:text-base uppercase tracking-[0.2em]">
                        Module d'Interaction Dynamique v2.0.25
                    </p>
                </header>

                <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <NexusForm onSubmit={handleSubmit} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="confirmation"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <NexusConfirmation data={data} onReset={handleReset} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <footer className="absolute bottom-4 text-center text-slate-600 text-xs font-mono">
                SYSTEM STATUS: ONLINE • SECURE CONNECTION • NUIT DE L'INFO 2025
            </footer>
        </main>
    );
}
