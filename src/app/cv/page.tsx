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
} from "lucide-react";

export default function CVPage() {
  const printCV = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-zinc-900 p-4 md:p-8 font-sans print:bg-white print:p-0">
      {/* BARRE D'ACTIONS DU HAUT (CACHÉE À L'IMPRESSION) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
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
      <div className="max-w-4xl mx-auto bg-white border border-zinc-300 p-8 md:p-12 shadow-md print:border-none print:shadow-none print:p-4">
        {/* HEADER CV */}
        <header className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left border-b-2 border-zinc-900 pb-6 mb-6 gap-4">
          <div>
            <div className="inline-block px-2 py-0.5 bg-zinc-100 border border-zinc-300 text-[10px] font-mono uppercase tracking-widest text-zinc-700 mb-2">
              Dossier Professionnel Exécutif
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-950 uppercase">
              El Hadj Ibrahim V. Karamoko
            </h1>
            <h2 className="text-base font-bold text-sky-700 mt-1 uppercase font-mono tracking-wider">
              Consultant e-Santé | Architecte IA & Tech Lead Fullstack
            </h2>

            {/* COORDONNÉES */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3 text-xs text-zinc-600 font-mono">
              <span className="flex items-center gap-1.5">
                <Mail size={13} className="text-zinc-900" />
                Ibrahim92karamoko@gmail.com
              </span>
              <span className="flex items-center gap-1.5">
                <Phone size={13} className="text-zinc-900" />
                +225 07 16 31 37 08 / +225 01 01 59 41 53
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-zinc-900" />
                Abidjan, Côte d&apos;Ivoire & International
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
          </div>

          <div className="text-right shrink-0">
            <div className="p-3 bg-zinc-50 border border-zinc-300 text-center">
              <span className="block text-2xl font-black text-zinc-950 font-mono">10+ ANS</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-600">
                Expérience
              </span>
            </div>
          </div>
        </header>

        {/* PROFIL RÉSUMÉ */}
        <div className="mb-8 p-4 bg-zinc-50 border-l-4 border-zinc-900">
          <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed font-medium">
            Architecte de systèmes critiques et spécialiste en Intelligence Artificielle (Computer Vision, NLP). Actuellement impliqué auprès du <strong>Ministère de la Santé (MSHP-CMU)</strong>, j&apos;accompagne la transformation numérique nationale en conjuguant direction technique (Agile/Scrum), respect des standards de sécurité mondiaux (<strong>CISSP</strong>) et déploiement d&apos;architectures à fort impact social validées par l&apos;<strong>UNICEF</strong> et la <strong>SiPath</strong>.
          </p>
        </div>

        {/* SECTION RÉALISATIONS STRATÉGIQUES */}
        <section className="mb-8">
          <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3 flex items-center gap-2 border-b border-zinc-200 pb-1">
            <Star size={14} className="text-amber-600" /> Réalisations Phares & Validations Officielles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-zinc-50 border border-zinc-200">
              <div className="flex items-center justify-between mb-1.5">
                <strong className="text-zinc-950 text-sm">NURIA (Santé Publique)</strong>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-300">
                  UNICEF VALIDATED
                </span>
              </div>
              <p className="text-xs text-zinc-700 leading-relaxed">
                Architecte de la première plateforme africaine dédiée au neurodéveloppement pédiatrique. Déploiement national avec le MSHP-CMU pour la campagne Avril Bleu.
              </p>
            </div>

            <div className="p-4 bg-zinc-50 border border-zinc-200">
              <div className="flex items-center justify-between mb-1.5">
                <strong className="text-zinc-950 text-sm">Kanyeh Assist (IA & Deep Tech)</strong>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-blue-100 text-blue-800 border border-blue-300">
                  SiPath VALIDATED
                </span>
              </div>
              <p className="text-xs text-zinc-700 leading-relaxed">
                Conception d&apos;un algorithme de vision par ordinateur pour la télépathologie du cancer en temps réel (80% de précision clinique), validé par la Société Ivoirienne des Pathologistes.
              </p>
            </div>
          </div>
        </section>

        {/* 2 COLONNES : EXPÉRIENCES & FORMATIONS/COMPÉTENCES */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-8">
          {/* EXPÉRIENCES PROFESSIONNELLES */}
          <section className="space-y-5">
            <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2 border-b border-zinc-200 pb-1">
              <Zap size={14} /> Parcours Professionnel & Lead
            </h3>

            <div className="space-y-4">
              <div className="relative pl-4 border-l-2 border-zinc-900">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-sm font-bold text-zinc-950">
                    Consultant e-Santé <span className="text-sky-700">/ MSHP-CMU</span>
                  </h4>
                  <span className="text-[11px] font-mono text-zinc-500">2023 — Présent</span>
                </div>
                <p className="text-xs text-zinc-700 mt-1 leading-relaxed">
                  Supervision de l&apos;interconnexion hospitalière (E-PNEUMO) avec la Fondation MTN, protocoles pédiatriques nationaux avec l&apos;UNICEF et mise en conformité des systèmes de santé.
                </p>
              </div>

              <div className="relative pl-4 border-l-2 border-zinc-300">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-sm font-bold text-zinc-950">
                    Chef de Projet IT & Lead IA <span className="text-sky-700">/ ADOMED.CARE</span>
                  </h4>
                  <span className="text-[11px] font-mono text-zinc-500">2021 — 2023</span>
                </div>
                <p className="text-xs text-zinc-700 mt-1 leading-relaxed">
                  Management Scrum d&apos;une équipe pluridisciplinaire. Développement de la première IA médicale d&apos;orientation diagnostique en Côte d&apos;Ivoire et de l&apos;écosystème mobile Flutter.
                </p>
              </div>

              <div className="relative pl-4 border-l-2 border-zinc-300">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-sm font-bold text-zinc-950">
                    Co-fondateur & CTO <span className="text-sky-700">/ AVLYTECH (France)</span>
                  </h4>
                  <span className="text-[11px] font-mono text-zinc-500">2020 — 2022</span>
                </div>
                <p className="text-xs text-zinc-700 mt-1 leading-relaxed">
                  Direction technologique, élaboration de solutions logicielles institutionnelles haute sécurité et architectures microservices modulaires.
                </p>
              </div>

              <div className="relative pl-4 border-l-2 border-zinc-300">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-sm font-bold text-zinc-950">
                    Responsable Informatique <span className="text-sky-700">/ IVAGREL</span>
                  </h4>
                  <span className="text-[11px] font-mono text-zinc-500">4 ans</span>
                </div>
                <p className="text-xs text-zinc-700 mt-1 leading-relaxed">
                  Refonte intégrale du système d&apos;information, migration d&apos;infrastructures vers le cloud AWS et mise en place de politiques de cybersécurité.
                </p>
              </div>
            </div>
          </section>

          {/* ASIDE : FORMATIONS & CERTIFICATIONS */}
          <aside className="space-y-6">
            {/* CERTIFICATIONS */}
            <div className="p-4 bg-zinc-50 border border-zinc-200">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-900 font-bold mb-3 flex items-center gap-1.5 border-b border-zinc-200 pb-1">
                <Award size={14} /> Certifications Internationales
              </h4>
              <ul className="space-y-2 text-xs text-zinc-800">
                <li className="flex items-start gap-2">
                  <ShieldCheck size={14} className="text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>CISSP & CompTIA Security+</strong> (Cybersécurité)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck size={14} className="text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Imperial College London</strong> (Digital Health)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck size={14} className="text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Stanford Univ.</strong> (DeepLearning.AI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck size={14} className="text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Google Professional</strong> (Data & Security)</span>
                </li>
              </ul>
            </div>

            {/* DIPLÔMES */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold mb-2 pb-1 border-b border-zinc-200 flex items-center gap-1.5">
                <GraduationCap size={14} /> Diplômes Académiques
              </h4>
              <div className="space-y-2 text-xs">
                <div>
                  <strong className="text-zinc-950 block">Master Executive IA & Cyber</strong>
                  <span className="text-zinc-600 text-[11px] font-mono">HEC Maroc (2025)</span>
                </div>
                <div>
                  <strong className="text-zinc-950 block">Licence Pro Génie Logiciel</strong>
                  <span className="text-zinc-600 text-[11px] font-mono">PIGIER Côte d&apos;Ivoire</span>
                </div>
              </div>
            </div>

            {/* STACK TECHNIQUE */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold mb-2 pb-1 border-b border-zinc-200">
                Compétences Clés
              </h4>
              <div className="flex flex-wrap gap-1">
                {[
                  "Computer Vision",
                  "NLP",
                  "PyTorch",
                  "FastAPI",
                  "Next.js",
                  "Spring Boot",
                  "Flutter",
                  "AWS",
                  "Docker",
                  "HL7/FHIR",
                  "CISSP",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 bg-zinc-100 text-zinc-800 font-mono text-[10px] border border-zinc-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* PIED DU CV */}
        <footer className="mt-8 pt-4 border-t border-zinc-200 text-center text-xs font-mono text-zinc-500">
          <span>Portfolio interactif & projets : </span>
          <a
            href="https://www.ibrahimkaramoko.site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-950 font-bold hover:underline"
          >
            www.ibrahimkaramoko.site
          </a>
        </footer>
      </div>
    </main>
  );
}