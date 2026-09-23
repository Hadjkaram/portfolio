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
import { useLanguage } from "@/context/LanguageContext";

export type ProjectCategory = "all" | "health-gov" | "ai-deeptech" | "fintech-sec" | "platforms-iot";

export interface ProjectData {
  id: string;
  index: string;
  title: string;
  category: ProjectCategory;
  categoryLabel_fr: string;
  categoryLabel_en: string;
  validation_fr?: string;
  validation_en?: string;
  desc_fr: string;
  desc_en: string;
  link: string;
  technologies: string[];
  featured?: boolean;
  impactMetrics_fr?: string;
  impactMetrics_en?: string;
  architectureDetails: {
    context_fr: string;
    context_en: string;
    challenge_fr: string;
    challenge_en: string;
    solution_fr: string;
    solution_en: string;
    stackNotes_fr: string;
    stackNotes_en: string;
    impact_fr: string;
    impact_en: string;
  };
}

const allProjects: ProjectData[] = [
  {
    id: "kanyeh-assist",
    index: "01",
    title: "Kanyeh Assist",
    category: "ai-deeptech",
    categoryLabel_fr: "Deep Tech & IA Médicale",
    categoryLabel_en: "Deep Tech & Medical AI",
    validation_fr: "SiPath, CHU & Laboratoire Roche",
    validation_en: "SiPath, Univ. Hospitals & Roche",
    desc_fr: "Infrastructure nationale de télé-diagnostic anatomopathologique reliant les CHU de Bouaké, Treichville, le PNLC et le Laboratoire Roche. Modèles YOLOv8/v11 pour la détection cellulaire d'atypies (sein, col de l'utérus), visionneuse WSI haute résolution (tuilage TIFF) et PostgreSQL RLS.",
    desc_en: "National telepathology tele-diagnosis platform connecting University Hospitals of Bouaké and Treichville, PNLC, and Roche Laboratories. YOLOv8/v11 models detecting cellular atypia (breast, cervix), high-resolution WSI viewer (TIFF tiling), and PostgreSQL RLS.",
    link: "https://new.kanyehassist.net/",
    featured: true,
    technologies: ["Python (FastAPI)", "PyTorch (YOLOv8/v11)", "OpenCV", "React 18", "TypeScript", "PostgreSQL (RLS)", "Docker"],
    impactMetrics_fr: "80% de précision clinique • Reliant CHU Bouaké, Treichville, PNLC & Laboratoire Roche",
    impactMetrics_en: "80% clinical accuracy • Linking CHU Bouaké, Treichville, PNLC & Roche Laboratories",
    architectureDetails: {
      context_fr: "Pénurie critique d'anatomopathologistes en Afrique subsaharienne et délais d'attente prohibitifs pour les biopsies.",
      context_en: "Severe scarcity of pathologists in sub-Saharan Africa leading to critical wait times for biopsy results.",
      challenge_fr: "Traiter et classifier des flux d'images histopathologiques gigaoctets (Whole Slide Imaging - WSI) en direct avec isolation stricte des données de santé.",
      challenge_en: "Stream, tile, and classify gigabyte histopathology images (Whole Slide Imaging - WSI) in real time with strict patient data isolation.",
      solution_fr: "Pipeline de Deep Learning YOLOv8/v11 optimisé pour la détection d'atypies cellulaires, visionneuse TIFF pyramidale tuilée haute fluidité, et politiques de sécurité Row-Level Security (RLS) par établissement.",
      solution_en: "Optimized YOLOv8/v11 Deep Learning inference pipeline for cellular atypia detection, smooth pyramidal tiled TIFF viewer, and institution-level PostgreSQL Row-Level Security (RLS).",
      stackNotes_fr: "Python FastAPI, PyTorch, OpenCV, React 18, TypeScript, Tailwind, PostgreSQL avec RLS, Docker.",
      stackNotes_en: "Python FastAPI, PyTorch, OpenCV, React 18, TypeScript, Tailwind, PostgreSQL with RLS, Docker.",
      impact_fr: "Validation scientifique par la Société Ivoirienne des Pathologistes (SiPath), déploiement au sein des CHU de Bouaké, Treichville, du PNLC et intégration par le Laboratoire Roche.",
      impact_en: "Scientific endorsement by the Ivorian Pathologists Society (SiPath), deployment across Bouaké and Treichville University Hospitals, PNLC, and Roche Laboratories."
    }
  },
  {
    id: "nuria",
    index: "02",
    title: "Nuria",
    category: "health-gov",
    categoryLabel_fr: "Santé Publique & GovTech",
    categoryLabel_en: "Public Health & GovTech",
    validation_fr: "Validé UNICEF & MSHP",
    validation_en: "Validated by UNICEF & MSHP",
    desc_fr: "1ère plateforme africaine de dépistage et suivi précoce des troubles neurodéveloppementaux de l'enfant. Moteur de scoring clinique automatisé et synchronisation résiliente pour connectivité régionale intermittente.",
    desc_en: "Africa's 1st digital platform for early screening and monitoring of pediatric neurodevelopmental disorders. Automated clinical scoring engine and resilient sync for intermittent regional connectivity.",
    link: "http://www.enuria.net",
    featured: true,
    technologies: ["Node.js (TypeScript)", "Next.js / React", "PostgreSQL", "Docker", "AWS"],
    impactMetrics_fr: "Déploiement national MSHP • Partenariat UNICEF • Campagne Avril Bleu",
    impactMetrics_en: "National MSHP deployment • UNICEF partnership • Blue April national campaign",
    architectureDetails: {
      context_fr: "Dépistage pédiatrique précoce des troubles du neurodéveloppement (TND/Autisme) à l'échelle du territoire ivoirien.",
      context_en: "Early pediatric screening of neurodevelopmental disorders (NDD/Autism) across Côte d'Ivoire.",
      challenge_fr: "Garantir le recueil et le calcul de scores cliniques standardisés même en zone à connectivité dégradée ou inexistante.",
      challenge_en: "Guarantee clinical data collection and standardized score calculation even in offline or degraded network environments.",
      solution_fr: "Moteur de scoring clinique automatisé avec synchronisation résiliente en mode hors-ligne, interface soignants intuitive et registre centralisé pour le Ministère de la Santé.",
      solution_en: "Automated clinical scoring engine with offline-first synchronization, intuitive practitioner UI, and centralized health registry for the Ministry of Health.",
      stackNotes_fr: "Node.js TypeScript, Next.js, base relationnelle PostgreSQL chiffrée, cluster Docker sous AWS.",
      stackNotes_en: "Node.js TypeScript, Next.js, encrypted PostgreSQL database, Docker cluster on AWS.",
      impact_fr: "Reconnaissance officielle UNICEF et adoption institutionnelle par le Ministère de la Santé (MSHP).",
      impact_en: "Official UNICEF validation and institutional adoption by the Ivorian Ministry of Health (MSHP)."
    }
  },
  {
    id: "tila",
    index: "03",
    title: "Tila",
    category: "health-gov",
    categoryLabel_fr: "Santé Mentale & Téléconsultation",
    categoryLabel_en: "Mental Health & Teleconsultation",
    validation_fr: "UNICEF • PNUD • OMS • AFD • PNSM",
    validation_en: "UNICEF • UNDP • WHO • AFD • PNSM",
    desc_fr: "Plateforme et application mobile (iOS/Android - ci.tila.app) de soutien psychologique et santé mentale d'envergure internationale. Déployée et activement mobilisée par les institutions multilatérales : UNICEF, PNUD, AFD, Expertise France, PNLT, OMS et le Programme National de Santé Mentale (PNSM). Téléconsultations confidentielles, suivi d'humeur et messagerie chiffrée de bout en bout (AES-256).",
    desc_en: "International mental health platform and mobile app (ci.tila.app). Deployed and actively mobilized by multilateral institutions: UNICEF, UNDP, AFD, Expertise France, PNLT, WHO, and PNSM. Confidential teleconsultations, mood tracking, and end-to-end encrypted messaging (AES-256).",
    link: "https://tila.ci",
    featured: true,
    technologies: ["React Native / Expo", "TypeScript", "Node.js", "WebSockets", "PostgreSQL", "Chiffrement AES-256"],
    impactMetrics_fr: "Déploiement multilatéral : UNICEF, PNUD, OMS, AFD, Expertise France, PNLT & PNSM • Secret médical garanti (AES-256)",
    impactMetrics_en: "Multilateral deployment: UNICEF, UNDP, WHO, AFD, Expertise France, PNLT & PNSM • Guaranteed medical confidentiality (AES-256)",
    architectureDetails: {
      context_fr: "Démocratisation de l'accès aux soins de santé mentale en Afrique de l'Ouest, pilotée avec les plus grandes institutions sanitaires internationales.",
      context_en: "Democratizing access to mental health support across West Africa in partnership with leading global institutions.",
      challenge_fr: "Fédérer les exigences techniques et réglementaires strictes de multiples bailleurs et agences onusiennes tout en garantissant le secret médical absolu.",
      challenge_en: "Harmonize strict regulatory compliance across multiple UN agencies and bilateral donors while upholding absolute medical confidentiality.",
      solution_fr: "Application mobile cross-platform avec canaux de téléconsultation chiffrés AES-256, messagerie temps réel WebSockets, journalisation d'humeur anonymisée et dashboards institutionnels agrégés.",
      solution_en: "Cross-platform mobile app with AES-256 encrypted teleconsultation channels, real-time WebSockets chat, anonymized mood tracking, and aggregate institutional dashboards.",
      stackNotes_fr: "React Native Expo, Node.js, WebSockets, PostgreSQL, cryptographie AES-256, infrastructure Cloud hautement disponible.",
      stackNotes_en: "React Native Expo, Node.js, WebSockets, PostgreSQL, AES-256 cryptography, high-availability Cloud infrastructure.",
      impact_fr: "Plateforme de référence mobilisée par l'UNICEF, le PNUD, l'AFD, Expertise France, l'OMS, le PNLT et le PNSM.",
      impact_en: "Reference platform mobilized by UNICEF, UNDP, AFD, Expertise France, WHO, PNLT, and PNSM for psychological support."
    }
  },
  {
    id: "xh-skills-academy",
    index: "04",
    title: "XH Skills Academy",
    category: "health-gov",
    categoryLabel_fr: "e-Santé & EdTech Africaine",
    categoryLabel_en: "e-Health & African EdTech",
    validation_fr: "Portée par Corine M. Ouattara",
    validation_en: "Championed by Corine M. Ouattara",
    desc_fr: "Plateforme d'apprentissage en ligne spécialisée dans les formations en santé numérique pour l'Afrique. Formations certifiantes adaptées aux réalités du continent africain pour qualifier et professionnaliser les acteurs de santé.",
    desc_en: "Online learning platform specialized in digital health training programs for Africa. Certified curricula adapted to continental realities to upskill and empower healthcare professionals.",
    link: "https://xhskillsacademy.com/",
    featured: true,
    technologies: ["Next.js / React", "TypeScript", "Architecture LMS", "Node.js", "PostgreSQL", "Streaming Vidéo Bas Débit"],
    impactMetrics_fr: "Formateur en Santé Numérique & Tech Lead • Programmes adaptés aux réalités du continent",
    impactMetrics_en: "Digital Health Instructor & Tech Lead • Curriculum tailored to African connectivity realities",
    architectureDetails: {
      context_fr: "Déficit d'acculturation et de compétences spécialisées en santé numérique (e-Santé) chez les soignants et cadres de santé africains.",
      context_en: "Shortage of certified digital health skills and e-health acculturation among African clinicians and healthcare executives.",
      challenge_fr: "Déployer une plateforme e-learning résiliente et fluide, optimisée pour les débits internet faibles et hétérogènes des pays d'Afrique subsaharienne.",
      challenge_en: "Deploy a resilient, responsive e-learning LMS optimized for low-bandwidth and variable internet networks across sub-Saharan Africa.",
      solution_fr: "Architecture Next.js avec streaming vidéo optimisé bas débit, parcours d'apprentissage modulaire, évaluations interactives et émission automatisée de certificats.",
      solution_en: "Next.js architecture with low-bandwidth video delivery, modular learning journeys, interactive knowledge checks, and automated certificate generation.",
      stackNotes_fr: "Next.js, TypeScript, API Node.js, PostgreSQL, infrastructure Cloud scalable, streaming CDN.",
      stackNotes_en: "Next.js, TypeScript, Node.js API, PostgreSQL, scalable cloud infrastructure, CDN video streaming.",
      impact_fr: "Portée notamment par Corine Maurice Ouattara, plateforme panafricaine où Ibrahim intervient comme Formateur en santé numérique et Tech Lead du projet.",
      impact_en: "Championed by Corine Maurice Ouattara, pan-African platform where Ibrahim serves as Digital Health Instructor and Tech Lead."
    }
  },
  {
    id: "epneumo",
    index: "05",
    title: "E-PNEUMO",
    category: "health-gov",
    categoryLabel_fr: "ERP Médical Institutionnel",
    categoryLabel_en: "Hospital Medical ERP",
    validation_fr: "Partenariat MTN FONDATION",
    validation_en: "MTN Foundation Partnership",
    desc_fr: "Digitalisation du parcours patient en pneumologie et interconnexion des hôpitaux publics de Côte d'Ivoire, en synergie avec la Fondation MTN.",
    desc_en: "Digitalization of pulmonary patient workflows and hospital interconnection across public institutions in Côte d'Ivoire, supported by MTN Foundation.",
    link: "https://epneumo.ci",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "HL7 / FHIR"],
    impactMetrics_fr: "Interconnexion CHU • Suivi épidémiologique en temps réel",
    impactMetrics_en: "Hospital interconnection • Real-time epidemiological monitoring",
    architectureDetails: {
      context_fr: "Programme de modernisation hospitalière ciblant le suivi des affections respiratoires et tuberculeuses en milieu hospitalier public.",
      context_en: "Hospital modernization program targeting pulmonary and tuberculosis patient records in public healthcare facilities.",
      challenge_fr: "Interconnecter des centres hospitaliers universitaires aux infrastructures réseau hétérogènes sans perte de données critiques.",
      challenge_en: "Interconnect university hospitals with legacy and heterogeneous networks without losing critical medical history.",
      solution_fr: "Système de dossier patient partagé (DMP) avec réplication multi-sites, alertes de suivi des traitements et tableaux de bord décisionnels ministériels.",
      solution_en: "Shared electronic medical record (EMR) with multi-site data replication, treatment tracking alerts, and ministerial analytics dashboards.",
      stackNotes_fr: "Conformité stricte aux standards de données de santé (HL7/FHIR), architecture résiliente en mode déconnecté.",
      stackNotes_en: "Compliance with healthcare interoperability standards (HL7/FHIR), resilient offline-first architecture.",
      impact_fr: "Financé et soutenu par la Fondation MTN, déployé dans les principaux centres de référence.",
      impact_en: "Funded and backed by MTN Foundation, deployed across primary reference centers."
    }
  },
  {
    id: "ci-identite",
    index: "06",
    title: "CI Identité",
    category: "fintech-sec",
    categoryLabel_fr: "CyberSécurité & IAM d'État",
    categoryLabel_en: "Cybersecurity & State IAM",
    validation_fr: "Gouvernemental",
    validation_en: "Sovereign / Governmental",
    desc_fr: "Solution régalienne de gestion d'identité numérique et de contrôle d'accès sécurisé (IAM). Authentification multi-facteurs, signature cryptographique et chiffrement de pointe.",
    desc_en: "Sovereign digital identity and access management (IAM) solution. Multi-factor authentication, cryptographic signatures, and zero-trust security.",
    link: "https://identite.ci/",
    featured: true,
    technologies: ["OAuth 2.0 / OIDC", "Rust / Go", "Keycloak", "PKI Cryptographie"],
    impactMetrics_fr: "Protection de l'identité citoyenne • Chiffrement de niveau étatique",
    impactMetrics_en: "Citizen identity protection • State-grade cryptographic security",
    architectureDetails: {
      context_fr: "Transformation numérique des services publics nécessitant une identité numérique unique, régalienne et inviolable.",
      context_en: "Digital transformation of public services requiring a single, tamper-proof national digital identity.",
      challenge_fr: "Prévenir l'usurpation d'identité, garantir la souveraineté des données citoyennes et faciliter l'interopérabilité des ministères.",
      challenge_en: "Prevent identity spoofing, safeguard citizen data sovereignty, and enable seamless inter-ministerial authentication.",
      solution_fr: "Fournisseur d'identité centralisé basé sur OpenID Connect, stockage décentralisé des preuves cryptographiques et validation biométrique.",
      solution_en: "Centralized OpenID Connect identity provider, decentralized cryptographic proof storage, and biometric verification hooks.",
      stackNotes_fr: "Composants sécurisés en Go/Rust, modules HSM, architecture Zero-Trust.",
      stackNotes_en: "Secure high-throughput microservices in Go/Rust, HSM integration, Zero-Trust architecture.",
      impact_fr: "Base de confiance pour la dématérialisation des démarches administratives officielles.",
      impact_en: "Trusted sovereign foundation for paperless government workflows."
    }
  },
  {
    id: "ci-connect",
    index: "07",
    title: "CI Connect (IA)",
    category: "ai-deeptech",
    categoryLabel_fr: "NLP & Accessibilité Juridique",
    categoryLabel_en: "NLP & Legal Accessibility",
    validation_fr: "Recherche & Inclusion",
    validation_en: "Research & Inclusion",
    desc_fr: "Moteur vocal et textuel de démocratisation du droit ivoirien. Analyse en langage naturel (NLP) permettant à tout citoyen d'interroger la législation et les codes de lois par la voix.",
    desc_en: "Voice and text AI engine democratizing access to Ivorian law. Natural Language Processing (NLP) allowing citizens to query legal statutes and codes through voice in natural phrasing.",
    link: "#",
    technologies: ["Speech-to-Text", "NLP", "FastAPI", "Python", "Vector Search"],
    impactMetrics_fr: "Inclusion civique • Interrogation vocale intuitive du droit",
    impactMetrics_en: "Civic inclusion • Intuitive voice-driven legal retrieval",
    architectureDetails: {
      context_fr: "Barrière de la langue et complexité du jargon juridique limitant l'accès aux droits fondamentaux.",
      context_en: "Language barriers and legal jargon complexity impeding citizens from understanding their rights.",
      challenge_fr: "Traduire des requêtes formulées en langage familier ou vocal en références d'articles de lois exacts et compréhensibles.",
      challenge_en: "Translate informal spoken questions into accurate statutory citations and plain-language legal answers.",
      solution_fr: "Moteur NLP combinant reconnaissance vocale adaptée aux accents locaux et recherche vectorielle sémantique sur l'ensemble du corpus législatif ivoirien.",
      solution_en: "NLP pipeline combining accent-robust speech-to-text with semantic vector search across the entire Ivorian legal corpus.",
      stackNotes_fr: "Microservice FastAPI ultra-léger, embeddings juridiques, synthèse vocale pour restitution audio aux non-lecteurs.",
      stackNotes_en: "Lightweight FastAPI microservices, domain-specific legal embeddings, text-to-speech feedback.",
      impact_fr: "Projet pionnier d'accessibilité civique salué pour son impact sociétal.",
      impact_en: "Pioneering civic inclusion platform praised for public social impact."
    }
  },
  {
    id: "avlytech",
    index: "08",
    title: "AVLYTECH",
    category: "platforms-iot",
    categoryLabel_fr: "Startup GovTech / Co-Fondateur",
    categoryLabel_en: "GovTech Startup / Co-Founder",
    validation_fr: "France & International",
    validation_en: "France & Global",
    desc_fr: "Co-fondateur et CTO de cette startup basée en France. Ingénierie logicielle pour institutions étatiques, architectures critiques et applications de souveraineté numérique.",
    desc_en: "Co-founder & CTO of this France-based software firm. Architecture for state institutions, critical systems, and digital sovereignty platforms.",
    link: "https://avlytech.fr",
    technologies: ["Microservices", "Kubernetes", "Next.js", "Python", "Cloud Hybride"],
    impactMetrics_fr: "Startup co-fondée • Solutions institutionnelles et grands comptes",
    impactMetrics_en: "Co-founded startup • Institutional & enterprise sovereign solutions",
    architectureDetails: {
      context_fr: "Accompagnement des administrations publiques et organisations régionales dans leur autonomie logicielle.",
      context_en: "Empowering public administrations with tailored sovereign software infrastructures.",
      challenge_fr: "Délivrer des architectures logicielles répondant à de fortes exigences de conformité réglementaire (RGPD, souveraineté des données).",
      challenge_en: "Deliver modular software stacks meeting stringent data sovereignty and GDPR compliance mandates.",
      solution_fr: "Cadre applicatif standardisé haute sécurité pour le déploiement rapide de portails de services publics et de systèmes transactionnels.",
      solution_en: "Standardized high-security software framework enabling rapid deployment of transactional public portals.",
      stackNotes_fr: "Conteneurisation avancée Kubernetes, audits de code automatisés, intégration continue GitOps.",
      stackNotes_en: "Kubernetes container orchestration, automated security audits, GitOps CI/CD.",
      impact_fr: "Contrats institutionnels et positionnement d'avant-garde sur le segment GovTech.",
      impact_en: "Institutional contracts and established footprint in the GovTech space."
    }
  },
  {
    id: "yamoh",
    index: "09",
    title: "Yamoh",
    category: "platforms-iot",
    categoryLabel_fr: "Mobilité & Flutter",
    categoryLabel_en: "Mobility & Flutter",
    desc_fr: "Plateforme et application mobile de covoiturage urbain et interurbain en Côte d'Ivoire avec un mécanisme innovant de négociation et tarification dynamique par trajet.",
    desc_en: "Urban and intercity ridesharing mobile platform in Côte d'Ivoire with dynamic fare negotiation and route matching.",
    link: "http://www.yamoh.net",
    technologies: ["Flutter", "Dart", "Firebase", "Node.js", "Google Maps Platform"],
    impactMetrics_fr: "Tarification dynamique • Optimisation du trafic urbain",
    impactMetrics_en: "Dynamic pricing • Urban traffic optimization",
    architectureDetails: {
      context_fr: "Embouteillages massifs et coût élevé du transport individuel dans les grandes agglomérations ivoiriennes.",
      context_en: "Heavy traffic congestion and costly individual transit in Abidjan and major metropolitan corridors.",
      challenge_fr: "Calculer des itinéraires partagés en temps réel avec intégration des moyens de paiement locaux (Orange, MTN, Wave).",
      challenge_en: "Compute real-time detour-optimized shared routes integrated with local mobile money (Wave, Orange, MTN).",
      solution_fr: "Algorithme d'appariement conducteur-passagers en fonction du trajet prévu, avec messagerie instantanée intégrée et portefeuille électronique sécurisé.",
      solution_en: "Driver-passenger matching algorithm based on proximity and trajectory, in-app chat, and wallet payment rail.",
      stackNotes_fr: "Développement mobile Flutter réactif, gestion d'état Bloc/Provider, géolocalisation haute fréquence optimisée en batterie.",
      stackNotes_en: "Reactive Flutter cross-platform app, Bloc state management, low-power GPS tracking.",
      impact_fr: "Alternative économique et conviviale aux taxis traditionnels pour les trajets quotidiens.",
      impact_en: "Affordable, community-driven transit alternative for thousands of commuters."
    }
  },
  {
    id: "assofit",
    index: "10",
    title: "Assofit",
    category: "platforms-iot",
    categoryLabel_fr: "Réseau Social & Matching IA",
    categoryLabel_en: "Social Sports & AI Matching",
    desc_fr: "Application sportive communautaire intégrant un ERP de gestion pour associations et clubs sportifs, couplé à un algorithme de recommandation et matching par centres d'intérêt.",
    desc_en: "Community sports app featuring an ERP for sports clubs and gyms, powered by an interest and skill-level partner matching algorithm.",
    link: "https://assofit.com/",
    technologies: ["React Native", "Next.js", "PostgreSQL", "Algorithme Matching", "Docker"],
    impactMetrics_fr: "Communautés sportives européennes • Matching de partenaires",
    impactMetrics_en: "European sports clubs • Partner matching & subscription ERP",
    architectureDetails: {
      context_fr: "Marché européen du fitness et des sports collectifs en recherche d'animation communautaire.",
      context_en: "European sports clubs seeking member retention and community engagement tools.",
      challenge_fr: "Associer gestion administrative (adhésions, plannings) et expérience sociale stimulante pour les licenciés.",
      challenge_en: "Combine back-office administrative automation with an engaging social user experience.",
      solution_fr: "Système de matching dynamique basé sur le niveau, la localisation et les créneaux horaires, adossé à un back-office complet de facturation.",
      solution_en: "Dynamic partner matching engine based on sports discipline, skill level, and schedule, with automated membership billing.",
      stackNotes_fr: "React Native, API REST Next.js, base de données relationnelle PostgreSQL, cluster Docker.",
      stackNotes_en: "React Native, Next.js REST API, PostgreSQL relational database, Docker containerization.",
      impact_fr: "Adoption par des structures sportives en Europe pour la fidélisation de leurs membres.",
      impact_en: "Adoption by fitness clubs in Europe improving member engagement."
    }
  }
];

