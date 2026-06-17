"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Loader2 } from "lucide-react";
import { useChatbot } from "@/hooks/useChatbot"; // Assure-toi que le chemin est correct

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  // On récupère maintenant isTyping en plus du reste
  const { messages, sendMessage, isTyping } = useChatbot();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]); // Scroll aussi quand l'IA commence à taper

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return; // Empêche le spam si l'IA écrit
    sendMessage(input);
    setInput("");
  };

  return (
    <>
      {/* BOUTON FLOTTANT */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[var(--primary)] text-white p-4 rounded-full shadow-lg shadow-[var(--primary)]/30 hover:bg-cyan-500 transition-colors border-none cursor-pointer flex items-center justify-center"
        style={{ display: isOpen ? 'none' : 'flex' }}
      >
        <MessageSquare size={28} />
      </motion.button>

      {/* FENÊTRE DU CHAT */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-[90%] md:w-96 h-[500px] bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* EN-TÊTE */}
            <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-[var(--primary)]/10 rounded-lg">
                  <Bot size={20} className="text-[var(--primary)]" />
                </div>
                <div>
                  <span className="block font-bold text-gray-900 text-sm">Assistant IA (IK)</span>
                  <span className="block text-xs text-green-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block animate-pulse"></span> En ligne
                  </span>
                </div>
              </div>
              <button 
                type="button" 
                onClick={() => setIsOpen(false)} 
                className="text-gray-400 hover:text-gray-900 hover:bg-gray-200 p-1 rounded-md transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.sender === 'user'
                        ? 'bg-[var(--primary)] text-white rounded-tr-sm shadow-sm'
                        : 'bg-gray-100 text-gray-800 rounded-tl-sm border border-gray-200'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {/* INDICATEUR "L'IA ÉCRIT..." */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-500 p-3 rounded-2xl rounded-tl-sm border border-gray-200 flex items-center gap-2 text-sm">
                    <Loader2 size={16} className="animate-spin" /> Analyse en cours...
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* FORMULAIRE */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 bg-gray-50 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isTyping}
                placeholder={isTyping ? "L'IA vous répond..." : "Posez une question..."}
                className="flex-1 bg-white border border-gray-300 rounded-xl px-4 py-2 text-sm text-gray-900 focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              <button 
                type="button" 
                onClick={(e) => { e.preventDefault(); handleSubmit(e as any); }}
                disabled={isTyping || !input.trim()}
                className="bg-gray-900 text-white p-2 rounded-xl hover:bg-[var(--primary)] transition-colors flex items-center justify-center disabled:opacity-50 disabled:hover:bg-gray-900"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}