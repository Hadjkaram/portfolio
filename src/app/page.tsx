"use client";

import Navbar from "@/components/Navbar";
import AboutBento from "@/components/AboutBento";
import ProjectsAvantGarde from "@/components/ProjectsAvantGarde";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Home() {
  const kpis = [
    { value: "10+", label: "Années d'Expérience", detail: "Systèmes critiques & Cloud" },
    { value: "15", label: "Architectures Déployées", detail: "Santé, GovTech, FinTech" },
    { value: "UNICEF", label: "Validation Officielle", detail: "Plateforme nationale Nuria" },
    { value: "80%", label: "Précision IA Médicale", detail: "Télépathologie SiPath" },
  ];

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-zinc-900 selection:bg-zinc-900 selection:text-white overflow-hidden">
      {/* NAVIGATION MINIMALISTE ÉDITORIALE AVEC LOGO SIGNATURE */}
      <Navbar />

      {/* HERO SECTION 2 COLONNES (TEXTE + PHOTO SIGNATURE RESTAURÉE) */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pt-28 pb-16 relative">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-16 w-full">
          
          {/* GAUCHE : TEXTE & VALEUR STRATÉGIQUE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-3/5 z-10 flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0"
          >
            {/* LIGNE DE STATUT */}
            <div className="inline-flex items-center gap-2 mb-6 text-xs font-mono uppercase tracking-wider text-zinc-600 bg-white border border-zinc-200 px-3 py-1 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Consultant e-Santé & Architecte IA — Disponible</span>
            </div>

            <h1 className="text-[13vw] md:text-[6.8vw] font-black leading-[0.88] tracking-tighter text-zinc-950 mb-8 uppercase">
              FULLSTACK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700">
                & AI ENGINEER.
              </span>
            </h1>

            <div className="flex flex-col gap-6 items-center md:items-start max-w-xl">
              <p className="text-lg md:text-xl text-zinc-700 font-medium md:border-l-4 md:border-sky-500 md:pl-6 leading-relaxed text-balance">
                Je suis <strong className="text-zinc-950 font-bold">El Hadj Ibrahim V. Karamoko</strong> — J&apos;architecte des solutions intelligentes et des infrastructures critiques pour les institutions étatiques, les organisations internationales (UNICEF) et les startups visionnaires.
              </p>

              {/* BADGES TECHNOLOGIQUES SIGNATURE */}
              <div className="flex items-center gap-4 mt-2">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-zinc-900 flex items-center justify-center text-white font-mono font-bold text-[10px] shadow-sm">
                    AWS
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-sky-500 flex items-center justify-center text-white font-mono font-bold text-[10px] shadow-sm">
                    IA
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-white font-mono font-bold text-[10px] shadow-sm">
                    DEV
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-zinc-800 flex items-center justify-center text-white font-mono font-bold text-[10px] shadow-sm">
                    SEC
                  </div>
                </div>

                <div className="text-left text-xs font-mono text-zinc-500 leading-tight">
                  <span className="font-bold text-zinc-900">10+ Années</span>
                  <br />
                  d&apos;ingénierie & d&apos;impact
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-wrap items-center gap-4 mt-4 w-full sm:w-auto">
                <a
                  href="#projects"
                  className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 hover:shadow-lg"
                >
                  <span>Explorer les 15 Réalisations</span>
                  <ArrowDownRight size={14} />
                </a>

                <Link
                  href="/cv"
                  className="px-6 py-3.5 bg-white border border-zinc-300 hover:border-zinc-900 text-zinc-900 text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <span>Curriculum Vitae</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* DROITE : TA PHOTO DANS SON CADRE ORGANIQUE DYNAMIQUE RESTAURÉ & AMÉLIORÉ */}
          <div className="w-full md:w-2/5 relative flex justify-center items-center h-[380px] md:h-[580px]">
            {/* Lueur de fond douce */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-sky-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

            {/* LE CADRE (BLOB) ORGANIQUE SIGNATURE D'IBRAHIM */}
            <div className="relative w-[320px] h-[320px] md:w-[460px] md:h-[460px] bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden shadow-2xl border-4 border-white flex justify-center items-end group transition-all duration-700 hover:rounded-[40%_60%_70%_30%/50%_60%_30%_50%]">
              
              {/* TA PHOTO DANS LE CADRE */}
              <Image
                src="/ibrahim-photo.png"
                alt="El Hadj Ibrahim V. Karamoko"
                width={500}
                height={550}
                priority
                className="w-auto h-[115%] md:h-[120%] object-contain object-bottom drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-out z-10 origin-bottom"
              />
            </div>
          </div>

        </div>

        {/* RUBAN ÉDITORIAL DE MÉTRIQUES CLÉS (KPIS) */}
        <div className="mt-20 pt-8 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          {kpis.map((kpi, idx) => (
            <div key={idx} className="flex flex-col text-left">
              <span className="text-3xl md:text-4xl font-black text-zinc-950 tracking-tight font-mono">
                {kpi.value}
              </span>
              <span className="text-xs font-bold font-mono uppercase text-zinc-900 mt-1">
                {kpi.label}
              </span>
              <span className="text-xs text-zinc-500 mt-0.5">
                {kpi.detail}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTIONS */}
      <AboutBento />
      <ProjectsAvantGarde />
      <Contact />
      <Chatbot />

      {/* FOOTER ÉDITORIAL */}
      <footer className="border-t border-zinc-200 bg-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold text-xs uppercase tracking-widest text-zinc-900">
              [IK] EL HADJ IBRAHIM V. KARAMOKO
            </span>
            <span className="text-xs text-zinc-400 font-mono hidden sm:inline">•</span>
            <span className="text-xs text-zinc-500 font-mono hidden sm:inline">
              Abidjan, Côte d&apos;Ivoire & International
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-zinc-600">
            <a href="#about" className="hover:text-zinc-950 transition-colors">01. Profil</a>
            <a href="#projects" className="hover:text-zinc-950 transition-colors">02. Projets</a>
            <Link href="/cv" className="hover:text-zinc-950 transition-colors">Curriculum</Link>
            <a href="#contact" className="hover:text-zinc-950 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}