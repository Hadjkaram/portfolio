// MOTEUR SÉMANTIQUE RAG & INTELLIGENCE ARTIFICIELLE D'IBRAHIM KARAMOKO
// Génère des réponses expertes, autonomes, courtoises, convaincantes et hautement structurées (FR & EN)

export interface GeneratedAnswer {
  text: string;
  matchedTopicIds: string[];
  confidence: number;
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/gi, " ")
    .trim();
}

function detectLanguage(input: string): "fr" | "en" {
  const norm = normalize(input);
  const englishSignals = [
    "who", "what", "where", "how", "why", "when", "is", "are", "do", "does",
    "tell", "me", "about", "his", "experience", "skills", "projects", "team",
    "hire", "salary", "contact", "background", "degree", "certification", "can",
    "good", "cto", "lead", "would", "make", "think", "opinion", "able", "manage"
  ];
  const words = norm.split(/\s+/);
  const enCount = words.filter((w) => englishSignals.includes(w)).length;
  return enCount >= 2 || (words.length <= 4 && enCount >= 1) ? "en" : "fr";
}

export function generateSmartAnswer(
  userQuery: string,
  preferredLanguage?: "fr" | "en"
): GeneratedAnswer {
  const normQuery = normalize(userQuery);
  const lang = preferredLanguage || detectLanguage(userQuery);
  const words = normQuery.split(/\s+/).filter((w) => w.length > 2);

  const hasGreeting = [
    "bonjour", "salut", "bonsoir", "coucou", "hello", "hi", "hey", "greetings"
  ].some((g) => normQuery.includes(g));

  // --- DÉTECTION MULTI-DIMENSIONS ---

  // 1. Demande d'évaluation / avis / capacité ("est-il capable", "peut-il", "à ton avis", "penses-tu", "can he", "is he able", "what do you think")
  const isCapabilityAssessment =
    normQuery.includes("capable") ||
    normQuery.includes("peut il") ||
    normQuery.includes("peut on") ||
    normQuery.includes("peux tu") ||
    normQuery.includes("sait il") ||
    normQuery.includes("sait faire") ||
    normQuery.includes("a ton avis") ||
    normQuery.includes("penses tu") ||
    normQuery.includes("competences pour") ||
    normQuery.includes("est ce qu il") ||
    normQuery.includes("can he") ||
    normQuery.includes("is he able") ||
    normQuery.includes("could he") ||
    normQuery.includes("do you think") ||
    normQuery.includes("in your opinion");

  // 2. Rôle CTO / Direction Technique / Leadership Exécutif
  const isCtoRole =
    normQuery.includes("cto") ||
    normQuery.includes("directeur technique") ||
    normQuery.includes("direction technique") ||
    normQuery.includes("fractional") ||
    normQuery.includes("diriger") ||
    normQuery.includes("piloter") ||
    normQuery.includes("gerer") ||
    normQuery.includes("lead");

  // 3. IA Agentique / Agents Autonomes / Multi-Agents
  const isAgentAi =
    normQuery.includes("agent") ||
    normQuery.includes("agents") ||
    normQuery.includes("agentique") ||
    normQuery.includes("agentic") ||
    normQuery.includes("autonome") ||
    normQuery.includes("mcp") ||
    normQuery.includes("antigravity") ||
    normQuery.includes("claude code") ||
    normQuery.includes("codex");

  // 4. Computer Vision / IA Médicale / YOLO
  const isVisionAi =
    normQuery.includes("yolo") ||
    normQuery.includes("vision") ||
    normQuery.includes("image") ||
    normQuery.includes("biopsie") ||
    normQuery.includes("cancer") ||
    normQuery.includes("histolog") ||
    normQuery.includes("wsi") ||
    normQuery.includes("opencv") ||
    normQuery.includes("pytorch");

  // 5. RAG & Systèmes Vectoriels
  const isRagVector =
    normQuery.includes("rag") ||
    normQuery.includes("pgvector") ||
    normQuery.includes("vector") ||
    normQuery.includes("embedding") ||
    normQuery.includes("recherche vectorielle") ||
    normQuery.includes("langchain") ||
    normQuery.includes("chromadb");

  // 6. Web Scraping & Ingestion de Données
  const isScraping =
    normQuery.includes("scrap") ||
    normQuery.includes("playwright") ||
    normQuery.includes("scrapy") ||
    normQuery.includes("selenium") ||
    normQuery.includes("beautifulsoup") ||
    normQuery.includes("extraction") ||
    normQuery.includes("anti bot") ||
    normQuery.includes("proxy");

  // 7. FinTech, KYC & Lutte Anti-Fraude
  const isFintechKyc =
    normQuery.includes("kyc") ||
    normQuery.includes("biometr") ||
    normQuery.includes("fraude") ||
    normQuery.includes("anti fraude") ||
    normQuery.includes("liveness") ||
    normQuery.includes("piece d identite") ||
    normQuery.includes("mobile money") ||
    normQuery.includes("wave") ||
    normQuery.includes("orange money") ||
    normQuery.includes("banque") ||
    normQuery.includes("fintech") ||
    normQuery.includes("paiement") ||
    normQuery.includes("yamoh");

  // 8. Management d'Équipe & Gouvernance
  const isTeamManagement =
    normQuery.includes("management") ||
    normQuery.includes("equipe") ||
    normQuery.includes("encadre") ||
    normQuery.includes("combien de personnes") ||
    normQuery.includes("combien d") ||
    normQuery.includes("team size") ||
    normQuery.includes("revue de code") ||
    normQuery.includes("merge request") ||
    normQuery.includes("clean code") ||
    normQuery.includes("scrum") ||
    normQuery.includes("sprint");

  // 9. Cybersécurité, Conformité & Zero-Trust
  const isCybersecurity =
    normQuery.includes("securite") ||
    normQuery.includes("cyber") ||
    normQuery.includes("cissp") ||
    normQuery.includes("comptia") ||
    normQuery.includes("hds") ||
    normQuery.includes("rgpd") ||
    normQuery.includes("chiffrement") ||
    normQuery.includes("aes") ||
    normQuery.includes("zero trust") ||
    normQuery.includes("audit") ||
    normQuery.includes("pentest") ||
    normQuery.includes("vault");

  // 10. Diplômes, Certifications & Cursus Académique
  const isEducationDiplomas =
    normQuery.includes("diplome") ||
    normQuery.includes("formation") ||
    normQuery.includes("etude") ||
    normQuery.includes("hec") ||
    normQuery.includes("stanford") ||
    normQuery.includes("pigier") ||
    normQuery.includes("certif") ||
    normQuery.includes("business transformation") ||
    normQuery.includes("degree") ||
    normQuery.includes("education");

  // 11. Projets Stratégiques & Partenaires Institutionnels
  const isProjectsInstitutions =
    normQuery.includes("projet") ||
    normQuery.includes("realisation") ||
    normQuery.includes("kanyeh") ||
    normQuery.includes("nuria") ||
    normQuery.includes("tila") ||
    normQuery.includes("xh skills") ||
    normQuery.includes("academy") ||
    normQuery.includes("epneumo") ||
    normQuery.includes("identite") ||
    normQuery.includes("avlytech") ||
    normQuery.includes("assofit") ||
    normQuery.includes("unicef") ||
    normQuery.includes("roche") ||
    normQuery.includes("oms") ||
    normQuery.includes("pnud") ||
    normQuery.includes("afd") ||
    normQuery.includes("mtn");

  // 12. Contact, Recrutement & Disponibilité
  const isContactHire =
    normQuery.includes("contact") ||
    normQuery.includes("joindre") ||
    normQuery.includes("email") ||
    normQuery.includes("mail") ||
    normQuery.includes("telephone") ||
    normQuery.includes("whatsapp") ||
    normQuery.includes("tjm") ||
    normQuery.includes("tarif") ||
    normQuery.includes("disponib") ||
    normQuery.includes("embauche") ||
    normQuery.includes("recrute") ||
    normQuery.includes("hire") ||
    normQuery.includes("phone");

  // =========================================================================
  // SCÉNARIO 1 : CAPACITÉ À DIRIGER UN PROJET D'AGENTS IA EN TANT QUE CTO
  // (Intersection directe : Agent IA + Rôle CTO / Évaluation de Capacité)
  // =========================================================================
  if ((isAgentAi && isCtoRole) || (isAgentAi && isCapabilityAssessment)) {
    if (lang === "en") {
      return {
        text: `${hasGreeting ? "Hello! " : ""}Yes, absolutely. In fact, this sits directly at the sweet spot of Ibrahim Karamoko's dual expertise: mission-critical technical leadership (CTO) and cutting-edge autonomous AI agent engineering.

Here is why he is exceptionally qualified to architect and lead an AI agent project for you:

1. Mastery of Autonomous Agent Architectures & Tooling:
Ibrahim is a daily, advanced practitioner of agentic engineering using Google Antigravity with Gemini, Anthropic's Claude Code, and OpenAI Codex, leveraging the Model Context Protocol (MCP). He knows how to architect robust autonomous loops (task decomposition, tool calling, vector memory retrieval with pgvector, and anti-hallucination guardrails).

2. Operational CTO Mindset & Scalable Delivery:
While many developers can prototype a basic agent script, very few know how to turn it into an enterprise-grade production service. As an operational CTO, Ibrahim masters API token economics, latency trade-offs, async microservice design (FastAPI / Node.js), and resilient CI/CD release cycles.

3. Team Leadership & Proven Execution (-40% Bugs):
At MCM GROUP SAS / PASS SANTÉ MOUSSO, he directly leads 5 engineers with a measured 40% reduction in production regressions through disciplined Merge Requests and Clean Code / DDD practices. He has the leadership experience to structure your dev team or recruit specialized talent to deliver your agent roadmap on time.

4. Cybersecurity by Design & Governance (CISSP®):
Autonomous agents present critical operational risks (prompt injection, tool misuse, credential leakage, sandbox escapes). Holding CISSP® and CompTIA Security+ certifications alongside the Executive Certificate in AI for Business Transformation (2026), Ibrahim implements strict sandboxing, API key vaulting, and zero-trust policies.

In summary, entrusting your AI agent project to Ibrahim combines frontier AI innovation with battle-tested industrial execution.

Would you like to discuss the specific workflow, tools, or business objective of your AI agent project directly with Ibrahim?`,
        matchedTopicIds: ["ai_deeptech_stack", "identity_core", "management_leadership"],
        confidence: 0.99
      };
    }

    return {
      text: `${hasGreeting ? "Bonjour ! " : ""}Oui, absolument. C'est même une opportunité où la valeur ajoutée d'Ibrahim Karamoko est la plus forte, car elle réunit exactement ses deux cœurs d'expertise : la direction technique de projets critiques (CTO) et l'ingénierie d'agents IA autonomes.

Voici pourquoi il est particulièrement taillé pour réussir ce mandat :

1. Maîtrise Avancée des Architectures d'Agents & des Outils de Pointe :
Ibrahim pratique au quotidien le développement assisté par agents et l'orchestration de modèles avec Google Antigravity (Gemini), Claude Code (Anthropic) et Codex (OpenAI), en exploitant le protocole MCP (Model Context Protocol). Il sait concevoir des boucles d'agents autonomes fiables (décomposition de tâches, appel d'outils / tool calling, mémoire vectorielle avec pgvector, et garde-fous stricts contre les hallucinations).

2. Rigueur de CTO Opérationnel & Industrialisation :
Beaucoup savent prototyper un agent IA sous forme de script de démo ; très peu savent le transformer en produit de production scalable, sécurisé et rentable. En tant que CTO, Ibrahim sait cadrer les budgets de tokens, optimiser la latence, architecturer des microservices asynchrones (FastAPI / Node.js), et piloter les cycles de release sans dette technique.

3. Management d'Équipe & Vélocité de Livraison (-40% de bugs) :
Chez MCM GROUP SAS / PASS SANTÉ MOUSSO, il manage directement une équipe de 5 ingénieurs avec une baisse mesurée de 40% des régressions en production grâce à des revues de code strictes (MRs) et des standards Clean Code / DDD. Il sait structurer des développeurs et fixer des jalons de livraison clairs pour votre projet d'agent.

4. Sécurité & Gouvernance des Données (CISSP® & Certificat Exec. AI 2026) :
Les agents autonomes posent des défis critiques (sécurité des clés d'API, injection de prompts, exécution non contrôlée de code). Certifié CISSP® et titulaire du Certificat Executive AI for Business Transformation (2026), Ibrahim garantit une sécurité stricte dès la conception (Zero-Trust, sandboxing, isolation des secrets avec HashiCorp Vault).

En conclusion, confier la direction technique de votre projet d'agent IA à Ibrahim, c'est combiner l'audace de l'innovation IA avec la sérénité d'une exécution industrielle rodée.

Avez-vous déjà un cahier des charges ou un cas d'usage précis (automatisation de workflows, agent de recherche, service client intelligent) dont vous souhaiteriez discuter directement avec lui ?`,
      matchedTopicIds: ["ai_deeptech_stack", "identity_core", "management_leadership"],
      confidence: 0.99
    };
  }

  // =========================================================================
  // SCÉNARIO 2 : POURQUOI IBRAHIM FERAIT UN BON CTO ? / RECRUTEMENT EXÉCUTIF
  // =========================================================================
  if (isCtoRole && (isCapabilityAssessment || normQuery.includes("bon") || normQuery.includes("pourquoi") || normQuery.includes("valeur") || normQuery.includes("atout") || normQuery.includes("recrut") || normQuery.includes("why"))) {
    if (lang === "en") {
      return {
        text: `${hasGreeting ? "Hello! Thank you for asking. " : ""}Here is why Ibrahim Karamoko stands out as an exceptional Operational CTO:

Ibrahim is not an armchair manager; he is a hands-on technical leader with 10+ years of battle-tested experience building, scaling, and securing mission-critical platforms.

Here are the 4 core pillars that make him a formidable CTO:

1. Rare Dual Expertise — Executive Vision & Hands-On Engineering:
He bridges business goals with hardcore technical execution. Ibrahim can debate strategic roadmaps with founders and multilateral agencies (UNICEF, UNDP, WHO), while diving straight into code to architect complex microservices (FastAPI, Node.js, Spring Boot) or debug distributed bottlenecks.

2. Proven People Leadership & Quality Culture (-40% Bugs):
At MCM GROUP SAS / PASS SANTÉ MOUSSO, he directly leads 5 engineers (3 developers + 2 interns). By instituting systematic code reviews (Merge Requests) and Clean Code / DDD discipline, he achieved a proven 40% drop in production regressions while accelerating sprint delivery.

3. Applied Deep Tech & AI Production Track Record:
Unlike theorists, Ibrahim deploys real AI to production:
• YOLOv8/v11 Computer Vision for national telepathology (Kanyeh Assist, partnered with Roche Laboratories and university hospitals).
• Scalable RAG architectures with pgvector for automated enterprise retrieval.
• Resilient Web Scraping pipelines (Playwright, Scrapy) and AI-assisted workflows using Antigravity, Claude Code, and Codex.

4. Elite Cybersecurity & International Trust:
Holding CISSP® and CompTIA Security+ certifications alongside an Executive Master in AI & Cybersecurity from HEC and the Executive Certificate in AI for Business Transformation (2026), he guarantees security by design, HIPAA/HDS healthcare compliance, and Zero-Trust architectures.

Do you have a specific technical challenge, team structure, or mission scope you would like to discuss?`,
        matchedTopicIds: ["identity_core", "management_leadership", "scenarios_unexpected"],
        confidence: 0.98
      };
    }

    return {
      text: `${hasGreeting ? "Bonjour ! C'est un réel plaisir d'échanger avec vous. " : ""}Voici pourquoi Ibrahim Karamoko incarne le rôle de CTO Opérationnel avec une efficacité remarquable :

Ibrahim n'est pas un manager théorique déconnecté du terrain ; c'est un directeur technique hands-on qui allie vision stratégique business et maîtrise intime de l'ingénierie logicielle avec plus de 10 ans d'expérience.

Voici les 4 piliers majeurs qui font de lui un CTO d'exception :

1. Un profil hybride rare — Arbitrage Stratégique & Maîtrise Hands-on :
Il fait le pont naturel entre les exigences des décideurs (COMEX, bailleurs institutionnels) et la réalité du code. Ibrahim sait négocier une roadmap technologique, maîtriser les coûts cloud (AWS/Docker), et s'asseoir avec ses développeurs pour concevoir des microservices distribués (FastAPI, Node.js, Spring Boot) ou des architectures de bases de données résilientes (PostgreSQL 16 Enterprise, pgvector).

2. Un Leadership d'Équipe Éprouvé & Mesurable (-40% de bugs) :
Chez MCM GROUP SAS / PASS SANTÉ MOUSSO, il encadre directement 5 ingénieurs (3 développeurs juniors + 2 stagiaires). En instaurant des revues de code systématiques (Merge Requests), des rituels Agile/Scrum bi-hebdomadaires et une culture Clean Code / DDD, il a réduit de 40% les régressions en production tout en boostant la vélocité de livraison.

3. Une Maîtrise Concrète de l'IA & du Deep Learning en Production :
Loin du battage médiatique, Ibrahim déploie des IA qui tournent en conditions réelles :
• Modèles YOLOv8/v11 de détection cellulaire pour Kanyeh Assist (partenariat Laboratoire Roche, SiPath, CHU Bouaké/Treichville).
• Architectures RAG scalables avec pgvector et pipelines MLOps.
• Extraction de données massives (Playwright, Scrapy) et développement assisté par agents d'élite (Google Antigravity, Claude Code, Codex).

4. Rigueur de Cybersécurité & Confiance Institutionnelle :
Certifié CISSP® et CompTIA Security+, diplômé d'un Master Executive IA & Cybersécurité à HEC Maroc et titulaire du Certificat Executive AI for Business Transformation (2026), il intègre la sécurité dès la conception (normes HDS de santé, chiffrement AES-256, architectures Zero-Trust). Ses solutions sont au cœur des systèmes de l'UNICEF, du PNUD, de l'OMS et de l'AFD.

Avez-vous un projet spécifique, un audit ou une problématique d'équipe dont vous aimeriez parler plus en détail ?`,
      matchedTopicIds: ["identity_core", "management_leadership", "scenarios_unexpected"],
      confidence: 0.98
    };
  }

  // =========================================================================
  // SCÉNARIO 3 : FINTECH, KYC & LUTTE ANTI-FRAUDE (Yamoh, Paiements, Biométrie)
  // =========================================================================
  if (isFintechKyc) {
    if (lang === "en") {
      return {
        text: `${hasGreeting ? "Hello! " : ""}Regarding FinTech, KYC, and fraud prevention, Ibrahim has implemented robust production-grade architectures:

1. Biometric KYC & Anti-Spoofing Verification (Yamoh):
On the Yamoh mobility and ridesharing platform, Ibrahim engineered an automated KYC pipeline verifying user identity documents coupled with facial liveness detection to eradicate spoofing and account takeovers.

2. Secure Mobile Money Integration (Wave, Orange Money, MTN):
He designed secure transaction orchestration engines with idempotent webhook processing, cryptographic signing, and transaction integrity checks to prevent duplicate charges or man-in-the-middle exploits.

3. High-Concurrency Geospatial & Caching Infrastructure:
Built on PostgreSQL 16 with PostGIS spatial indexing and Redis Cluster for real-time driver-passenger route matching and high-frequency location streaming.

4. Financial Compliance & Zero-Trust Security:
With his prior background at ECOBANK / SITEL automating secure banking transactions and his CISSP® certification, Ibrahim applies PCI-DSS tokenization, AES-256 encryption at rest and in transit, and HashiCorp Vault secrets management.

Would you like to explore his KYC implementation details or discuss a custom FinTech security architecture?`,
        matchedTopicIds: ["projects_flagship", "security_compliance"],
        confidence: 0.97
      };
    }

    return {
      text: `${hasGreeting ? "Bonjour ! " : ""}Concernant la FinTech, le KYC et la sécurité transactionnelle, Ibrahim possède une expérience de terrain éprouvée :

1. Module KYC Biométrique & Liveness Detection (Projet Yamoh) :
Sur la plateforme de mobilité Yamoh, Ibrahim a intégré un pipeline KYC automatisé associant la reconnaissance optique de pièces d'identité officielles (OCR) et la détection de présence biométrique (liveness detection anti-spoofing) pour authentifier formellement passagers et chauffeurs.

2. Passerelle Mobile Money Sécurisée (Wave, Orange, MTN) :
Conception d'une passerelle de paiement résiliente avec gestion idempotente des webhooks bancaires, signatures cryptographiques des payloads et détection d'anomalies de transactions en temps réel.

3. Données Géospatiales & Caching Haute Concurrence :
Architecture adossée à PostgreSQL 16 avec extension spatiale PostGIS et cluster Redis pour le calcul d'itinéraires dynamiques et la tarification en temps réel.

4. Rigueur Bancaire & Conformité Sécurité :
Fort de son expérience chez ECOBANK / SITEL sur l'automatisation des flux transactionnels bancaires et de sa certification CISSP®, Ibrahim applique les standards stricts PCI-DSS, le chiffrement AES-256 et la gestion centralisée des secrets avec HashiCorp Vault.

Souhaitez-vous approfondir le fonctionnement de ce module KYC ou étudier une architecture de paiement sécurisée pour votre projet ?`,
      matchedTopicIds: ["projects_flagship", "security_compliance"],
      confidence: 0.97
    };
  }

  // =========================================================================
  // SCÉNARIO 4 : MANAGEMENT D'ÉQUIPE (5 personnes, -40% bugs, rituels Agile)
  // =========================================================================
  if (isTeamManagement) {
    if (lang === "en") {
      return {
        text: `${hasGreeting ? "Hello! " : ""}Regarding engineering leadership, Ibrahim's management is founded on accountability, continuous mentorship, and measurable outcomes:

• Team Structure: He directly leads an engineering squad of 5 at MCM GROUP SAS / PASS SANTÉ MOUSSO (3 junior developers and 2 engineering interns).
• Measured Business Impact: By introducing systematic, checklist-based code reviews (Merge Requests), he demonstrated a 40% reduction in production regressions.
• Delivery Cadence: Bi-weekly Agile/Scrum sprints, daily blocker-removal standups, and blameless retrospectives.
• Engineering Standards: Strict enforcement of Clean Code, Domain-Driven Design (DDD), automated testing, and CI/CD automation.
• Mentorship: Continuous coaching to help junior engineers rapidly master microservice architecture, applied AI, and secure coding practices.

Would you like to know more about how he organizes sprints or structures code review checklists?`,
        matchedTopicIds: ["management_leadership"],
        confidence: 0.96
      };
    }

    return {
      text: `${hasGreeting ? "Bonjour ! " : ""}Concernant son style de management, Ibrahim applique un leadership humain, structuré et axé sur des résultats mesurables :

• Taille et composition de l'équipe : Direction technique directe de 5 personnes chez MCM GROUP SAS / PASS SANTÉ MOUSSO (3 développeurs juniors et 2 stagiaires ingénieurs).
• Impact chiffré démontré : Mise en place d'un processus strict de revues de code (Merge Requests) avec checklists qualité, réduisant de 40% les anomalies et régressions en production.
• Cadence Agile : Sprints bi-hebdomadaires Scrum, daily standups focalisés sur la levée des points de blocage, et rétrospectives d'amélioration continue.
• Culture technique : Pratique du Clean Code, Domain-Driven Design (DDD), tests automatisés et intégration continue (CI/CD).
• Mentorat : Accompagnement individualisé permettant aux développeurs juniors de monter très rapidement en compétences sur l'architecture microservices et l'IA.

Pour Ibrahim, un bon leader technique ne se contente pas de distribuer des tâches : il fait grandir son équipe tout en protégeant la qualité de la production.

Souhaitez-vous que je vous détaille comment il structure ses revues de code ou ses arbitrages d'architecture ?`,
      matchedTopicIds: ["management_leadership"],
      confidence: 0.96
    };
  }

  // =========================================================================
  // SCÉNARIO 5 : DIPLÔMES, CERTIFICATIONS & ACADÉMIQUE (2026 Executive AI)
  // =========================================================================
  if (isEducationDiplomas) {
    if (lang === "en") {
      return {
        text: `${hasGreeting ? "Hello! " : ""}Ibrahim Karamoko has built a top-tier academic and professional qualification track:

• Academic & Executive Credentials:
  - Executive Certificate: AI for Business Transformation (2026) — Strategic AI adoption, organizational leverage, and technological innovation.
  - Executive Master in AI & Cybersecurity (2024 – 2025) — HEC Morocco.
  - Deep Learning Specialization (2025) — Stanford University / Coursera.
  - Bachelor of Software Engineering & Networks (2014 – 2017) — PIGIER Côte d'Ivoire.

• Elite Verifiable Global Certifications:
  - CISSP® (Certified Information Systems Security Professional) — Gold standard for enterprise security architecture.
  - CompTIA Security+ — Network defense, vulnerability assessments, and applied cryptography.
  - Digital Health Specialization — Imperial College London.
  - Google Cloud Data & Security Professional.

This unique combination of business executive training (HEC, Executive AI 2026), deep tech fundamentals (Stanford), and world-class cybersecurity (CISSP®) positions him as a rare profile in the market.

Would you like to verify any of these credentials on his official LinkedIn profile?`,
        matchedTopicIds: ["education_certifications"],
        confidence: 0.98
      };
    }

    return {
      text: `${hasGreeting ? "Bonjour ! " : ""}Ibrahim Karamoko s'appuie sur un cursus académique d'excellence et des certifications internationales reconnues :

• Formations Académiques & Exécutives :
  - Certificat Executive AI for Business Transformation (obtenu en 2026) : Stratégie de transformation d'entreprise par l'IA et gouvernance de l'innovation.
  - Master Executive IA & Cybersécurité (2024 – 2025) : HEC Maroc.
  - Deep Learning Specialization (2025) : Stanford University / Coursera.
  - Licence Génie Logiciel & Réseaux (2014 – 2017) : PIGIER Côte d'Ivoire.

• Certifications Critiques Internationales :
  - CISSP® (Certified Information Systems Security Professional) : Titre mondial de référence pour l'architecture et la gouvernance de cybersécurité.
  - CompTIA Security+ : Défense réseau, gestion des vulnérabilités et cryptographie.
  - Digital Health Specialization : Imperial College London.
  - Certification Google Cloud Data & Security.

Cette combinaison entre vision exécutive d'entreprise (HEC, Certificat Executive AI 2026), rigorisme Deep Tech (Stanford) et cybersécurité de rang mondial (CISSP®) fait d'Ibrahim un directeur technique complet et crédible.

Souhaitez-vous que je vous mette en relation avec lui pour examiner son parcours en détail ?`,
      matchedTopicIds: ["education_certifications"],
      confidence: 0.98
    };
  }

  // =========================================================================
  // SCÉNARIO 6 : CYBERSÉCURITÉ, ZERO-TRUST & CONFORMITÉ HDS
  // =========================================================================
  if (isCybersecurity) {
    if (lang === "en") {
      return {
        text: `${hasGreeting ? "Hello! " : ""}Cybersecurity is not an afterthought for Ibrahim; it is built into the architecture from day zero (Security by Design):

• Core Accreditations: Certified CISSP® and CompTIA Security+.
• Healthcare & Sensitive Data Compliance: Proven compliance with HDS (Healthcare Data Hosting) standards, GDPR, and Ivorian Law No. 2013-450 on personal data protection.
• Cryptography & Hardening:
  - End-to-end AES-256 encryption on platforms like Tila (mental health teleconsultations).
  - Mutual TLS (mTLS) and Istio service mesh on microservices.
  - Centralized secrets management using HashiCorp Vault.
  - Automated CI/CD security scanning using Semgrep and Trivy.
• Identity & Access Management (IAM): Sovereign Zero-Trust implementations using Keycloak (OAuth2 / OIDC) and PKI X.509 cryptographic hardware security modules (HSM).

Would you like him to conduct a security audit or design a zero-trust architecture for your infrastructure?`,
        matchedTopicIds: ["security_compliance"],
        confidence: 0.97
      };
    }

    return {
      text: `${hasGreeting ? "Bonjour ! " : ""}Pour Ibrahim, la cybersécurité n'est jamais une option ajoutée après coup ; elle est intégrée dès la conception (Security by Design) :

• Titres d'Élite : Certifié CISSP® et CompTIA Security+.
• Données de Santé & Réglementation : Respect scrupuleux des normes HDS (Hébergement de Données de Santé), du RGPD européen et de la loi ivoirienne n° 2013-450 sur la protection des données personnelles.
• Cryptographie & Durcissement :
  - Chiffrement de bout en bout AES-256 sur les téléconsultations médicales (Tila).
  - Protocoles mTLS et maillage de services Istio sur les architectures microservices.
  - Gestion centralisée des secrets avec HashiCorp Vault.
  - Détection automatisée de vulnérabilités en CI/CD avec Semgrep et Trivy DevSecOps.
• Gestion des Identités (IAM) : Architectures Zero-Trust régaliennes avec Keycloak (OAuth2 / OIDC) et infrastructure PKI X.509 adossée à des modules HSM.

Avez-vous besoin d'un audit de sécurité ou de conformité pour une application manipulant des données sensibles ?`,
      matchedTopicIds: ["security_compliance"],
      confidence: 0.97
    };
  }

  // =========================================================================
  // SCÉNARIO 7 : PROJETS STRATÉGIQUES (Kanyeh, Nuria, Tila, XH Skills, Roche, UNICEF)
  // =========================================================================
  if (isProjectsInstitutions) {
    if (lang === "en") {
      return {
        text: `${hasGreeting ? "Hello! " : ""}Ibrahim has engineered and deployed 10 major production architectures. Here are the 4 flagship highlights:

• Kanyeh Assist (Roche Laboratories, SiPath & University Hospitals):
National telepathology platform connecting CHU Bouaké, Treichville, PNLC, and Roche Laboratories. YOLOv8/v11 models detecting cellular atypia with 80% accuracy, high-resolution WSI TIFF viewer, and PostgreSQL 16 Enterprise with Row-Level Security (RLS) and HashiCorp Vault.

• Nuria (UNICEF & Ivorian Ministry of Health):
Africa's first pediatric screening platform for neurodevelopmental disorders (autism/NDD), featuring an automated clinical scoring engine, offline-first synchronization, PostgreSQL 16 HA, and Keycloak OIDC.

• Tila (ci.tila.app — UNICEF, UNDP, WHO, AFD, Expertise France, PNSM):
International mental health teleconsultation platform built with React Native and WebSockets, secured with end-to-end AES-256 encryption to uphold strict medical confidentiality.

• XH Skills Academy (xhskillsacademy.com):
Pan-African digital health EdTech founded by Corine Maurice Ouattara, where Ibrahim serves as Tech Lead and Digital Health Instructor with a Next.js LMS, adaptive video streaming, and Cloudflare WAF DRM.

• Yamoh (Mobility & FinTech):
Ridesharing platform featuring automated biometric KYC identity verification (anti-spoofing liveness), dynamic pricing, Mobile Money gateway, and PostgreSQL 16 (PostGIS) with Redis Cluster.

Which of these platforms would you like to explore in more detail?`,
        matchedTopicIds: ["projects_flagship"],
        confidence: 0.97
      };
    }

    return {
      text: `${hasGreeting ? "Bonjour ! " : ""}Ibrahim a conçu et mis en production 10 architectures d'envergure. En voici les réalisations phares :

• Kanyeh Assist (Partenariat Laboratoire Roche, SiPath, CHU Bouaké/Treichville, PNLC) :
Plateforme nationale de télé-diagnostic anatomopathologique. Modèles d'IA YOLOv8/v11 pour détecter les atypies cellulaires (80% de précision clinique), visionneuse WSI de coupes histologiques gigaoctets (TIFF tuilé) et PostgreSQL 16 Enterprise avec Row-Level Security (RLS) et HashiCorp Vault.

• Nuria (Validé par l'UNICEF & le Ministère de la Santé MSHP) :
1ère plateforme africaine de dépistage pédiatrique des troubles neurodéveloppementaux (autisme/TND). Moteur de scoring clinique automatisé, synchronisation offline-first résiliente, base relationnelle PostgreSQL 16 HA et Keycloak OIDC.

• Tila (ci.tila.app — Déployé avec l'UNICEF, le PNUD, l'OMS, l'AFD, Expertise France et le PNSM) :
Application mobile et plateforme de santé mentale de référence. Téléconsultations hautement confidentielles sécurisées par chiffrement AES-256 de bout en bout et messagerie temps réel WebSockets.

• XH Skills Academy (xhskillsacademy.com) :
Plateforme EdTech de référence en santé numérique pour l'Afrique, portée par Corine Maurice Ouattara. Ibrahim y intervient en tant que Tech Lead et Formateur en santé numérique (Next.js, streaming optimisé bas débit, PostgreSQL 16 et DRM Cloudflare).

• Yamoh (Mobilité & FinTech) :
Application de covoiturage urbain intégrant un module KYC de vérification d'identité biométrique (anti-usurpation / liveness detection), tarification dynamique, paiement Mobile Money, PostgreSQL 16 (PostGIS) et Redis Cluster.

Sur lequel de ces projets aimeriez-vous que je vous détaille les choix d'architecture ou les défis techniques surmontés ?`,
      matchedTopicIds: ["projects_flagship"],
      confidence: 0.97
    };
  }

  // =========================================================================
  // SCÉNARIO 8 : CONTACT, RECRUTEMENT, DISPONIBILITÉ & TARIFS
  // =========================================================================
  if (isContactHire) {
    if (lang === "en") {
      return {
        text: `${hasGreeting ? "Hello! " : ""}Ibrahim is directly available for strategic consulting, Operational / Fractional CTO engagements, technical architecture scoping, and custom AI implementations:

• Direct WhatsApp / Mobile: +225 07 16 31 37 08 / +225 01 01 59 41 53
• Professional Email: ibrahim92karamoko@gmail.com
• LinkedIn: linkedin.com/in/el-hadj-ibrahim-v-karamoko-76951613b
• Location & Mobility: Based in Abidjan (Côte d'Ivoire), with full international mobility across Africa, Europe, and remote setups.
• Response Time: Guaranteed within 24 hours.

Feel free to write to him on WhatsApp or submit the contact form at the bottom of the page to organize a kick-off call!`,
        matchedTopicIds: ["contact_availability"],
        confidence: 0.98
      };
    }

    return {
      text: `${hasGreeting ? "Bonjour ! " : ""}Ibrahim est directement disponible pour étudier des missions de direction technique (CTO Opérationnel / Fractional CTO), des mandats de conseil, des audits de cybersécurité ou des projets d'agents IA :

• Téléphone & WhatsApp direct : +225 07 16 31 37 08 / +225 01 01 59 41 53
• Email professionnel : ibrahim92karamoko@gmail.com
• LinkedIn officiel : linkedin.com/in/el-hadj-ibrahim-v-karamoko-76951613b
• Localisation & Mobilité : Basé à Abidjan (Côte d'Ivoire), mobile en Afrique, en Europe et disponible à distance.
• Délai de réponse garanti : Sous 24 heures.

Vous pouvez lui écrire directement sur WhatsApp ou renseigner le formulaire de contact en bas de page pour fixer un premier échange !`,
      matchedTopicIds: ["contact_availability"],
      confidence: 0.98
    };
  }

  // =========================================================================
  // SCÉNARIO 9 : IA GLOBALE (Computer Vision, RAG, Web Scraping)
  // =========================================================================
  if (isVisionAi || isRagVector || isScraping || normQuery.includes("ia") || normQuery.includes("ai")) {
    if (lang === "en") {
      return {
        text: `${hasGreeting ? "Hello! " : ""}Ibrahim's AI track record is strictly engineering-oriented and focused on real-world production systems:

1. Computer Vision & Cellular Deep Learning:
Trained and deployed YOLOv8 and YOLOv11 models (PyTorch, OpenCV) for Kanyeh Assist, achieving an 80% clinical accuracy rate for automated cellular atypia detection on gigabyte Whole Slide Images (WSI TIFF) in partnership with Roche Laboratories.

2. Production RAG & Vector Search:
Architects industrial Retrieval-Augmented Generation systems using PostgreSQL with pgvector, ChromaDB, and LangChain, optimizing chunking algorithms to query massive knowledge bases with sub-second response times.

3. Resilient Web Scraping & Ingestion:
Deep mastery of Playwright, Scrapy, Selenium, and BeautifulSoup, building extraction pipelines that bypass complex anti-bot protections, handle rotating proxies, and ingest unstructured web datasets.

4. Agentic Engineering & Modern Tooling:
Daily utilization of Google Antigravity with Gemini, Anthropic's Claude Code, and OpenAI Codex with Model Context Protocol (MCP) integrations to dramatically accelerate architecture scoping, code review, and automated testing.

Which AI pillar is most relevant to your current product roadmap?`,
        matchedTopicIds: ["ai_deeptech_stack"],
        confidence: 0.96
      };
    }

    return {
      text: `${hasGreeting ? "Bonjour ! " : ""}L'expertise IA d'Ibrahim est résolument concrète, orientée production et impact réel :

1. Computer Vision & Deep Learning Médical :
Entraînement et mise en production de modèles YOLOv8 et YOLOv11 (PyTorch, OpenCV) pour Kanyeh Assist. Résultat : 80% de précision clinique pour la détection automatisée d'atypies cellulaires, intégrée à une visionneuse WSI de coupes histologiques gigaoctets avec le Laboratoire Roche.

2. RAG & Recherche Vectorielle Scalable :
Conception d'architectures RAG (Retrieval-Augmented Generation) s'appuyant sur PostgreSQL 16 avec pgvector, ChromaDB et LangChain. Il optimise le chunking sémantique pour interroger des bases de connaissances volumineuses en quelques millisecondes.

3. Web Scraping Résilient & Extraction de Données :
Maîtrise approfondie de Playwright, Scrapy, Selenium et BeautifulSoup. Il conçoit des pipelines d'extraction capables de contourner les protections anti-bots, de gérer des proxys rotatifs et de structurer des téraoctets de données non structurées.

4. Ingénierie Assistée par Agents d'Élite :
Usage avancé au quotidien de Google Antigravity (Gemini), Claude Code (Anthropic) et Codex (OpenAI) avec le protocole MCP (Model Context Protocol) pour décupler la vélocité et la couverture de tests.

Souhaitez-vous explorer un cas d'usage précis d'IA ou une brique RAG pour vos projets ?`,
      matchedTopicIds: ["ai_deeptech_stack"],
      confidence: 0.96
    };
  }

  // =========================================================================
  // SCÉNARIO 10 : PRÉSENTATION GÉNÉRALE / QUI EST-IL ?
  // =========================================================================
  const isBioQuery =
    normQuery.includes("qui est") ||
    normQuery.includes("presente") ||
    normQuery.includes("profil") ||
    normQuery.includes("parle moi") ||
    normQuery.includes("resume") ||
    normQuery.includes("who is") ||
    normQuery.includes("tell me about") ||
    words.length <= 3;

  if (isBioQuery) {
    if (lang === "en") {
      return {
        text: `${hasGreeting ? "Hello! " : ""}Ibrahim Karamoko is an AI & Cybersecurity Tech Lead and Operational CTO with over 10 years of experience designing mission-critical distributed architectures.

• Executive Leadership: Directly manages 5 engineers with a proven 40% reduction in production regressions through mandatory code reviews and Clean Code disciplines.
• Core AI & Engineering: Specialized in YOLOv8/v11 computer vision, scalable RAG architectures with pgvector, resilient Web Scraping, and agentic workflows (Antigravity, Claude Code, Codex).
• International Recognition: Architect behind systems deployed with UNICEF, UNDP, WHO, AFD, Roche Laboratories, and the Ministry of Health.
• Qualifications: CISSP®, CompTIA Security+, Stanford Deep Learning, Executive Master in AI from HEC, and Executive Certificate in AI for Business Transformation (2026).

What aspect of his track record would you like to explore further?`,
        matchedTopicIds: ["identity_core"],
        confidence: 0.95
      };
    }

    return {
      text: `${hasGreeting ? "Bonjour ! " : ""}Ibrahim Karamoko est Tech Lead IA & Cybersécurité et CTO Opérationnel avec plus de 10 ans d'expérience dans la conception d'architectures distribuées critiques, l'IA appliquée et la cybersécurité.

• Leadership d'Équipe : Encadre directement 5 ingénieurs avec une baisse mesurée de 40% des régressions en production grâce aux revues de code systématiques (MRs) et à la culture Clean Code / DDD.
• IA Appliquée & Deep Tech : Spécialiste de la vision par ordinateur (YOLOv8/v11), des systèmes RAG avec pgvector, du Web Scraping résilient et des environnements assistés par agents (Antigravity, Claude Code, Codex).
• Impact Institutionnel : Concepteur de plateformes déployées avec l'UNICEF, le PNUD, l'OMS, l'AFD, le Laboratoire Roche et le Ministère de la Santé (MSHP-CMU).
• Titres & Certifications : Certifié CISSP® et CompTIA Security+, Stanford Deep Learning, Master Exec. IA à HEC Maroc et Certificat Executive AI for Business Transformation (2026).

Souhaitez-vous en savoir plus sur son management, ses réalisations concrètes ou sa vision de CTO ?`,
      matchedTopicIds: ["identity_core"],
      confidence: 0.95
    };
  }

  // =========================================================================
  // SCÉNARIO 11 : RÉPONSE SYNTHÉTIQUE INTELLIGENTE POUR QUESTIONS OUVERTES
  // =========================================================================
  if (lang === "en") {
    return {
      text: `${hasGreeting ? "Hello! " : ""}That is a very pertinent question. Looking at it through Ibrahim Karamoko's operational CTO perspective:

With 10+ years architecting mission-critical platforms and leading engineering teams, Ibrahim tackles this with three core principles:
1. Security & Resilience by Design: Applying CISSP® standards, zero-trust compartmentalization, and high-availability patterns.
2. Pragmatic Applied AI: Leveraging computer vision (YOLOv8/v11), semantic vector search (pgvector), and agent-driven velocity (Antigravity, Claude Code, Codex) to build robust systems.
3. Quantifiable Delivery: A track record backed by major institutions like UNICEF, UNDP, WHO, and Roche Laboratories.

Would you like to discuss this topic directly with Ibrahim? He can be reached on WhatsApp at +225 07 16 31 37 08 or via email at ibrahim92karamoko@gmail.com.`,
      matchedTopicIds: ["identity_core", "scenarios_unexpected"],
      confidence: 0.88
    };
  }

  return {
    text: `${hasGreeting ? "Bonjour ! " : ""}C'est une excellente question. En l'analysant sous le prisme de l'expertise de CTO d'Ibrahim Karamoko :

Avec plus de 10 ans d'expérience dans le pilotage de systèmes critiques et la direction d'équipes d'ingénieurs, Ibrahim aborde ce sujet selon trois principes fondamentaux :
1. Sécurité & Résilience dès la conception : Application stricte des standards CISSP®, architecture Zero-Trust et respect des normes de données sensibles.
2. IA Appliquée & Valeur Métier : Utilisation pragmatique de la vision par ordinateur (YOLOv8/v11), des bases vectorielles (pgvector) et du développement assisté par agents (Antigravity, Claude Code, Codex) pour maximiser la fiabilité.
3. Rigueur de Livraison : Des réalisations éprouvées auprès de partenaires exigeants tels que l'UNICEF, le PNUD, l'OMS, l'AFD et le Laboratoire Roche.

Souhaitez-vous approfondir ce sujet directement avec Ibrahim ? Il est joignable sur WhatsApp au +225 07 16 31 37 08 ou par email à ibrahim92karamoko@gmail.com.`,
    matchedTopicIds: ["identity_core", "scenarios_unexpected"],
    confidence: 0.88
  };
}
