"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  X,
  CheckCircle2,
  Lock,
  Activity,
  Server,
} from "lucide-react";

export type ProjectCategory = "all" | "health-gov" | "ai-deeptech" | "fintech-sec" | "platforms-iot";

export interface ProjectData {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  validation?: string;
  validationBadgeColor?: string;
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
    id: "nuria",
    title: "Nuria",
    category: "health-gov",
    categoryLabel: "Santé Publique & GovTech",
    validation: "Validé UNICEF & MSHP-CMU",
    validationBadgeColor: "emerald",
    desc: "La première plateforme panafricaine dédiée au dépistage et au suivi des troubles du neurodéveloppement (TND/Autisme). Déploiement national avec le Ministère de la Santé.",
    link: "http://www.enuria.net",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Node.js / Express", "PostgreSQL", "Docker", "AWS"],
    impactMetrics: "Déploiement national • Campagne Avril Bleu • +10k enfants ciblés",
    architectureDetails: {
      context: "Projet stratégique de santé publique piloté en coordination avec l'UNICEF et le Programme National de Santé Mentale (MSHP-CMU).",
      challenge: "Numériser les protocoles cliniques de dépistage pédiatrique pour permettre aux soignants de terrain de diagnostiquer précocement les troubles du neurodéveloppement en zones urbaines et rurales.",
      solution: "Architecture web progressive ultra-résiliente, optimisée pour les faibles bandes passantes, avec formulaires d'évaluation clinique dynamiques, synchronisation sécurisée et interconnexion aux registres nationaux.",
      stackNotes: "Frontend Next.js sécurisé, API REST microservices, base de données relationnelle chiffrée au repos, pipeline CI/CD automatisé sous Docker.",
      impact: "Reconnaissance officielle par l'UNICEF, intégration dans les protocoles du Ministère de la Santé de Côte d'Ivoire."
    }
  },
  {
    id: "kanyeh-assist",
    title: "Kanyeh Assist",
    category: "ai-deeptech",
    categoryLabel: "Deep Tech & IA Médicale",
    validation: "Validé Officiellement par la SiPath",
    validationBadgeColor: "cyan",
    desc: "Plateforme de télépathologie assistée par vision par ordinateur pour la détection temps réel du cancer en Afrique. Analyse microscopique haute résolution avec 80% de précision.",
    link: "https://new.kanyehassist.net/",
    featured: true,
    technologies: ["Python", "PyTorch / TensorFlow", "Computer Vision", "FastAPI", "React", "Docker"],
    impactMetrics: "80% de précision clinique • Réduction du diagnostic de 3 semaines à quelques minutes",
    architectureDetails: {
      context: "Pénurie critique d'anatomopathologistes en Afrique subsaharienne (moins d'un spécialiste pour 1 million d'habitants).",
      challenge: "Traiter et classifier des flux d'images histopathologiques volumineuses issues d'objectifs microscopiques en direct, sans latence prohibitive.",
      solution: "Pipeline de Deep Learning entraîné sur des banques cellulaires africaines, couplé à une interface temps réel de télé-expertise permettant l'annotation collaborative à distance.",
      stackNotes: "Modèles CNN/Vision Transformer optimisés par quantification TensorRT, backend asynchrone FastAPI, streaming WebSocket sécurisé.",
      impact: "Validation scientifique et clinique par la Société Ivoirienne des Pathologistes (SiPath)."
    }
  },
  {
    id: "sipath-web",
    title: "SiPath Web",
    category: "platforms-iot",
    categoryLabel: "Portail Institutionnel & Scientifique",
    validation: "Vitrine Officielle",
    validationBadgeColor: "blue",
    desc: "Plateforme institutionnelle de la Société Ivoirienne des Pathologistes. Hub de publications scientifiques, annuaire national des spécialistes et espace de formation continue.",
    link: "https://www.sipath.ci/",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "CMS Headless", "Vercel"],
    impactMetrics: "Référence nationale • Hub scientifique de la pathologie en Côte d'Ivoire",
    architectureDetails: {
      context: "Nécessité de moderniser l'image et l'outillage numérique des médecins pathologistes ivoiriens.",
      challenge: "Fournir un portail ergonomique, ultra-rapide et responsive garantissant l'accès aux ressources médicales et événements académiques.",
      solution: "Site Jamstack optimisé SEO, avec catalogue de revues scientifiques, agenda des congrès et espace membre sécurisé.",
      stackNotes: "Architecture Serverless Next.js, mise en cache CDN Edge, design épuré conforme aux chartes médicales internationales.",
      impact: "Portail adopté par l'ensemble des praticiens membres de la société savante."
    }
  },
  {
    id: "epneumo",
    title: "E-PNEUMO",
    category: "health-gov",
    categoryLabel: "ERP Médical Institutionnel",
    validation: "Partenariat MTN FONDATION",
    validationBadgeColor: "amber",
    desc: "Digitalisation du parcours patient en pneumologie et interconnexion des hôpitaux publics de Côte d'Ivoire, en synergie avec la Fondation MTN.",
    link: "https://epneumo.ci",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "HL7 / FHIR", "Architecture Hybride"],
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
    id: "tila",
    title: "Tila",
    category: "health-gov",
    categoryLabel: "Santé Mentale & Support",
    validation: "Validé MSHP-CMU & MTN",
    validationBadgeColor: "emerald",
    desc: "Plateforme pionnière d'écoute, de soutien psychologique et de télé-consultation en santé mentale. Déployée lors des Yellow Day's 21 de MTN CI.",
    link: "https://tila.ci",
    technologies: ["React", "FastAPI", "WebRTC", "PostgreSQL", "Chiffrement Bout-en-Bout"],
    impactMetrics: "Programme National de Santé Mentale • Écoute anonyme et sécurisée",
    architectureDetails: {
      context: "Lutte contre la stigmatisation de la santé mentale et facilitation de l'accès aux psychologues agréés.",
      challenge: "Garantir un anonymat total et une confidentialité absolue tout en fluidifiant la prise de rendez-vous et la téléconsultation.",
      solution: "Architecture avec salon de téléconsultation WebRTC chiffré de bout en bout, auto-évaluation anonyme du bien-être psychologique et routage vers des spécialistes certifiés.",
      stackNotes: "Backend sécurisé, chiffrement asymétrique, infrastructure hébergée dans un environnement certifié.",
      impact: "Utilisé lors des campagnes citoyennes d'envergure nationale et soutenu par le MSHP-CMU."
    }
  },
  {
    id: "h2a",
    title: "Cliniques Médicales H2A",
    category: "health-gov",
    categoryLabel: "Santé Internationale & ERP",
    validation: "France - Côte d'Ivoire",
    validationBadgeColor: "blue",
    desc: "Transformation digitale globale et interconnexion hospitalière transnationale. ERP de gestion clinique, facturation, laboratoire et suivi des évacuations sanitaires.",
    link: "https://cliniquesmedicalesh2a.com/",
    featured: true,
    technologies: ["Next.js", "Spring Boot", "PostgreSQL", "Docker", "AWS Multi-Région"],
    impactMetrics: "Gestion de bout-en-bout • Interconnexion France-Abidjan sans interruption",
    architectureDetails: {
      context: "Groupe de cliniques privées haut de gamme gérant des parcours de soins complexes entre l'Europe et l'Afrique de l'Ouest.",
      challenge: "Assurer la continuité du dossier médical informatisé et la traçabilité des actes entre praticiens français et ivoiriens dans un cadre légal bilatéral.",
      solution: "ERP hospitalier modulaire : admissions, bloc opératoire, pharmacie, facturation intégrée et télé-expertise transfrontalière.",
      stackNotes: "Microservices Java Spring Boot pour la robustesse transactionnelle, frontend réactif Next.js, cluster Docker sous AWS.",
      impact: "Diminution drastique des temps d'attente administratifs et fiabilisation comptable et clinique à 100%."
    }
  },
  {
    id: "avlytech",
    title: "AVLYTECH",
    category: "platforms-iot",
    categoryLabel: "Startup GovTech / Co-Fondateur",
    validation: "France & International",
    validationBadgeColor: "indigo",
    desc: "Co-fondateur et CTO de cette startup basée en France. Ingénierie logicielle pour institutions étatiques, architectures critiques et applications de souveraineté numérique.",
    link: "https://avlytech.fr",
    technologies: ["Architecture Microservices", "Kubernetes", "Next.js", "Python", "Cloud Hybride"],
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
    id: "adomed",
    title: "Adomed.care & IA",
    category: "ai-deeptech",
    categoryLabel: "Télémédecine & Diagnostic IA",
    validation: "Première IA Médicale CIV",
    validationBadgeColor: "cyan",
    desc: "Écosystème de santé complet (App Mobile + Portail Web) doté de la première IA médicale d'orientation diagnostique en Côte d'Ivoire. Consultations à domicile et télé-suivi.",
    link: "https://adomed.care/",
    featured: true,
    technologies: ["Flutter", "Python / FastAPI", "Machine Learning", "Node.js", "MongoDB", "GCP"],
    impactMetrics: "Diagnostic assisté • Prise en charge à domicile facilitée",
    architectureDetails: {
      context: "Désengorgement des urgences et amélioration de l'accès aux soins de premier recours à Abidjan.",
      challenge: "Concevoir un moteur d'inférence médical capable d'orienter le patient selon ses symptômes sans poser de faux diagnostics anxiogènes.",
      solution: "Arbre de décision probabiliste combiné à un modèle NLP pour l'analyse des symptômes en langage naturel, couplé à la géolocalisation des soignants pour visites à domicile.",
      stackNotes: "Application mobile cross-platform Flutter, API Python pour le moteur IA, backend temps réel avec notifications push géolocalisées.",
      impact: "Mise en service opérationnelle et adoption par des milliers de patients et professionnels de santé."
    }
  },
  {
    id: "yamoh",
    title: "Yamoh",
    category: "platforms-iot",
    categoryLabel: "Mobilité & Flutter",
    desc: "Plateforme et application mobile de covoiturage urbain et interurbain en Côte d'Ivoire avec un mécanisme innovant de négociation et tarification dynamique par trajet.",
    link: "http://www.yamoh.net",
    technologies: ["Flutter", "Dart", "Firebase", "Node.js", "Google Maps Platform", "Stripe / Mobile Money"],
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
    title: "Assofit",
    category: "platforms-iot",
    categoryLabel: "Réseau Social & Matching IA",
    desc: "Application sportive communautaire intégrant un ERP de gestion pour associations et clubs sportifs, couplé à un algorithme de recommandation et matching par centres d'intérêt.",
    link: "https://assofit.com/",
    technologies: ["React Native", "Next.js", "PostgreSQL", "Recommendation Engine", "Docker"],
    impactMetrics: "Communautés sportives européennes • Matching de partenaires de séance",
    architectureDetails: {
      context: "Marché européen du fitness et des sports collectifs en recherche d'animation communautaire.",
      challenge: "Associer gestion administrative (adhésions, plannings) et expérience sociale stimulante pour les licenciés.",
      solution: "Système de matching dynamique basé sur le niveau, la localisation et les créneaux horaires, adossé à un back-office complet de facturation.",
      stackNotes: "Base relationnelle PostgreSQL optimisée pour les requêtes géospatiales (PostGIS), interface moderne et interactive.",
      impact: "Plateforme déployée et adoptée par plusieurs clubs sportifs en France."
    }
  },
  {
    id: "efa",
    title: "EFA (Education For Africa)",
    category: "ai-deeptech",
    categoryLabel: "EdTech & Generative AI",
    desc: "Plateforme éducative propulsée par l'IA générative. Tuteur virtuel adaptatif qui guide les élèves dans la résolution de leurs exercices scolaires avec pédagogie bienveillante.",
    link: "https://educationforafrica.com/",
    technologies: ["Next.js", "OpenAI / Claude API", "FastAPI", "Python", "Vector DB", "Tailwind CSS"],
    impactMetrics: "Tuteur IA 24/7 • Démocratisation du soutien scolaire de qualité",
    architectureDetails: {
      context: "Inégalités d'accès au soutien scolaire personnalisé pour les collégiens et lycéens sur le continent africain.",
      challenge: "Offrir une IA pédagogique qui n'écrit pas la réponse à la place de l'élève, mais le questionne selon la méthode socratique.",
      solution: "Architecture RAG (Retrieval-Augmented Generation) indexant les programmes éducatifs nationaux, formulant des explications pas-à-pas personnalisées au rythme de chaque apprenant.",
      stackNotes: "Pipelines LangChain, base vectorielle pour le corpus scolaire, interface enfant/adolescent intuitive et ludique.",
      impact: "Accélération de la compréhension et autonomie accrue pour des centaines d'élèves."
    }
  },
  {
    id: "monetique-plus",
    title: "MonetiquePlus",
    category: "fintech-sec",
    categoryLabel: "FinTech & Paiements Critiques",
    validation: "Haute Sécurité & Scalabilité",
    validationBadgeColor: "emerald",
    desc: "Plateforme transactionnelle bancaire et de monétique électronique conçue pour traiter des volumes massifs de paiements sécurisés avec tolérance aux pannes.",
    link: "https://www.monetiqueplus.fr/",
    technologies: ["Java", "Spring Boot", "Angular", "Kafka", "PostgreSQL", "HSM / PCI-DSS"],
    impactMetrics: "Tolérance aux pannes • Zéro perte de transaction • Traitement temps réel",
    architectureDetails: {
      context: "Infrastructures financières nécessitant une haute disponibilité (99.99%) et le respect des normes strictes de conformité bancaire.",
      challenge: "Éviter les doubles débits, garantir l'idempotence des transactions et assurer la réconciliation en continu.",
      solution: "Architecture orientée événements avec bus de messages distribué (Kafka), transactions distribuées ACID et journalisation d'audit infalsifiable.",
      stackNotes: "Microservices Spring Cloud, chiffrement matériel HSM, audits de conformité PCI-DSS.",
      impact: "Traitement fiable de flux financiers critiques pour les partenaires du secteur monétique."
    }
  },
  {
    id: "ci-identite",
    title: "CI Identité",
    category: "fintech-sec",
    categoryLabel: "CyberSécurité & IAM d'État",
    validation: "Normes Gouvernementales",
    validationBadgeColor: "indigo",
    desc: "Solution régalienne de gestion d'identité numérique et de contrôle d'accès sécurisé (IAM). Authentification multi-facteurs, signature cryptographique et chiffrement de pointe.",
    link: "https://identite.ci/",
    featured: true,
    technologies: ["OAuth 2.0 / OIDC", "Rust / Go", "Keycloak", "Cryptographie Asymétrique", "PKI"],
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
    id: "smart-farm",
    title: "Smart Farm",
    category: "platforms-iot",
    categoryLabel: "AgriTech & Capteurs IoT",
    desc: "Plateforme connectée d'optimisation agronomique. Télémétrie en temps réel sur l'humidité des sols, les conditions météo et pilotage automatisé de l'irrigation via intelligence artificielle.",
    link: "https://www.agri-tech.tn/smart-farm/",
    technologies: ["IoT / MQTT", "Python", "React", "Time-Series DB (InfluxDB)", "FastAPI", "Grafana"],
    impactMetrics: "Économie d'eau de 35% • Prévention des maladies culturales",
    architectureDetails: {
      context: "Enjeux climatiques et raréfaction des ressources en eau pour les exploitations agricoles africaines.",
      challenge: "Collecter des données télémétriques de capteurs basse consommation disséminés sur de vastes parcelles avec connectivité intermittente.",
      solution: "Passerelles IoT transmettant via protocole MQTT vers un moteur d'analyse prédictif anticipant les besoins hydriques selon les prévisions météorologiques locales.",
      stackNotes: "Courtier MQTT résilient, base temporelle InfluxDB, visualisations interactives pour les agriculteurs.",
      impact: "Augmentation des rendements tout en réduisant l'empreinte hydrique de plus d'un tiers."
    }
  },
  {
    id: "ci-connect",
    title: "CI Connect (IA)",
    category: "ai-deeptech",
    categoryLabel: "NLP & Accessibilité Juridique",
    validation: "Recherche & Inclusion Civique",
    validationBadgeColor: "cyan",
    desc: "Moteur vocal et textuel de démocratisation du droit ivoirien. Analyse en langage naturel (NLP) permettant à tout citoyen d'interroger la législation et les codes de lois par la voix.",
    link: "#",
    technologies: ["Speech-to-Text", "NLP", "FastAPI", "Python", "Vector Search", "Langues Locales"],
    impactMetrics: "Inclusion civique • Interrogation vocale intuitive du droit",
    architectureDetails: {
      context: "Barrière de la langue et complexité du jargon juridique limitant l'accès aux droits fondamentaux.",
      challenge: "Traduire des requêtes formulées en langage familier ou vocal en références d'articles de lois exacts et compréhensibles.",
      solution: "Moteur NLP combinant reconnaissance vocale adaptée aux accents locaux et recherche vectorielle sémantique sur l'ensemble du corpus législatif ivoirien.",
      stackNotes: "Microservice FastAPI ultra-léger, embeddings juridiques, synthèse vocale pour restitution audio aux non-lecteurs.",
      impact: "Projet pionnier d'accessibilité civique salué pour son impact sociétal."
    }
  }
];

