"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FileText, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export default function Navbar() {
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
    { name: "Expertise", href: "#about" },
    { name: "Réalisations", href: "#projects", badge: "15" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* LOGO & BRAND */}
          <Link
            href="/"
            className="pointer-events-auto flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-11 h-11 rounded-xl bg-slate-900/90 border border-slate-700/80 p-1 flex items-center justify-center shadow-lg shadow-cyan-950/30 group-hover:border-cyan-500/60 transition-all duration-300">
              <Image
                src="/Logo_IK.png"
                alt="Logo Ibrahim Karamoko"
                width={36}
                height={36}
                className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-900 animate-pulse"></div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-extrabold text-sm tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Ibrahim Karamoko
              </span>
              <span className="text-[10px] font-mono tracking-wider text-cyan-400/90 uppercase">
                Architecte IA & e-Santé
              </span>
            </div>
          </Link>

          {/* DESKTOP FLOATING PILL */}
          <nav
            className={`pointer-events-auto hidden md:flex items-center gap-1 p-1.5 rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-slate-900/85 backdrop-blur-xl border border-slate-700/60 shadow-xl shadow-black/40"
                : "bg-slate-900/50 backdrop-blur-md border border-slate-800/80"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-full transition-all duration-200 hover:bg-slate-800/70 flex items-center gap-1.5"
              >
                {link.name}
                {link.badge && (
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}

            <div className="h-4 w-[1px] bg-slate-700/80 mx-1"></div>

            {/* LIEN VERS CV */}
            <Link
              href="/cv"
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 rounded-full transition-all duration-200 hover:bg-slate-800/70 flex items-center gap-1.5"
            >
              <FileText size={13} className="text-cyan-400" />
              <span>Curriculum</span>
            </Link>
          </nav>

          {/* CTA & MOBILE MENU BUTTON */}
          <div className="pointer-events-auto flex items-center gap-2.5">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400 hover:brightness-110 shadow-lg shadow-cyan-500/20 active:scale-95 transition-all duration-200"
            >
              <Sparkles size={14} className="text-slate-950" />
              <span>Démarrer un projet</span>
            </a>

            {/* HAMBURGER TOGGLE */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
              className="md:hidden w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-700 flex items-center justify-center text-slate-200 hover:text-cyan-400 hover:border-cyan-500 transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 p-6 rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-slate-800 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono uppercase text-slate-400">Navigation</span>
                <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Disponible
                </span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-200 hover:text-cyan-400 py-1.5 flex items-center justify-between transition-colors"
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {link.badge} projets
                    </span>
                  )}
                </a>
              ))}

              <Link
                href="/cv"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-cyan-400 py-1.5 flex items-center justify-between transition-colors"
              >
                <span className="flex items-center gap-2">
                  <FileText size={16} className="text-cyan-400" />
                  Consulter mon CV
                </span>
                <ArrowUpRight size={16} className="text-slate-500" />
              </Link>

              <div className="pt-2 border-t border-slate-800">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 shadow-lg shadow-cyan-500/20"
                >
                  <Sparkles size={16} />
                  <span>Démarrer un projet</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}