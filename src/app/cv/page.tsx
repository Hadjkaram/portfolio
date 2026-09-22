"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ShieldCheck,
  Zap,
  Star,
  Award,
  ArrowLeft,
  Printer,
  GraduationCap,
  Users,
} from "lucide-react";

export default function CVPage() {
  const printCV = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-zinc-900 p-3 md:p-6 font-sans print:bg-white print:p-0">
      {/* BARRE D'ACTIONS (MASQUÉE À L'IMPRESSION) */}
      <div className="max-w-5xl mx-auto mb-4 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-zinc-300 text-xs font-mono uppercase tracking-wider text-zinc-800 hover:border-zinc-950 transition-colors shadow-sm"
        >
          <ArrowLeft size={13} />
          <span>Retour au Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
            Format exécutif 1 page A4
          </span>
          <button
            type="button"
            onClick={printCV}
            className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider font-bold hover:bg-zinc-800 transition-all shadow-sm"
          >
            <Printer size={13} />
            <span>Imprimer / PDF (1 Page)</span>
          </button>
        </div>
      </div>

      {/* FEUILLE A4 1-PAGE ÉDITORIALE ÉLÉGANTE */}
      <div className="max-w-5xl mx-auto bg-white border border-zinc-300 p-5 md:p-7 shadow-sm print:border-none print:shadow-none print:p-2 page-break-avoid">
        {/* HEADER CV ULTRA COMPACT */}
        <header className="border-b border-zinc-900 pb-3 mb-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2">
            <div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tight text-zinc-950 uppercase leading-none">
                Ibrahim Karamoko
              </h1>
              <p className="text-xs font-bold text-sky-700 font-mono tracking-wider uppercase mt-1">
                Tech Lead IA & Cybersécurité | CTO Opérationnel
              </p>
            </div>
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest bg-zinc-100 px-2 py-0.5 border border-zinc-200">
              Profil Exécutif • 10+ Ans d&apos;Expérience
            </div>
          </div>

          {/* COORDONNÉES EN 1 SEULE LIGNE */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-[11px] text-zinc-600 font-mono pt-2 border-t border-zinc-100">
            <span className="flex items-center gap-1">
              <MapPin size={11} className="text-zinc-900" />
              Abidjan & International
            </span>
            <span className="flex items-center gap-1">
              <Mail size={11} className="text-zinc-900" />
              ibrahim92karamoko@gmail.com
            </span>
            <span className="flex items-center gap-1">
              <Phone size={11} className="text-zinc-900" />
              +225 07 16 31 37 08 / 01 01 59 41 53
            </span>
            <a
              href="https://www.linkedin.com/in/el-hadj-ibrahim-v-karamoko-76951613b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-zinc-900 hover:underline font-bold"
            >
              <Linkedin size={11} />
              linkedin.com/in/el-hadj-ibrahim-v-karamoko-76951613b
            </a>
          </div>
        </header>

        {/* PROFIL RÉSUMÉ 1 LIGNE / 2 PHRASES */}
        <div className="mb-3 px-3 py-1.5 bg-zinc-50 border-l-2 border-zinc-900 text-[11px] text-zinc-800 leading-snug">
          <strong>Tech Lead & CTO Opérationnel hands-on</strong> spécialisé dans l&apos;architecture distribuée, l&apos;IA appliquée (YOLOv8/v11, RAG, Web Scraping) et la cybersécurité des systèmes critiques. Direction d&apos;équipes agiles, livraison d&apos;infrastructures nationales et multilatérales (UNICEF, PNUD, OMS, AFD, MSHP-CMU, Laboratoire Roche).
        </div>

        {/* GRILLE 2 COLONNES MONO-PAGE (SIDEBAR 32% / CONTENU 68%) */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.95fr] gap-4">
          
          {/* COLONNE GAUCHE (SIDEBAR TECHNIQUE & LEADERSHIP) */}
          <aside className="space-y-3">
            
            {/* MANAGEMENT & LEADERSHIP (ENCADRÉ PHARE) */}
            <div className="p-2.5 bg-zinc-900 text-white">
              <div className="flex items-center gap-1.5 pb-1 border-b border-zinc-800 mb-1.5">
                <Users size={13} className="text-sky-400" />
                <h3 className="text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                  Management Tech
                </h3>
              </div>
              <ul className="text-[10.5px] space-y-1 text-zinc-300 leading-tight">
                <li>• <strong>Lead direct de 5 personnes</strong> (3 dévs juniors, 2 stagiaires).</li>
                <li>• <strong>Revues de code (MRs)</strong> : <strong>-40% régressions</strong> en production.</li>
                <li>• Sprints Agile/Scrum & culture <strong>Clean Code / DDD</strong>.</li>
              </ul>
            </div>

            {/* COMPÉTENCES & STACK TECHNIQUE */}
            <div className="p-2.5 bg-zinc-50 border border-zinc-200 space-y-2">
              <h3 className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-900 pb-1 border-b border-zinc-200 flex items-center gap-1">
                <Zap size={12} className="text-amber-600" /> Stack & Outils Clés
              </h3>

              <div>
                <span className="text-[9.5px] font-mono uppercase text-zinc-500 font-bold block mb-0.5">
                  IA, Computer Vision & LLM
                </span>
                <p className="text-[10.5px] text-zinc-800 leading-tight">
                  YOLOv8/v11, PyTorch, OpenCV, MLOps, RAG, pgvector, LangChain.
                </p>
              </div>

              <div>
                <span className="text-[9.5px] font-mono uppercase text-zinc-500 font-bold block mb-0.5">
                  Web Scraping & Agentic AI
                </span>
                <p className="text-[10.5px] text-zinc-800 leading-tight font-medium">
                  Playwright, Scrapy, BeautifulSoup • Google Antigravity + Gemini, Claude Code, Codex, MCP.
                </p>
              </div>

              <div>
                <span className="text-[9.5px] font-mono uppercase text-zinc-500 font-bold block mb-0.5">
                  Backend, Cloud & Mobile
                </span>
                <p className="text-[10.5px] text-zinc-800 leading-tight">
                  FastAPI, Node.js (TS), Spring Boot, PostgreSQL RLS, Docker, AWS • React, Next.js, Flutter, React Native Expo.
                </p>
              </div>
            </div>

            {/* CERTIFICATIONS MONDIALES */}
            <div className="p-2.5 bg-zinc-50 border border-zinc-200">
              <h3 className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-900 mb-1.5 flex items-center gap-1 border-b border-zinc-200 pb-1">
                <Award size={12} className="text-sky-700" /> Certifications
              </h3>
              <ul className="text-[10px] space-y-1 text-zinc-800 leading-tight">
                <li className="flex items-center gap-1">
                  <ShieldCheck size={11} className="text-emerald-700 shrink-0" />
                  <span><strong>CISSP®</strong> &mdash; Sécurité des Systèmes d&apos;Information</span>
                </li>
                <li className="flex items-center gap-1">
                  <ShieldCheck size={11} className="text-emerald-700 shrink-0" />
                  <span><strong>CompTIA Security+</strong> &mdash; Défense & Crypto</span>
                </li>
                <li className="flex items-center gap-1">
                  <ShieldCheck size={11} className="text-emerald-700 shrink-0" />
                  <span><strong>Digital Health</strong> &mdash; Imperial College London</span>
                </li>
                <li className="flex items-center gap-1">
                  <ShieldCheck size={11} className="text-emerald-700 shrink-0" />
                  <span><strong>Google Data & Security</strong> &mdash; Cloud Ingénierie</span>
                </li>
              </ul>
            </div>

            {/* FORMATION SUPÉRIEURE */}
            <div className="p-2.5 bg-zinc-50 border border-zinc-200">
              <h3 className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-900 mb-1.5 flex items-center gap-1 border-b border-zinc-200 pb-1">
                <GraduationCap size={12} /> Formation
              </h3>
              <ul className="text-[10px] space-y-1 text-zinc-800 leading-tight">
                <li>
                  <strong className="block text-zinc-950">Master Exec. IA & Cybersécurité</strong>
                  <span className="text-zinc-500 font-mono">HEC Maroc • 2024 &mdash; 2025</span>
                </li>
                <li>
                  <strong className="block text-zinc-950">Deep Learning Specialization</strong>
                  <span className="text-zinc-500 font-mono">Stanford / Coursera • 2025</span>
                </li>
                <li>
                  <strong className="block text-zinc-950">Licence Génie Logiciel & Réseaux</strong>
                  <span className="text-zinc-500 font-mono">PIGIER Côte d&apos;Ivoire • 2014 &mdash; 2017</span>
                </li>
              </ul>
            </div>

            {/* LANGUES */}
            <div className="p-2 bg-zinc-50 border border-zinc-200 flex justify-between items-center text-[10px] font-mono">
              <span>Français : <strong>Maternelle (C2)</strong></span>
              <span>Anglais : <strong>Courant (B2)</strong></span>
            </div>
          </aside>

          {/* COLONNE DROITE (PROJETS STRATÉGIQUES & EXPÉRIENCES PROFESSIONNELLES) */}
          <div className="space-y-3">
            
            {/* 4 PROJETS STRATÉGIQUES MAJEURS */}
            <section>
              <h3 className="text-[10.5px] font-mono font-bold uppercase tracking-[0.15em] text-zinc-500 mb-1.5 flex items-center gap-1.5 border-b border-zinc-200 pb-0.5">
                <Star size={12} className="text-amber-600" /> Réalisations Stratégiques Déployées
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {/* KANYEH ASSIST */}
                <div className="p-2 bg-zinc-50 border border-zinc-200">
                  <div className="flex justify-between items-center mb-0.5">
                    <strong className="text-[11px] text-zinc-950 font-bold">KANYEH ASSIST</strong>
                    <span className="text-[8.5px] font-mono font-bold px-1 bg-blue-100 text-blue-800">ROCHE & CHU</span>
                  </div>
                  <p className="text-[10px] text-zinc-700 leading-tight">
                    Télé-diagnostic anatomopathologique (CHU Bouaké, Treichville, PNLC, Labo Roche). Modèles <strong>YOLOv8/v11</strong> pour atypies cellulaires, visionneuse WSI TIFF et PostgreSQL RLS.
                  </p>
                </div>

                {/* TILA */}
                <div className="p-2 bg-zinc-50 border border-zinc-200">
                  <div className="flex justify-between items-center mb-0.5">
                    <strong className="text-[11px] text-zinc-950 font-bold">TILA</strong>
                    <span className="text-[8.5px] font-mono font-bold px-1 bg-purple-100 text-purple-800">UNICEF • PNUD • OMS</span>
                  </div>
                  <p className="text-[10px] text-zinc-700 leading-tight">
                    Santé mentale multilatérale (UNICEF, PNUD, AFD, Expertise France, PNLT, OMS, PNSM). App mobile ci.tila.app, téléconsultations chiffrées AES-256 et WebSockets.
                  </p>
                </div>

                {/* NURIA */}
                <div className="p-2 bg-zinc-50 border border-zinc-200">
                  <div className="flex justify-between items-center mb-0.5">
                    <strong className="text-[11px] text-zinc-950 font-bold">NURIA</strong>
                    <span className="text-[8.5px] font-mono font-bold px-1 bg-emerald-100 text-emerald-800">UNICEF & MSHP</span>
                  </div>
                  <p className="text-[10px] text-zinc-700 leading-tight">
                    1ère plateforme africaine de neurodéveloppement pédiatrique. Moteur de scoring clinique automatisé, synchronisation résiliente offline-first sous Docker/AWS.
                  </p>
                </div>

                {/* XH SKILLS ACADEMY */}
                <div className="p-2 bg-zinc-50 border border-zinc-200">
                  <div className="flex justify-between items-center mb-0.5">
                    <strong className="text-[11px] text-zinc-950 font-bold">XH SKILLS ACADEMY</strong>
                    <span className="text-[8.5px] font-mono font-bold px-1 bg-amber-100 text-amber-800">EDTECH SANTÉ AFRIQUE</span>
                  </div>
                  <p className="text-[10px] text-zinc-700 leading-tight">
                    Formations e-santé Afrique portées par Corine M. Ouattara. <strong>Tech Lead & Formateur</strong> : Architecture LMS Next.js et streaming vidéo optimisé bas débit.
                  </p>
                </div>
              </div>
            </section>

            {/* EXPÉRIENCES PROFESSIONNELLES CLÉS */}
            <section>
              <h3 className="text-[10.5px] font-mono font-bold uppercase tracking-[0.15em] text-zinc-500 mb-1.5 flex items-center gap-1.5 border-b border-zinc-200 pb-0.5">
                <Zap size={12} className="text-zinc-900" /> Expériences Professionnelles Clés
              </h3>

              <div className="space-y-2">
                {/* EXP 1 : MCM GROUP SAS / PASS SANTÉ MOUSSO */}
                <div className="border-l-2 border-zinc-900 pl-2.5 py-0.5">
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-[11px] font-bold text-zinc-950">
                      Tech Lead IA & Senior Fullstack &mdash; <span className="font-normal text-zinc-600 font-mono text-[10px]">MCM GROUP SAS / PASS SANTÉ MOUSSO</span>
                    </h4>
                    <span className="text-[9.5px] font-mono text-zinc-500 font-bold shrink-0">Janv. 2024 &mdash; Présent</span>
                  </div>
                  <ul className="text-[10px] text-zinc-700 space-y-0.5 mt-0.5 leading-tight list-disc pl-3">
                    <li><strong>Management de 5 ingénieurs</strong> (3 juniors + 2 stagiaires). Revues de code strictes : <strong>-40% de bugs en prod</strong>.</li>
                    <li>Conception microservices FastAPI, Node.js, Spring Boot & frontends React/Flutter sous conteneurisation Docker.</li>
                  </ul>
                </div>

                {/* EXP 2 : ADOMED.care */}
                <div className="border-l-2 border-zinc-300 pl-2.5 py-0.5">
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-[11px] font-bold text-zinc-950">
                      Chef de Projet IT / Lead Dev IA & Scrum Master &mdash; <span className="font-normal text-zinc-600 font-mono text-[10px]">ADOMED.care</span>
                    </h4>
                    <span className="text-[9.5px] font-mono text-zinc-500 font-bold shrink-0">2023 &mdash; Présent</span>
                  </div>
                  <p className="text-[10px] text-zinc-700 leading-tight mt-0.5">
                    Pipeline MLOps de la <strong>1ère IA médicale d&apos;orientation diagnostique en Côte d&apos;Ivoire</strong> interconnectée à l&apos;ERP clinique Spring Boot.
                  </p>
                </div>

                {/* EXP 3 : AVLYTECH */}
                <div className="border-l-2 border-zinc-300 pl-2.5 py-0.5">
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-[11px] font-bold text-zinc-950">
                      Co-Fondateur & Chief Technology Officer (CTO) &mdash; <span className="font-normal text-zinc-600 font-mono text-[10px]">AVLYTECH (France)</span>
                    </h4>
                    <span className="text-[9.5px] font-mono text-zinc-500 font-bold shrink-0">2022 &mdash; Présent</span>
                  </div>
                  <p className="text-[10px] text-zinc-700 leading-tight mt-0.5">
                    Roadmap technologique et architecture SaaS scalable (Next.js, base vectorielle pgvector, pipelines RAG).
                  </p>
                </div>

                {/* EXP 4 : IVAGREL */}
                <div className="border-l-2 border-zinc-300 pl-2.5 py-0.5">
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-[11px] font-bold text-zinc-950">
                      Responsable Informatique &mdash; <span className="font-normal text-zinc-600 font-mono text-[10px]">IVAGREL</span>
                    </h4>
                    <span className="text-[9.5px] font-mono text-zinc-500 font-bold shrink-0">2018 &mdash; 2023 (5 ans)</span>
                  </div>
                  <p className="text-[10px] text-zinc-700 leading-tight mt-0.5">
                    Refonte globale du SI d&apos;entreprise et migration Cloud AWS/Docker pour 200+ agents. Sécurité et Plan de Continuité (PCA).
                  </p>
                </div>

                {/* EXP 5 : ECOBANK / SITEL */}
                <div className="border-l-2 border-zinc-300 pl-2.5 py-0.5">
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-[11px] font-bold text-zinc-950">
                      Analyste Développeur Fullstack &mdash; <span className="font-normal text-zinc-600 font-mono text-[10px]">ECOBANK / SITEL</span>
                    </h4>
                    <span className="text-[9.5px] font-mono text-zinc-500 font-bold shrink-0">2017 &mdash; 2018</span>
                  </div>
                  <p className="text-[10px] text-zinc-700 leading-tight mt-0.5">
                    Applications financières et automatisation de flux de paiement transactionnels bancaires sécurisés.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* PIED DU CV */}
        <footer className="mt-3 pt-2 border-t border-zinc-200 flex justify-between items-center text-[9px] font-mono text-zinc-500">
          <span>Ibrahim KARAMOKO &mdash; Tech Lead IA & Cybersécurité | CTO</span>
          <span className="text-zinc-900 font-bold">Dossier Candidature Exécutif • {new Date().getFullYear()}</span>
        </footer>
      </div>

      {/* LIENS LÉGAUX BAS DE PAGE (MASQUÉS À L'IMPRESSION) */}
      <div className="max-w-5xl mx-auto mt-4 text-center print:hidden text-xs font-mono text-zinc-500 space-x-6">
        <Link href="/conditions-generales" className="hover:text-zinc-950 underline transition-colors">
          Conditions Générales de Service
        </Link>
        <Link href="/politique-de-confidentialite" className="hover:text-zinc-950 underline transition-colors">
          Politique de Confidentialité
        </Link>
      </div>
    </main>
  );
}