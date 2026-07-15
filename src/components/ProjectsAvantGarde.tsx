"use client";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

// CONFIGURATION DE TES 15 PROJETS MIS À JOUR (MGROUP supprimé, SiPath ajouté)
const projects = [
  { 
    title: "Nuria", 
    type: "Santé Publique & GovTech", 
    validation: "Validé UNICEF & MSHP-CMU",
    desc: "La première plateforme africaine dédiée aux troubles du neurodéveloppement. Validée par l'UNICEF et le Ministère de la Santé (MSHP-CMU), son déploiement est actuellement en cours sur toute l'étendue du territoire national.", 
    link: "http://www.enuria.net", 
    span: "col-span-1 md:col-span-2", 
    featured: true 
  },
  { 
    title: "Kanyeh Assist", 
    type: "Deep Tech & IA", 
    validation: "Validé par la SiPath",
    desc: "Plateforme de télépathologie assistée par IA pour la détection du cancer en Afrique. Analyse des lames en temps réel via microscope (80% de précision). Officiellement validée par la Société Ivoirienne des Pathologistes (SiPath).", 
    link: "https://new.kanyehassist.net/", 
    span: "col-span-1 md:col-span-2", 
    featured: true 
  },
  { 
    title: "SiPath Web", 
    type: "Web Design & Institutionnel", 
    validation: "Site Officiel",
    desc: "Conception et développement de la vitrine numérique officielle de la Société Ivoirienne des Pathologistes. Une plateforme moderne, épurée et hautement performante dédiée à la valorisation de la spécialité et au partage de ressources scientifiques.", 
    link: "https://www.sipath.ci/", 
    span: "col-span-1" 
  },
  { 
    title: "E-PNEUMO", 
    type: "ERP Médical Institutionnel", 
    desc: "Digitalisation du parcours patient en collaboration avec MTN FONDATION pour interconnecter les hôpitaux publics de Côte d'Ivoire.", 
    link: "https://epneumo.ci", 
    span: "col-span-1" 
  },
  { 
    title: "Tila", 
    type: "Santé Mentale", 
    validation: "Validé MSHP-CMU & MTN",
    desc: "Plateforme de référence pour la santé mentale en Côte d'Ivoire. Validée par le Ministère de la Santé (MSHP-CMU) et utilisée dans le cadre des Yellow Day's 21 de MTN CI.", 
    link: "https://tila.ci", 
    span: "col-span-1" 
  },
  { 
    title: "Cliniques médicales H2A", 
    type: "Santé Internationale & ERP", 
    desc: "Transformation digitale complète. Mise en place d'une plateforme de gestion hospitalière interconnectée entre la France et la Côte d'Ivoire.", 
    link: "https://cliniquesmedicalesh2a.com/", 
    span: "col-span-1 md:col-span-2", 
    featured: true 
  },
  { title: "AVLYTECH", type: "Tech Agency / Startup", desc: "Co-fondateur de cette startup basée en France. Expertise en solutions gouvernementales et applications haute performance.", link: "https://avlytech.fr", span: "col-span-1" },
  { title: "Adomed.care & IA", type: "Télémédecine & IA", desc: "Première IA médicale de Côte d'Ivoire. Plateforme complète (Mobile + Web) incluant un module de diagnostic IA.", link: "https://adomed.care/", span: "col-span-1 md:col-span-2" },
  { title: "Yamoh", type: "Mobilité & Flutter", desc: "Plateforme et appli de covoiturage en Côte d'Ivoire avec un système de tarification dynamique par le chauffeur.", link: "http://www.yamoh.net", span: "col-span-1" },
  { title: "Assofit", type: "Social Network & Matching IA", desc: "Application de rencontre sportive intégrant un ERP de gestion et une IA de matching pour l'Europe.", link: "https://assofit.com/", span: "col-span-1" },
  { title: "EFA (Education For Africa)", type: "EdTech & Generative IA", desc: "IA générative qui corrige les exercices et aide les élèves à faire leurs devoirs à la maison.", link: "https://educationforafrica.com/", span: "col-span-1" },
  { title: "MonetiquePlus", type: "FinTech & Sécurité", desc: "Plateforme de paiement électronique robuste et scalable pour transactions critiques (Java/Angular).", link: "https://www.monetiqueplus.fr/", span: "col-span-1" },
  { title: "CI Identité", type: "CyberSécurité & IAM", desc: "Solution gouvernementale de gestion d'identité numérique sécurisée (Chiffrement, IAM).", link: "https://identite.ci/", span: "col-span-1 md:col-span-2" },
  { title: "Smart Farm", type: "AgriTech & IoT", desc: "Solution IoT pour le suivi agricole et l'optimisation des rendements via l'analyse de données (Python/React).", link: "https://www.agri-tech.tn/smart-farm/", span: "col-span-1" },
  { title: "CI Connect (IA)", type: "NLP & Accessibilité", desc: "Accès vocal aux lois ivoiriennes via le Traitement du Langage Naturel (NLP/FastAPI).", link: "#", span: "col-span-1" },
];

export default function ProjectsAvantGarde() {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto bg-[var(--background)]">
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-sm font-mono tracking-[0.3em] text-[var(--primary)] uppercase mb-4">02. Réalisations</h2>
          <p className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tighter">
            Architectures <br /> Déployées.
          </p>
        </div>
        <p className="max-w-md text-gray-500 font-medium">
          Une sélection de 15 projets allant de la santé publique au gouvernement, prouvant ma capacité à livrer des solutions critiques de bout en bout.
        </p>
      </div>

      {/* GRILLE ASYMÉTRIQUE CSS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`${project.span} group relative bg-white border border-gray-200 rounded-[2rem] p-8 md:p-12 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]`}
          >
            {project.featured && (
              <div className="absolute top-8 right-8 w-24 h-24 bg-[var(--primary)]/10 rounded-full blur-2xl group-hover:bg-[var(--primary)]/20 transition-colors"></div>
            )}
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                {/* BLOC DES BADGES */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-[11px] font-bold font-mono uppercase group-hover:bg-gray-900 group-hover:text-white transition-colors">
                    {project.type}
                  </span>
                  
                  {project.validation && (
                    <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-[11px] font-bold font-mono uppercase border border-green-200 shadow-sm">
                      {project.validation}
                    </span>
                  )}
                </div>

                <h3 className={`font-black text-gray-900 mb-4 ${project.featured ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
                  {project.title}
                </h3>
                <p className={`text-gray-500 leading-relaxed ${project.featured ? 'text-lg md:text-xl max-w-2xl' : 'text-base'}`}>
                  {project.desc}
                </p>
              </div>

              <div className="mt-12 flex items-center gap-4">
                {project.link !== "#" ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-bold text-[var(--primary)] hover:text-gray-900 transition-colors group/link">
                    VOIR LE PROJET 
                    <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
                  </a>
                ) : (
                  <span className="text-sm font-bold text-gray-400">PROJET INTERNE</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}