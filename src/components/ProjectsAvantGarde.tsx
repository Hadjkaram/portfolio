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
    desc_fr: "Infrastructure nationale de télé-diagnostic anatomopathologique reliant les CHU de Bouaké, Treichville, le PNLC et le Laboratoire Roche. Modèles YOLOv8/v11 pour la détection cellulaire d'atypies (sein, col de l'utérus), visionneuse WSI haute résolution (tuilage TIFF) et PostgreSQL 16 Enterprise avec Row-Level Security (RLS).",
    desc_en: "National telepathology tele-diagnosis platform connecting University Hospitals of Bouaké and Treichville, PNLC, and Roche Laboratories. YOLOv8/v11 models detecting cellular atypia (breast, cervix), high-resolution WSI viewer (TIFF tiling), and enterprise PostgreSQL 16 with Row-Level Security (RLS).",
    link: "https://new.kanyehassist.net/",
    featured: true,
    technologies: ["Python (FastAPI)", "PyTorch (YOLOv8/v11)", "OpenCV", "PostgreSQL 16 (RLS)", "HashiCorp Vault", "mTLS / HDS", "Docker"],
    impactMetrics_fr: "80% de précision clinique • Reliant CHU Bouaké, Treichville, PNLC & Laboratoire Roche",
    impactMetrics_en: "80% clinical accuracy • Linking CHU Bouaké, Treichville, PNLC & Roche Laboratories",
    architectureDetails: {
      context_fr: "Pénurie critique d'anatomopathologistes en Afrique subsaharienne et délais d'attente prohibitifs pour les biopsies.",
      context_en: "Severe scarcity of pathologists in sub-Saharan Africa leading to critical wait times for biopsy results.",
      challenge_fr: "Traiter et classifier des flux d'images histopathologiques gigaoctets (Whole Slide Imaging - WSI) en direct avec isolation stricte des données de santé.",
      challenge_en: "Stream, tile, and classify gigabyte histopathology images (Whole Slide Imaging - WSI) in real time with strict patient data isolation.",
      solution_fr: "Pipeline de Deep Learning YOLOv8/v11 optimisé pour la détection d'atypies cellulaires, visionneuse TIFF pyramidale tuilée haute fluidité, politiques de sécurité Row-Level Security (RLS) par établissement et chiffrement AES-256.",
      solution_en: "Optimized YOLOv8/v11 Deep Learning inference pipeline for cellular atypia detection, smooth pyramidal tiled TIFF viewer, institution-level PostgreSQL Row-Level Security (RLS), and AES-256 encryption.",
      stackNotes_fr: "Python FastAPI, PyTorch, OpenCV, React 18, TypeScript, PostgreSQL 16 Enterprise (RLS), HashiCorp Vault, mTLS, Docker.",
      stackNotes_en: "Python FastAPI, PyTorch, OpenCV, React 18, TypeScript, PostgreSQL 16 Enterprise (RLS), HashiCorp Vault, mTLS, Docker.",
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
    desc_fr: "1ère plateforme africaine de dépistage et suivi précoce des troubles neurodéveloppementaux de l'enfant. Moteur de scoring clinique automatisé, synchronisation résiliente pour connectivité régionale intermittente et base PostgreSQL 16 haute disponibilité.",
    desc_en: "Africa's 1st digital platform for early screening and monitoring of pediatric neurodevelopmental disorders. Automated clinical scoring engine, resilient sync for intermittent regional connectivity, and high-availability PostgreSQL 16.",
    link: "http://www.enuria.net",
    featured: true,
    technologies: ["Node.js (TypeScript)", "Next.js", "PostgreSQL 16 HA", "Keycloak (OIDC)", "Semgrep DevSecOps", "AWS / Docker"],
    impactMetrics_fr: "Déploiement national MSHP • Partenariat UNICEF • Campagne Avril Bleu",
    impactMetrics_en: "National MSHP deployment • UNICEF partnership • Blue April national campaign",
    architectureDetails: {
      context_fr: "Dépistage pédiatrique précoce des troubles du neurodéveloppement (TND/Autisme) à l'échelle du territoire ivoirien.",
      context_en: "Early pediatric screening of neurodevelopmental disorders (NDD/Autism) across Côte d'Ivoire.",
      challenge_fr: "Garantir le recueil et le calcul de scores cliniques standardisés même en zone à connectivité dégradée ou inexistante tout en protégeant les données médicales pédiatriques.",
      challenge_en: "Guarantee clinical data collection and standardized score calculation even in offline or degraded network environments while safeguarding pediatric health records.",
      solution_fr: "Moteur de scoring clinique automatisé avec synchronisation résiliente en mode hors-ligne, chiffrement local des données, gestion d'accès IAM Keycloak et registre centralisé sous PostgreSQL 16 HA.",
      solution_en: "Automated clinical scoring engine with offline-first synchronization, local data encryption, Keycloak IAM access controls, and centralized PostgreSQL 16 HA registry.",
      stackNotes_fr: "Node.js TypeScript, Next.js, PostgreSQL 16 HA chiffré, Keycloak (OIDC), analyseurs de sécurité Semgrep, cluster Docker AWS.",
      stackNotes_en: "Node.js TypeScript, Next.js, encrypted PostgreSQL 16 HA, Keycloak (OIDC), Semgrep security scanners, AWS Docker cluster.",
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
    desc_fr: "Plateforme et application mobile (ci.tila.app) de soutien psychologique et santé mentale d'envergure internationale. Déployée et activement mobilisée par les institutions multilatérales : UNICEF, PNUD, AFD, Expertise France, PNLT, OMS et le Programme National de Santé Mentale (PNSM). Téléconsultations confidentielles, suivi d'humeur et messagerie chiffrée de bout en bout (AES-256).",
    desc_en: "International mental health platform and mobile app (ci.tila.app). Deployed and actively mobilized by multilateral institutions: UNICEF, UNDP, AFD, Expertise France, PNLT, WHO, and PNSM. Confidential teleconsultations, mood tracking, and end-to-end encrypted messaging (AES-256).",
    link: "https://tila.ci",
    featured: true,
    technologies: ["React Native / Expo", "Node.js (TypeScript)", "PostgreSQL 16", "Redis Sentinel", "Chiffrement E2EE AES-256", "Cloudflare WAF"],
    impactMetrics_fr: "Déploiement multilatéral : UNICEF, PNUD, OMS, AFD, Expertise France, PNLT & PNSM • Secret médical garanti (AES-256)",
    impactMetrics_en: "Multilateral deployment: UNICEF, UNDP, WHO, AFD, Expertise France, PNLT & PNSM • Guaranteed medical confidentiality (AES-256)",
    architectureDetails: {
      context_fr: "Démocratisation de l'accès aux soins de santé mentale en Afrique de l'Ouest, pilotée avec les plus grandes institutions sanitaires internationales.",
      context_en: "Democratizing access to mental health support across West Africa in partnership with leading global institutions.",
      challenge_fr: "Fédérer les exigences techniques et réglementaires strictes de multiples bailleurs et agences onusiennes tout en garantissant le secret médical absolu.",
      challenge_en: "Harmonize strict regulatory compliance across multiple UN agencies and bilateral donors while upholding absolute medical confidentiality.",
      solution_fr: "Application mobile cross-platform avec canaux de téléconsultation chiffrés AES-256 de bout en bout, messagerie temps réel WebSockets sécurisée, base relationnelle PostgreSQL 16 partitionnée et WAF Cloudflare Enterprise.",
      solution_en: "Cross-platform mobile app with end-to-end AES-256 encrypted teleconsultation channels, secure real-time WebSockets chat, partitioned PostgreSQL 16 database, and Cloudflare Enterprise WAF.",
      stackNotes_fr: "React Native Expo, Node.js TypeScript, WebSockets, PostgreSQL 16 Enterprise, Redis Sentinel, cryptographie E2EE AES-256, Cloudflare Enterprise WAF.",
      stackNotes_en: "React Native Expo, Node.js TypeScript, WebSockets, PostgreSQL 16 Enterprise, Redis Sentinel, E2EE AES-256 cryptography, Cloudflare Enterprise WAF.",
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
    technologies: ["Next.js / React", "TypeScript", "Node.js", "PostgreSQL 16", "Redis Cache", "Cloudflare WAF & DRM"],
    impactMetrics_fr: "Formateur en Santé Numérique & Tech Lead • Programmes adaptés aux réalités du continent",
    impactMetrics_en: "Digital Health Instructor & Tech Lead • Curriculum tailored to African connectivity realities",
    architectureDetails: {
      context_fr: "Déficit d'acculturation et de compétences spécialisées en santé numérique (e-Santé) chez les soignants et cadres de santé africains.",
      context_en: "Shortage of certified digital health skills and e-health acculturation among African clinicians and healthcare executives.",
      challenge_fr: "Déployer une plateforme e-learning résiliente et fluide, optimisée pour les débits internet faibles et hétérogènes des pays d'Afrique subsaharienne avec protection des contenus pédagogiques.",
      challenge_en: "Deploy a resilient, responsive e-learning LMS optimized for low-bandwidth and variable internet networks across sub-Saharan Africa with intellectual property protection.",
      solution_fr: "Architecture Next.js avec streaming vidéo adaptatif optimisé bas débit, base relationnelle PostgreSQL 16, mise en cache Redis, protection DRM contre le piratage et WAF Cloudflare.",
      solution_en: "Next.js architecture with low-bandwidth adaptive video delivery, PostgreSQL 16 database, Redis caching, DRM content protection against scraping, and Cloudflare WAF.",
      stackNotes_fr: "Next.js, TypeScript, API Node.js, PostgreSQL 16 Enterprise, Redis Cache, CDN Cloudflare Enterprise WAF, chiffrement DRM.",
      stackNotes_en: "Next.js, TypeScript, Node.js API, PostgreSQL 16 Enterprise, Redis Cache, Cloudflare Enterprise WAF CDN, DRM encryption.",
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
    technologies: ["React", "Node.js", "PostgreSQL 16 HA", "HL7 / FHIR", "VPN IPSec & RBAC", "Audit Trail"],
    impactMetrics_fr: "Interconnexion CHU • Suivi épidémiologique en temps réel",
    impactMetrics_en: "Hospital interconnection • Real-time epidemiological monitoring",
    architectureDetails: {
      context_fr: "Programme de modernisation hospitalière ciblant le suivi des affections respiratoires et tuberculeuses en milieu hospitalier public.",
      context_en: "Hospital modernization program targeting pulmonary and tuberculosis patient records in public healthcare facilities.",
      challenge_fr: "Interconnecter des centres hospitaliers universitaires aux infrastructures réseau hétérogènes sans perte de données critiques et avec une sécurité stricte des données médicales.",
      challenge_en: "Interconnect university hospitals with legacy and heterogeneous networks without losing critical medical history and with strict patient data privacy.",
      solution_fr: "Système de dossier patient partagé (DMP) avec réplication multi-sites PostgreSQL 16 HA, tunnels VPN IPSec chiffrés inter-établissements, contrôles d'accès RBAC et journalisation d'audit immuable.",
      solution_en: "Shared electronic medical record (EMR) with multi-site PostgreSQL 16 HA replication, encrypted inter-hospital IPSec VPN tunnels, granular RBAC access controls, and immutable audit logging.",
      stackNotes_fr: "Conformité aux standards HL7/FHIR, PostgreSQL 16 HA, VPN IPSec, contrôle RBAC granulaire, journal d'audit cryptographique.",
      stackNotes_en: "HL7/FHIR healthcare standards compliance, PostgreSQL 16 HA, IPSec VPN, granular RBAC, cryptographic audit trail.",
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
    technologies: ["OAuth 2.0 / OIDC", "Rust / Go", "Keycloak IAM", "PKI Cryptographie X.509", "HSM Répertoire", "CockroachDB"],
    impactMetrics_fr: "Protection de l'identité citoyenne • Chiffrement de niveau étatique",
    impactMetrics_en: "Citizen identity protection • State-grade cryptographic security",
    architectureDetails: {
      context_fr: "Transformation numérique des services publics nécessitant une identité numérique unique, régalienne et inviolable.",
      context_en: "Digital transformation of public services requiring a single, tamper-proof national digital identity.",
      challenge_fr: "Prévenir l'usurpation d'identité, garantir la souveraineté des données citoyennes et faciliter l'interopérabilité des ministères.",
      challenge_en: "Prevent identity spoofing, safeguard citizen data sovereignty, and enable seamless inter-ministerial authentication.",
      solution_fr: "Fournisseur d'identité centralisé basé sur OpenID Connect (Keycloak), stockage distribué résilient sous CockroachDB, modules de sécurité matérielle (HSM) et infrastructure à clés publiques (PKI X.509).",
      solution_en: "Centralized OpenID Connect identity provider (Keycloak), resilient distributed storage with CockroachDB, Hardware Security Modules (HSM), and PKI X.509 public key infrastructure.",
      stackNotes_fr: "Microservices haute performance en Go/Rust, cluster distribué CockroachDB, modules HSM, architecture Zero-Trust et PKI.",
      stackNotes_en: "High-performance microservices in Go/Rust, CockroachDB distributed cluster, HSM modules, Zero-Trust architecture, and PKI.",
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
    technologies: ["FastAPI (Python)", "PostgreSQL 16 (pgvector)", "Speech-to-Text & NLP", "Guardrails IA Anti-Injection", "TLS 1.3"],
    impactMetrics_fr: "Inclusion civique • Interrogation vocale intuitive du droit",
    impactMetrics_en: "Civic inclusion • Intuitive voice-driven legal retrieval",
    architectureDetails: {
      context_fr: "Barrière de la langue et complexité du jargon juridique limitant l'accès aux droits fondamentaux.",
      context_en: "Language barriers and legal jargon complexity impeding citizens from understanding their rights.",
      challenge_fr: "Traduire des requêtes formulées en langage familier ou vocal en références d'articles de lois exacts tout en prévenant les injections de prompts et les hallucinations.",
      challenge_en: "Translate informal spoken questions into accurate statutory citations while preventing prompt injection and hallucinations.",
      solution_fr: "Pipeline NLP combinant reconnaissance vocale adaptée aux accents locaux, recherche vectorielle sémantique sous PostgreSQL 16 avec pgvector, et couche de guardrails de sécurité IA validant chaque réponse.",
      solution_en: "NLP pipeline combining accent-robust speech-to-text, semantic vector search with PostgreSQL 16 pgvector, and an AI security guardrail layer verifying every legal citation.",
      stackNotes_fr: "FastAPI asynchrone, index vectoriel pgvector (PostgreSQL 16), NeMo Guardrails IA, chiffrement TLS 1.3.",
      stackNotes_en: "Async FastAPI, pgvector (PostgreSQL 16) vector index, NeMo AI Guardrails, TLS 1.3 encryption.",
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
    technologies: ["Kubernetes", "Next.js", "Python", "PostgreSQL Enterprise", "Istio mTLS", "Trivy DevSecOps"],
    impactMetrics_fr: "Startup co-fondée • Solutions institutionnelles et grands comptes",
    impactMetrics_en: "Co-founded startup • Institutional & enterprise sovereign solutions",
    architectureDetails: {
      context_fr: "Accompagnement des administrations publiques et organisations régionales dans leur autonomie logicielle.",
      context_en: "Empowering public administrations with tailored sovereign software infrastructures.",
      challenge_fr: "Délivrer des architectures logicielles répondant à de fortes exigences de conformité réglementaire (RGPD, souveraineté des données, exigences ANSSI).",
      challenge_en: "Deliver modular software stacks meeting stringent data sovereignty, GDPR compliance, and ANSSI security mandates.",
      solution_fr: "Cadre applicatif standardisé haute sécurité pour le déploiement rapide de portails de services publics sous Kubernetes avec maillage de services Istio (mTLS) et base PostgreSQL Enterprise.",
      solution_en: "Standardized high-security software framework enabling rapid deployment of transactional public portals on Kubernetes with Istio service mesh (mTLS) and PostgreSQL Enterprise.",
      stackNotes_fr: "Orchestration Kubernetes durcie, Istio mTLS, PostgreSQL Enterprise, audits de sécurité automatisés Trivy/Semgrep, GitOps CI/CD.",
      stackNotes_en: "Hardened Kubernetes orchestration, Istio mTLS, PostgreSQL Enterprise, automated Trivy/Semgrep security audits, GitOps CI/CD.",
      impact_fr: "Contrats institutionnels et positionnement d'avant-garde sur le segment GovTech.",
      impact_en: "Institutional contracts and established footprint in the GovTech space."
    }
  },
  {
    id: "yamoh",
    index: "09",
    title: "Yamoh",
    category: "platforms-iot",
    categoryLabel_fr: "Mobilité & FinTech",
    categoryLabel_en: "Mobility & FinTech",
    desc_fr: "Plateforme et application mobile de covoiturage urbain et interurbain en Côte d'Ivoire. Intègre un module KYC de vérification d'identité biométrique (anti-fraude / anti-spoofing), tarification dynamique, passerelle Mobile Money sécurisée et base de données géospatiale PostgreSQL (PostGIS) avec cache Redis Cluster.",
    desc_en: "Urban and intercity ridesharing mobile platform in Côte d'Ivoire. Features automated biometric KYC identity verification (anti-fraud / anti-spoofing), dynamic pricing, secure Mobile Money payment gateway, and geospatial PostgreSQL (PostGIS) with Redis Cluster caching.",
    link: "http://www.yamoh.net",
    technologies: ["Flutter / Dart", "Node.js", "PostgreSQL (PostGIS)", "Redis Cluster", "KYC Biométrique & Anti-Fraude", "Cloudflare WAF"],
    impactMetrics_fr: "KYC Biométrique & Anti-Fraude • Tarification dynamique • PostGIS Haute Concurrence",
    impactMetrics_en: "Biometric KYC & Anti-Fraud • Dynamic pricing • High-Concurrency PostGIS",
    architectureDetails: {
      context_fr: "Embouteillages massifs et coût élevé du transport individuel dans les grandes agglomérations ivoiriennes avec impératif de sécurité pour les passagers et chauffeurs.",
      context_en: "Heavy traffic congestion and costly individual transit in Abidjan with stringent passenger and driver security requirements.",
      challenge_fr: "Garantir l'authenticité des profils chauffeurs/passagers via KYC automatisé, prévenir la fraude aux paiements Mobile Money et calculer des appariements spatiaux en temps réel.",
      challenge_en: "Verify driver and passenger authenticity via automated KYC, prevent Mobile Money transaction fraud, and compute real-time spatial route matching.",
      solution_fr: "Pipeline KYC biométrique avec analyse de pièce d'identité et détection de présence (liveness detection anti-spoofing), algorithme d'appariement géospatial sous PostgreSQL/PostGIS avec Redis Cluster, et passerelle de paiement sécurisée Mobile Money.",
      solution_en: "Biometric KYC pipeline with government ID analysis and liveness detection anti-spoofing, geospatial matching algorithm powered by PostgreSQL/PostGIS and Redis Cluster, and secure Mobile Money payment gateway.",
      stackNotes_fr: "Application mobile Flutter réactive, API Node.js TypeScript, PostgreSQL 16 (PostGIS), Redis Cluster, module KYC biométrique, Cloudflare WAF et HashiCorp Vault.",
      stackNotes_en: "Reactive Flutter cross-platform mobile app, Node.js TypeScript API, PostgreSQL 16 (PostGIS), Redis Cluster, biometric KYC engine, Cloudflare WAF, and HashiCorp Vault.",
      impact_fr: "Alternative économique, vérifiée et sécurisée aux transports traditionnels pour les trajets quotidiens.",
      impact_en: "Affordable, verified, and secure transit alternative for daily commuters."
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
    technologies: ["React Native", "Next.js", "PostgreSQL 16", "Redis Cache", "PCI-DSS Tokenisation", "Docker"],
    impactMetrics_fr: "Communautés sportives européennes • Matching de partenaires • Sécurité PCI-DSS",
    impactMetrics_en: "European sports clubs • Partner matching • PCI-DSS Payment Security",
    architectureDetails: {
      context_fr: "Marché européen du fitness et des sports collectifs en recherche d'animation communautaire et d'automatisation de gestion.",
      context_en: "European sports clubs seeking member retention, community engagement, and administrative automation.",
      challenge_fr: "Associer gestion administrative (adhésions, abonnements récurrents) et expérience sociale stimulante avec protection stricte des paiements bancaires.",
      challenge_en: "Combine back-office administrative automation with an engaging social UX while strictly protecting recurring bank payments.",
      solution_fr: "Système de matching dynamique basé sur le niveau et la géolocalisation, facturation automatisée sous PostgreSQL 16 avec tokenisation bancaire conforme PCI-DSS et sessions Redis.",
      solution_en: "Dynamic partner matching engine based on skill level and location, automated billing on PostgreSQL 16 with PCI-DSS compliant payment tokenization, and Redis sessions.",
      stackNotes_fr: "React Native, API REST Next.js, PostgreSQL 16 Enterprise, Redis Cache, conformité PCI-DSS et RGPD, conteneurs Docker.",
      stackNotes_en: "React Native, Next.js REST API, PostgreSQL 16 Enterprise, Redis Cache, PCI-DSS & GDPR compliance, Docker containers.",
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
    <section id="projects" className="w-full bg-[#0f1013] text-white py-28 relative border-y-2 border-zinc-800 transition-colors duration-500 overflow-hidden">
      {/* EFFET DE PROFONDEUR ARCHITECTURALE & LUEURS CINÉMATIQUES */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2229_1px,transparent_1px),linear-gradient(to_bottom,#1f2229_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* SECTION HEADER ÉDITORIAL */}
        <div className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-zinc-800">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-sky-400 mb-3 flex items-center gap-2 font-bold">
              <span>{t("02 // Réalisations & Écosystèmes Déployés", "02 // Deployed Projects & Ecosystems")}</span>
            </h2>
            <p className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight uppercase">
              {language === "en" ? (
                <>
                  Architectures <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400">
                    in Production.
                  </span>
                </>
              ) : (
                <>
                  Architectures <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400">
                    en Production.
                  </span>
                </>
              )}
            </p>
          </div>

          <div className="lg:max-w-md flex flex-col gap-2 text-left">
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
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

        {/* TABS DE FILTRAGE ÉDITORIAL */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-zinc-800 no-scrollbar">
          {categoryTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`relative px-4 py-2 text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 ${
                  isActive
                    ? "text-white font-bold border-b-2 border-sky-400 bg-zinc-800/90 shadow-sm"
                    : "text-zinc-400 hover:text-white bg-zinc-900/60 border border-zinc-800/60"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 ${
                    isActive ? "bg-sky-500 text-zinc-950 font-bold" : "bg-zinc-800 text-zinc-400"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* GRILLE DES PROJETS NETTE ET STRUCTURÉE SOMBRE */}
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
                  className={`group relative p-8 flex flex-col justify-between transition-all duration-300 bg-[#16171b] border border-zinc-800/90 hover:border-sky-500/70 shadow-xl hover:shadow-[0_10px_30px_-10px_rgba(14,165,233,0.15)] ${
                    isFeatured ? "md:col-span-2 lg:col-span-2 bg-[#1b1c22] border-zinc-700/80" : ""
                  }`}
                >
                  <div>
                    {/* EN-TÊTE DE LA CARTE : NUMÉRO & BADGES */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b border-zinc-800/80">
                      <span className="font-mono text-xs font-bold text-sky-400 group-hover:text-sky-300 transition-colors">
                        {"//"} {project.index}
                      </span>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-zinc-800 text-zinc-300 border border-zinc-700">
                          {categoryLabel}
                        </span>

                        {validation && (
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-emerald-950/80 text-emerald-300 border border-emerald-500/50 flex items-center gap-1">
                            <CheckCircle2 size={11} />
                            {validation}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* TITRE */}
                    <h3 className={`font-black text-white tracking-tight mb-3 uppercase ${
                      isFeatured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                    }`}>
                      {project.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                      {desc}
                    </p>

                    {/* MÉTRIQUE CLÉ */}
                    {impactMetrics && (
                      <div className="mb-6 p-3 bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-200 flex items-center gap-2">
                        <Activity size={14} className="text-sky-400 shrink-0" />
                        <span>{impactMetrics}</span>
                      </div>
                    )}

                    {/* TECH STACK TAGS */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-zinc-900 border border-zinc-700/80 text-zinc-300 text-[10px] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ACTIONS PIED DE CARTE */}
                  <div className="pt-4 border-t border-zinc-800/90 flex items-center justify-between gap-3 text-xs font-mono uppercase tracking-wider">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>{t("Consulter l'architecture", "Inspect Architecture")}</span>
                      <ArrowRight size={13} />
                    </button>

                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
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
      </div>

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