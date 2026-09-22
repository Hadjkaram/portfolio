"use client";

import { useState, useEffect } from "react";

const TARGET_TEXT =
  "Je suis Ibrahim Karamoko — CTO opérationnel (10+ ans d'expérience), spécialisé dans l'architecture distribuée, l'IA appliquée (YOLOv8/v11, RAG, Web Scraping) et la cybersécurité des systèmes critiques.";

export default function TypewriterHero() {
  const [displayedCount, setDisplayedCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let index = 0;

    const typeNext = () => {
      if (index < TARGET_TEXT.length) {
        index++;
        setDisplayedCount(index);

        const char = TARGET_TEXT[index - 1];
        // Rhythmic typing variations (micro-pauses at punctuation)
        let delay = 22;
        if (char === "—" || char === ",") {
          delay = 85;
        } else if (char === ")") {
          delay = 110;
        } else if (char === ".") {
          delay = 200;
        }

        timeoutId = setTimeout(typeNext, delay);
      } else {
        setIsDone(true);
      }
    };

    // Initial settle delay before typing begins
    timeoutId = setTimeout(typeNext, 400);

    return () => clearTimeout(timeoutId);
  }, []);

  const typedSlice = TARGET_TEXT.slice(0, displayedCount);

  return (
    <div 
      className="text-lg md:text-xl text-zinc-700 font-medium md:border-l-4 md:border-sky-500 md:pl-6 leading-relaxed min-h-[5.8rem] md:min-h-[4.8rem] flex items-center"
      aria-label={TARGET_TEXT}
    >
      <p className="inline">
        {renderHighlightedSlice(typedSlice)}
        <span
          className={`typewriter-cursor ${isDone ? "opacity-75" : "opacity-100"}`}
          aria-hidden="true"
        />
      </p>
    </div>
  );
}

function renderHighlightedSlice(text: string) {
  const name = "Ibrahim Karamoko";

  if (!text.includes(name)) {
    if (text.startsWith("Je suis ")) {
      const remainder = text.slice(8);
      return (
        <>
          Je suis <strong className="text-zinc-950 font-bold">{remainder}</strong>
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
