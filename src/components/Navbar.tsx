"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { num: "01", name: t("Expertise", "Expertise"), href: "#about" },
    { num: "02", name: t("Réalisations", "Projects"), href: "#projects", badge: "10" },
    { num: "03", name: t("Contact", "Contact"), href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#f7f7f5]/95 backdrop-blur-md border-b border-zinc-200/90 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* LOGO DANS SON CADRE ORGANIQUE SIGNATURE */}
          <Link href="/" className="flex items-center gap-3.5 group focus:outline-none">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white border-2 border-zinc-900 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] flex items-center justify-center overflow-hidden shadow-sm group-hover:rounded-[40%_60%_70%_30%/50%_60%_30%_50%] transition-all duration-500">
              <Image
                src="/Logo_IK.png"
                alt="Logo Ibrahim Karamoko"
                width={36}
                height={36}
                className="w-[75%] h-auto object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-zinc-900 group-hover:text-blue-600 transition-colors uppercase">
                Ibrahim Karamoko
              </span>
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                {t("e-Santé & IA Engineer", "Digital Health & AI Engineer")}
              </span>
            </div>
          </Link>

          {/* MENU DESKTOP ÉDITORIAL CLAUDE STYLE */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono uppercase tracking-wider text-zinc-600 hover:text-zinc-950 transition-colors flex items-center gap-1.5 group py-1"
              >
                <span className="text-[10px] text-zinc-400 group-hover:text-zinc-900 transition-colors">{link.num}.</span>
                <span className="font-semibold">{link.name}</span>
                {link.badge && (
                  <span className="text-[9px] px-1.5 py-0.2 border border-zinc-300 text-zinc-700 bg-white font-mono">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}

            <div className="h-4 w-[1px] bg-zinc-300"></div>

            {/* LIEN VERS LE CV OFFICIEL */}
            <Link
              href="/cv"
              className="text-xs font-mono uppercase tracking-wider text-zinc-600 hover:text-zinc-950 transition-colors flex items-center gap-1 py-1"
            >
              <span>{t("Curriculum", "Resume / CV")}</span>
              <ArrowUpRight size={12} className="text-zinc-400" />
            </Link>

            {/* SÉLECTEUR DE LANGUE BILINGUE FR / EN */}
            <div className="flex items-center border border-zinc-300 bg-white p-0.5 font-mono text-[11px]">
              <button
                type="button"
                onClick={() => setLanguage("fr")}
                className={`px-2 py-0.5 transition-colors uppercase ${
                  language === "fr"
                    ? "bg-zinc-900 text-white font-bold"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
                aria-label="Passer en Français"
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 transition-colors uppercase ${
                  language === "en"
                    ? "bg-zinc-900 text-white font-bold"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>

            <a
              href="#contact"
              className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-mono uppercase tracking-wider transition-all duration-200 border border-zinc-900 hover:shadow-md"
            >
              {t("Discutons.", "Let's Talk.")}
            </a>
          </nav>

          {/* BOUTON MOBILE + LANG TOGGLE */}
          <div className="flex items-center gap-2 md:hidden">
            {/* SÉLECTEUR MOBILE COMPACT */}
            <div className="flex items-center border border-zinc-300 bg-white p-0.5 font-mono text-[10px]">
              <button
                type="button"
                onClick={() => setLanguage("fr")}
                className={`px-1.5 py-0.5 uppercase ${
                  language === "fr" ? "bg-zinc-900 text-white font-bold" : "text-zinc-600"
                }`}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-1.5 py-0.5 uppercase ${
                  language === "en" ? "bg-zinc-900 text-white font-bold" : "text-zinc-600"
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
              className="p-2 text-zinc-900 border border-zinc-300 bg-white"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER ÉDITORIAL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[73px] z-40 bg-[#f7f7f5] border-b border-zinc-300 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-mono uppercase tracking-wider text-zinc-900 py-2 border-b border-zinc-200 flex justify-between items-center"
                >
                  <span>{link.num} &mdash; {link.name}</span>
                  {link.badge && (
                    <span className="text-xs px-2 py-0.5 border border-zinc-300 bg-white">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}

              <Link
                href="/cv"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono uppercase tracking-wider text-zinc-900 py-2 border-b border-zinc-200 flex justify-between items-center"
              >
                <span>{t("Curriculum Vitae (1 Page A4)", "Curriculum Vitae (1 Page A4)")}</span>
                <ArrowUpRight size={14} />
              </Link>

              {/* SÉLECTEUR DE LANGUE DANS LE MENU MOBILE */}
              <div className="flex items-center justify-between py-2 border-b border-zinc-200 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-zinc-600">
                  <Globe size={14} />
                  <span>{t("Langue du site", "Site Language")}</span>
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setLanguage("fr")}
                    className={`px-3 py-1 text-xs border ${
                      language === "fr" ? "bg-zinc-900 text-white font-bold border-zinc-900" : "bg-white text-zinc-700 border-zinc-300"
                    }`}
                  >
                    Français
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={`px-3 py-1 text-xs border ${
                      language === "en" ? "bg-zinc-900 text-white font-bold border-zinc-900" : "bg-white text-zinc-700 border-zinc-300"
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider mt-2"
              >
                {t("Démarrer une collaboration", "Start a Collaboration")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}