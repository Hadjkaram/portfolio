import { useState } from "react";
import { generateSmartAnswer } from "@/lib/semanticChatEngine";

export type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  source?: "gemini_llm" | "semantic_rag";
};

function getInitialGreeting(lang: "fr" | "en"): Message {
  if (lang === "en") {
    return {
      id: "init",
      text: "Hello! I am Ibrahim Karamoko's Personal AI Assistant. I can answer any question regarding his 10+ years of operational CTO leadership, engineering team management (5 developers, -40% bugs), his AI architectures (YOLOv8/v11, RAG, Web Scraping, Antigravity, Claude Code), his 10 deployed projects (Kanyeh Assist, Nuria, Tila, XH Skills Academy), or his certifications (CISSP, HEC Morocco). What would you like to know?",
      sender: "bot",
      source: "semantic_rag"
    };
  }
  return {
    id: "init",
    text: "Bonjour ! Je suis l'assistant IA personnel et officiel d'Ibrahim Karamoko, Tech Lead IA & CTO Opérationnel. Je peux répondre à tout type de question sur son management d'équipe (5 ingénieurs encadrés, -40% de régressions), sa stack IA (RAG, Web Scraping, YOLOv8/v11, Antigravity, Claude Code, Codex), ses 10 réalisations déployées (Kanyeh Assist, Nuria, Tila, XH Skills Academy) ou ses certifications mondiales (CISSP, HEC Maroc). Que souhaitez-vous savoir ?",
    sender: "bot",
    source: "semantic_rag"
  };
}

export const useChatbot = (language: "fr" | "en" = "fr") => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const displayedMessages: Message[] =
    messages.length > 0 ? messages : [getInitialGreeting(language)];

  const sendMessage = async (text: string) => {
    const greeting = getInitialGreeting(language);
    const userMsg: Message = { id: Date.now().toString(), text, sender: "user" };
    setMessages((prev) => (prev.length === 0 ? [greeting, userMsg] : [...prev, userMsg]));
    setIsTyping(true);

    try {
      // 1. Tenter d'interroger la route API /api/chat (Gemini LLM ou RAG serveur)
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, language })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.response) {
          const botMsg: Message = {
            id: (Date.now() + 1).toString(),
            text: data.response,
            sender: "bot",
            source: data.source || "gemini_llm"
          };
          setMessages((prev) => [...prev, botMsg]);
          setIsTyping(false);
          return;
        }
      }
    } catch {
      // API call fallback
    }

    // 2. Moteur sémantique RAG local
    const localResult = generateSmartAnswer(text, language);
    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: localResult.text,
        sender: "bot",
        source: "semantic_rag"
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  const resetChat = () => {
    setMessages([]);
  };

  return { messages: displayedMessages, sendMessage, isTyping, resetChat };
};