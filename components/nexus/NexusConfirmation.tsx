"use client";

import { motion } from "framer-motion";
import { CheckCircle, Heart, ShieldCheck, Info } from "lucide-react";
import { useEffect, useState } from "react";

interface NexusConfirmationProps {
    data: {
        name: string;
        mission: string;
        amount?: string;
    };
    onReset: () => void;
}

export default function NexusConfirmation({ data, onReset }: NexusConfirmationProps) {
    const [year, setYear] = useState("");

    useEffect(() => {
        setYear(new Date().getFullYear().toString());
    }, []);

    const getMessage = () => {
        switch (data.mission) {
            case "don":
                return {
                    title: "Flux de Ressources Reçu !",
                    text: `Un immense 'GG', ${data.name} ! 🏆 Ton "Don de Ressources" 💎 est une bénédiction pour notre cause 🙏. Il permettra de financer nos serveurs et outils libres.`,
                    sub: `Grâce à toi, nous pouvons avancer sur le projet Alpha-${year} cette année ${year}.`,
                    icon: Heart,
                    color: "text-nexus-purple",
                };
            case "guilde":
                return {
                    title: "Bienvenue dans la Guilde !",
                    text: `Salutations, ${data.name} ! 🛡️ Ta demande pour rejoindre la Guilde des Bénévoles a été enregistrée.`,
                    sub: `Ton soutien en ${year} est crucial pour notre progression ! 📈`,
                    icon: ShieldCheck,
                    color: "text-emerald-400",
                };
            case "info":
                return {
                    title: "Requête Analysée",
                    text: `Salutations, ${data.name} ! 👋 Ta demande d'informations a bien été acheminée vers nos serveurs centraux 📡.`,
                    sub: `Reste connecté pour suivre nos exploits tout au long de l'année ${year} ! 🚀`,
                    icon: Info,
                    color: "text-blue-400",
                };
            default: // contact
                return {
                    title: "Connexion Établie",
                    text: `Salutations, ${data.name} ! 👋 Ton message a bien été acheminé vers nos serveurs centraux 📡. Nos "Agents de Support" 🕵️ te répondront sous peu.`,
                    sub: `Ton soutien en ${year} est crucial pour notre progression ! 📈`,
                    icon: CheckCircle,
                    color: "text-nexus-cyan",
                };
        }
    };

    const content = getMessage();
    const Icon = content.icon;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl mx-auto p-12 rounded-2xl glass-panel text-center border border-white/10"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className={`w-24 h-24 mx-auto mb-6 rounded-full bg-slate-800 flex items-center justify-center ${content.color} shadow-2xl`}
            >
                <Icon size={48} />
            </motion.div>

            <h2 className={`text-4xl font-bold mb-6 ${content.color} drop-shadow-lg`}>
                {content.title}
            </h2>

            <p className="text-xl text-slate-200 mb-4 leading-relaxed">
                {content.text}
            </p>

            <div className="py-6 my-6 border-y border-white/10">
                <p className="text-nexus-cyan font-mono text-sm uppercase tracking-widest animate-pulse">
                    Objectif {year} : Synchronisation...
                </p>
                <p className="text-slate-400 mt-2">{content.sub}</p>
            </div>

            <button
                onClick={onReset}
                className="px-8 py-3 rounded-full border border-slate-600 text-slate-400 hover:text-white hover:border-white transition-all text-sm font-bold uppercase tracking-wider"
            >
                Nouvelle Transmission
            </button>
        </motion.div>
    );
}
