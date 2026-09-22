"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Bot,
  Loader2,
  RotateCcw,
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
    { label: "Diplômes & CISSP", prompt: "Quels sont ses diplômes et certifications (CISSP, HEC...) ?" },
    { label: "Projets e-Santé", prompt: "Parle-moi de ses projets e-Santé (Nuria, MSHP, UNICEF)" },
    { label: "IA & Kanyeh Assist", prompt: "Comment fonctionne son IA de télépathologie (Kanyeh Assist) ?" },
    { label: "Coordonnées", prompt: "Comment puis-je contacter Ibrahim directement ?" },
  ];

  return (
    <>
      {/* BOUTON FLOTTANT DU CHATBOT ÉDITORIAL */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              aria-label="Ouvrir l'assistant IA"
              className="px-4 py-3 bg-zinc-900 text-white flex items-center gap-2.5 shadow-xl border border-zinc-900 hover:bg-zinc-800 transition-colors cursor-pointer font-mono text-xs uppercase tracking-wider"
            >
              <Bot size={18} />
              <span>Assistant IA</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FENÊTRE DU CHAT INTERACTIVE STYLE CLAUDE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-[94vw] sm:w-[420px] h-[560px] bg-white border-2 border-zinc-900 shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* EN-TÊTE CHAT */}
            <div className="p-4 bg-zinc-900 text-white flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <Bot size={18} className="text-sky-400" />
                <div>
                  <span className="block font-bold text-xs font-mono uppercase tracking-wider">
                    Assistant IA — Ibrahim Karamoko
                  </span>
                  <span className="text-[10px] text-zinc-400 font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Base de connaissances vérifiée
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={resetChat}
                  title="Réinitialiser la discussion"
                  className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                >
                  <RotateCcw size={15} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Fermer"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fbfbfa] text-xs sm:text-sm">
              {messages.map((msg) => {
                const isUser = msg.sender === "user";
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2 ${isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] p-3.5 leading-relaxed whitespace-pre-wrap ${
                        isUser
                          ? "bg-zinc-900 text-white font-medium"
                          : "bg-white text-zinc-800 border border-zinc-200 shadow-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex items-center gap-2 text-zinc-500 text-xs pl-2 font-mono">
                  <Loader2 size={13} className="animate-spin text-zinc-900" />
                  <span>L&apos;assistant consulte le profil...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* SUGGESTIONS RAPIDES */}
            <div className="px-3 pt-2 pb-2 bg-white border-t border-zinc-200 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {quickPrompts.map((q) => (
                <button
                  key={q.label}
                  type="button"
                  onClick={() => sendMessage(q.prompt)}
                  disabled={isTyping}
                  className="px-2.5 py-1 bg-zinc-50 hover:bg-zinc-100 text-zinc-700 text-[11px] font-mono border border-zinc-200 whitespace-nowrap transition-colors disabled:opacity-50"
                >
                  {q.label}
                </button>
              ))}
            </div>

            {/* FORMULAIRE ENVOI */}
            <form
              onSubmit={handleSubmit}
              className="p-3 bg-white border-t border-zinc-200 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isTyping}
                placeholder={isTyping ? "Réponse en cours..." : "Posez une question technique..."}
                className="flex-1 bg-zinc-50 border border-zinc-300 p-2.5 text-xs text-zinc-950 focus:outline-none focus:border-zinc-950 focus:bg-white transition-all placeholder-zinc-400 disabled:opacity-50 font-sans"
              />
              <button
                type="submit"
                disabled={isTyping || !input.trim()}
                className="w-9 h-9 bg-zinc-900 text-white flex items-center justify-center hover:bg-zinc-800 transition-colors disabled:opacity-40"
                aria-label="Envoyer"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}