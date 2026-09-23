"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, FileText } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const emptySubscribe = () => () => {};

export default function WelcomeModal() {
  const { language, t } = useLanguage();
  const hasSeenWelcome = useSyncExternalStore(
    emptySubscribe,
    () => sessionStorage.getItem("ik_portfolio_welcome_seen") === "true",
    () => true
  );

  const [dismissed, setDismissed] = useState(false);
  const isOpen = !hasSeenWelcome && !dismissed;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleEnter = () => {
    sessionStorage.setItem("ik_portfolio_welcome_seen", "true");
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-zinc-950/70 backdrop-blur-md overflow-y-auto"
        >
          {/* LUEUR ARRIÈRE-PLAN SUBTILE */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

          {/* CARTE CENTRALE STYLE CLAUDE / ÉDITORIAL HAUT DE GAMME */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-white border border-zinc-200 shadow-2xl overflow-hidden p-6 sm:p-8 md:p-10 my-auto text-left"
          >
            {/* RAYON LUMINEUX SUPÉRIEUR */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600" />

            {/* EN-TÊTE : LOGO SIGNATURE + BADGE EXÉCUTIF */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-5 border-b border-zinc-100">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 bg-white border border-zinc-200 shadow-sm flex items-center justify-center p-1 overflow-hidden">
                  <Image
                    src="/Logo_IK.png"
                    alt="Logo Ibrahim Karamoko"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-zinc-950">
                    El Hadj Ibrahim V. Karamoko
                  </h3>
                  <p className="text-[11px] font-mono text-zinc-500">
                    {t("Espace Exécutif & Portfolio", "Executive Space & Portfolio")}
                  </p>
                </div>
              </div>

              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-mono font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Hub
              </span>
            </div>

            {/* MESSAGE DE BIENVENUE ÉDITORIAL */}
            <div className="space-y-4 mb-8">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                <Sparkles size={12} className="text-amber-500" />
                <span>{t("Bienvenue dans l'espace de travail", "Welcome to the workspace")}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950 uppercase leading-tight">
                {language === "en" ? (
                  <>
                    Critical Architectures & <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
                      High-Impact Panafrican Systems.
                    </span>
                  </>
                ) : (
                  <>
                    Architectures Critiques & <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
                      Solutions d&apos;Impact Panafricain.
                    </span>
                  </>
                )}
              </h2>

              <p className="text-sm text-zinc-600 leading-relaxed">
                {t(
                  "Ce portfolio rassemble plus de 10 années d'ingénierie logicielle, de direction d'équipes agiles et de déploiement de solutions d'IA appliquée et d'e-Santé pour des institutions sanitaires et multilatérales.",
                  "This portfolio consolidates 10+ years of software engineering, agile leadership, and mission-critical deployments in applied AI and digital health for global health agencies and enterprises."
                )}
              </p>

              {/* LES 3 PILIERS EN GRILLE COMPACTE */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                <div className="p-3 bg-zinc-50 border border-zinc-200">
                  <span className="text-[10px] font-mono text-zinc-400 block font-bold mb-1">
                    01 // {t("SYSTÈMES", "SYSTEMS")}
                  </span>
                  <p className="text-xs font-bold text-zinc-900 leading-tight">
                    {t("10 Architectures en Production", "10 Production Systems")}
                  </p>
                </div>
                <div className="p-3 bg-zinc-50 border border-zinc-200">
                  <span className="text-[10px] font-mono text-zinc-400 block font-bold mb-1">
                    02 // {t("PARTENAIRES", "PARTNERS")}
                  </span>
                  <p className="text-xs font-bold text-zinc-900 leading-tight">
                    UNICEF, OMS, PNUD, Roche
                  </p>
                </div>
                <div className="p-3 bg-zinc-50 border border-zinc-200">
                  <span className="text-[10px] font-mono text-zinc-400 block font-bold mb-1">
                    03 // {t("LEADERSHIP", "LEADERSHIP")}
                  </span>
                  <p className="text-xs font-bold text-zinc-900 leading-tight">
                    {t("5 Ingénieurs (-40% de bugs)", "5 Engineers (-40% bugs)")}
                  </p>
                </div>
              </div>
            </div>

            {/* BOUTONS D'ACTION */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={handleEnter}
                className="w-full sm:flex-1 py-3.5 px-6 bg-zinc-950 hover:bg-zinc-800 text-white font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 group shadow-md"
              >
                <span>{t("Accéder au Portfolio", "Enter Portfolio")}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/cv"
                onClick={() => {
                  sessionStorage.setItem("ik_portfolio_welcome_seen", "true");
                }}
                className="w-full sm:w-auto py-3.5 px-5 bg-white border border-zinc-300 hover:border-zinc-950 text-zinc-900 font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
              >
                <FileText size={14} />
                <span>{t("Voir le CV A4", "View A4 Resume")}</span>
              </Link>
            </div>

            {/* PIED DE CARTE DISCRET */}
            <div className="mt-6 pt-3 border-t border-zinc-100 flex items-center justify-between text-[10px] font-mono text-zinc-400">
              <span className="flex items-center gap-1">
                <ShieldCheck size={11} className="text-emerald-600" />
                {t("Données et navigation protégées", "Protected data & navigation")}
              </span>
              <span>Abidjan & International</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
