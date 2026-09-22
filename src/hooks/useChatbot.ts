import { useState } from "react";

export type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
};

// BASE DE CONNAISSANCES MISE À JOUR SELON LE CV OFFICIEL
const knowledgeBase = [
  {
    keywords: ["qui est", "présente", "profil", "parle moi", "résumé", "bio", "qui es-tu"],
    response: "Ibrahim Karamoko est Tech Lead IA & Cybersécurité, CTO Opérationnel et Full-Stack Senior avec plus de 10 ans d'expérience.\n\n• Management d'Équipe : Encadrement direct de 5 personnes (3 développeurs juniors, 2 stagiaires ingénieurs) avec une baisse démontrée de 40% des régressions grâce aux revues de code systématiques (MRs).\n• IA & Computer Vision : YOLOv8/v11, PyTorch, OpenCV, MLOps, RAG et Web Scraping (Playwright/Scrapy).\n• Outils d'Ingénierie IA : Maîtrise avancée d'Antigravity avec Gemini, Claude Code (Anthropic) et Codex avec ChatGPT (OpenAI).\n• Projets Stratégiques : Kanyeh Assist (télépathologie CHU Bouaké/Treichville), Nuria (UNICEF/MSHP), XH Skills Academy et Tila.\n• Diplômes & Certifications : Master Executive HEC Maroc (2025), Stanford (DeepLearning.AI), certifié CISSP® et CompTIA Security+."
  },
  {
    keywords: ["management", "équipe", "lead", "manage", "personnes", "combien", "encadrement"],
    response: "Côté Management Tech & Leadership :\n\n• Taille de l'équipe : Encadrement technique direct de 5 personnes (3 développeurs juniors + 2 stagiaires ingénieurs) chez MCM GROUP SAS / PASS SANTÉ MOUSSO.\n• Méthodes & Rituels : Rituels Agile / Scrum, animation des sprints bi-hebdomadaires, culture Clean Code & Domain-Driven Design (DDD).\n• Impact mesuré : Mise en place de revues de code systématiques (Merge Requests), réduisant de 40% les régressions en production et accélérant sensiblement la vélocité de livraison."
  },
  {
    keywords: ["rag", "scraping", "llm", "antigravity", "claude code", "codex", "chatgpt", "gemini", "agents"],
    response: "En ingénierie IA et traitement de données de pointe, Ibrahim maîtrise :\n\n• LLM & RAG : Architecture de systèmes RAG scalables, bases vectorielles (pgvector, ChromaDB), pipelines LangChain.\n• Web Scraping & Data Extraction : Playwright, Scrapy, BeautifulSoup, Selenium pour l'extraction automatisée et structurée de flux de données massifs.\n• Agentic Coding & IA Assistée : Maîtrise opérationnelle de Google Antigravity avec Gemini, Claude Code (Anthropic), Codex et ChatGPT (OpenAI) avec intégration de protocoles MCP (Model Context Protocol)."
  },
  {
    keywords: ["expérience", "parcours", "historique", "carrière", "entreprises", "postes"],
    response: "Parcours professionnel clé d'Ibrahim :\n\n1. Janv. 2024 – Présent : Tech Lead IA & Développeur Senior Fullstack (MCM GROUP SAS / PASS SANTÉ MOUSSO, Abidjan) — Lead de 5 personnes, microservices FastAPI/Node.js/Spring Boot.\n2. 2023 – Présent : Chef de Projet IT / Lead Dev IA & Scrum Master (ADOMED.care) — Pipeline MLOps IA médicale ivoirienne.\n3. 2022 – Présent : Co-Fondateur & Chief Technology Officer (AVLYTECH, France) — Architecture SaaS, pgvector, RAG.\n4. 2018 – 2023 (5 ans) : Responsable Informatique (IVAGREL) — Refonte globale SI et migration AWS pour 200+ agents.\n5. 2017 – 2018 : Analyste Développeur Fullstack (ECOBANK / SITEL) — Systèmes financiers et paiement transactionnel."
  },
  {
    keywords: ["diplome", "etude", "formation", "hec", "stanford", "pigier", "scolarité", "master"],
    response: "Parcours académique supérieur :\n\n• Master Exec. IA & Cybersécurité — HEC Maroc (2024 – 2025)\n• Deep Learning Specialization — Stanford University / Coursera (2025)\n• Licence Génie Logiciel & Réseaux — PIGIER Côte d'Ivoire (2014 – 2017)\n• Langues : Français (Langue maternelle C2), Anglais (Courant / Technique B2)."
  },
  {
    keywords: ["certif", "cissp", "comptia", "google", "imperial", "certification", "sécurité", "cyber"],
    response: "Certifications internationales vérifiables :\n\n• CISSP® (Cybersécurité) : Sécurité des Systèmes d'Information\n• CompTIA Security+ : Défense, Réseaux & Cryptographie\n• Digital Health Specialization : Imperial College London\n• Google Data Analytics & Security : Ingénierie & Sécurité Cloud."
  },
  {
    keywords: ["projet", "réalisations", "portfolio", "nuria", "kanyeh", "tila", "xh", "academy"],
    response: "Réalisations stratégiques phares du portfolio (11 architectures déployées en production) :\n\n• Kanyeh Assist : Télé-diagnostic anatomopathologique reliant les CHU de Bouaké, Treichville et le PNLC. Modèles YOLOv8/v11 pour atypies cellulaires, visionneuse WSI (tuilage TIFF) et PostgreSQL RLS.\n• Nuria : 1ère plateforme africaine de neurodéveloppement pédiatrique validée par l'UNICEF et le MSHP (Node.js, Next.js, PostgreSQL, Docker, AWS).\n• XH Skills Academy : Plateforme d'apprentissage en ligne en santé numérique pour l'Afrique (xhskillsacademy.com), portée notamment par Corine Maurice Ouattara. Ibrahim y est Formateur en santé numérique & Tech Lead.\n• Tila : Application mobile de soutien psychologique en Afrique de l'Ouest (ci.tila.app, React Native, WebSockets, chiffrement AES-256)."
  },
  {
    keywords: ["contact", "mail", "téléphone", "joindre", "whatsapp", "email", "coordonnées", "disponible", "disponibilité"],
    response: "Coordonnées et disponibilité directe :\n\n• Téléphone / WhatsApp : +225 07 16 31 37 08 / 01 01 59 41 53\n• Email : ibrahim92karamoko@gmail.com\n• LinkedIn : linkedin.com/in/el-hadj-ibrahim-v-karamoko-76951613b\n• Localisation : Abidjan, Côte d'Ivoire & International\n• Disponibilité : 3 Novembre 2026 (Temps plein) / Ouvert aux mandats de conseil stratégique."
  },
  {
    keywords: ["bonjour", "salut", "coucou", "hello", "hi"],
    response: "Bonjour ! Je suis l'assistant IA d'Ibrahim Karamoko. Je peux vous renseigner sur son leadership d'équipe (5 personnes managées), son expertise IA (YOLOv8/v11, RAG, Web Scraping, Antigravity, Claude Code), ses projets (Kanyeh Assist, Nuria, XH Skills Academy, Tila) ou ses certifications (CISSP, HEC). De quoi souhaitez-vous parler ?"
  }
];

