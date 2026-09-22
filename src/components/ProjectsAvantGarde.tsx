"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  X,
  CheckCircle2,
  Lock,
  Activity,
  Server,
  ArrowUpRight,
} from "lucide-react";

export type ProjectCategory = "all" | "health-gov" | "ai-deeptech" | "fintech-sec" | "platforms-iot";

export interface ProjectData {
  id: string;
  index: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  validation?: string;
  desc: string;
  link: string;
  technologies: string[];
  featured?: boolean;
  impactMetrics?: string;
  architectureDetails: {
    context: string;
    challenge: string;
    solution: string;
    stackNotes: string;
    impact: string;
  };
}

const allProjects: ProjectData[] = [
  {
    id: "kanyeh-assist",
    index: "01",
    title: "Kanyeh Assist",
    category: "ai-deeptech",
    categoryLabel: "Deep Tech & IA Médicale",
    validation: "SiPath, CHU & Laboratoire Roche",
    desc: "Infrastructure nationale de télé-diagnostic anatomopathologique reliant les CHU de Bouaké, Treichville, le PNLC et le Laboratoire Roche. Modèles YOLOv8/v11 pour la détection cellulaire d'atypies (sein, col de l'utérus), visionneuse WSI haute résolution (tuilage TIFF) et PostgreSQL RLS.",
    link: "https://new.kanyehassist.net/",
    featured: true,
    technologies: ["Python (FastAPI)", "PyTorch (YOLOv8/v11)", "OpenCV", "React 18", "TypeScript", "PostgreSQL (RLS)", "Docker"],
    impactMetrics: "80% de précision clinique • Reliant CHU Bouaké, Treichville, PNLC & Laboratoire Roche",
    architectureDetails: {
      context: "Pénurie critique d'anatomopathologistes en Afrique subsaharienne et délais d'attente prohibitifs pour les biopsies.",
      challenge: "Traiter et classifier des flux d'images histopathologiques gigaoctets (Whole Slide Imaging - WSI) en direct avec isolation stricte des données de santé.",
      solution: "Pipeline de Deep Learning YOLOv8/v11 optimisé pour la détection d'atypies cellulaires, visionneuse TIFF pyramidale tuilée haute fluidité, et politiques de sécurité Row-Level Security (RLS) par établissement.",
      stackNotes: "Python FastAPI, PyTorch, OpenCV, React 18, TypeScript, Tailwind, PostgreSQL avec RLS, Docker.",
      impact: "Validation scientifique par la Société Ivoirienne des Pathologistes (SiPath), déploiement au sein des CHU de Bouaké, Treichville, du PNLC et intégration par le Laboratoire Roche."
    }
  },
  {
    id: "nuria",
    index: "02",
    title: "Nuria",
    category: "health-gov",
    categoryLabel: "Santé Publique & GovTech",
    validation: "Validé UNICEF & MSHP",
    desc: "1ère plateforme africaine de dépistage et suivi précoce des troubles neurodéveloppementaux de l'enfant. Moteur de scoring clinique automatisé et synchronisation résiliente pour connectivité régionale intermittente.",
    link: "http://www.enuria.net",
    featured: true,
    technologies: ["Node.js (TypeScript)", "Next.js / React", "PostgreSQL", "Docker", "AWS"],
    impactMetrics: "Déploiement national MSHP • Partenariat UNICEF • Campagne Avril Bleu",
    architectureDetails: {
      context: "Dépistage pédiatrique précoce des troubles du neurodéveloppement (TND/Autisme) à l'échelle du territoire ivoirien.",
      challenge: "Garantir le recueil et le calcul de scores cliniques standardisés même en zone à connectivité dégradée ou inexistante.",
      solution: "Moteur de scoring clinique automatisé avec synchronisation résiliente en mode hors-ligne, interface soignants intuitive et registre centralisé pour le Ministère de la Santé.",
      stackNotes: "Node.js TypeScript, Next.js, base relationnelle PostgreSQL chiffrée, cluster Docker sous AWS.",
      impact: "Reconnaissance officielle UNICEF et adoption institutionnelle par le Ministère de la Santé (MSHP)."
    }
  },
  {
    id: "tila",
    index: "03",
    title: "Tila",
    category: "health-gov",
    categoryLabel: "Santé Mentale & Téléconsultation",
    validation: "UNICEF • PNUD • OMS • AFD • PNSM",
    desc: "Plateforme et application mobile (iOS/Android - ci.tila.app) de soutien psychologique et santé mentale d'envergure internationale. Déployée et activement mobilisée par les institutions multilatérales : UNICEF, PNUD, AFD, Expertise France, PNLT, OMS et le Programme National de Santé Mentale (PNSM). Téléconsultations confidentielles, suivi d'humeur et messagerie chiffrée de bout en bout (AES-256).",
    link: "https://tila.ci",
    featured: true,
    technologies: ["React Native / Expo", "TypeScript", "Node.js", "WebSockets", "PostgreSQL", "Chiffrement AES-256"],
    impactMetrics: "Déploiement multilatéral : UNICEF, PNUD, OMS, AFD, Expertise France, PNLT & PNSM • Secret médical garanti (AES-256)",
    architectureDetails: {
      context: "Démocratisation de l'accès aux soins de santé mentale en Afrique de l'Ouest, pilotée avec les plus grandes institutions sanitaires internationales.",
      challenge: "Fédérer les exigences techniques et réglementaires strictes de multiples bailleurs et agences onusiennes (UNICEF, PNUD, OMS, AFD, Expertise France) tout en garantissant le secret médical absolu.",
      solution: "Application mobile cross-platform avec canaux de téléconsultation chiffrés AES-256, messagerie temps réel WebSockets, journalisation d'humeur anonymisée et dashboards institutionnels agrégés pour le PNSM et le PNLT.",
      stackNotes: "React Native Expo, Node.js, WebSockets, PostgreSQL, cryptographie AES-256, infrastructure Cloud hautement disponible.",
      impact: "Plateforme de référence mobilisée par l'UNICEF, le PNUD, l'AFD, Expertise France, l'OMS, le PNLT et le PNSM pour la prise en charge psychosociale des populations."
    }
  },
  {
    id: "xh-skills-academy",
    index: "04",
    title: "XH Skills Academy",
    category: "health-gov",
    categoryLabel: "e-Santé & EdTech Africaine",
    validation: "Portée par Corine M. Ouattara",
    desc: "Plateforme d'apprentissage en ligne spécialisée dans les formations en santé numérique pour l'Afrique. Formations certifiantes adaptées aux réalités du continent africain pour qualifier et professionnaliser les acteurs de santé.",
    link: "https://xhskillsacademy.com/",
    featured: true,
    technologies: ["Next.js / React", "TypeScript", "Architecture LMS", "Node.js", "PostgreSQL", "Streaming Vidéo Bas Débit"],
    impactMetrics: "Formateur en Santé Numérique & Tech Lead • Programmes adaptés aux réalités du continent",
    architectureDetails: {
      context: "Déficit d'acculturation et de compétences spécialisées en santé numérique (e-Santé) chez les soignants et cadres de santé africains.",
      challenge: "Déployer une plateforme e-learning résiliente et fluide, optimisée pour les débits internet faibles et hétérogènes des pays d'Afrique subsaharienne.",
      solution: "Architecture Next.js avec streaming vidéo optimisé bas débit, parcours d'apprentissage modulaire, évaluations interactives et émission automatisée de certificats.",
      stackNotes: "Next.js, TypeScript, API Node.js, PostgreSQL, infrastructure Cloud scalable, streaming CDN.",
      impact: "Portée notamment par Corine Maurice Ouattara, plateforme panafricaine où Ibrahim intervient comme Formateur en santé numérique et Tech Lead du projet."
    }
  },
  {
    id: "epneumo",
    index: "05",
    title: "E-PNEUMO",
    category: "health-gov",
    categoryLabel: "ERP Médical Institutionnel",
    validation: "Partenariat MTN FONDATION",
    desc: "Digitalisation du parcours patient en pneumologie et interconnexion des hôpitaux publics de Côte d'Ivoire, en synergie avec la Fondation MTN.",
    link: "https://epneumo.ci",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "HL7 / FHIR"],
    impactMetrics: "Interconnexion CHU • Suivi épidémiologique en temps réel",
    architectureDetails: {
      context: "Programme de modernisation hospitalière ciblant le suivi des affections respiratoires et tuberculeuses en milieu hospitalier public.",
      challenge: "Interconnecter des centres hospitaliers universitaires aux infrastructures réseau hétérogènes sans perte de données critiques.",
      solution: "Système de dossier patient partagé (DMP) avec réplication multi-sites, alertes de suivi des traitements et tableaux de bord décisionnels ministériels.",
      stackNotes: "Conformité stricte aux standards de données de santé (HL7/FHIR), architecture résiliente en mode déconnecté.",
      impact: "Financé et soutenu par la Fondation MTN, déployé dans les principaux centres de référence."
    }
  },
  {
    id: "ci-identite",
    index: "06",
    title: "CI Identité",
    category: "fintech-sec",
    categoryLabel: "CyberSécurité & IAM d'État",
    validation: "Gouvernemental",
    desc: "Solution régalienne de gestion d'identité numérique et de contrôle d'accès sécurisé (IAM). Authentification multi-facteurs, signature cryptographique et chiffrement de pointe.",
    link: "https://identite.ci/",
    featured: true,
    technologies: ["OAuth 2.0 / OIDC", "Rust / Go", "Keycloak", "PKI Cryptographie"],
    impactMetrics: "Protection de l'identité citoyenne • Chiffrement de niveau étatique",
    architectureDetails: {
      context: "Transformation numérique des services publics nécessitant une identité numérique unique, régalienne et inviolable.",
      challenge: "Prévenir l'usurpation d'identité, garantir la souveraineté des données citoyennes et faciliter l'interopérabilité des ministères.",
      solution: "Fournisseur d'identité centralisé basé sur OpenID Connect, stockage décentralisé des preuves cryptographiques et validation biométrique.",
      stackNotes: "Composants sécurisés en Go/Rust, modules HSM, architecture Zero-Trust.",
      impact: "Base de confiance pour la dématérialisation des démarches administratives officielles."
    }
  },
  {
    id: "ci-connect",
    index: "07",
    title: "CI Connect (IA)",
    category: "ai-deeptech",
    categoryLabel: "NLP & Accessibilité Juridique",
    validation: "Recherche & Inclusion",
    desc: "Moteur vocal et textuel de démocratisation du droit ivoirien. Analyse en langage naturel (NLP) permettant à tout citoyen d'interroger la législation et les codes de lois par la voix.",
    link: "#",
    technologies: ["Speech-to-Text", "NLP", "FastAPI", "Python", "Vector Search"],
    impactMetrics: "Inclusion civique • Interrogation vocale intuitive du droit",
    architectureDetails: {
      context: "Barrière de la langue et complexité du jargon juridique limitant l'accès aux droits fondamentaux.",
      challenge: "Traduire des requêtes formulées en langage familier ou vocal en références d'articles de lois exacts et compréhensibles.",
      solution: "Moteur NLP combinant reconnaissance vocale adaptée aux accents locaux et recherche vectorielle sémantique sur l'ensemble du corpus législatif ivoirien.",
      stackNotes: "Microservice FastAPI ultra-léger, embeddings juridiques, synthèse vocale pour restitution audio aux non-lecteurs.",
      impact: "Projet pionnier d'accessibilité civique salué pour son impact sociétal."
    }
  },
  {
    id: "avlytech",
    index: "08",
    title: "AVLYTECH",
    category: "platforms-iot",
    categoryLabel: "Startup GovTech / Co-Fondateur",
    validation: "France & International",
    desc: "Co-fondateur et CTO de cette startup basée en France. Ingénierie logicielle pour institutions étatiques, architectures critiques et applications de souveraineté numérique.",
    link: "https://avlytech.fr",
    technologies: ["Microservices", "Kubernetes", "Next.js", "Python", "Cloud Hybride"],
    impactMetrics: "Startup co-fondée • Solutions institutionnelles et grands comptes",
    architectureDetails: {
      context: "Accompagnement des administrations publiques et organisations régionales dans leur autonomie logicielle.",
      challenge: "Délivrer des architectures logicielles répondant à de fortes exigences de conformité réglementaire (RGPD, souveraineté des données).",
      solution: "Cadre applicatif standardisé haute sécurité pour le déploiement rapide de portails de services publics et de systèmes transactionnels.",
      stackNotes: "Conteneurisation avancée Kubernetes, audits de code automatisés, intégration continue GitOps.",
      impact: "Contrats institutionnels et positionnement d'avant-garde sur le segment GovTech."
    }
  },
  {
    id: "yamoh",
    index: "09",
    title: "Yamoh",
    category: "platforms-iot",
    categoryLabel: "Mobilité & Flutter",
    desc: "Plateforme et application mobile de covoiturage urbain et interurbain en Côte d'Ivoire avec un mécanisme innovant de négociation et tarification dynamique par trajet.",
    link: "http://www.yamoh.net",
    technologies: ["Flutter", "Dart", "Firebase", "Node.js", "Google Maps Platform"],
    impactMetrics: "Tarification dynamique • Optimisation du trafic urbain",
    architectureDetails: {
      context: "Embouteillages massifs et coût élevé du transport individuel dans les grandes agglomérations ivoiriennes.",
      challenge: "Calculer des itinéraires partagés en temps réel avec intégration des moyens de paiement locaux (Orange, MTN, Wave).",
      solution: "Algorithme d'appariement conducteur-passagers en fonction du trajet prévu, avec messagerie instantanée intégrée et portefeuille électronique sécurisé.",
      stackNotes: "Développement mobile Flutter réactif, gestion d'état Bloc/Provider, géolocalisation haute fréquence optimisée en batterie.",
      impact: "Alternative économique et conviviale aux taxis traditionnels pour les trajets quotidiens."
    }
  },
  {
    id: "assofit",
    index: "10",
    title: "Assofit",
    category: "platforms-iot",
    categoryLabel: "Réseau Social & Matching IA",
    desc: "Application sportive communautaire intégrant un ERP de gestion pour associations et clubs sportifs, couplé à un algorithme de recommandation et matching par centres d'intérêt.",
    link: "https://assofit.com/",
    technologies: ["React Native", "Next.js", "PostgreSQL", "Algorithme Matching", "Docker"],
    impactMetrics: "Communautés sportives européennes • Matching de partenaires",
    architectureDetails: {
      context: "Marché européen du fitness et des sports collectifs en recherche d'animation communautaire.",
      challenge: "Associer gestion administrative (adhésions, plannings) et expérience sociale stimulante pour les licenciés.",
      solution: "Système de matching dynamique basé sur le niveau, la localisation et les créneaux horaires, adossé à un back-office complet de facturation.",
      stackNotes: "Base relationnelle PostgreSQL optimisée pour les requêtes géospatiales (PostGIS), interface moderne et interactive.",
      impact: "Plateforme déployée et adoptée par plusieurs clubs sportifs en France."
    }
  }
];

