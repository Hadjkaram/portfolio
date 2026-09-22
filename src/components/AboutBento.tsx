"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  ArrowUpRight,
  GraduationCap,
  ShieldCheck,
  Terminal,
  HeartPulse,
} from "lucide-react";

export default function AboutBento() {
  return (
    <section id="about" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      {/* SECTION HEADER ÉDITORIAL CLAUDE STYLE */}
      <div className="mb-16 border-b border-zinc-200 pb-8">
        <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 mb-3 flex items-center gap-2">
          <span>01 // Profil & Expertise Stratégique</span>
        </h2>
        <p className="text-3xl md:text-5xl lg:text-6xl font-black text-zinc-950 leading-tight tracking-tight uppercase">
          Je ne code pas de simples applications. <br />
          <span className="text-zinc-400">J&apos;architecte des écosystèmes durables.</span>
        </p>
      </div>

      {/* GRILLE ARCHITECTURALE NETTE (SANS ARRONDIS BULLES) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* CARTE 1 : LEAD E-SANTÉ & IMPACT NATIONAL (2 COLS) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-1 md:col-span-2 bg-zinc-900 text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group border border-zinc-900 transition-all"
        >
          {/* Lueur subtile */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-[80px] pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>

          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2.5">
                <HeartPulse className="text-sky-400" size={24} />
                <span className="font-mono text-xs uppercase tracking-widest text-sky-400 font-bold">
                  Mission Nationale en cours
                </span>
              </div>
              <span className="text-xs font-mono text-zinc-400 uppercase">
                Côte d&apos;Ivoire & International
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">
              Consultant e-Santé & Architecte IA
            </h3>
            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              Actuellement engagé auprès du <strong className="text-white font-semibold">Ministère de la Santé et de l&apos;Hygiène Publique (MSHP-CMU)</strong>. Je pilote des transformations numériques à l&apos;échelle nationale, alliant intelligence artificielle clinique (Computer Vision, NLP) et infrastructures backend résilientes pour l&apos;interconnexion des CHU et les programmes validés par l&apos;<strong className="text-white font-semibold">UNICEF</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-10 pt-6 border-t border-zinc-800 text-zinc-400 text-xs font-mono">
            <div>
              <span className="block text-3xl font-black text-white font-mono">10+</span>
              <span className="uppercase tracking-wider text-zinc-500">Années d&apos;Expérience</span>
            </div>
            <div className="h-8 w-[1px] bg-zinc-800"></div>
            <div>
              <span className="block text-3xl font-black text-sky-400 font-mono">UNICEF</span>
              <span className="uppercase tracking-wider text-zinc-500">Validation e-Santé</span>
            </div>
            <div className="h-8 w-[1px] bg-zinc-800"></div>
            <div>
              <span className="block text-3xl font-black text-emerald-400 font-mono">MSHP-CMU</span>
              <span className="uppercase tracking-wider text-zinc-500">CHU Connectés</span>
            </div>
          </div>
        </motion.div>

        {/* CARTE 2 : LABORATOIRE IA & DEEP TECH (1 COL) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="col-span-1 bg-white border border-zinc-200 hover:border-zinc-950 p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <div>
            <div className="flex justify-between items-start mb-6 pb-4 border-b border-zinc-100">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-bold">
                Deep Tech & Vision
              </span>
              <BrainCircuit className="text-sky-600" size={24} />
            </div>

            <h4 className="text-xl font-bold text-zinc-950 mb-3">Intelligence Artificielle</h4>
            <p className="text-sm text-zinc-600 leading-relaxed mb-6">
              Conception d&apos;algorithmes adaptés aux exigences cliniques : télépathologie temps réel pour le diagnostic du cancer (80% de précision validé <strong className="text-zinc-900">SiPath</strong>) et traitement du langage naturel (NLP vocal).
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100">
            {["PyTorch", "Computer Vision", "NLP & Speech", "FastAPI", "TensorRT", "RAG"].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-zinc-50 border border-zinc-200 text-zinc-800 text-xs font-mono font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CARTE 3 : ARCHITECTURE FULLSTACK & CLOUD (1 COL) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="col-span-1 bg-white border border-zinc-200 hover:border-zinc-950 p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <div>
            <div className="flex justify-between items-start mb-6 pb-4 border-b border-zinc-100">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-bold">
                Infrastructures
              </span>
              <Database className="text-blue-600" size={24} />
            </div>

            <h4 className="text-xl font-bold text-zinc-950 mb-3">Ingénierie Fullstack</h4>
            <p className="text-sm text-zinc-600 leading-relaxed mb-6">
              Architectures microservices modulaires, systèmes d&apos;information hospitaliers et applications mobiles résilientes déployées sous AWS, Docker et Kubernetes.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100">
            {["Next.js", "Spring Boot", "Flutter", "PostgreSQL", "AWS Cloud", "Docker"].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-zinc-50 border border-zinc-200 text-zinc-800 text-xs font-mono font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CARTE 4 : DIPLÔMES & CERTIFICATIONS D'ÉLITE (2 COLS) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="col-span-1 md:col-span-2 bg-white border border-zinc-200 hover:border-zinc-950 p-8 md:p-10 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-100">
              <div className="flex items-center gap-3">
                <GraduationCap className="text-zinc-900" size={24} />
                <h4 className="text-xl font-bold text-zinc-950 tracking-tight">Académique & Certifications Internationales</h4>
              </div>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                Standards Mondiaux
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-4 font-bold">
                  Diplômes Supérieurs
                </h5>
                <ul className="space-y-4 text-sm">
                  <li className="p-3 bg-zinc-50 border border-zinc-200">
                    <strong className="block text-zinc-950 text-base font-bold">HEC Maroc</strong>
                    <span className="text-xs text-zinc-600 font-mono">
                      Master Executive IA, CyberSécurité & Big Data Science (2025)
                    </span>
                  </li>
                  <li className="p-3 bg-zinc-50 border border-zinc-200">
                    <strong className="block text-zinc-950 text-base font-bold">PIGIER Côte d&apos;Ivoire</strong>
                    <span className="text-xs text-zinc-600 font-mono">
                      Licence Professionnelle en Génie Logiciel
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-4 font-bold">
                  Certifications Critiques
                </h5>
                <ul className="space-y-2.5 text-xs text-zinc-700">
                  <li className="flex items-center gap-2 p-2 bg-zinc-50 border border-zinc-200">
                    <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
                    <span><strong>CISSP</strong> & <strong>CompTIA Security+</strong> (CyberSécurité)</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 bg-zinc-50 border border-zinc-200">
                    <ShieldCheck size={16} className="text-blue-600 shrink-0" />
                    <span><strong>Imperial College London</strong> (Digital Health Specialization)</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 bg-zinc-50 border border-zinc-200">
                    <ShieldCheck size={16} className="text-purple-600 shrink-0" />
                    <span><strong>Stanford Univ. / DeepLearning.AI</strong> (Andrew Ng)</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 bg-zinc-50 border border-zinc-200">
                    <ShieldCheck size={16} className="text-sky-600 shrink-0" />
                    <span><strong>Google Professional</strong> (Data Analytics & Cloud Security)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-500">
              Identité vérifiable & recommandations
            </span>
            <a
              href="https://www.linkedin.com/in/el-hadj-ibrahim-v-karamoko-76951613b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-zinc-950 hover:text-blue-600 transition-colors"
            >
              <span>Consulter sur LinkedIn</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>

      </div>

      {/* MATRICE TECHNIQUE COMPLÈTE STYLE DOSSIER ÉDITORIAL */}
      <div className="mt-8 p-8 md:p-10 bg-white border border-zinc-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-200">
          <div className="flex items-center gap-2.5">
            <Terminal size={20} className="text-zinc-900" />
            <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-zinc-950">
              Matrice Technologique & Conformité
            </h4>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            Frontend • Backend • IA • Cloud • Normes de Santé
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-xs font-mono">
          <div>
            <span className="text-[11px] font-bold text-zinc-900 uppercase block mb-2 border-b border-zinc-200 pb-1">
              Frontend & Mobile
            </span>
            <ul className="space-y-1 text-zinc-600">
              <li>Next.js (App Router)</li>
              <li>React 19 & TypeScript</li>
              <li>Flutter & Dart</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <span className="text-[11px] font-bold text-zinc-900 uppercase block mb-2 border-b border-zinc-200 pb-1">
              Backend & APIs
            </span>
            <ul className="space-y-1 text-zinc-600">
              <li>Python (FastAPI, Flask)</li>
              <li>Java (Spring Boot)</li>
              <li>Node.js / Express</li>
              <li>PostgreSQL, MongoDB</li>
            </ul>
          </div>

          <div>
            <span className="text-[11px] font-bold text-zinc-900 uppercase block mb-2 border-b border-zinc-200 pb-1">
              IA & Computer Vision
            </span>
            <ul className="space-y-1 text-zinc-600">
              <li>PyTorch & TensorFlow</li>
              <li>Vision par Ordinateur</li>
              <li>NLP & Voice Processing</li>
              <li>Vector Search & RAG</li>
            </ul>
          </div>

          <div>
            <span className="text-[11px] font-bold text-zinc-900 uppercase block mb-2 border-b border-zinc-200 pb-1">
              Cloud & DevOps
            </span>
            <ul className="space-y-1 text-zinc-600">
              <li>Amazon Web Services</li>
              <li>Docker & Kubernetes</li>
              <li>Pipelines CI/CD</li>
              <li>Architecture Microservices</li>
            </ul>
          </div>

          <div>
            <span className="text-[11px] font-bold text-zinc-900 uppercase block mb-2 border-b border-zinc-200 pb-1">
              Sécurité & Normes
            </span>
            <ul className="space-y-1 text-zinc-600">
              <li>Standards CISSP & IAM</li>
              <li>Standards HL7 / FHIR</li>
              <li>Cryptographie PKI</li>
              <li>Conformité Santé</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}