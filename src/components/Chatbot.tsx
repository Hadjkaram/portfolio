"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  X,
  Send,
  Loader2,
  RotateCcw,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { useChatbot } from "@/hooks/useChatbot";
import { useLanguage } from "@/context/LanguageContext";

export default function Chatbot() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const { messages, sendMessage, isTyping, resetChat } = useChatbot(language);
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

  const quickPrompts = language === "en" ? [
    { label: "Executive Track", prompt: "Summarize Ibrahim's background and core value proposition." },
    { label: "Team Lead (5 devs)", prompt: "How does Ibrahim manage his team of 5 and achieve -40% bugs?" },
    { label: "AI & Kanyeh Assist", prompt: "Explain the architecture and YOLO models behind Kanyeh Assist." },
    { label: "Degrees & CISSP", prompt: "What are Ibrahim's degrees, Stanford courses and CISSP certification?" },
    { label: "Direct Hire & Contact", prompt: "How can I contact Ibrahim directly for an executive mission?" },
  ] : [
    { label: "Profil & Valeur", prompt: "Fais-moi un résumé du profil et de la valeur ajoutée d'Ibrahim." },
    { label: "Management (5 pers.)", prompt: "Comment Ibrahim encadre-t-il son équipe de 5 et obtient -40% de régressions ?" },
    { label: "IA & Kanyeh Assist", prompt: "Comment fonctionne l'IA de télépathologie (Kanyeh Assist) avec Roche et les CHU ?" },
    { label: "Diplômes & CISSP", prompt: "Quels sont ses diplômes (HEC, Stanford) et certifications (CISSP, CompTIA) ?" },
    { label: "Contact & Missions", prompt: "Comment puis-je contacter Ibrahim pour une mission de CTO ou de conseil ?" },
  ];

  return (
    <>
      {/* BOUTON FLOTTANT DU CHATBOT AVEC PHOTO MINIATURE D'IBRAHIM */}
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
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setIsOpen(true)}
              aria-label={language === "en" ? "Open Ibrahim's Personal AI" : "Ouvrir l'IA d'Ibrahim Karamoko"}
              className="pl-2 pr-4 py-2 bg-zinc-950 text-white flex items-center gap-3 shadow-2xl border border-zinc-800 hover:border-zinc-600 transition-all cursor-pointer font-mono text-xs uppercase tracking-wider group"
            >
              {/* PHOTO MINIATURE OFFICIELLE D'IBRAHIM */}
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-sky-400/80 bg-zinc-800 shrink-0">
                <Image
                  src="/ibrahim-photo.png"
                  alt="Ibrahim Karamoko"
                  fill
                  sizes="32px"
                  className="object-cover object-top"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-zinc-950"></span>
              </div>

              <div className="flex flex-col text-left">
                <span className="font-bold flex items-center gap-1.5 text-zinc-100 text-[11px]">
                  <span>{language === "en" ? "Personal AI" : "IA Ibrahim"}</span>
                  <Sparkles size={11} className="text-sky-400 group-hover:rotate-12 transition-transform" />
                </span>
                <span className="text-[9px] text-zinc-400 font-mono tracking-normal normal-case">
                  {language === "en" ? "Ask anything" : "Posez vos questions"}
                </span>
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FENÊTRE DU CHAT INTERACTIVE STYLE CLAUDE / ANTHROPIC */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-[94vw] sm:w-[440px] h-[590px] bg-white border-2 border-zinc-950 shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* EN-TÊTE CHAT AVEC PHOTO MINIATURE */}
            <div className="p-3.5 bg-zinc-950 text-white flex justify-between items-center border-b border-zinc-800">
              <div className="flex items-center gap-3">
                {/* PHOTO MINIATURE */}
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-sky-400 bg-zinc-800 shrink-0">
                  <Image
                    src="/ibrahim-photo.png"
                    alt="Ibrahim Karamoko"
                    fill
                    sizes="36px"
                    className="object-cover object-top"
                  />
                  <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border border-zinc-950"></span>
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-xs font-mono uppercase tracking-wider text-zinc-100">
                      Ibrahim Karamoko
                    </span>
                    <ShieldCheck size={13} className="text-sky-400" />
                  </div>
                  <span className="text-[10px] text-zinc-400 font-mono flex items-center gap-1">
                    <span className="text-emerald-400 font-bold">•</span>
                    {language === "en" ? "Executive AI Assistant • 10+ yrs CTO" : "IA Personnelle Vérifiée • CTO 10+ ans"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={resetChat}
                  title={language === "en" ? "Reset conversation" : "Réinitialiser la discussion"}
                  className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                >
                  <RotateCcw size={15} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                  aria-label={language === "en" ? "Close" : "Fermer"}
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
                    className={`flex items-start gap-2.5 ${isUser ? "justify-end" : "justify-start"}`}
                  >
                    {/* AVATAR MINIATURE POUR LES MESSAGES BOT */}
                    {!isUser && (
                      <div className="relative w-6 h-6 rounded-full overflow-hidden border border-zinc-300 bg-zinc-200 shrink-0 mt-1">
                        <Image
                          src="/ibrahim-photo.png"
                          alt="Ibrahim"
                          fill
                          sizes="24px"
                          className="object-cover object-top"
                        />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] p-3.5 leading-relaxed whitespace-pre-wrap ${
                        isUser
                          ? "bg-zinc-950 text-white font-medium shadow-sm"
                          : "bg-white text-zinc-900 border border-zinc-200 shadow-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex items-center gap-2 text-zinc-600 text-xs pl-8 font-mono">
                  <Loader2 size={13} className="animate-spin text-zinc-950" />
                  <span>
                    {language === "en"
                      ? "Consulting verified knowledge corpus..."
                      : "L'IA consulte le profil et synthétise..."}
                  </span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* SUGGESTIONS RAPIDES BILINGUES */}
            <div className="px-3 pt-2 pb-2 bg-white border-t border-zinc-200 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {quickPrompts.map((q) => (
                <button
                  key={q.label}
                  type="button"
                  onClick={() => sendMessage(q.prompt)}
                  disabled={isTyping}
                  className="px-2.5 py-1 bg-zinc-50 hover:bg-zinc-100 text-zinc-800 text-[11px] font-mono border border-zinc-200 whitespace-nowrap transition-colors disabled:opacity-50"
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
                placeholder={
                  isTyping
                    ? (language === "en" ? "Synthesizing answer..." : "Réflexion en cours...")
                    : (language === "en" ? "Ask any question about Ibrahim..." : "Posez n'importe quelle question sur Ibrahim...")
                }
                className="flex-1 bg-zinc-50 border border-zinc-300 p-2.5 text-xs text-zinc-950 focus:outline-none focus:border-zinc-950 focus:bg-white transition-all placeholder-zinc-400 disabled:opacity-50 font-sans"
              />
              <button
                type="submit"
                disabled={isTyping || !input.trim()}
                className="w-9 h-9 bg-zinc-950 text-white flex items-center justify-center hover:bg-zinc-800 transition-colors disabled:opacity-40"
                aria-label={language === "en" ? "Send message" : "Envoyer le message"}
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