const categoryTabs = [
  { id: "all" as ProjectCategory, label: "Tous les Projets", count: 10 },
  { id: "health-gov" as ProjectCategory, label: "e-Santé & GovTech", count: 4 },
  { id: "ai-deeptech" as ProjectCategory, label: "IA & Deep Tech", count: 2 },
  { id: "fintech-sec" as ProjectCategory, label: "FinTech & Sécurité", count: 1 },
  { id: "platforms-iot" as ProjectCategory, label: "Web, Mobile & IoT", count: 3 },
];

export default function ProjectsAvantGarde() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const filteredProjects = activeCategory === "all"
    ? allProjects
    : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-200">
      {/* SECTION HEADER ÉDITORIAL */}
      <div className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-zinc-200">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 mb-3 flex items-center gap-2">
            <span>02 // Réalisations & Écosystèmes Déployés</span>
          </h2>
          <p className="text-3xl md:text-5xl lg:text-6xl font-black text-zinc-950 leading-tight tracking-tight uppercase">
            Architectures <br />
            <span className="text-zinc-500">en Production.</span>
          </p>
        </div>

        <div className="lg:max-w-md flex flex-col gap-2 text-left">
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
            Une sélection de <strong className="text-zinc-950 font-semibold">10 réalisations majeures</strong> validées par les institutions sanitaires (UNICEF, PNUD, OMS, AFD, MSHP-CMU, SiPath, Laboratoire Roche) et des partenaires télécoms et bancaires.
          </p>
          <span className="text-xs font-mono text-zinc-400">
            Cliquez sur &quot;Consulter l&apos;architecture&quot; pour inspecter les spécifications.
          </span>
        </div>
      </div>

      {/* TABS DE FILTRAGE ÉDITORIAL CLAUDE STYLE */}
      <div className="flex items-center gap-1 overflow-x-auto pb-4 mb-10 border-b border-zinc-200 no-scrollbar">
        {categoryTabs.map((tab) => {
          const isActive = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`relative px-4 py-2 text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-colors flex items-center gap-2 ${
                isActive
                  ? "text-zinc-950 font-bold border-b-2 border-zinc-950 bg-white"
                  : "text-zinc-500 hover:text-zinc-900 bg-transparent"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.2 ${
                  isActive ? "bg-zinc-900 text-white" : "bg-zinc-200 text-zinc-600"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* GRILLE DES PROJETS NETTE ET STRUCTURÉE (SANS ARRONDIS BULLES) */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className={`group relative p-8 flex flex-col justify-between transition-all duration-300 bg-white border border-zinc-200 hover:border-zinc-950 shadow-sm hover:shadow-md ${
                  isFeatured ? "md:col-span-2 lg:col-span-2 bg-[#fcfcfb]" : ""
                }`}
              >
                <div>
                  {/* EN-TÊTE DE LA CARTE : NUMÉRO & BADGES */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b border-zinc-100">
                    <span className="font-mono text-xs font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors">
                      {"//"} {project.index}
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-zinc-100 text-zinc-700 border border-zinc-200">
                        {project.categoryLabel}
                      </span>

                      {project.validation && (
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-300 flex items-center gap-1">
                          <CheckCircle2 size={11} />
                          {project.validation}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* TITRE */}
                  <h3 className={`font-black text-zinc-950 tracking-tight mb-3 uppercase ${
                    isFeatured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                  }`}>
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  {/* MÉTRIQUE CLÉ */}
                  {project.impactMetrics && (
                    <div className="mb-6 p-3 bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-800 flex items-center gap-2">
                      <Activity size={14} className="text-sky-600 shrink-0" />
                      <span>{project.impactMetrics}</span>
                    </div>
                  )}

                  {/* TECH STACK TAGS NETS */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-zinc-50 border border-zinc-200 text-zinc-700 text-[10px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ACTIONS PIED DE CARTE */}
                <div className="pt-4 border-t border-zinc-200 flex items-center justify-between gap-3 text-xs font-mono uppercase tracking-wider">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="font-bold text-zinc-900 hover:text-sky-600 transition-colors flex items-center gap-1 group/btn"
                  >
                    <span>Consulter l&apos;architecture</span>
                    <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  {project.link !== "#" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 hover:text-zinc-950 transition-colors flex items-center gap-1"
                    >
                      <span>Visiter</span>
                      <ArrowUpRight size={13} />
                    </a>
                  ) : (
                    <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1">
                      <Lock size={10} /> Confidentiel
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* MODAL ARCHITECTURE ÉDITORIALE ÉLÉGANTE */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto">
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-zinc-900/60 backdrop-blur-sm"
            ></motion.div>

            {/* MODAL CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              className="relative w-full max-w-3xl bg-white border-2 border-zinc-900 p-6 md:p-10 z-10 max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* CLOSE BUTTON */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 text-zinc-500 hover:text-zinc-950 border border-zinc-200 hover:border-zinc-900 transition-colors bg-white"
                aria-label="Fermer"
              >
                <X size={18} />
              </button>

              {/* EN-TÊTE */}
              <div className="mb-6 pb-6 border-b border-zinc-200">
                <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs">
                  <span className="text-zinc-400 font-bold">{"//"} {selectedProject.index}</span>
                  <span className="px-2 py-0.5 bg-zinc-100 text-zinc-800 border border-zinc-200">
                    {selectedProject.categoryLabel}
                  </span>
                  {selectedProject.validation && (
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold">
                      {selectedProject.validation}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-zinc-950 uppercase tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-zinc-600 text-sm mt-1">
                  {selectedProject.desc}
                </p>
              </div>

              {/* CONTENU DOSSIER ARCHITECTURE */}
              <div className="space-y-6 text-sm text-zinc-800">
                <div className="p-4 bg-zinc-50 border border-zinc-200">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 mb-2 flex items-center gap-2">
                    <Layers size={14} /> Contexte & Défi Métier
                  </h4>
                  <p className="leading-relaxed text-zinc-700">
                    {selectedProject.architectureDetails.context}
                  </p>
                  <p className="mt-2 text-xs text-zinc-500 italic">
                    Problématique critique : {selectedProject.architectureDetails.challenge}
                  </p>
                </div>

                <div className="p-4 bg-zinc-50 border border-zinc-200">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 mb-2 flex items-center gap-2">
                    <Cpu size={14} /> Architecture & Solution Déployée
                  </h4>
                  <p className="leading-relaxed text-zinc-700">
                    {selectedProject.architectureDetails.solution}
                  </p>
                  <p className="mt-2 text-xs font-mono text-zinc-900 font-medium">
                    Infrastructure : {selectedProject.architectureDetails.stackNotes}
                  </p>
                </div>

                <div className="p-4 bg-zinc-50 border border-zinc-200">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 mb-2 flex items-center gap-2">
                    <ShieldCheck size={14} /> Impact Mesuré & Validation
                  </h4>
                  <p className="leading-relaxed text-zinc-700">
                    {selectedProject.architectureDetails.impact}
                  </p>
                </div>

                {/* TECHNOLOGIES */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 mb-2 flex items-center gap-1.5">
                    <Server size={14} /> Stack Technique
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-white border border-zinc-300 text-zinc-900 font-mono text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* PIED MODAL */}
              <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
                {selectedProject.link !== "#" ? (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-zinc-900 text-white font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Visiter la plateforme live</span>
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span className="text-zinc-500 flex items-center gap-1">
                    <Lock size={12} /> Solution sous accord de confidentialité
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-5 py-2.5 border border-zinc-300 text-zinc-700 hover:text-zinc-950 hover:border-zinc-950 transition-colors uppercase"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}