export const useChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Bonjour ! Je suis l'assistant IA d'Ibrahim Karamoko, Tech Lead IA & CTO Opérationnel. Je peux vous éclairer sur son management d'équipe (5 ingénieurs encadrés), sa stack (RAG, Web Scraping, Antigravity, Claude Code, YOLO), ou ses certifications mondiales (CISSP, HEC Maroc). Que souhaitez-vous savoir ?",
      sender: "bot",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const getBotResponse = (userInput: string): string => {
    const normalizedInput = userInput
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    for (const item of knowledgeBase) {
      if (
        item.keywords.some((kw) =>
          normalizedInput.includes(
            kw
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          )
        )
      ) {
        return item.response;
      }
    }

    return "C'est une excellente question. Pour toute mission stratégique ou pour échanger directement avec Ibrahim Karamoko, vous pouvez le joindre via WhatsApp au +225 07 16 31 37 08 ou par email à ibrahim92karamoko@gmail.com.";
  };

  const sendMessage = (text: string) => {
    const userMsg: Message = { id: Date.now().toString(), text, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponseText = getBotResponse(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  const resetChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        text: "Conversation réinitialisée. Posez-moi vos questions sur le parcours, le management d'équipe ou la stack technique d'Ibrahim Karamoko !",
        sender: "bot",
      },
    ]);
  };

  return { messages, sendMessage, isTyping, resetChat };
};