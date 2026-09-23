"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Check, Settings2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CookieConsentBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Vérifie le consentement existant dans le localStorage
    const consent = localStorage.getItem("ik_cookie_consent");
    if (!consent) {
      // Affichage après un léger délai pour une expérience fluide
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }

    // Écouteur pour ré-ouvrir le banner si l'utilisateur clique sur "Gestion des Cookies" dans le footer
    const handleReopen = () => setVisible(true);
    window.addEventListener("open_cookie_preferences", handleReopen);
    return () => window.removeEventListener("open_cookie_preferences", handleReopen);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("ik_cookie_consent", "all");
    setVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem("ik_cookie_consent", "essential");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.aside
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-lg z-50 bg-white border border-zinc-300 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] p-5 sm:p-6 text-zinc-900"
        aria-label={t("Consentement aux cookies et respect de la vie privée", "Cookie consent and privacy notice")}
        role="dialog"
      >
        {/* LIGNE BLEUE SUPÉRIEURE */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-blue-600" />

        <div className="flex items-start gap-3 mb-3">
          <div className="p-2 bg-sky-50 border border-sky-200 text-sky-700 shrink-0">
            <Shield size={18} />
          </div>
          <div>
            <h3 className="font-bold text-sm tracking-tight text-zinc-950 uppercase font-mono">
              {t("Respect de votre vie privée & Cookies", "Privacy & Cookie Preferences")}
            </h3>
            <p className="text-xs text-zinc-500 font-mono mt-0.5">
              {t(
                "Conformité RGPD & Loi n° 2013-450 (Côte d'Ivoire)",
                "GDPR Compliance & Law No. 2013-450 (Côte d'Ivoire)"
              )}
            </p>
          </div>
        </div>

        <p className="text-xs text-zinc-600 leading-relaxed mb-4">
          {t(
            "Ce site utilise des cookies techniques et des mécanismes de stockage local nécessaires à la fluidité de navigation, au fonctionnement de l'IA et à la mesure d'audience anonyme. Aucune donnée n'est commercialisée.",
            "This site uses essential technical cookies and local storage required for seamless navigation, AI assistant operation, and anonymous performance analytics. No personal data is commercialized."
          )}
        </p>

        {showDetails && (
          <div className="mb-4 p-3 bg-zinc-50 border border-zinc-200 text-[11px] font-mono space-y-2">
            <div className="flex items-center justify-between pb-1 border-b border-zinc-200">
              <span className="font-bold text-zinc-900">
                {t("Cookies Techniques (Essentiels)", "Technical Cookies (Essential)")}
              </span>
              <span className="text-emerald-700 font-bold">
                {t("Actifs (Toujours requis)", "Active (Always required)")}
              </span>
            </div>
            <p className="text-zinc-600 text-[10.5px]">
              {t(
                "Mémorisation de la session, statut du popup de bienvenue et sécurité des formulaires.",
                "Session caching, welcome modal state, and secure form transmission."
              )}
            </p>

            <div className="flex items-center justify-between pt-1 pb-1 border-b border-zinc-200">
              <span className="font-bold text-zinc-900">
                {t("Mesure d'audience & Télémétrie", "Analytics & Telemetry")}
              </span>
              <span className="text-zinc-600">{t("Optionnels", "Optional")}</span>
            </div>
            <p className="text-zinc-600 text-[10.5px]">
              {t(
                "Statistiques d'utilisation agrégées et anonymisées permettant d'améliorer l'ergonomie.",
                "Aggregated, privacy-preserving usage metrics used strictly to enhance UX performance."
              )}
            </p>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-zinc-100 text-[11px] font-mono">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowDetails(!showDetails)}
              className="text-zinc-600 hover:text-zinc-950 underline flex items-center gap-1 transition-colors"
            >
              <Settings2 size={12} />
              <span>
                {showDetails
                  ? t("Masquer les détails", "Hide details")
                  : t("Personnaliser", "Customize")}
              </span>
            </button>
            <Link
              href="/politique-de-confidentialite"
              className="text-zinc-500 hover:text-zinc-900 underline transition-colors"
            >
              {t("Politique de Confidentialité", "Privacy Policy")}
            </Link>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleAcceptEssential}
              className="flex-1 sm:flex-none px-3 py-2 bg-white border border-zinc-300 hover:border-zinc-950 text-zinc-800 text-xs font-mono font-medium transition-colors"
            >
              {t("Refuser non-essentiels", "Decline Non-Essential")}
            </button>
            <button
              type="button"
              onClick={handleAcceptAll}
              className="flex-1 sm:flex-none px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-mono font-bold transition-all shadow-sm flex items-center justify-center gap-1.5"
            >
              <Check size={13} />
              <span>{t("Tout Accepter", "Accept All")}</span>
            </button>
          </div>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}
