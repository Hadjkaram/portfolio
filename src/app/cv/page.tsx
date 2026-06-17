"use client";
import { Mail, Phone, MapPin, Linkedin, Globe, ShieldCheck, Zap, Star, Award } from "lucide-react";

export default function CVPage() {
  const printCV = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-2 md:p-8 font-sans print:p-0">
      
      {/* BOUTON D'EXPORT PDF (Caché à l'impression) */}
      <button 
        onClick={printCV}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-2.5 bg-cyan-600 text-white rounded-full shadow-xl hover:bg-cyan-700 transition-all active:scale-95 print:hidden"
      >
        <Zap size={16} />
        <span className="font-bold text-xs uppercase tracking-widest">Exporter en PDF</span>
      </button>

      {/* CV CONTAINER - Format A4 One-Page */}
      <div className="max-w-4xl mx-auto bg-white shadow-2xl p-8 md:p-10 print:shadow-none print:p-4">
        
        {/* HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-center text-center md:text-left border-b-2 border-gray-100 pb-6 mb-6">
          <div>
            <h1 className="text-4xl font-black tracking-tighter text-gray-950 uppercase">Ibrahim Karamoko</h1>
            <h2 className="text-lg font-bold text-cyan-600 flex items-center gap-2 justify-center md:justify-start">
              Consultant e-Santé | Tech Lead IA & Fullstack
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
              <span className="flex items-center gap-1"><Mail size={12}/> Ibrahim92karamoko@gmail.com</span>
              <span className="flex items-center gap-1"><Phone size={12}/> +225 01 01 59 41 53 / +225 07 16 31 37 08</span>
              <span className="flex items-center gap-1"><MapPin size={12}/> Abidjan, CI</span>
              <a href="https://www.linkedin.com/in/el-hadj-ibrahim-v-karamoko-76951613b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-cyan-700">
                <Linkedin size={12}/> profil/ibrahim-karamoko
              </a>
            </div>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-3xl font-black text-gray-200 uppercase leading-none">10 ANS<br/>EXP.</div>
          </div>
        </header>

        {/* PROFIL RÉSUMÉ */}
        <p className="text-sm text-gray-700 leading-relaxed mb-8 border-l-4 border-cyan-500 pl-4 py-1 italic font-medium">
          Expert en architectures critiques et Intelligence Artificielle. Consultant pour le Ministère de la Santé, j'accompagne la transformation digitale nationale en alliant leadership technique (Agile/Scrum) et déploiement de solutions IA (NLP/Computer Vision) à fort impact social.
        </p>

        {/* SECTION PROJETS PHARES */}
        <section className="mb-8">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4 flex items-center gap-2">
            <Star size={14} className="text-yellow-500" /> Réalisations Stratégiques (Validation Internationale)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-cyan-50 border-l-4 border-cyan-500 rounded-r-xl">
              <div className="flex justify-between items-start mb-1">
                <strong className="text-gray-950 text-sm">NURIA (e-Santé)</strong>
                <span className="text-[9px] font-black bg-blue-600 text-white px-2 py-0.5 rounded italic shadow-sm">UNICEF VALIDATED</span>
              </div>
              <p className="text-[11px] text-gray-700 leading-snug">Architecte de la plateforme nationale de neurodéveloppement. Déploiement stratégique avec le MSHP pour la campagne Avril Bleu.</p>
            </div>
            <div className="p-4 bg-gray-900 text-white rounded-xl">
              <strong className="block text-sm mb-1 text-cyan-400">Kanyeh Assist (Deep Tech IA)</strong>
              <p className="text-[11px] text-gray-300 leading-snug">Conception d'une IA de télépathologie. Détection de cancers en temps réel (précision 80%). Solution optimisée pour le contexte africain.</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8">
          
          {/* EXPÉRIENCES */}
          <section className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
              <Zap size={14} className="text-cyan-500" /> Parcours Professionnel & Lead
            </h3>
            
            <div className="space-y-5">
              <div className="relative pl-4 border-l border-gray-200">
                <h4 className="text-sm font-bold text-gray-950">Consultant e-Santé <span className="text-cyan-600 font-black ml-2">/ MSHP (CIV)</span></h4>
                <p className="text-[11px] text-gray-600 mt-1 font-medium italic">En cours — Digitalisation nationale du parcours patient (E-PNEUMO) avec la Fondation MTN.</p>
              </div>

              <div className="relative pl-4 border-l border-gray-200">
                <h4 className="text-sm font-bold text-gray-950">Chef de Projet IT & Lead IA <span className="text-cyan-600 font-black ml-2">/ ADOMED</span></h4>
                <p className="text-[11px] text-gray-600 mt-1">Management Agile (Scrum Master). Développement du module de diagnostic IA et de l'écosystème complet de télémédecine.</p>
              </div>

              <div className="relative pl-4 border-l border-gray-200">
                <h4 className="text-sm font-bold text-gray-950">Co-fondateur & CTO <span className="text-cyan-600 font-black ml-2">/ AVLYTECH (FR)</span></h4>
                <p className="text-[11px] text-gray-600 mt-1">Architecture de solutions GovTech haute performance et applications critiques.</p>
              </div>

              <div className="relative pl-4 border-l border-gray-200">
                <h4 className="text-sm font-bold text-gray-950">Responsable Informatique <span className="text-cyan-600 font-black ml-2">/ IVAGREL</span></h4>
                <p className="text-[11px] text-gray-600 mt-1">4 ans — Refonte du SI, migration cloud (AWS/Docker) et gestion d'infrastructures.</p>
              </div>

              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">
                Analyste Développeur (Ecobank / Sitel) — Début de carrière
              </div>
            </div>
          </section>

          {/* SIDEBAR : CERTIFS & SKILLS */}
          <aside className="space-y-6">
            
            <section className="bg-gray-50 p-4 rounded-2xl">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-cyan-600 mb-3 flex items-center gap-2">
                <Award size={12}/> Certifications Mondiales
              </h3>
              <ul className="space-y-2 text-[10px] font-bold text-gray-800 uppercase">
                <li className="flex items-center gap-2"><ShieldCheck size={12} className="text-cyan-500"/> CISSP / Security+ (Cyber)</li>
                <li className="flex items-center gap-2"><ShieldCheck size={12} className="text-cyan-500"/> Digital Health (Imperial College)</li>
                <li className="flex items-center gap-2"><ShieldCheck size={12} className="text-cyan-500"/> Data Analytics & Sec (Google)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 border-b pb-1">Formation</h3>
              <div className="space-y-2 text-[10px]">
                <p><strong>Master IA & Cyber</strong> / HEC Maroc (2025)</p>
                <p><strong>DeepLearning.AI</strong> / Stanford University</p>
                <p><strong>Licence Génie Logiciel</strong> / Pigier CIV</p>
              </div>
            </section>

            <section>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 border-b pb-1">Expertise Technique</h3>
              <div className="flex flex-wrap gap-1">
                {["Computer Vision", "NLP", "FastAPI", "Next.js", "Spring Boot", "Flutter", "AWS", "IAM"].map(s => (
                  <span key={s} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[9px] font-bold tracking-tight">{s}</span>
                ))}
              </div>
            </section>

          </aside>
        </div>

        {/* FOOTER CV */}
        <footer className="mt-8 pt-4 border-t border-gray-100 text-center">
          <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.4em]">
            Portfolio Interactif : <span className="text-cyan-600 font-black tracking-normal">www.ibrahimkaramoko.site</span>
          </p>
        </footer>

      </div>
    </main>
  );
}