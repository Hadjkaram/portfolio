// MOTEUR SÉMANTIQUE RAG & INTELLIGENCE ARTIFICIELLE
// Génère des réponses expertes et contextualisées exclusivement sur Ibrahim Karamoko (FR & EN)

import { IBRAHIM_KNOWLEDGE_BASE, ProfileTopic } from "./knowledgeBase";

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
    "hire", "salary", "contact", "background", "degree", "certification", "can"
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

  // 1. Scoring sémantique des topics
  const scoredTopics: { topic: ProfileTopic; score: number }[] = IBRAHIM_KNOWLEDGE_BASE.map(
    (topic) => {
      let score = 0;

      // Correspondance exacte de mots-clés configurés
      for (const kw of topic.keywords) {
        const normKw = normalize(kw);
        if (normQuery.includes(normKw)) {
          score += 25;
        } else {
          const kwWords = normKw.split(/\s+/);
          const overlap = kwWords.filter((w) => words.includes(w)).length;
          if (overlap > 0) {
            score += overlap * 6;
          }
        }
      }

      // Correspondance des tags
      for (const tag of topic.tags) {
        if (normQuery.includes(normalize(tag))) {
          score += 15;
        }
      }

      // Correspondance avec le contenu FR / EN
      const corpusWords = normalize(topic.content_fr + " " + topic.content_en).split(/\s+/);
      const corpusWordSet = new Set(corpusWords);
      for (const w of words) {
        if (corpusWordSet.has(w)) {
          score += 2;
        }
      }

      return { topic, score };
    }
  );

  scoredTopics.sort((a, b) => b.score - a.score);
  const bestMatch = scoredTopics[0];
  const secondMatch = scoredTopics[1];

  // 2. Gestion des salutations simples
  const greetingsFr = ["bonjour", "salut", "coucou", "bonsoir", "hello", "hi"];
  const isGreetingOnly = words.length <= 2 && greetingsFr.some((g) => normQuery.includes(g));

  if (isGreetingOnly) {
    if (lang === "en") {
      return {
        text: `Hello! I am Ibrahim Karamoko's Personal AI Assistant. I can tell you all about his 10+ years of operational CTO leadership, his engineering team management (5 developers, -40% regressions), his deep AI work (YOLOv8/v11, RAG, Web Scraping, Antigravity, Claude Code), his 10 production projects (Kanyeh Assist, Nuria, Tila, XH Skills Academy), or his certifications (CISSP, HEC Paris/Morocco). What would you like to explore?`,
        matchedTopicIds: ["identity_core"],
        confidence: 0.95
      };
    }
    return {
      text: `Bonjour ! Je suis l'assistant IA officiel d'Ibrahim Karamoko. Je peux vous éclairer sur son management d'équipe (5 ingénieurs encadrés, -40% de régressions), son expertise IA (YOLOv8/v11, RAG, Web Scraping, Antigravity, Claude Code), ses 10 réalisations en production (Kanyeh Assist, Nuria, Tila, XH Skills Academy) ou ses diplômes (CISSP, HEC Maroc). Que souhaitez-vous savoir ?`,
      matchedTopicIds: ["identity_core"],
      confidence: 0.95
    };
  }

  // 3. Détection de questions techniques ou imprévues spécifiques
  // Ex: "Rust vs Go", "DDoS", "Crise", "Dimanche", "Afrique offline"
  if (normQuery.includes("rust") || normQuery.includes("go") || normQuery.includes("golang")) {
    const textFr = `Concernant Rust et Go, Ibrahim a une approche très pragmatique et orientée production :
• Sur la plateforme régalienne CI Identité (IAM étatique), il a combiné Go pour la rapidité d'implémentation des microservices réseau à haute concurrence et des modules en Rust pour les briques cryptographiques ultra-critiques nécessitant une sécurité mémoire absolue.
• Son principe : Go pour l'efficience d'équipe et la maintenabilité des APIs, Rust pour le bas niveau critique où la gestion mémoire Zero-Cost et la sécurité formelle sont non-négociables.`;
    const textEn = `Regarding Rust and Go, Ibrahim takes a production-tested, pragmatic architectural approach:
• In the CI Identité state sovereign IAM platform, he utilized Go for high-concurrency network microservices and Rust modules for critical cryptographic primitives demanding absolute memory safety.
• His philosophy: Go for high developer velocity and maintainable services, Rust for low-level critical components where zero-cost abstractions and strict memory guarantees are non-negotiable.`;
    return {
      text: lang === "en" ? textEn : textFr,
      matchedTopicIds: ["projects_flagship", "architecture_backend_cloud"],
      confidence: 0.9
    };
  }

  // 4. Synthèse contextuelle basée sur la meilleure correspondance
  if (bestMatch && bestMatch.score > 5) {
    const primaryContent = lang === "en" ? bestMatch.topic.content_en : bestMatch.topic.content_fr;
    let extraInsight = "";

    // Si une deuxième thématique est pertinente, on l'associe intelligemment
    if (secondMatch && secondMatch.score > 12 && secondMatch.topic.id !== bestMatch.topic.id) {
      if (lang === "en") {
        extraInsight = `\n\nRelated Strategic Context (${secondMatch.topic.title_en}):\n` +
          secondMatch.topic.content_en.split("\n\n")[0];
      } else {
        extraInsight = `\n\nContexte Stratégique Lié (${secondMatch.topic.title_fr}) :\n` +
          secondMatch.topic.content_fr.split("\n\n")[0];
      }
    }

    return {
      text: primaryContent + extraInsight,
      matchedTopicIds: [bestMatch.topic.id, ...(secondMatch ? [secondMatch.topic.id] : [])],
      confidence: Math.min(0.99, bestMatch.score / 50)
    };
  }

  // 5. Réponse intelligente pour questions inattendues / non prévues
  // On extrapole avec rigueur en se basant sur la vision CTO d'Ibrahim
  const identity = IBRAHIM_KNOWLEDGE_BASE.find((t) => t.id === "identity_core")!;
  const scenarios = IBRAHIM_KNOWLEDGE_BASE.find((t) => t.id === "scenarios_unexpected")!;
  const contact = IBRAHIM_KNOWLEDGE_BASE.find((t) => t.id === "contact_availability")!;

  if (lang === "en") {
    return {
      text: `That is an interesting question. Looking at it through Ibrahim Karamoko's operational CTO perspective:

With 10+ years architecting mission-critical systems and managing teams of engineers, Ibrahim evaluates every technical and strategic challenge with rigorous engineering principles:
• Resilience & Security by Design (CISSP® certified, HDS healthcare compliance, zero-trust architectures).
• High-Impact Applied AI: Pragmatic integration of Computer Vision (YOLOv8/v11), RAG with pgvector, and automated agent workflows (Antigravity, Claude Code, Codex).
• Measurable Delivery: Proven track record delivering for international organizations like UNICEF, UNDP, WHO, and Roche Laboratories.

Would you like to discuss this specific use case with Ibrahim directly? He is available via WhatsApp (+225 07 16 31 37 08) or email at ibrahim92karamoko@gmail.com.`,
      matchedTopicIds: [identity.id, scenarios.id, contact.id],
      confidence: 0.8
    };
  }

  return {
    text: `C'est une excellente question. En l'analysant sous le prisme de l'expertise de CTO d'Ibrahim Karamoko :

Avec plus de 10 ans d'expérience dans le pilotage d'architectures critiques et le management d'équipes d'ingénieurs, Ibrahim aborde chaque défi selon des principes d'ingénierie rigoureux :
• Sécurité & Résilience dès la conception : Certifié CISSP®, spécialiste de la protection des données de santé (normes HDS) et des architectures Zero-Trust.
• IA Appliquée à fort impact : Intégration concrète de modèles Computer Vision (YOLOv8/v11), RAG sur mesure avec pgvector, et développement assisté par agents (Antigravity, Claude Code, Codex).
• Livraison démontrée : Déploiements réussis pour des institutions comme l'UNICEF, le PNUD, l'OMS, l'AFD et le Laboratoire Roche.

Souhaitez-vous échanger sur ce cas précis avec Ibrahim ? Il est joignable directement par WhatsApp au +225 07 16 31 37 08 ou par email à ibrahim92karamoko@gmail.com.`,
    matchedTopicIds: [identity.id, scenarios.id, contact.id],
    confidence: 0.8
  };
}
