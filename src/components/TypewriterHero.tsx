"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const TARGET_TEXT_FR =
  "Je suis Ibrahim Karamoko — CTO opérationnel (10+ ans d'expérience), spécialisé dans l'architecture distribuée, l'IA appliquée (YOLOv8/v11, RAG, Web Scraping) et la cybersécurité des systèmes critiques.";

const TARGET_TEXT_EN =
  "I am Ibrahim Karamoko — Operational CTO (10+ years experience), specialized in distributed architecture, applied AI (YOLOv8/v11, RAG, Web Scraping), and cybersecurity for mission-critical systems.";

export default function TypewriterHero() {
  const { language } = useLanguage();
  const targetText = language === "en" ? TARGET_TEXT_EN : TARGET_TEXT_FR;
  const [displayedCount, setDisplayedCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let index = 0;
    setDisplayedCount(0);
    setIsDone(false);

    const typeNext = () => {
      if (index < targetText.length) {
        index++;
        setDisplayedCount(index);

        const char = targetText[index - 1];
        let delay = 20;
        if (char === "—" || char === ",") {
          delay = 75;
        } else if (char === ")") {
          delay = 100;
        } else if (char === ".") {
          delay = 180;
        }

        timeoutId = setTimeout(typeNext, delay);
      } else {
        setIsDone(true);
      }
    };

    timeoutId = setTimeout(typeNext, 250);

    return () => clearTimeout(timeoutId);
  }, [targetText]);

  const typedSlice = targetText.slice(0, displayedCount);

  return (
    <div
      className="text-lg md:text-xl text-zinc-700 font-medium md:border-l-4 md:border-sky-500 md:pl-6 leading-relaxed min-h-[5.8rem] md:min-h-[4.8rem] flex items-center"
      aria-label={targetText}
    >
      <p className="inline">
        {renderHighlightedSlice(typedSlice, language)}
        <span
          className={`typewriter-cursor ${isDone ? "opacity-75" : "opacity-100"}`}
          aria-hidden="true"
        />
      </p>
    </div>
  );
}

function renderHighlightedSlice(text: string, lang: "fr" | "en") {
  const name = "Ibrahim Karamoko";

  if (!text.includes(name)) {
    const prefix = lang === "en" ? "I am " : "Je suis ";
    if (text.startsWith(prefix)) {
      const remainder = text.slice(prefix.length);
      return (
        <>
          {prefix}<strong className="text-zinc-950 font-bold">{remainder}</strong>
        </>
      );
    }
    return text;
  }

  const [before, ...rest] = text.split(name);
  const after = rest.join(name);

  return (
    <>
      {before}
      <strong className="text-zinc-950 font-bold">{name}</strong>
      {after}
    </>
  );
}
