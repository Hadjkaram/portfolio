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
  Workflow,
} from "lucide-react";

export default function AboutBento() {
  return (
    <section id="about" className="py-28 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* SECTION HEADER */}
      <div className="mb-14 border-b border-slate-800/80 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
          <Workflow size={13} />
          <span>01. Profil & Savoir-Faire</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
          Architecte de Systèmes Critiques. <br />
          <span className="text-gradient-cyan">Ingénierie & Vision Stratégique.</span>
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
          Plus qu’un développeur, j’interviens en tant qu’architecte de confiance et consultant e-Santé auprès d’organisations étatiques, d’ONG internationales (UNICEF) et de startups à haute intensité technologique.
        </p>
      </div>

      {/* BENTO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* CARD 1: LEAD E-SANTÉ & IMPACT NATIONAL (2 COLS) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 lg:col-span-2 rounded-3xl p-8 sm:p-10 relative overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-cyan-950/30 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500"></div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl w-fit text-cyan-400">
                <HeartPulse size={28} />
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Mission d&apos;État en cours
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight">
              Consultant e-Santé & Architecte National
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Actuellement engagé auprès du <strong className="text-white font-semibold">Ministère de la Santé et de l&apos;Hygiène Publique (MSHP-CMU)</strong> de Côte d’Ivoire. Je pilote l’interconnexion des centres hospitaliers publics (CHU), la numérisation des parcours de soins et le déploiement de protocoles pédiatriques nationaux validés par l’<strong className="text-white font-semibold">UNICEF</strong>.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-6 text-slate-400 text-xs font-mono">
            <div>
              <span className="block text-2xl font-black text-white">10+ Ans</span>
              <span className="uppercase tracking-wider text-slate-500">Expérience Terrain</span>
            </div>
            <div className="h-8 w-[1px] bg-slate-800"></div>
            <div>
              <span className="block text-2xl font-black text-cyan-400">UNICEF</span>
              <span className="uppercase tracking-wider text-slate-500">Validation e-Santé</span>
            </div>
            <div className="h-8 w-[1px] bg-slate-800"></div>
            <div>
              <span className="block text-2xl font-black text-emerald-400">CHU & MSHP</span>
              <span className="uppercase tracking-wider text-slate-500">Interconnexion</span>
            </div>
          </div>
        </motion.div>

        {/* CARD 2: LABORATOIRE IA & DEEP TECH (2 COLS) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-1 lg:col-span-2 rounded-3xl p-8 sm:p-10 relative overflow-hidden bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-2xl w-fit text-purple-400">
                <BrainCircuit size={28} />
              </div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Recherche & Déploiement
              </span>
            </div>

            <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
              Intelligence Artificielle & Deep Tech
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Conception d’algorithmes de pointe adaptés aux contraintes du terrain africain : télépathologie histopathologique assistée par vision (80% de précision pour le cancer, validé <strong className="text-white font-semibold">SiPath</strong>), analyse en langage naturel (NLP vocal pour l&apos;accessibilité juridique) et agents conversationnels RAG.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {["Computer Vision", "PyTorch", "FastAPI", "NLP & Speech", "TensorRT", "RAG & LLM"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-slate-800/80 border border-slate-700/80 text-cyan-300 rounded-lg text-xs font-mono font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CARD 3: ACADÉMIQUE D'EXCELLENCE & MASTER HEC MAROC (2 COLS) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2 lg:col-span-2 rounded-3xl p-8 sm:p-10 relative overflow-hidden bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-blue-400">
                <GraduationCap size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white tracking-tight">Parcours Académique Supérieur</h4>
                <p className="text-xs font-mono text-slate-400 uppercase">Formation d&apos;Excellence Internationale</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center justify-between">
                  <strong className="text-white text-base">HEC Maroc</strong>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/50">
                    Master Executive
                  </span>
                </div>
                <p className="text-slate-400 text-xs mt-1">
                  Intelligence Artificielle, CyberSécurité & Big Data Science
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center justify-between">
                  <strong className="text-white text-base">PIGIER Côte d’Ivoire</strong>
                  <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                    Licence Professionnelle
                  </span>
                </div>
                <p className="text-slate-400 text-xs mt-1">
                  Génie Logiciel & Systèmes d’Information
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="text-emerald-400">●</span>
            <span>Allie rigueur scientifique et vision d’affaires</span>
          </div>
        </motion.div>

        {/* CARD 4: CERTIFICATIONS MONDIALES (2 COLS) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 lg:col-span-2 rounded-3xl p-8 sm:p-10 relative overflow-hidden bg-gradient-to-br from-slate-900/90 to-blue-950/30 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-400">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white tracking-tight">Certifications Critiques</h4>
                  <p className="text-xs font-mono text-slate-400 uppercase">Standards Mondiaux</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="font-bold text-white flex items-center gap-2">
                  <ShieldCheck size={14} className="text-cyan-400" />
                  <span>CISSP & CompTIA Security+</span>
                </div>
                <p className="text-slate-400 mt-1">Cybersécurité & Gouvernance des architectures</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="font-bold text-white flex items-center gap-2">
                  <HeartPulse size={14} className="text-emerald-400" />
                  <span>Imperial College London</span>
                </div>
                <p className="text-slate-400 mt-1">Digital Health Specialization (e-Santé mondiale)</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="font-bold text-white flex items-center gap-2">
                  <BrainCircuit size={14} className="text-purple-400" />
                  <span>Stanford Univ. / DeepLearning</span>
                </div>
                <p className="text-slate-400 mt-1">Deep Learning Specialization par Andrew Ng</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="font-bold text-white flex items-center gap-2">
                  <Database size={14} className="text-blue-400" />
                  <span>Google Professional</span>
                </div>
                <p className="text-slate-400 mt-1">Data Analytics & Cloud Security Pro</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center">
            <span className="text-xs font-mono text-slate-400">Preuves & Recommandations vérifiables</span>
            <a
              href="https://www.linkedin.com/in/el-hadj-ibrahim-v-karamoko-76951613b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Vérifier sur LinkedIn</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* STACK TECHNIQUE CONSOLIDÉE & INTERACTIVE */}
      <div className="mt-8 rounded-3xl p-8 bg-slate-900/60 border border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <Terminal size={22} className="text-cyan-400" />
            <h4 className="text-lg font-bold text-white">Stack Technologique Complète</h4>
          </div>
          <span className="text-xs font-mono text-slate-400 uppercase">
            Frontend • Backend • IA • DevOps • Sécurité
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
            <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-2">Frontend</span>
            <ul className="text-xs space-y-1 text-slate-300 font-medium">
              <li>Next.js 15 / 16 (App Router)</li>
              <li>React 19 & TypeScript</li>
              <li>Tailwind CSS & Framer Motion</li>
              <li>Flutter & Dart (Mobile)</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
            <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-2">Backend & APIs</span>
            <ul className="text-xs space-y-1 text-slate-300 font-medium">
              <li>Python (FastAPI, Flask)</li>
              <li>Java (Spring Boot, Cloud)</li>
              <li>Node.js / Express</li>
              <li>PostgreSQL, MongoDB, Redis</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
            <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-2">IA & Data</span>
            <ul className="text-xs space-y-1 text-slate-300 font-medium">
              <li>PyTorch & TensorFlow</li>
              <li>Computer Vision (OpenCV)</li>
              <li>NLP & Vector Databases</li>
              <li>Pipelines RAG & LLMs</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
            <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-2">Cloud & DevOps</span>
            <ul className="text-xs space-y-1 text-slate-300 font-medium">
              <li>Amazon Web Services (AWS)</li>
              <li>Docker & Kubernetes</li>
              <li>CI/CD GitHub Actions</li>
              <li>Linux Server Admin</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
            <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-2">Sécurité & Santé</span>
            <ul className="text-xs space-y-1 text-slate-300 font-medium">
              <li>IAM & Zero-Trust (CISSP)</li>
              <li>Normes HL7 / FHIR</li>
              <li>Chiffrement PKI / HSM</li>
              <li>Audit de vulnérabilités</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}