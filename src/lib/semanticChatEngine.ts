// MOTEUR SÉMANTIQUE RAG & INTELLIGENCE ARTIFICIELLE D'IBRAHIM KARAMOKO
// Génère des réponses expertes, courtoises, convaincantes et hautement structurées (FR & EN)

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
    "good", "cto", "lead", "would", "make"
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

  const hasGreeting = ["bonjour", "salut", "bonsoir", "coucou", "hello", "hi", "hey", "greetings"].some(
    (g) => normQuery.includes(g)
  );

  // 1. INTENT : "POURQUOI IBRAHIM FERAIT UN BON CTO ?" / RECRUTEMENT / LEADERSHIP EXÉCUTIF
  const isCtoQuery =
    (normQuery.includes("cto") || normQuery.includes("directeur technique") || normQuery.includes("direction technique") || normQuery.includes("lead") || normQuery.includes("recruter") || normQuery.includes("embaucher") || normQuery.includes("pourquoi lui") || normQuery.includes("pourquoi ibrahim")) &&
    (normQuery.includes("bon") || normQuery.includes("pourquoi") || normQuery.includes("valeur") || normQuery.includes("atout") || normQuery.includes("qualite") || normQuery.includes("avantage") || normQuery.includes("parle") || normQuery.includes("why"));

  if (isCtoQuery) {
    if (lang === "en") {
      return {
        text: `${hasGreeting ? "Hello! Thank you for asking. " : ""}Here is why Ibrahim Karamoko stands out as an exceptional Operational CTO:

Ibrahim is not an armchair manager; he is a hands-on technical leader with 10+ years of battle-tested experience building, scaling, and securing mission-critical platforms.

Here are the 4 core pillars that make him a formidable CTO:

1. Rare Dual Expertise — Executive Vision & Hands-On Engineering
He bridges business goals with hardcore technical execution. Ibrahim can debate strategic roadmaps with the Board, negotiate with multilateral agencies (UNICEF, UNDP, WHO), and dive straight into the code to architect complex microservices (FastAPI, Node.js, Spring Boot) or debug distributed bottlenecks.

2. Proven People Leadership & Quality Culture (-40% Bugs)
At MCM GROUP SAS / PASS SANTÉ MOUSSO, he directly leads 5 engineers (3 developers + 2 interns). By instituting systematic code reviews (Merge Requests) and a rigorous Clean Code / Domain-Driven Design (DDD) discipline, he achieved a proven 40% reduction in production bugs while accelerating sprint delivery.

3. Applied Deep Tech & AI Production Track Record
Unlike theorists, Ibrahim deploys real AI to production:
• YOLOv8/v11 Computer Vision for national telepathology (Kanyeh Assist, partnered with Roche Laboratories and university hospitals).
• Scalable RAG architectures with pgvector for automated enterprise retrieval.
• Resilient Web Scraping pipelines (Playwright, Scrapy) and AI-assisted workflows using Antigravity, Claude Code, and OpenAI Codex.

4. Elite Cybersecurity & International Trust
Holding CISSP® and CompTIA Security+ certifications alongside an Executive Master in AI & Cybersecurity from HEC, he guarantees security by design, HIPAA/HDS healthcare compliance, and AES-256 zero-trust architectures.

In summary, Ibrahim delivers the engineering peace of mind, team velocity, and technical excellence that every CEO seeks.

Do you have a specific technical challenge, team structure, or mission scope you would like to discuss?`,
        matchedTopicIds: ["identity_core", "management_leadership", "scenarios_unexpected"],
        confidence: 0.98
      };
    }

    return {
      text: `${hasGreeting ? "Bonjour ! C'est un réel plaisir d'échanger avec vous. " : ""}Voici pourquoi Ibrahim Karamoko incarne le rôle de CTO Opérationnel avec une efficacité remarquable :

Ibrahim n'est pas un manager théorique déconnecté du terrain ; c'est un directeur technique hands-on qui allie vision stratégique business et maîtrise intime de l'ingénierie logicielle avec plus de 10 ans d'expérience.

Voici les 4 piliers majeurs qui font de lui un CTO d'exception :

1. Un profil hybride rare — Arbitrage Stratégique & Maîtrise Hands-on
Il fait le pont naturel entre les exigences des décideurs (COMEX, bailleurs institutionnels) et la réalité du code. Ibrahim sait négocier une roadmap technologique, maîtriser les coûts cloud (AWS/Docker), et s'asseoir avec ses développeurs pour architecturer des microservices distribués (FastAPI, Node.js, Spring Boot) ou concevoir des bases de données résilientes.

2. Un Leadership d'Équipe Éprouvé & Mesurable (-40% de bugs)
Chez MCM GROUP SAS / PASS SANTÉ MOUSSO, il encadre directement 5 ingénieurs (3 développeurs juniors + 2 stagiaires). En instaurant des revues de code systématiques (Merge Requests), des rituels Agile/Scrum bi-hebdomadaires et une culture Clean Code / DDD, il a réduit de 40% les régressions en production tout en boostant la vélocité de livraison.

3. Une Maîtrise Concrète de l'IA & du Deep Learning en Production
Loin du battage médiatique, Ibrahim déploie des IA qui tournent en conditions réelles :
• Modèles YOLOv8/v11 de détection cellulaire pour Kanyeh Assist (partenariat Laboratoire Roche, SiPath, CHU Bouaké/Treichville).
• Architectures RAG scalables avec pgvector et pipelines MLOps.
• Extraction de données massives (Playwright, Scrapy) et développement assisté par agents d'élite (Google Antigravity, Claude Code, Codex).

4. Rigueur de Cybersécurité & Confiance Institutionnelle
Certifié CISSP® et CompTIA Security+, diplômé d'un Master Executive IA & Cybersécurité à HEC Maroc, il intègre la sécurité dès la conception (normes HDS de santé, chiffrement AES-256 de bout en bout, architectures Zero-Trust). Ses solutions sont aujourd'hui au cœur des systèmes de l'UNICEF, du PNUD, de l'OMS et de l'AFD.

En résumé, recruter Ibrahim comme CTO, c'est garantir à votre entreprise la rigueur d'ingénierie, la stabilité des livraisons et la capacité d'innover sur l'IA sans dette technique.

Avez-vous un projet spécifique, un audit ou une problématique d'équipe dont vous aimeriez parler plus en détail ?`,
      matchedTopicIds: ["identity_core", "management_leadership", "scenarios_unexpected"],
      confidence: 0.98
    };
  }

  // 2. INTENT : MANAGEMENT / ENCADREMENT D'ÉQUIPE (5 personnes, -40% bugs)
  const isManagementQuery =
    normQuery.includes("management") ||
    normQuery.includes("equipe") ||
    normQuery.includes("lead") ||
    normQuery.includes("manage") ||
    normQuery.includes("encadre") ||
    normQuery.includes("combien") ||
    normQuery.includes("team");

  if (isManagementQuery) {
    if (lang === "en") {
      return {
        text: `${hasGreeting ? "Hello! " : ""}Regarding engineering management, Ibrahim's leadership is founded on accountability, continuous mentorship, and measurable outcomes:

• Team Size: He directly leads an engineering team of 5 at MCM GROUP SAS / PASS SANTÉ MOUSSO (3 junior developers and 2 engineering interns).
• Measured Business Impact: By introducing systematic, checklist-based code reviews (Merge Requests), he demonstrated a 40% drop in production regressions.
• Delivery Cadence: Bi-weekly Agile/Scrum sprints, daily blocker-removal standups, and blameless retrospectives.
• Engineering Standards: Strict enforcement of Clean Code, Domain-Driven Design (DDD), automated testing, and CI/CD automation.

Ibrahim's strength lies in transforming junior talent into autonomous, high-output engineers while maintaining enterprise-grade architectural integrity.

Would you like to know more about how he organizes sprints or structures code review checklists?`,
        matchedTopicIds: ["management_leadership"],
        confidence: 0.95
      };
    }

    return {
      text: `${hasGreeting ? "Bonjour ! " : ""}Concernant son style de management, Ibrahim applique un leadership humain, exigeant et axé sur des résultats tangibles :

• Taille et composition de l'équipe : Direction technique directe de 5 personnes chez MCM GROUP SAS / PASS SANTÉ MOUSSO (3 développeurs juniors et 2 stagiaires ingénieurs).
• Impact chiffré démontré : Mise en place d'un processus strict de revues de code (Merge Requests) avec checklists qualité, réduisant de 40% les anomalies et régressions en production.
• Cadence Agile : Sprints bi-hebdomadaires Scrum, daily standups focalisés sur la levée des points de blocage, et rétrospectives d'amélioration continue.
• Culture technique : Pratique du Clean Code, Domain-Driven Design (DDD), tests automatisés et intégration continue (CI/CD).
• Mentorat : Accompagnement bienveillant permettant aux développeurs juniors de monter très rapidement en compétences sur l'architecture microservices et l'IA.

Pour Ibrahim, un bon leader technique ne se contente pas de distribuer des tâches : il fait grandir son équipe tout en protégeant la qualité de la production.

Souhaitez-vous que je vous détaille comment il structure ses revues de code ou ses arbitrages d'architecture ?`,
      matchedTopicIds: ["management_leadership"],
      confidence: 0.95
    };
  }

  // 3. INTENT : IA, COMPUTER VISION, RAG, SCRAPING, AGENTS (YOLO, Antigravity, Claude Code, Codex)
  const isAiQuery =
    normQuery.includes("ia") ||
    normQuery.includes("ai") ||
    normQuery.includes("yolo") ||
    normQuery.includes("rag") ||
    normQuery.includes("scraping") ||
    normQuery.includes("antigravity") ||
    normQuery.includes("claude code") ||
    normQuery.includes("codex") ||
    normQuery.includes("llm") ||
    normQuery.includes("vector");

  if (isAiQuery) {
    if (lang === "en") {
      return {
        text: `${hasGreeting ? "Hello! " : ""}Ibrahim's AI expertise is grounded in tangible, mission-critical engineering:

1. Computer Vision & Cellular Deep Learning:
Trained and deployed YOLOv8 and YOLOv11 models in PyTorch and OpenCV for Kanyeh Assist, achieving an 80% clinical accuracy rate for automated cellular atypia detection (breast and cervical cancer).

2. Production RAG & Vector Search:
Architects end-to-end Retrieval-Augmented Generation systems using pgvector, ChromaDB, and LangChain, optimizing chunking algorithms to turn complex corpora into millisecond-latency query engines.

3. Resilient Web Scraping & Ingestion:
Advanced automated data pipelines built with Playwright, Scrapy, BeautifulSoup, and Selenium, featuring automated proxy rotation, anti-bot evasion, and headless orchestration.

4. Cutting-Edge Agentic AI Engineering:
Daily mastery of Google Antigravity with Gemini, Claude Code (Anthropic), and Codex (OpenAI) with Model Context Protocol (MCP) integrations to dramatically accelerate architecture prototyping, automated testing, and security auditing.

Are you looking to integrate computer vision, RAG, or automated AI workflows into your own infrastructure?`,
        matchedTopicIds: ["ai_deeptech_stack"],
        confidence: 0.96
      };
    }

    return {
      text: `${hasGreeting ? "Bonjour ! " : ""}L'expertise IA d'Ibrahim est résolument concrète, orientée production et impact réel :

1. Computer Vision & Deep Learning Médical :
Entraînement et mise en production de modèles YOLOv8 et YOLOv11 (PyTorch, OpenCV) pour le projet Kanyeh Assist. Résultat : une précision clinique de 80% pour la détection automatisée d'atypies cellulaires (cancers du sein et du col de l'utérus), intégrée à une visionneuse WSI de lames histopathologiques haute résolution.

2. RAG & Recherche Vectorielle Scalable :
Conception d'architectures RAG (Retrieval-Augmented Generation) industrielles s'appuyant sur PostgreSQL avec l'extension vectorielle pgvector, ChromaDB et LangChain. Il optimise les pipelines de chunking et d'indexation sémantique pour interroger des bases de connaissances massives en quelques millisecondes.

3. Web Scraping Résilient & Data Extraction :
Maîtrise approfondie de Playwright, Scrapy, Selenium et BeautifulSoup. Il conçoit des pipelines d'extraction capables de contourner les protections anti-bots complexes, de gérer des proxys rotatifs et de structurer des téraoctets de données non structurées.

4. Ingénierie Assistée par Agents d'Élite :
Usage avancé au quotidien de Google Antigravity avec Gemini, de Claude Code (Anthropic) et de Codex (OpenAI) avec le protocole MCP (Model Context Protocol). Cela lui permet de démultiplier le rythme de livraison logicielle et de garantir une couverture de tests exceptionnelle.

Souhaitez-vous explorer un cas d'usage précis d'IA ou une brique RAG pour vos projets ?`,
      matchedTopicIds: ["ai_deeptech_stack"],
      confidence: 0.96
    };
  }

  // 4. INTENT : PROJETS STRATÉGIQUES (Kanyeh, Nuria, Tila, XH Skills Academy, Roche, UNICEF)
  const isProjectQuery =
    normQuery.includes("projet") ||
    normQuery.includes("realisation") ||
    normQuery.includes("kanyeh") ||
    normQuery.includes("nuria") ||
    normQuery.includes("tila") ||
    normQuery.includes("xh") ||
    normQuery.includes("academy") ||
    normQuery.includes("unicef") ||
    normQuery.includes("roche") ||
    normQuery.includes("oms") ||
    normQuery.includes("pnud");

  if (isProjectQuery) {
    if (lang === "en") {
      return {
        text: `${hasGreeting ? "Hello! " : ""}Ibrahim has engineered and deployed 10 major production architectures. Here are the 4 flagship highlights:

• Kanyeh Assist (Roche, SiPath & University Hospitals):
A national telepathology platform connecting CHU Bouaké, Treichville, PNLC, and Roche Laboratories. It runs YOLOv8/v11 AI models on gigabyte Whole Slide Imaging (WSI TIFF) biopsies with multi-tenant PostgreSQL Row-Level Security (RLS).

• Nuria (UNICEF & Ministry of Health):
Africa's first pediatric screening platform for neurodevelopmental disorders (autism/NDD), featuring an automated clinical scoring engine and an offline-first synchronization engine for remote areas.

• Tila (ci.tila.app — UNICEF, UNDP, WHO, AFD, Expertise France, PNSM):
An international mental health teleconsultation platform built with React Native and WebSockets, secured with AES-256 end-to-end encryption to uphold strict medical confidentiality.

• XH Skills Academy (xhskillsacademy.com):
A pan-African digital health EdTech founded by Corine Maurice Ouattara, where Ibrahim serves as Tech Lead and Digital Health Instructor with a Next.js LMS optimized for low-bandwidth video delivery.

Which of these systems would you like to inspect in more technical detail?`,
        matchedTopicIds: ["projects_flagship"],
        confidence: 0.96
      };
    }

    return {
      text: `${hasGreeting ? "Bonjour ! " : ""}Ibrahim a conçu et mis en production 10 architectures d'envergure. En voici les 4 réalisations phares :

• Kanyeh Assist (Partenariat Laboratoire Roche, SiPath, CHU Bouaké/Treichville, PNLC) :
Plateforme nationale de télé-diagnostic anatomopathologique. Elle intègre des modèles d'IA YOLOv8/v11 pour détecter les atypies cellulaires, une visionneuse WSI de coupes histologiques gigaoctets (tuilage TIFF) et une sécurité renforcée PostgreSQL Row-Level Security (RLS).

• Nuria (Validé par l'UNICEF & le Ministère de la Santé MSHP) :
1ère plateforme africaine de dépistage pédiatrique des troubles neurodéveloppementaux (autisme/TND). Elle intègre un moteur de calcul de scores cliniques automatisé et une synchronisation offline-first résiliente adaptée aux zones rurales à faible connectivité.

• Tila (ci.tila.app — Déployé avec l'UNICEF, le PNUD, l'OMS, l'AFD, Expertise France et le PNSM) :
Application mobile et plateforme de santé mentale de référence. Elle assure des téléconsultations sécurisées par chiffrement AES-256 de bout en bout et messagerie WebSockets temps réel.

• XH Skills Academy (xhskillsacademy.com) :
Plateforme EdTech de référence en santé numérique pour l'Afrique, portée par Corine Maurice Ouattara. Ibrahim y intervient en tant que Tech Lead et Formateur en santé numérique (LMS Next.js, streaming optimisé bas débit).

Sur lequel de ces projets aimeriez-vous que je vous détaille les choix d'architecture ou les défis surmontés ?`,
      matchedTopicIds: ["projects_flagship"],
      confidence: 0.96
    };
  }

  // 5. INTENT : DIPLÔMES, CERTIFICATIONS, FORMATIONS (HEC, Stanford, CISSP, CompTIA)
  const isEducationQuery =
    normQuery.includes("diplome") ||
    normQuery.includes("formation") ||
    normQuery.includes("etude") ||
    normQuery.includes("hec") ||
    normQuery.includes("stanford") ||
    normQuery.includes("pigier") ||
    normQuery.includes("certif") ||
    normQuery.includes("cissp") ||
    normQuery.includes("comptia");

  if (isEducationQuery) {
    if (lang === "en") {
      return {
        text: `${hasGreeting ? "Hello! " : ""}Ibrahim combines top-tier academic training with elite, verifiable industry certifications:

• Higher Education:
  - Executive Master in AI & Cybersecurity — HEC Morocco (2024 – 2025)
  - Deep Learning Specialization — Stanford University / Coursera (2025)
  - B.Sc. in Software Engineering & Networks — PIGIER Côte d'Ivoire (2014 – 2017)

• International Certifications:
  - CISSP® (Information Systems Security Architecture — gold standard)
  - CompTIA Security+ (Network Defense & Applied Cryptography)
  - Digital Health Specialization (Imperial College London)
  - Google Cloud Data Analytics & Security Professional

This double culture of executive strategy (HEC) and elite security (CISSP) ensures your tech decisions are both business-sound and unbreachable.

Would you like to review his official credentials on LinkedIn or download his 1-page A4 CV?`,
        matchedTopicIds: ["education_certifications"],
        confidence: 0.96
      };
    }

    return {
      text: `${hasGreeting ? "Bonjour ! " : ""}Ibrahim s'appuie sur une double culture d'excellence académique et de certifications internationales reconnues :

• Formation Supérieure :
  - Master Executive IA & Cybersécurité — HEC Maroc (2024 – 2025)
  - Deep Learning Specialization — Stanford University / Coursera (2025)
  - Licence Génie Logiciel & Réseaux — PIGIER Côte d'Ivoire (2014 – 2017)

• Certifications Internationales Vérifiables :
  - CISSP® (Certified Information Systems Security Professional — référence mondiale de la sécurité des SI)
  - CompTIA Security+ (Défense réseau, cryptographie et analyse de vulnérabilités)
  - Digital Health Specialization — Imperial College London
  - Google Professional Data Analytics & Cloud Security

Cette combinaison entre vision managériale de haut niveau (HEC) et rigueur absolue en sécurité (CISSP) apporte une sérénité maximale pour piloter des infrastructures critiques.

Souhaitez-vous que je vous oriente vers son CV imprimable 1 page A4 ou son profil LinkedIn ?`,
      matchedTopicIds: ["education_certifications"],
      confidence: 0.96
    };
  }

  // 6. INTENT : CONTACT, COORDONNÉES, TARIFS, DISPONIBILITÉ
  const isContactQuery =
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
    normQuery.includes("hire") ||
    normQuery.includes("phone");

  if (isContactQuery) {
    if (lang === "en") {
      return {
        text: `${hasGreeting ? "Hello! " : ""}Ibrahim is directly available for strategic consulting, Fractional CTO engagements, technical audits, and custom AI deployments:

• WhatsApp / Mobile: +225 07 16 31 37 08 / +225 01 01 59 41 53
• Direct Professional Email: ibrahim92karamoko@gmail.com
• LinkedIn: linkedin.com/in/el-hadj-ibrahim-v-karamoko-76951613b
• Location: Based in Abidjan (Côte d'Ivoire), with global mobility across Africa, Europe, and remote setups.
• Response Time: Guaranteed within 24 hours.

Feel free to send a message via WhatsApp or use the contact form at the bottom of the page!`,
        matchedTopicIds: ["contact_availability"],
        confidence: 0.96
      };
    }

    return {
      text: `${hasGreeting ? "Bonjour ! " : ""}Ibrahim est directement disponible pour étudier des missions de conseil stratégique, des mandats de Fractional CTO, des audits de cybersécurité ou des déploiements d'IA sur mesure :

• Téléphone & WhatsApp direct : +225 07 16 31 37 08 / +225 01 01 59 41 53
• Email professionnel : ibrahim92karamoko@gmail.com
• LinkedIn officiel : linkedin.com/in/el-hadj-ibrahim-v-karamoko-76951613b
• Localisation : Basé à Abidjan (Côte d'Ivoire), mobile en Afrique, en Europe et disponible à distance.
• Délai de réponse garanti : Sous 24 heures.

Vous pouvez lui écrire directement sur WhatsApp ou renseigner le formulaire de contact en bas de page pour fixer un premier échange !`,
        matchedTopicIds: ["contact_availability"],
        confidence: 0.96
      };
  }

  // 7. INTENT : PRÉSENTATION GÉNÉRALE / QUI EST-IL ?
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
        text: `${hasGreeting ? "Hello! " : ""}Ibrahim Karamoko is an AI & Cybersecurity Tech Lead and Operational CTO with over 10 years of experience delivering mission-critical distributed systems.

• Executive Leadership: Directly manages 5 engineers with a proven 40% reduction in production bugs through mandatory code reviews and Clean Code disciplines.
• Core AI & Engineering: Specialized in YOLOv8/v11 computer vision, scalable RAG architectures with pgvector, resilient Web Scraping, and agentic workflows (Antigravity, Claude Code, Codex).
• International Recognition: Architect behind systems deployed with UNICEF, UNDP, WHO, AFD, Roche Laboratories, and the Ministry of Health.
• Qualifications: CISSP®, CompTIA Security+, Stanford Deep Learning, and Executive Master in AI from HEC.

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
• Titres & Certifications : Certifié CISSP® et CompTIA Security+, Stanford Deep Learning, et Master Exec. IA & Cybersécurité à HEC Maroc.

Souhaitez-vous en savoir plus sur son management, ses réalisations concrètes ou sa vision de CTO ?`,
      matchedTopicIds: ["identity_core"],
      confidence: 0.95
    };
  }

  // 8. RÉPONSE SYNTHÉTIQUE POUR QUESTION INATTENDUE / EXPERTE
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