const categoryTabs = [
  { id: "all" as ProjectCategory, label: "Tous les Projets", count: 15 },
  { id: "health-gov" as ProjectCategory, label: "e-Santé & GovTech", count: 4 },
  { id: "ai-deeptech" as ProjectCategory, label: "IA & Deep Tech", count: 4 },
  { id: "fintech-sec" as ProjectCategory, label: "FinTech & Sécurité", count: 2 },
  { id: "platforms-iot" as ProjectCategory, label: "Web, Mobile & IoT", count: 5 },
];

export default function ProjectsAvantGarde() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const filteredProjects = activeCategory === "all"
    ? allProjects
    : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* SECTION HEADER */}
      <div className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-slate-800/80 pb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Layers size={13} />
            <span>02. Réalisations & Écosystèmes</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
            Architectures <br />
            <span className="text-gradient-cyan">Déployées & Validées.</span>
          </h2>
        </div>

        <div className="lg:max-w-md flex flex-col gap-3">
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Une sélection de <strong className="text-white font-semibold">15 réalisations concrètes</strong> — de la santé publique nationale aux modèles d’IA de télépathologie validés scientifiquement.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Cliquez sur un projet pour inspecter son architecture technique</span>
          </div>
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {categoryTabs.map((tab) => {
          const isActive = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`relative px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 border ${
                isActive
                  ? "bg-cyan-500/15 border-cyan-500 text-cyan-300 shadow-lg shadow-cyan-950/40"
                  : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive ? "bg-cyan-500/30 text-white" : "bg-slate-800 text-slate-400"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* PROJECTS GRID */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`group relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 bg-slate-900/70 border border-slate-800/90 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-950/20 backdrop-blur-sm ${
                  isFeatured ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-cyan-950/20" : ""
                }`}
              >
                {/* LUEUR HOVER */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>

                <div>
                  {/* BADGES EN-TÊTE */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                      {project.categoryLabel}
                    </span>

                    {project.validation && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        <CheckCircle2 size={12} />
                        {project.validation}
                      </span>
                    )}
                  </div>

                  {/* TITRE */}
                  <h3 className={`font-black text-white group-hover:text-cyan-300 transition-colors tracking-tight mb-3 ${
                    isFeatured ? "text-2xl sm:text-4xl" : "text-xl sm:text-2xl"
                  }`}>
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {project.desc}
                  </p>

                  {/* IMPACT MÉTRIQUE CLÉ */}
                  {project.impactMetrics && (
                    <div className="mb-6 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs font-medium text-cyan-400/90 flex items-center gap-2">
                      <Activity size={14} className="text-cyan-400 shrink-0" />
                      <span>{project.impactMetrics}</span>
                    </div>
                  )}

                  {/* TECH STACK BADGES */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.technologies.slice(0, isFeatured ? 6 : 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300 text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > (isFeatured ? 6 : 4) && (
                      <span className="px-2 py-1 rounded-md bg-slate-800/40 text-slate-400 text-[11px] font-mono">
                        +{project.technologies.length - (isFeatured ? 6 : 4)}
                      </span>
                    )}
                  </div>
                </div>

                {/* ACTIONS */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-cyan-400 transition-colors group/modal"
                  >
                    <span>Fiche Architecture</span>
                    <ArrowRight size={14} className="group-hover/modal:translate-x-1 transition-transform" />
                  </button>

                  {project.link !== "#" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-xs font-semibold border border-cyan-500/30 transition-all hover:scale-105"
                    >
                      <span>Visiter</span>
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                      <Lock size={11} /> R&D Interne
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* DETAIL MODAL / DRAWER */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
            ></motion.div>

            {/* MODAL CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-10 z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* CLOSE BUTTON */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>

              {/* EN-TÊTE MODAL */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {selectedProject.categoryLabel}
                  </span>
                  {selectedProject.validation && (
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                      <CheckCircle2 size={13} />
                      {selectedProject.validation}
                    </span>
                  )}
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base mt-2">
                  {selectedProject.desc}
                </p>
              </div>

              {/* DÉTAILS D'ARCHITECTURE */}
              <div className="space-y-6 text-sm text-slate-300">
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                  <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-2 flex items-center gap-2">
                    <Layers size={14} /> Contexte & Problématique Métier
                  </h4>
                  <p className="leading-relaxed text-slate-300">
                    {selectedProject.architectureDetails.context}
                  </p>
                  <p className="mt-2 text-slate-400 text-xs italic">
                    Défi critique : {selectedProject.architectureDetails.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                  <h4 className="text-xs font-mono uppercase text-emerald-400 tracking-wider mb-2 flex items-center gap-2">
                    <Cpu size={14} /> Solution Déployée & Architecture
                  </h4>
                  <p className="leading-relaxed text-slate-300">
                    {selectedProject.architectureDetails.solution}
                  </p>
                  <p className="mt-2 text-slate-300 text-xs font-mono text-cyan-300">
                    Infrastructure : {selectedProject.architectureDetails.stackNotes}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                  <h4 className="text-xs font-mono uppercase text-sky-400 tracking-wider mb-2 flex items-center gap-2">
                    <ShieldCheck size={14} /> Impact & Validation Institutionnelle
                  </h4>
                  <p className="leading-relaxed text-slate-300">
                    {selectedProject.architectureDetails.impact}
                  </p>
                </div>

                {/* TECHNOLOGIES COMPLÈTES */}
                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2 flex items-center gap-1.5">
                    <Server size={14} /> Stack Technique Complète
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-white font-mono text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* PIED DE MODAL */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                {selectedProject.link !== "#" ? (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm transition-all"
                  >
                    <span>Ouvrir la plateforme</span>
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <div className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                    <Lock size={14} /> Plateforme confidentielle sous accord de confidentialité
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-400 hover:text-white rounded-full border border-slate-700/60 hover:bg-slate-800 transition-colors"
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