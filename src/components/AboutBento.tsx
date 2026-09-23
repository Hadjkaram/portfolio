"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
  ShieldCheck,
  Terminal,
  HeartPulse,
  Users,
  Bot,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutBento() {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      {/* SECTION HEADER ÉDITORIAL CLAUDE STYLE */}
      <div className="mb-16 border-b border-zinc-200 pb-8">
        <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 mb-3 flex items-center gap-2">
          <span>{t("01 // Profil, Leadership & Savoir-Faire", "01 // Profile, Leadership & Capabilities")}</span>
        </h2>
        <p className="text-3xl md:text-5xl lg:text-6xl font-black text-zinc-950 leading-tight tracking-tight uppercase">
          {language === "en" ? (
            <>
              AI Tech Lead & Operational CTO. <br />
              <span className="text-zinc-500">Architecture, Leadership & Delivery.</span>
            </>
          ) : (
            <>
              Tech Lead IA & CTO Opérationnel. <br />
              <span className="text-zinc-500">Architecture, Management & Rigueur.</span>
            </>
          )}
        </p>
      </div>

      {/* GRILLE ARCHITECTURALE NETTE */}
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
                  {t("Tech Lead IA & Cybersécurité", "AI & Cybersecurity Tech Lead")}
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
                {t("10+ Ans d'Expérience", "10+ Years Experience")}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">
              {t(
                "Architecture Distribuée & Systèmes Critiques",
                "Distributed Architecture & Mission-Critical Systems"
              )}
            </h3>
            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              {t(
                "Tech Lead & CTO Opérationnel spécialisé dans l'IA appliquée (Computer Vision, MLOps, LLM & RAG) et la cybersécurité des systèmes critiques. Profil hands-on alliant arbitrage stratégique, écriture des briques logicielles complexes et structuration d'équipes agiles performantes pour le Ministère de la Santé (MSHP-CMU), l'UNICEF, le Laboratoire Roche et des scale-ups internationales.",
                "Hands-on Tech Lead & Operational CTO specialized in applied AI (Computer Vision, MLOps, LLM & RAG) and cybersecurity for mission-critical systems. Combining high-level strategic roadmap direction with complex software engineering, building high-performing agile engineering teams for the Ministry of Health (MSHP-CMU), UNICEF, Roche Laboratories, and international scale-ups."
              )}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-10 pt-6 border-t border-zinc-800 text-zinc-400 text-xs font-mono">
            <div>
              <span className="block text-3xl font-black text-white font-mono">5 Pers.</span>
              <span className="uppercase tracking-wider text-zinc-500">
                {t("Lead d'Équipe Direct", "Direct Team Lead")}
              </span>
            </div>
            <div className="h-8 w-[1px] bg-zinc-800"></div>
            <div>
              <span className="block text-3xl font-black text-emerald-400 font-mono">-40%</span>
              <span className="uppercase tracking-wider text-zinc-500">
                {t("Régressions Bugs", "Production Bugs")}
              </span>
            </div>
            <div className="h-8 w-[1px] bg-zinc-800"></div>
            <div>
              <span className="block text-3xl font-black text-sky-400 font-mono">UNICEF</span>
              <span className="uppercase tracking-wider text-zinc-500">
                {t("Validation e-Santé", "e-Health Validation")}
              </span>
            </div>
          </div>
        </motion.div>

        {/* CARTE 2 : MANAGEMENT TECH & LEADERSHIP HUMAIN (1 COL) */}
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
                {t("Management Tech", "Tech Leadership")}
              </span>
              <Users className="text-zinc-900" size={24} />
            </div>

            <h4 className="text-xl font-bold text-zinc-950 mb-3">
              {t("Encadrement de 5 Personnes", "Management of 5 Engineers")}
            </h4>
            <p className="text-sm text-zinc-600 leading-relaxed mb-4">
              {t(
                "Direction technique directe de 3 développeurs juniors et 2 stagiaires ingénieurs.",
                "Direct technical management of 3 junior developers and 2 engineering interns."
              )}
            </p>
            <ul className="text-xs text-zinc-700 space-y-2 font-mono">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>
                  {language === "en" ? (
                    <><strong>Mandatory Code Reviews (MRs)</strong>: proven 40% reduction in production regressions.</>
                  ) : (
                    <><strong>Revues de code systématiques (MRs)</strong> : réduction prouvée de 40% des régressions.</>
                  )}
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>
                  {language === "en" ? (
                    <><strong>Bi-weekly Agile / Scrum rituals</strong> & acceleration of sprint delivery velocity.</>
                  ) : (
                    <><strong>Rituels Agile / Scrum</strong> bi-hebdomadaires & accélération de la vélocité sprint.</>
                  )}
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>
                  {language === "en" ? (
                    <>Continuous mentorship and <strong>Clean Code / DDD</strong> culture.</>
                  ) : (
                    <>Montée en compétences continue et culture <strong>Clean Code / DDD</strong>.</>
                  )}
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-4 mt-4 border-t border-zinc-100 text-[11px] font-mono text-zinc-500">
            {t("Arbitrage stratégique & excellence opérationnelle.", "Strategic arbitration & operational excellence.")}
          </div>
        </motion.div>

        {/* CARTE 3 : AGENTIC AI & OUTILS D'INGÉNIERIE DE POINTE (1 COL) */}
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
                Agentic Engineering
              </span>
              <Bot className="text-purple-600" size={24} />
            </div>

            <h4 className="text-xl font-bold text-zinc-950 mb-3">
              {t("Maîtrise IA & Agents", "AI & Agent Mastery")}
            </h4>
            <p className="text-sm text-zinc-600 leading-relaxed mb-4">
              {t(
                "Pionnier dans l'usage d'outils d'ingénierie assistés par IA pour démultiplier la productivité et la fiabilité architecturale :",
                "Pioneering AI-assisted software engineering workflows to maximize development velocity and architectural reliability:"
              )}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Google Antigravity + Gemini",
                "Claude Code (Anthropic)",
                "Codex / ChatGPT (OpenAI)",
                "MCP (Model Context Protocol)",
                "Multi-Agent Orchestration",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-0.5 bg-purple-50 border border-purple-200 text-purple-900 text-[10px] font-mono font-bold"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-zinc-100 text-[11px] font-mono text-zinc-500">
            {t("Augmentation du débit de livraison logicielle.", "Accelerated software engineering delivery.")}
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
                <h4 className="text-xl font-bold text-zinc-950 tracking-tight">
                  {t(
                    "Formation Supérieure & Certifications Mondiales",
                    "Higher Education & Global Certifications"
                  )}
                </h4>
              </div>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                {t("Standards Internationaux", "International Standards")}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-4 font-bold">
                  {t("Parcours Académique", "Academic Credentials")}
                </h5>
                <ul className="space-y-4 text-sm">
                  <li className="p-3 bg-zinc-50 border border-zinc-200">
                    <strong className="block text-zinc-950 text-base font-bold">HEC Maroc</strong>
                    <span className="text-xs text-zinc-600 font-mono">
                      {t(
                        "Master Exec. IA & Cybersécurité (2024 — 2025)",
                        "Exec. Master in AI & Cybersecurity (2024 — 2025)"
                      )}
                    </span>
                  </li>
                  <li className="p-3 bg-zinc-50 border border-zinc-200">
                    <strong className="block text-zinc-950 text-base font-bold">PIGIER Côte d&apos;Ivoire</strong>
                    <span className="text-xs text-zinc-600 font-mono">
                      {t(
                        "Licence Génie Logiciel & Réseaux (2014 — 2017)",
                        "B.Sc. Software Engineering & Networks (2014 — 2017)"
                      )}
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-4 font-bold">
                  {t("Certifications Critiques", "Critical Certifications")}
                </h5>
                <ul className="space-y-2.5 text-xs text-zinc-700">
                  <li className="flex items-center gap-2 p-2 bg-zinc-50 border border-zinc-200">
                    <ShieldCheck size={16} className="text-emerald-700 shrink-0" />
                    <span><strong>CISSP®</strong> & <strong>CompTIA Security+</strong> ({t("Cybersécurité", "Cybersecurity")})</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 bg-zinc-50 border border-zinc-200">
                    <ShieldCheck size={16} className="text-blue-700 shrink-0" />
                    <span><strong>Imperial College London</strong> (Digital Health Specialization)</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 bg-zinc-50 border border-zinc-200">
                    <ShieldCheck size={16} className="text-purple-700 shrink-0" />
                    <span><strong>Stanford / Coursera</strong> (Deep Learning Specialization 2025)</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 bg-zinc-50 border border-zinc-200">
                    <ShieldCheck size={16} className="text-sky-700 shrink-0" />
                    <span><strong>Google Professional</strong> (Data Analytics & Cloud Security)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-500">
              {t("Profil vérifié & recommandations officielles", "Verified profile & official endorsements")}
            </span>
            <a
              href="https://www.linkedin.com/in/el-hadj-ibrahim-v-karamoko-76951613b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-zinc-950 hover:text-blue-600 transition-colors"
            >
              <span>{t("Consulter sur LinkedIn", "View on LinkedIn")}</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>

      </div>

      {/* MATRICE TECHNIQUE COMPLÈTE ENRICHIE (RAG, SCRAPING, AGENTS) */}
      <div className="mt-8 p-8 md:p-10 bg-white border border-zinc-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-200">
          <div className="flex items-center gap-2.5">
            <Terminal size={20} className="text-zinc-900" />
            <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-zinc-950">
              {t(
                "Stack Technologique, RAG & Pipelines de Données",
                "Technology Stack, RAG & Data Pipelines"
              )}
            </h4>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            Vision • LLM & RAG • Scraping • Backend • Cloud
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-xs font-mono">
          <div>
            <span className="text-[11px] font-bold text-zinc-900 uppercase block mb-2 border-b border-zinc-200 pb-1">
              IA & Computer Vision
            </span>
            <ul className="space-y-1 text-zinc-600">
              <li>YOLOv8 / YOLOv11</li>
              <li>PyTorch & OpenCV</li>
              <li>{t("Visionneuse WSI (TIFF)", "WSI TIFF Viewer")}</li>
              <li>Pipelines MLOps</li>
            </ul>
          </div>

          <div>
            <span className="text-[11px] font-bold text-zinc-900 uppercase block mb-2 border-b border-zinc-200 pb-1">
              LLM, RAG & Scraping
            </span>
            <ul className="space-y-1 text-zinc-600">
              <li>RAG & pgvector</li>
              <li>Vector Databases</li>
              <li>Playwright & Scrapy</li>
              <li>BeautifulSoup / Selenium</li>
            </ul>
          </div>

          <div>
            <span className="text-[11px] font-bold text-zinc-900 uppercase block mb-2 border-b border-zinc-200 pb-1">
              Backend & {t("Données", "Data")}
            </span>
            <ul className="space-y-1 text-zinc-600">
              <li>Python (FastAPI)</li>
              <li>Node.js (TypeScript)</li>
              <li>Java / Spring Boot</li>
              <li>PostgreSQL (RLS)</li>
            </ul>
          </div>

          <div>
            <span className="text-[11px] font-bold text-zinc-900 uppercase block mb-2 border-b border-zinc-200 pb-1">
              Frontend & Mobile
            </span>
            <ul className="space-y-1 text-zinc-600">
              <li>React 18 / Next.js</li>
              <li>Flutter & Dart</li>
              <li>React Native / Expo</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <span className="text-[11px] font-bold text-zinc-900 uppercase block mb-2 border-b border-zinc-200 pb-1">
              DevOps & {t("Sécurité", "Security")}
            </span>
            <ul className="space-y-1 text-zinc-600">
              <li>Docker / AWS Cloud</li>
              <li>{t("Standards CISSP & IAM", "CISSP & IAM Standards")}</li>
              <li>{t("Chiffrement AES-256", "AES-256 Encryption")}</li>
              <li>{t("Conformité Santé", "HDS Health Compliance")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}