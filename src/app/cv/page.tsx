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
  Calendar,
} from "lucide-react";

export default function CVPage() {
  const printCV = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-zinc-900 p-4 md:p-8 font-sans print:bg-white print:p-0">
      {/* BARRE D'ACTIONS DU HAUT (CACHÉE À L'IMPRESSION) */}
      <div className="max-w-5xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-zinc-300 text-xs font-mono uppercase tracking-wider text-zinc-800 hover:border-zinc-950 transition-colors shadow-sm"
        >
          <ArrowLeft size={14} />
          <span>Retour au Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
            Optimisé pour l&apos;export A4 PDF
          </span>
          <button
            type="button"
            onClick={printCV}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider font-bold hover:bg-zinc-800 transition-all shadow-sm"
          >
            <Printer size={14} />
            <span>Imprimer / Télécharger en PDF</span>
          </button>
        </div>
      </div>

      {/* CV CONTAINER - FEUILLE A4 ÉDITORIALE ÉLÉGANTE */}
      <div className="max-w-5xl mx-auto bg-white border border-zinc-300 p-8 md:p-12 shadow-md print:border-none print:shadow-none print:p-4">
        {/* HEADER CV */}
        <header className="border-b-2 border-zinc-900 pb-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-zinc-100 border border-zinc-300 text-[10px] font-mono uppercase tracking-widest text-zinc-700 mb-2">
                Dossier Candidature & Profil Exécutif
              </div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-950 uppercase">
                Ibrahim Karamoko
              </h1>
              <h2 className="text-sm md:text-base font-bold text-sky-700 mt-1 uppercase font-mono tracking-wider">
                Tech Lead IA & Cybersécurité | CTO Opérationnel | Full-Stack Senior
              </h2>
            </div>

            <div className="text-left md:text-right shrink-0">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono font-bold">
                <Calendar size={13} />
                <span>Dispo : 3 Novembre 2026 (Temps plein)</span>
              </div>
            </div>
          </div>

          {/* COORDONNÉES */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-xs text-zinc-600 font-mono pt-3 border-t border-zinc-100">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-zinc-900" />
              Abidjan, Côte d&apos;Ivoire
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={13} className="text-zinc-900" />
              ibrahim92karamoko@gmail.com
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={13} className="text-zinc-900" />
              +225 07 16 31 37 08 / 01 01 59 41 53
            </span>
            <a
              href="https://www.linkedin.com/in/el-hadj-ibrahim-v-karamoko-76951613b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-zinc-900 hover:underline font-bold"
            >
              <Linkedin size={13} />
              linkedin.com/in/el-hadj-ibrahim-v-karamoko-76951613b
            </a>
          </div>
        </header>

        {/* PROFIL RÉSUMÉ & LEADERSHIP */}
        <div className="mb-8 p-5 bg-zinc-50 border-l-4 border-zinc-900">
          <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed font-medium">
            <strong>Tech Lead & CTO Opérationnel (10+ ans d&apos;expérience)</strong>, spécialisé dans l&apos;architecture distribuée, l&apos;IA appliquée (Computer Vision, MLOps, LLM & RAG) et la cybersécurité des systèmes critiques. Profil hands-on alliant arbitrage stratégique, écriture des briques logicielles complexes et structuration d&apos;équipes agiles performantes.
          </p>
        </div>

        {/* GRILLE 2 COLONNES PRINCIPALE (EXPÉRIENCES / SIDEBAR) */}
        <div className="grid grid-cols-1 md:grid-cols-[1.7fr_1.1fr] gap-8">
          {/* COLONNE GAUCHE : PROJETS STRATÉGIQUES & EXPÉRIENCES */}
          <div className="space-y-8">
            {/* PROJETS STRATÉGIQUES DÉPLOYÉS */}
            <section>
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3 flex items-center gap-2 border-b border-zinc-200 pb-1">
                <Star size={14} className="text-amber-600" /> Projets Stratégiques Déployés
              </h3>

              <div className="space-y-4">
                {/* KANYEH ASSIST */}
                <div className="p-4 bg-zinc-50 border border-zinc-200">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                    <strong className="text-zinc-950 text-sm">
                      KANYEH ASSIST &mdash; Architecte Technique & Lead Dev
                    </strong>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-blue-100 text-blue-800 border border-blue-300">
                      DEEP TECH & IA MÉDICALE • ROCHE & CHU
                    </span>
                  </div>
                  <p className="text-xs text-zinc-700 leading-relaxed">
                    Infrastructure nationale de télé-diagnostic anatomopathologique reliant les <strong>CHU de Bouaké, Treichville, le PNLC et le Laboratoire Roche</strong>. Modèles <strong>YOLOv8/v11</strong> pour la détection cellulaire d&apos;atypies (sein, col de l&apos;utérus), visionneuse WSI haute résolution (tuilage TIFF) et isolation stricte des données par établissement via PostgreSQL RLS.
                  </p>
                  <p className="text-[11px] font-mono text-zinc-900 mt-2 font-medium">
                    Stack : Python (FastAPI, PyTorch, OpenCV), React 18, TypeScript, Tailwind, PostgreSQL (RLS), Docker.
                  </p>
                </div>

                {/* NURIA */}
                <div className="p-4 bg-zinc-50 border border-zinc-200">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                    <strong className="text-zinc-950 text-sm">
                      NURIA &mdash; Architecte Logiciel & Tech Lead
                    </strong>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-300">
                      VALIDÉ PAR L&apos;UNICEF • MSHP
                    </span>
                  </div>
                  <p className="text-xs text-zinc-700 leading-relaxed">
                    1ère plateforme africaine de dépistage et suivi précoce des troubles neurodéveloppementaux de l&apos;enfant. Moteur de scoring clinique automatisé et synchronisation résiliente pour connectivité régionale intermittente. Déployée par le Ministère de la Santé (MSHP).
                  </p>
                  <p className="text-[11px] font-mono text-zinc-900 mt-2 font-medium">
                    Stack : Node.js (TypeScript), Next.js / React, PostgreSQL, Docker, AWS.
                  </p>
                </div>

                {/* TILA */}
                <div className="p-4 bg-zinc-50 border border-zinc-200">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                    <strong className="text-zinc-950 text-sm">
                      TILA &mdash; Architecte Mobile & Lead Dev
                    </strong>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-purple-100 text-purple-800 border border-purple-300">
                      SANTÉ MENTALE • UNICEF, PNUD, AFD, OMS, PNSM
                    </span>
                  </div>
                  <p className="text-xs text-zinc-700 leading-relaxed">
                    Plateforme et application mobile (iOS/Android - ci.tila.app) de soutien psychologique et santé mentale d&apos;envergure multilatérale. Déployée avec l&apos;<strong>UNICEF, le PNUD, l&apos;AFD, Expertise France, le PNLT, l&apos;OMS et le Programme National de Santé Mentale (PNSM)</strong>. Mise en relation confidentielle patients-thérapeutes, suivi d&apos;humeur et messagerie chiffrée de bout en bout (AES-256).
                  </p>
                  <p className="text-[11px] font-mono text-zinc-900 mt-2 font-medium">
                    Stack : React Native / Expo, TypeScript, Node.js, WebSockets, PostgreSQL, Chiffrement AES-256.
                  </p>
                </div>

                {/* XH SKILLS ACADEMY */}
                <div className="p-4 bg-zinc-50 border border-zinc-200">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                    <strong className="text-zinc-950 text-sm">
                      XH SKILLS ACADEMY &mdash; Formateur en Santé Numérique & Tech Lead
                    </strong>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-amber-100 text-amber-800 border border-amber-300">
                      EDTECH SANTÉ AFRIQUE • PORTÉE PAR CORINE M. OUATTARA
                    </span>
                  </div>
                  <p className="text-xs text-zinc-700 leading-relaxed">
                    Plateforme d&apos;apprentissage en ligne spécialisée dans les formations en santé numérique pour l&apos;Afrique (xhskillsacademy.com). Programmes éducatifs principalement gratuits et adaptés aux réalités du continent africain pour qualifier soignants et cadres de santé.
                  </p>
                  <p className="text-[11px] font-mono text-zinc-900 mt-2 font-medium">
                    Stack : Next.js / React, TypeScript, Node.js, PostgreSQL, Architecture LMS & Streaming bas débit.
                  </p>
                </div>
              </div>
            </section>

            {/* EXPÉRIENCES PROFESSIONNELLES CLÉS */}
            <section className="space-y-5">
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2 border-b border-zinc-200 pb-1">
                <Zap size={14} /> Expériences Professionnelles Clés
              </h3>

              <div className="space-y-5">
                {/* EXP 1 : MCM GROUP SAS / PASS SANTÉ MOUSSO */}
                <div className="relative pl-4 border-l-2 border-zinc-900">
                  <div className="flex justify-between items-baseline flex-wrap gap-1">
                    <h4 className="text-sm font-bold text-zinc-950">
                      Tech Lead IA & Développeur Senior Fullstack
                    </h4>
                    <span className="text-[11px] font-mono text-zinc-500 font-bold">Janv. 2024 &mdash; Présent</span>
                  </div>
                  <p className="text-xs text-sky-700 font-mono font-semibold">
                    MCM GROUP SAS / PASS SANTÉ MOUSSO • Abidjan, Côte d&apos;Ivoire
                  </p>
                  <ul className="list-disc list-outside pl-4 text-xs text-zinc-700 mt-2 space-y-1.5 leading-relaxed">
                    <li>
                      <strong>Encadrement technique direct de 5 personnes</strong> (3 développeurs juniors, 2 stagiaires ingénieurs).
                    </li>
                    <li>
                      Mise en place de <strong>revues de code systématiques (Merge Requests)</strong>, réduisant de <strong>40% les régressions</strong> et accélérant la vélocité des sprints.
                    </li>
                    <li>
                      Conception et déploiement d&apos;architectures microservices & APIs critiques (FastAPI, Node.js, Spring Boot) interfacées avec des frontends web et mobiles (React, Flutter) sous Docker/Cloud.
                    </li>
                  </ul>
                </div>

                {/* EXP 2 : ADOMED.care */}
                <div className="relative pl-4 border-l-2 border-zinc-300">
                  <div className="flex justify-between items-baseline flex-wrap gap-1">
                    <h4 className="text-sm font-bold text-zinc-950">
                      Chef de Projet IT / Lead Dev IA & Scrum Master
                    </h4>
                    <span className="text-[11px] font-mono text-zinc-500 font-bold">2023 &mdash; Présent</span>
                  </div>
                  <p className="text-xs text-sky-700 font-mono font-semibold">
                    ADOMED.care • Abidjan & International
                  </p>
                  <ul className="list-disc list-outside pl-4 text-xs text-zinc-700 mt-2 space-y-1 leading-relaxed">
                    <li>
                      Conception du <strong>pipeline MLOps du 1er module ivoirien d&apos;IA médicale</strong> interconnecté au backend Spring Boot.
                    </li>
                    <li>
                      Pilotage agile bi-hebdomadaire garantissant la fluidité des cycles de livraison et l&apos;intégrité clinique.
                    </li>
                  </ul>
                </div>

                {/* EXP 3 : AVLYTECH */}
                <div className="relative pl-4 border-l-2 border-zinc-300">
                  <div className="flex justify-between items-baseline flex-wrap gap-1">
                    <h4 className="text-sm font-bold text-zinc-950">
                      Co-Fondateur & Chief Technology Officer (CTO)
                    </h4>
                    <span className="text-[11px] font-mono text-zinc-500 font-bold">2022 &mdash; Présent</span>
                  </div>
                  <p className="text-xs text-sky-700 font-mono font-semibold">
                    AVLYTECH • France / International
                  </p>
                  <p className="text-xs text-zinc-700 mt-1 leading-relaxed">
                    Définition de la feuille de route technologique et architecture SaaS scalable (Next.js, bases vectorielles pgvector, RAG).
                  </p>
                </div>

                {/* EXP 4 : IVAGREL */}
                <div className="relative pl-4 border-l-2 border-zinc-300">
                  <div className="flex justify-between items-baseline flex-wrap gap-1">
                    <h4 className="text-sm font-bold text-zinc-950">
                      Responsable Informatique
                    </h4>
                    <span className="text-[11px] font-mono text-zinc-500 font-bold">2018 &mdash; 2023 (5 ans)</span>
                  </div>
                  <p className="text-xs text-sky-700 font-mono font-semibold">
                    IVAGREL • Abidjan, Côte d&apos;Ivoire
                  </p>
                  <p className="text-xs text-zinc-700 mt-1 leading-relaxed">
                    Refonte totale du SI d&apos;entreprise et migration Cloud (AWS/Docker) pour 200+ agents. Sécurité, gouvernance et Plan de Continuité d&apos;Activité (PCA).
                  </p>
                </div>

                {/* EXP 5 : ECOBANK / SITEL */}
                <div className="relative pl-4 border-l-2 border-zinc-300">
                  <div className="flex justify-between items-baseline flex-wrap gap-1">
                    <h4 className="text-sm font-bold text-zinc-950">
                      Analyste Développeur Fullstack
                    </h4>
                    <span className="text-[11px] font-mono text-zinc-500 font-bold">2017 &mdash; 2018</span>
                  </div>
                  <p className="text-xs text-sky-700 font-mono font-semibold">
                    ECOBANK / SITEL • Abidjan, Côte d&apos;Ivoire
                  </p>
                  <p className="text-xs text-zinc-700 mt-1 leading-relaxed">
                    Développement d&apos;applications financières et automatisation de flux de paiement transactionnels sécurisés.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* COLONNE DROITE : MANAGEMENT, COMPÉTENCES, CERTIFS & ÉTUDES */}
          <aside className="space-y-6">
            {/* MANAGEMENT TECH (NOUVEL ENCADRÉ MIS EN VALEUR) */}
            <div className="p-4 bg-zinc-900 text-white border border-zinc-900">
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-zinc-800">
                <Users size={16} className="text-sky-400" />
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                  Management Tech & Leadership
                </h4>
              </div>
              <div className="text-xs space-y-2 text-zinc-300">
                <p>
                  <strong className="text-white">Encadrement direct de 5 Personnes :</strong><br />
                  3 développeurs juniors + 2 stagiaires ingénieurs.
                </p>
                <p>
                  <strong className="text-white">Gouvernance & Méthode :</strong><br />
                  Revues de code systématiques (Merge Requests), rituels Agile/Scrum, montée en compétences et culture <strong>Clean Code / DDD</strong>.
                </p>
                <div className="p-2 bg-zinc-800 border border-zinc-700 text-[11px] font-mono text-emerald-400">
                  -40% de régressions en prod & accélération de la vélocité sprint.
                </div>
              </div>
            </div>

            {/* COMPÉTENCES CLÉS ENRICHIES (IA, RAG, SCRAPING, OUTILS AGENTS IA) */}
            <div className="p-4 bg-zinc-50 border border-zinc-200 space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 pb-1 border-b border-zinc-200 flex items-center gap-1.5">
                <Zap size={14} className="text-amber-600" /> Compétences Clés & Outils
              </h4>

              {/* IA & VISION PAR ORDINATEUR */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-bold block mb-1">
                  IA & Vision par Ordinateur
                </span>
                <div className="flex flex-wrap gap-1">
                  {["YOLOv8 / v11", "Computer Vision", "PyTorch", "OpenCV", "MLOps"].map((s) => (
                    <span key={s} className="px-1.5 py-0.5 bg-white border border-zinc-300 text-zinc-800 text-[10px] font-mono">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* LLM, RAG & SCRAPING */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-bold block mb-1">
                  LLM, RAG & Web Scraping
                </span>
                <div className="flex flex-wrap gap-1">
                  {[
                    "LLM & RAG",
                    "pgvector / Vector DB",
                    "LangChain",
                    "Web Scraping (Playwright)",
                    "Scrapy / BeautifulSoup",
                    "Data Extraction Pipelines",
                  ].map((s) => (
                    <span key={s} className="px-1.5 py-0.5 bg-sky-50 border border-sky-300 text-sky-900 text-[10px] font-mono font-bold">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* AGENTIC CODING & MAÎTRISE IA DE POINTE */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-bold block mb-1">
                  Agentic AI & Outils d&apos;Ingénierie IA
                </span>
                <div className="flex flex-wrap gap-1">
                  {[
                    "Google Antigravity + Gemini",
                    "Claude Code (Anthropic)",
                    "Codex & Assistants ChatGPT",
                    "MCP (Model Context Protocol)",
                    "Multi-Agents Workflows",
                  ].map((s) => (
                    <span key={s} className="px-1.5 py-0.5 bg-purple-50 border border-purple-300 text-purple-900 text-[10px] font-mono font-bold">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* BACKEND & ARCHITECTURE */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-bold block mb-1">
                  Backend & Architecture
                </span>
                <div className="flex flex-wrap gap-1">
                  {[
                    "Python (FastAPI)",
                    "Node.js (TypeScript)",
                    "Java / Spring Boot",
                    "PostgreSQL (RLS)",
                    "Supabase",
                    "Docker / AWS",
                  ].map((s) => (
                    <span key={s} className="px-1.5 py-0.5 bg-white border border-zinc-300 text-zinc-800 text-[10px] font-mono">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* FRONTEND & MOBILE */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-bold block mb-1">
                  Frontend & Mobile
                </span>
                <div className="flex flex-wrap gap-1">
                  {[
                    "React 18 / Next.js",
                    "Flutter",
                    "React Native / Expo",
                    "TypeScript",
                    "Tailwind CSS",
                  ].map((s) => (
                    <span key={s} className="px-1.5 py-0.5 bg-white border border-zinc-300 text-zinc-800 text-[10px] font-mono">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CERTIFICATIONS MONDIALES */}
            <div className="p-4 bg-zinc-50 border border-zinc-200">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-900 font-bold mb-3 flex items-center gap-1.5 border-b border-zinc-200 pb-1">
                <Award size={14} className="text-sky-700" /> Certifications
              </h4>
              <ul className="space-y-2 text-xs text-zinc-800">
                <li className="flex items-start gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>CISSP® (Cybersécurité)</strong>
                    <span className="block text-[10px] text-zinc-500 font-mono">Sécurité des Systèmes d&apos;Information</span>
                  </div>
                </li>
                <li className="flex items-start gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>CompTIA Security+</strong>
                    <span className="block text-[10px] text-zinc-500 font-mono">Défense, Réseaux & Cryptographie</span>
                  </div>
                </li>
                <li className="flex items-start gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Digital Health Specialization</strong>
                    <span className="block text-[10px] text-zinc-500 font-mono">Imperial College London</span>
                  </div>
                </li>
                <li className="flex items-start gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Google Data Analytics & Security</strong>
                    <span className="block text-[10px] text-zinc-500 font-mono">Ingénierie & Sécurité Cloud</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* FORMATION */}
            <div className="p-4 bg-zinc-50 border border-zinc-200">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-900 font-bold mb-3 pb-1 border-b border-zinc-200 flex items-center gap-1.5">
                <GraduationCap size={14} /> Formation Supérieure
              </h4>
              <div className="space-y-2.5 text-xs">
                <div>
                  <strong className="text-zinc-950 block">Master Exec. IA & Cybersécurité</strong>
                  <span className="text-zinc-600 text-[11px] font-mono">HEC Maroc • 2024 &mdash; 2025</span>
                </div>
                <div>
                  <strong className="text-zinc-950 block">Deep Learning Specialization</strong>
                  <span className="text-zinc-600 text-[11px] font-mono">Stanford / Coursera • 2025</span>
                </div>
                <div>
                  <strong className="text-zinc-950 block">Licence Génie Logiciel & Réseaux</strong>
                  <span className="text-zinc-600 text-[11px] font-mono">PIGIER Côte d&apos;Ivoire • 2014 &mdash; 2017</span>
                </div>
              </div>
            </div>

            {/* LANGUES */}
            <div className="p-3 bg-zinc-50 border border-zinc-200 flex justify-between items-center text-xs font-mono">
              <div>
                <span className="text-zinc-400 block text-[10px]">Langue Maternelle</span>
                <strong className="text-zinc-950">Français (C2)</strong>
              </div>
              <div className="text-right">
                <span className="text-zinc-400 block text-[10px]">Courant / Technique</span>
                <strong className="text-zinc-950">Anglais (B2)</strong>
              </div>
            </div>
          </aside>
        </div>

        {/* PIED DU CV */}
        <footer className="mt-8 pt-4 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-2">
          <span>Ibrahim KARAMOKO &mdash; Tech Lead IA & Cybersécurité | CTO</span>
          <span className="text-zinc-900 font-bold">Dossier Candidature • {new Date().getFullYear()}</span>
        </footer>
      </div>
    </main>
  );
}