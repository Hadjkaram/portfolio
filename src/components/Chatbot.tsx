"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Bot,
  Loader2,
  RotateCcw,
  User,
} from "lucide-react";
import { useChatbot } from "@/hooks/useChatbot";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, sendMessage, isTyping, resetChat } = useChatbot();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;
    sendMessage(input);
    setInput("");
  };

  const quickPrompts = [
    { label: "🎓 Diplômes & Certifs", prompt: "Quels sont ses diplômes et certifications (CISSP, HEC...) ?" },
    { label: "🏥 e-Santé & UNICEF", prompt: "Parle-moi de ses projets e-Santé (Nuria, MSHP, UNICEF)" },
    { label: "🧠 IA & Kanyeh Assist", prompt: "Comment fonctionne son IA de télépathologie (Kanyeh Assist) ?" },
    { label: "📞 Coordonnées directes", prompt: "Comment puis-je contacter Ibrahim directement ?" },
  ];

  return (
    <>
      {/* BOUTON FLOTTANT DU CHATBOT */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
          >
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs text-slate-300 shadow-xl backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Posez vos questions à l’IA d’Ibrahim</span>
            </div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              aria-label="Ouvrir l'assistant IA"
              className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-blue-600 text-slate-950 flex items-center justify-center shadow-xl shadow-cyan-500/25 border border-cyan-300/40 cursor-pointer"
            >
              <Bot size={28} className="text-slate-950" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-slate-950"></span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FENÊTRE DU CHAT INTERACTIVE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-[94vw] sm:w-[420px] h-[580px] bg-slate-900/95 backdrop-blur-2xl border border-slate-700/80 rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* EN-TÊTE CHAT */}
            <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Bot size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">Assistant IA d’Ibrahim</span>
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                      v2.0
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Actif • Base certifiée
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={resetChat}
                  title="Réinitialiser la discussion"
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <RotateCcw size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  aria-label="Fermer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50 text-sm">
              {messages.map((msg) => {
                const isUser = msg.sender === "user";
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${isUser ? "justify-end" : "justify-start"}`}
                  >
                    {!isUser && (
                      <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                        <Bot size={15} />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                        isUser
                          ? "bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 font-medium rounded-tr-sm shadow-md"
                          : "bg-slate-800/90 text-slate-200 rounded-tl-sm border border-slate-700/70"
                      }`}
                    >
                      {msg.text}
                    </div>

                    {isUser && (
                      <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                        <User size={15} />
                      </div>
                    )}
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex items-center gap-2 text-slate-400 text-xs pl-9">
                  <Loader2 size={14} className="animate-spin text-cyan-400" />
                  <span>Analyse et formulation de la réponse...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* SUGGESTIONS RAPIDES */}
            <div className="px-3 pt-2 pb-1 bg-slate-950/40 border-t border-slate-800/60 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {quickPrompts.map((q) => (
                <button
                  key={q.label}
                  type="button"
                  onClick={() => sendMessage(q.prompt)}
                  disabled={isTyping}
                  className="px-2.5 py-1 rounded-full bg-slate-800/80 hover:bg-slate-800 hover:text-cyan-300 text-slate-300 text-[11px] font-medium border border-slate-700/60 whitespace-nowrap transition-colors disabled:opacity-50"
                >
                  {q.label}
                </button>
              ))}
            </div>

            {/* FORMULAIRE ENVOI */}
            <form
              onSubmit={handleSubmit}
              className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isTyping}
                placeholder={isTyping ? "L'IA formule sa réponse..." : "Interrogez sur ses projets, sa stack..."}
                className="flex-1 bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-slate-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isTyping || !input.trim()}
                className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 flex items-center justify-center hover:brightness-110 active:scale-95 transition-all disabled:opacity-40 disabled:hover:brightness-100"
                aria-label="Envoyer"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}