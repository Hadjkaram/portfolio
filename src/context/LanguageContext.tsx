"use client";

import React, { createContext, useContext, useSyncExternalStore, useCallback } from "react";

export type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (fr: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

let memoryLanguage: Language = "fr";
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  const handleStorage = (e: StorageEvent) => {
    if (e.key === "portfolio_lang" && (e.newValue === "fr" || e.newValue === "en")) {
      memoryLanguage = e.newValue;
      callback();
    }
  };
  window.addEventListener("storage", handleStorage);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", handleStorage);
  };
}

function getSnapshot(): Language {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("portfolio_lang") as Language | null;
    if (saved === "fr" || saved === "en") {
      return saved;
    }
    return memoryLanguage;
  }
  return "fr";
}

function getServerSnapshot(): Language {
  return "fr";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLanguage = useCallback((lang: Language) => {
    memoryLanguage = lang;
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("portfolio_lang", lang);
        document.documentElement.lang = lang;
      } catch {
        // Fallback
      }
    }
    listeners.forEach((listener) => listener());
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "fr" ? "en" : "fr");
  }, [language, setLanguage]);

  const t = useCallback((fr: string, en: string) => {
    return language === "en" ? en : fr;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
