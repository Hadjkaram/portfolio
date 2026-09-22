"use client";

import Navbar from "@/components/Navbar";
import AboutBento from "@/components/AboutBento";
import ProjectsAvantGarde from "@/components/ProjectsAvantGarde";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  ShieldCheck,
  BrainCircuit,
  HeartPulse,
  FileText,
} from "lucide-react";

export default function Home() {
  const kpis = [
    { value: "10+", label: "Années d'Expérience", detail: "Systèmes critiques & Cloud" },
    { value: "15+", label: "Architectures Déployées", detail: "Santé, GovTech, FinTech" },
    { value: "UNICEF", label: "Validation Officielle", detail: "Plateforme nationale Nuria" },
    { value: "80%", label: "Précision IA Médicale", detail: "Télépathologie SiPath" },
  ];

  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 overflow-hidden relative">
      {/* NAVIGATION GLOBALE */}
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-28 sm:pt-32 pb-16 relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* GAUCHE : TEXTE & VALEUR AJOUTÉE (7 COLS) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left z-10"
          >
            {/* BADGE DE DISPONIBILITÉ */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-lg shadow-cyan-950/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-300">
                Disponible pour advisory, missions stratégiques & IA
              </span>
            </div>

            {/* TITRE PERCUTANT */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6">
              ARCHITECTE IA & <br />
              <span className="text-gradient-cyan">
                LEAD FULLSTACK.
              </span>
            </h1>

            {/* DESCRIPTION & POSITIONNEMENT */}
            <div className="space-y-4 max-w-2xl mb-8">
              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed border-l-2 border-cyan-500 pl-4 sm:pl-6">
                Je suis <strong className="text-white font-semibold">El Hadj Ibrahim V. Karamoko</strong> — J’architecte des solutions intelligentes et des infrastructures critiques pour les institutions gouvernementales, les ONG internationales et les organisations visionnaires.
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed pl-4 sm:pl-6">
                Consultant e-Santé auprès du Ministère de la Santé (MSHP-CMU), concepteur d’IA médicale validée par l’UNICEF et la SiPath, et diplômé d’un Master Executive à HEC Maroc.
              </p>
            </div>

            {/* ACTIONS CTA */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400 hover:brightness-110 shadow-lg shadow-cyan-500/25 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Explorer les 15 Réalisations</span>
                <ArrowDown size={16} />
              </a>

              <Link
                href="/cv"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full text-sm font-semibold text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-800 transition-all text-center flex items-center justify-center gap-2"
              >
                <FileText size={16} className="text-cyan-400" />
                <span>Consulter mon CV</span>
                <ArrowUpRight size={14} className="text-slate-400" />
              </Link>
            </div>
          </motion.div>

          {/* DROITE : PORTRAIT REDESIGNÉ DANS UN CADRE CYBER HAUT DE GAMME (5 COLS) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* LUEUR ARRIÈRE-PLAN */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-purple-600/20 rounded-full blur-[90px] -z-10 pointer-events-none"></div>

            {/* CADRE AVATAR & PHOTO */}
            <div className="relative w-[300px] sm:w-[380px] h-[360px] sm:h-[440px] rounded-3xl p-3 bg-gradient-to-b from-cyan-500/30 via-slate-800/60 to-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden flex items-end justify-center group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-70"></div>

              {/* PHOTO D'IBRAHIM OPTIMISÉE NEXT/IMAGE */}
              <div className="relative w-full h-[110%] z-0">
                <Image
                  src="/ibrahim-photo.png"
                  alt="El Hadj Ibrahim V. Karamoko"
                  fill
                  sizes="(max-width: 768px) 300px, 380px"
                  priority
                  className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-700 ease-out origin-bottom"
                />
              </div>

              {/* CARTOUCHE BASSE NOM & STATUT */}
              <div className="absolute bottom-4 inset-x-4 z-20 p-3 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 flex items-center justify-between">
                <div>
                  <span className="block text-xs font-bold text-white">El Hadj Ibrahim Karamoko</span>
                  <span className="text-[11px] font-mono text-cyan-400">Consultant e-Santé | Lead IA</span>
                </div>
                <div className="w-8 h-8 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <HeartPulse size={16} />
                </div>
              </div>
            </div>

            {/* BADGES FLOTTANTS DÉCORATIFS */}
            <div className="hidden sm:flex absolute -top-4 -right-4 p-3 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-xl items-center gap-2.5 z-20">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                <ShieldCheck size={18} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-white">Certifié CISSP</span>
                <span className="text-[10px] font-mono text-slate-400">Cyber & Sécurité</span>
              </div>
            </div>

            <div className="hidden sm:flex absolute bottom-12 -left-6 p-3 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-xl items-center gap-2.5 z-20">
              <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                <BrainCircuit size={18} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-white">IA SiPath & UNICEF</span>
                <span className="text-[10px] font-mono text-slate-400">Santé Numérique</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BANDEAU DES MÉTRIQUES CLÉS (KPIS) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {kpis.map((kpi, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
                {kpi.value}
              </span>
              <span className="text-sm font-bold text-cyan-400 mt-1">{kpi.label}</span>
              <span className="text-xs text-slate-500 mt-0.5">{kpi.detail}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* SECTIONS CONTENU */}
      <AboutBento />
      <ProjectsAvantGarde />
      <Contact />
      <Chatbot />

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 p-1 flex items-center justify-center relative">
              <Image src="/Logo_IK.png" alt="Logo" width={28} height={28} className="object-contain" />
            </div>
            <span className="text-xs text-slate-400 font-mono">
              © {new Date().getFullYear()} El Hadj Ibrahim V. Karamoko • Tous droits réservés.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Haut de page</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">Expertise</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Réalisations</a>
            <Link href="/cv" className="hover:text-cyan-400 transition-colors">Curriculum Vitae</Link>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}