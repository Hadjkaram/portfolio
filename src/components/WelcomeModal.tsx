"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const emptySubscribe = () => () => {};

export default function WelcomeModal() {
  const { t } = useLanguage();
  const hasSeenWelcome = useSyncExternalStore(
    emptySubscribe,
    () => sessionStorage.getItem("ik_portfolio_welcome_seen") === "true",
    () => true
  );

  const [dismissed, setDismissed] = useState(false);
  const isOpen = !hasSeenWelcome && !dismissed;

  const handleEnter = () => {
    sessionStorage.setItem("ik_portfolio_welcome_seen", "true");
    setDismissed(true);
  };

  // Empêche le défilement de la page lorsque le modal est actif et écoute la touche Échap
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          handleEnter();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.25, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md"
          onClick={handleEnter}
        >
          {/* CARTE CENTRALE ARCHITECTURALE PRO UX/UI SANS BORD ARRONDI */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm sm:max-w-md bg-zinc-950 text-white border border-zinc-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] p-6 sm:p-8 text-center rounded-none"
          >
            {/* LIGNE LUMINEUSE SUPÉRIEURE ÉPURÉE */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-zinc-400 to-transparent" />

            {/* BOUTON FERMER STRICT ET ÉPURÉ */}
            <button
              type="button"
              onClick={handleEnter}
              aria-label={t("Fermer", "Close")}
              className="absolute top-3.5 right-3.5 p-1.5 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 bg-zinc-900/60 transition-colors rounded-none"
            >
              <X size={15} />
            </button>

            {/* BADGE HAUT TYPE ÉDITORIAL */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 mb-5 rounded-none">
              <span className="w-1.5 h-1.5 rounded-none bg-emerald-400 animate-pulse" />
              <span>{t("Espace Portfolio • 2026", "Portfolio Space • 2026")}</span>
            </div>

            {/* CADRE PHOTO CARRÉ ARCHITECTURAL */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 border border-zinc-700 bg-zinc-900 p-1 rounded-none shadow-md">
              <div className="relative w-full h-full overflow-hidden bg-zinc-950 rounded-none">
                <Image
                  src="/ibrahim-photo.png"
                  alt="Ibrahim Karamoko"
                  fill
                  sizes="96px"
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* TITRE SIMPLE & NOM */}
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase font-mono">
              {t("Bienvenue", "Welcome")}
            </h2>

            <p className="text-sm font-bold text-zinc-100 uppercase tracking-wide mt-1">
              El Hadj Ibrahim V. Karamoko
            </p>

            <p className="text-xs font-mono text-zinc-400 mt-1">
              {t(
                "Tech Lead IA & Cybersécurité | CTO Opérationnel",
                "AI & Cybersecurity Tech Lead | Operational CTO"
              )}
            </p>

            {/* BOUTON UNIQUE D'ACCÈS AU PORTFOLIO */}
            <motion.button
              type="button"
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
              onClick={handleEnter}
              className="w-full mt-6 py-3.5 px-6 bg-white hover:bg-zinc-200 text-zinc-950 font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 group shadow-sm rounded-none border border-white"
            >
              <span>{t("Accéder au portfolio", "Enter portfolio")}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
            </motion.button>

            {/* BAS DE CARTE DISCRET */}
            <p className="mt-4 text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
              Abidjan • International
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
