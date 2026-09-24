"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, FileText, X, Zap } from "lucide-react";
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

  // Empêche le défilement arrière-plan lors de l'affichage du modal
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
          exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl overflow-y-auto"
          onClick={handleEnter}
        >
          {/* LUEURS D'AMBIANCE CINÉMATIQUES ANIMÉES */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              x: [0, 25, 0],
              y: [0, -20, 0],
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-sky-500/25 rounded-full blur-[120px] pointer-events-none"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -30, 0],
              y: [0, 25, 0],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/3 translate-x-1/2 translate-y-1/2 w-[340px] h-[340px] bg-indigo-600/25 rounded-full blur-[120px] pointer-events-none"
          />

          {/* CARTE CENTRALE HAUTE COUTURE UX/UI PREMIUM */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 25 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: -20, transition: { duration: 0.25 } }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl bg-zinc-950/85 backdrop-blur-2xl border border-white/15 shadow-[0_0_80px_rgba(14,165,233,0.2),0_25px_60px_-15px_rgba(0,0,0,0.85)] overflow-hidden p-6 sm:p-8 text-center text-white my-auto"
          >
            {/* LIGNE LUMINEUSE PULSANTE SUPÉRIEURE */}
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-sky-400 to-transparent animate-pulse" />

            {/* HALO LUMINEUX INTERNE */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-36 bg-sky-500/20 blur-[70px] pointer-events-none rounded-full" />

            {/* BOUTON FERMER DISCRET */}
            <button
              type="button"
              onClick={handleEnter}
              aria-label={t("Fermer", "Close")}
              className="absolute top-4 right-4 p-2 rounded-full text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <X size={16} />
            </button>

            {/* BADGE HAUT DE GAMME */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-sky-400 text-[11px] font-mono tracking-wider uppercase mb-5 shadow-sm">
              <Sparkles size={12} className="text-sky-400 animate-spin [animation-duration:8s]" />
              <span>{t("Portfolio Officiel • 2026", "Official Portfolio • 2026")}</span>
            </div>

            {/* AVATAR AVEC HALO TOURNANT ET PASTILLE ACTIVE */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4">
              {/* CERCLE LUMINEUX COLORÉ TOURNANT */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-sky-400 via-indigo-500 to-emerald-400 blur-sm opacity-70 animate-pulse" />
              
              <div className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-tr from-sky-400 via-indigo-500 to-emerald-400 shadow-xl overflow-hidden">
                <Image
                  src="/ibrahim-photo.png"
                  alt="Ibrahim Karamoko"
                  fill
                  sizes="96px"
                  priority
                  className="object-cover rounded-full"
                />
              </div>

              {/* PASTILLE EN DIRECT VERTE FLUO */}
              <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-zinc-950 flex items-center justify-center shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              </span>
            </div>

            {/* SALUTATION CHALEUREUSE & NOM */}
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
              <span>{t("Hello & Bienvenue", "Hello & Welcome")}</span>
              <motion.span
                animate={{ rotate: [0, 18, -8, 18, -4, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", repeatDelay: 1.2 }}
                className="inline-block origin-bottom-right"
              >
                👋
              </motion.span>
            </h2>

            <p className="text-sky-400 font-mono text-xs sm:text-sm font-semibold tracking-wide uppercase mt-1">
              El Hadj Ibrahim V. Karamoko &bull; {t("Tech Lead IA & CTO", "AI Tech Lead & CTO")}
            </p>

            {/* TEXTE SIMPLE & ACCROCHEUR (PAS DE PAVE LOURD) */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md mx-auto mt-3">
              {t(
                "Ravi de vous accueillir ! Découvrez mes réalisations en IA appliquée, architectures distribuées à haute disponibilité et leadership d'ingénierie.",
                "Delighted to welcome you! Explore my work in applied AI, high-availability distributed architectures, and engineering leadership."
              )}
            </p>

            {/* 3 MINI-PILLS VISUELS LÉGERS & ÉLÉGANTS */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-5 mb-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-mono text-zinc-300 hover:border-sky-500/40 transition-colors">
                <Zap size={11} className="text-amber-400 shrink-0" />
                {t("10 Systèmes en Prod", "10 Production Systems")}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-mono text-zinc-300 hover:border-sky-500/40 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                {t("IA Médicale & RAG", "Medical AI & RAG")}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-mono text-zinc-300 hover:border-sky-500/40 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                {t("Team Lead (5 devs)", "Team Lead (5 devs)")}
              </span>
            </div>

            {/* ACTIONS INTERACTIVES & BOUTONS ANIMÉS */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleEnter}
                className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:via-blue-500 hover:to-indigo-500 text-white font-mono text-xs uppercase tracking-wider font-bold shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] transition-all flex items-center justify-center gap-2 group relative overflow-hidden"
              >
                {/* EFFET DE BRILLANCE PASSANTE (SHIMMER) */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", repeatDelay: 1 }}
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                />
                <span className="relative z-10">{t("Explorer le Portfolio", "Enter Portfolio")}</span>
                <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1.5 transition-transform" />
              </motion.button>

              <Link
                href="/cv"
                onClick={() => {
                  sessionStorage.setItem("ik_portfolio_welcome_seen", "true");
                }}
                className="w-full sm:w-auto py-3.5 px-5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/25 text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 text-zinc-300 hover:text-white"
              >
                <FileText size={14} className="text-zinc-400 group-hover:text-white" />
                <span>{t("Voir le CV (1 Page)", "View A4 Resume")}</span>
              </Link>
            </div>

            {/* MICRO HINT BAS */}
            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-center gap-2 text-[10.5px] font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t("Expérience interactive • Disponible pour opportunités", "Interactive experience • Available for roles")}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
