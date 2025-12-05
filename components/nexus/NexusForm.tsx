"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CreditCard, MessageSquare, Shield, HelpCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type MissionType = "contact" | "don" | "guilde" | "info";

interface NexusFormProps {
  onSubmit: (data: any) => void;
}

export default function NexusForm({ onSubmit }: NexusFormProps) {
  const [mission, setMission] = useState<MissionType>("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "10",
    frequency: "once",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation pour Export Statique (GitHub Pages)
    // L'API Route ne fonctionne pas sans serveur Node.js
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Formulaire soumis (Mode Statique):", { ...formData, mission });
    onSubmit({ ...formData, mission });
    setIsSubmitting(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-2xl mx-auto p-8 rounded-2xl glass-panel border-t border-nexus-cyan/30"
      onSubmit={handleSubmit}
    >
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-nexus-cyan to-nexus-purple mb-8 text-center">
        Portail d'Intention
      </h2>

      <div className="space-y-6">
        {/* Identity Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-nexus-cyan text-sm font-mono uppercase tracking-wider">Identifiant (Nom)</label>
            <input
              required
              type="text"
              placeholder="Ex: Axolotl"
              className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-nexus-cyan focus:ring-1 focus:ring-nexus-cyan outline-none transition-all"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-nexus-cyan text-sm font-mono uppercase tracking-wider">Canal (Email)</label>
            <input
              required
              type="email"
              placeholder="contact@nexus.net"
              className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-nexus-cyan focus:ring-1 focus:ring-nexus-cyan outline-none transition-all"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        {/* Mission Selector */}
        <div className="space-y-2">
          <label className="text-nexus-cyan text-sm font-mono uppercase tracking-wider">Mission Prioritaire</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { id: "contact", icon: MessageSquare, label: "Établir le Contact" },
              { id: "don", icon: CreditCard, label: "Offrir un Don" },
              { id: "guilde", icon: Shield, label: "Rejoindre la Guilde" },
              { id: "info", icon: HelpCircle, label: "Demander des Infos" },
            ].map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMission(m.id as MissionType)}
                className={cn(
                  "flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 text-left",
                  mission === m.id
                    ? "bg-nexus-cyan/20 border-nexus-cyan text-nexus-cyan shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                    : "bg-slate-800/30 border-slate-700 text-slate-400 hover:bg-slate-800 hover:border-slate-500"
                )}
              >
                <m.icon size={20} className="shrink-0" />
                <span className="text-sm font-bold">{m.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Fields */}
        <AnimatePresence mode="wait">
          {mission === "don" ? (
            <motion.div
              key="don-fields"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-6 overflow-hidden"
            >
              <div className="space-y-2">
                <label className="text-nexus-purple text-sm font-mono uppercase tracking-wider">Montant du Transfert (€)</label>
                <div className="flex gap-4">
                  {["5", "10", "20", "50"].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setFormData({ ...formData, amount: amt })}
                      className={cn(
                        "flex-1 py-2 rounded-lg border transition-all",
                        formData.amount === amt
                          ? "bg-nexus-purple/20 border-nexus-purple text-nexus-purple"
                          : "bg-slate-800/30 border-slate-700 text-slate-400"
                      )}
                    >
                      {amt}€
                    </button>
                  ))}
                  <input
                    type="number"
                    placeholder="Autre"
                    className="flex-1 bg-slate-800/50 border border-slate-600 rounded-lg px-4 text-white focus:border-nexus-purple outline-none"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-nexus-purple text-sm font-mono uppercase tracking-wider">Fréquence</label>
                <select
                  className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-nexus-purple outline-none"
                  value={formData.frequency}
                  onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                >
                  <option value="once">Une fois (Impulsion unique)</option>
                  <option value="monthly">Mensuel (Flux constant)</option>
                </select>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="message-field"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-2 overflow-hidden"
            >
              <label className="text-nexus-cyan text-sm font-mono uppercase tracking-wider">Transmission de Données</label>
              <textarea
                required
                rows={4}
                placeholder="Entrez votre message ici..."
                className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-nexus-cyan focus:ring-1 focus:ring-nexus-cyan outline-none transition-all resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full group relative px-8 py-4 bg-gradient-to-r from-nexus-cyan to-nexus-purple rounded-xl font-bold text-white shadow-lg hover:shadow-nexus-cyan/50 transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={18} /> Transmission...
              </>
            ) : (
              <>
                Initialiser le Protocole <Send size={18} />
              </>
            )}
          </span>
        </button>
      </div>
    </motion.form>
  );
}