export default function ProjectsAvantGarde() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const categoryTabs = [
    { id: "all" as ProjectCategory, label: t("Tous les projets", "All Projects"), count: 10 },
    { id: "health-gov" as ProjectCategory, label: t("e-Santé & GovTech", "e-Health & GovTech"), count: 4 },
    { id: "ai-deeptech" as ProjectCategory, label: t("IA & Deep Tech", "AI & Deep Tech"), count: 2 },
    { id: "fintech-sec" as ProjectCategory, label: t("FinTech & Sécurité", "FinTech & Security"), count: 1 },
    { id: "platforms-iot" as ProjectCategory, label: t("Web, Mobile & IoT", "Web, Mobile & IoT"), count: 3 },
  ];

  const filteredProjects = activeCategory === "all"
    ? allProjects
    : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-200">
      {/* SECTION HEADER ÉDITORIAL */}
      <div className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-zinc-200">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 mb-3 flex items-center gap-2">
            <span>{t("02 // Réalisations & Écosystèmes Déployés", "02 // Deployed Projects & Ecosystems")}</span>
          </h2>
          <p className="text-3xl md:text-5xl lg:text-6xl font-black text-zinc-950 leading-tight tracking-tight uppercase">
            {language === "en" ? (
              <>
                Architectures <br />
                <span className="text-zinc-500">in Production.</span>
              </>
            ) : (
              <>
                Architectures <br />
                <span className="text-zinc-500">en Production.</span>
              </>
            )}
          </p>
        </div>

        <div className="lg:max-w-md flex flex-col gap-2 text-left">
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
            {t(
              "Une sélection de 10 réalisations majeures validées par les institutions sanitaires (UNICEF, PNUD, OMS, AFD, MSHP-CMU, SiPath, Laboratoire Roche) et des partenaires télécoms et bancaires.",
              "A curated selection of 10 major production architectures endorsed by global health agencies (UNICEF, UNDP, WHO, AFD, MSHP-CMU, SiPath, Roche Laboratories) and enterprise partners."
            )}
          </p>
          <span className="text-xs font-mono text-zinc-400">
            {t(
              "Cliquez sur \"Consulter l'architecture\" pour inspecter les spécifications.",
              "Click \"Inspect Architecture\" to review technical specifications."
            )}
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

      {/* GRILLE DES PROJETS NETTE ET STRUCTURÉE */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;
            const categoryLabel = language === "en" ? project.categoryLabel_en : project.categoryLabel_fr;
            const validation = language === "en" ? project.validation_en : project.validation_fr;
            const desc = language === "en" ? project.desc_en : project.desc_fr;
            const impactMetrics = language === "en" ? project.impactMetrics_en : project.impactMetrics_fr;

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
                        {categoryLabel}
                      </span>

                      {validation && (
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-300 flex items-center gap-1">
                          <CheckCircle2 size={11} />
                          {validation}
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
                    {desc}
                  </p>

                  {/* MÉTRIQUE CLÉ */}
                  {impactMetrics && (
                    <div className="mb-6 p-3 bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-800 flex items-center gap-2">
                      <Activity size={14} className="text-sky-600 shrink-0" />
                      <span>{impactMetrics}</span>
                    </div>
                  )}

                  {/* TECH STACK TAGS */}
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
                    className="font-bold text-zinc-950 hover:text-blue-600 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>{t("Consulter l'architecture", "Inspect Architecture")}</span>
                    <ArrowRight size={13} />
                  </button>

                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-950 flex items-center gap-1 transition-colors"
                    >
                      <span>{t("En ligne", "Live")}</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* MODAL ARCHITECTURE DÉTAILLÉE ÉDITORIALE CLAUDE STYLE */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-zinc-950/70 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-white border-2 border-zinc-900 shadow-2xl overflow-y-auto z-10 flex flex-col"
            >
              {/* Header Modal */}
              <div className="p-6 md:p-8 bg-zinc-950 text-white flex justify-between items-start sticky top-0 z-10 border-b border-zinc-800">
                <div>
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs text-sky-400">
                    <span>{"//"} SPÉCIFICATION D&apos;ARCHITECTURE #{selectedProject.index}</span>
                    <span>•</span>
                    <span className="text-zinc-300">
                      {language === "en" ? selectedProject.categoryLabel_en : selectedProject.categoryLabel_fr}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-zinc-400 hover:text-white transition-colors"
                  aria-label={t("Fermer", "Close")}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Contenu Technique Détaillé */}
              <div className="p-6 md:p-8 space-y-6 text-zinc-800 text-sm leading-relaxed">
                {/* 1. Contexte & Enjeu */}
                <div className="border-l-2 border-zinc-950 pl-4 py-1">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1 flex items-center gap-1.5">
                    <Layers size={14} className="text-zinc-900" />
                    <span>{t("Contexte & Enjeu Métier", "Context & Business Problem")}</span>
                  </h4>
                  <p>
                    {language === "en"
                      ? selectedProject.architectureDetails.context_en
                      : selectedProject.architectureDetails.context_fr}
                  </p>
                </div>

                {/* 2. Défi Technique & Scalabilité */}
                <div className="border-l-2 border-amber-600 pl-4 py-1">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700 mb-1 flex items-center gap-1.5">
                    <Server size={14} />
                    <span>{t("Défi Technique & Scalabilité", "Technical Challenge & Scalability")}</span>
                  </h4>
                  <p>
                    {language === "en"
                      ? selectedProject.architectureDetails.challenge_en
                      : selectedProject.architectureDetails.challenge_fr}
                  </p>
                </div>

                {/* 3. Solution Déployée & Sécurité */}
                <div className="border-l-2 border-sky-600 pl-4 py-1">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-sky-700 mb-1 flex items-center gap-1.5">
                    <ShieldCheck size={14} />
                    <span>{t("Solution Déployée & Sécurité", "Deployed Solution & Security")}</span>
                  </h4>
                  <p>
                    {language === "en"
                      ? selectedProject.architectureDetails.solution_en
                      : selectedProject.architectureDetails.solution_fr}
                  </p>
                </div>

                {/* 4. Stack & Composants */}
                <div className="p-4 bg-zinc-50 border border-zinc-200">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900 mb-2 flex items-center gap-1.5">
                    <Cpu size={14} />
                    <span>{t("Stack Logicielle & Composants", "Software Stack & Components")}</span>
                  </h4>
                  <p className="font-mono text-xs text-zinc-700 mb-3">
                    {language === "en"
                      ? selectedProject.architectureDetails.stackNotes_en
                      : selectedProject.architectureDetails.stackNotes_fr}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.technologies.map((tItem) => (
                      <span
                        key={tItem}
                        className="px-2 py-0.5 bg-white border border-zinc-300 text-zinc-900 text-[10px] font-mono font-bold"
                      >
                        {tItem}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 5. Impact & Validation */}
                <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-950">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1 flex items-center gap-1.5">
                    <Lock size={14} />
                    <span>{t("Impact Opérationnel & Validation Institutionnelle", "Operational Impact & Institutional Validation")}</span>
                  </h4>
                  <p className="text-xs">
                    {language === "en"
                      ? selectedProject.architectureDetails.impact_en
                      : selectedProject.architectureDetails.impact_fr}
                  </p>
                </div>
              </div>

              {/* Footer Modal */}
              <div className="p-4 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between sticky bottom-0 z-10">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 border border-zinc-300 bg-white text-zinc-800 text-xs font-mono uppercase tracking-wider hover:border-zinc-950 transition-colors"
                >
                  {t("Fermer", "Close")}
                </button>

                {selectedProject.link !== "#" && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-zinc-950 text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-colors flex items-center gap-1.5"
                  >
                    <span>{t("Visiter le Projet en Direct", "Visit Live Project")}</span>
                    <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}