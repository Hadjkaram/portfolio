import { useState } from "react";

export type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
};

// BASE DE CONNAISSANCES COMPLÈTE & ENRICHIE
const knowledgeBase = [
  {
    keywords: ["qui est", "présente", "profil", "parle moi", "résumé", "bio", "qui es-tu"],
    response: "El Hadj Ibrahim V. Karamoko est Consultant e-Santé, Architecte IA et Tech Lead Fullstack avec plus de 10 ans d'expérience.\n\n• Impact National : Conseiller auprès du Ministère de la Santé (MSHP-CMU) et pilote de projets stratégiques avec l'UNICEF (Nuria) et la Fondation MTN (E-PNEUMO).\n• Expertise IA : Spécialiste en Computer Vision (Kanyeh Assist : 80% de précision dans le diagnostic du cancer) et NLP (CI Connect).\n• Académique & Certifications : Diplômé d'un Master Executive à HEC Maroc, certifié CISSP, CompTIA Security+, Imperial College London et Stanford."
  },
  {
    keywords: ["expérience", "parcours", "historique", "ancienneté", "carrière", "années"],
    response: "Ibrahim cumule plus de 10 ans d'expérience dans l'ingénierie logicielle et les infrastructures critiques :\n\n1. En cours : Consultant e-Santé pour le Ministère de la Santé (MSHP-CMU) et l'UNICEF (plateforme Nuria).\n2. Lead IA & CTO : Co-fondateur d'AVLYTECH (France) et Chef de Projet IT & Lead IA pour Adomed.care.\n3. Expériences antérieures : 4 ans en tant que Responsable Informatique (IVAGREL), et débuts comme Analyste Développeur (Ecobank / Sitel)."
  },
  {
    keywords: ["diplome", "etude", "formation", "hec", "stanford", "pigier", "scolarité", "master"],
    response: "Le parcours académique d'Ibrahim réunit excellence managériale et rigueur technique :\n\n• Master Executive IA, CyberSécurité & Big Data Science — HEC Maroc (2025)\n• Spécialisation Deep Learning — Stanford University (DeepLearning.AI sous la direction d'Andrew Ng)\n• Licence Professionnelle en Génie Logiciel — PIGIER Côte d'Ivoire."
  },
  {
    keywords: ["certif", "cissp", "comptia", "google", "imperial", "certification", "sécurité", "cyber"],
    response: "Ibrahim détient les certifications les plus exigeantes du marché international :\n\n• CyberSécurité : CISSP & CompTIA Security+\n• e-Santé : Digital Health Specialization (Imperial College London)\n• Data & Cloud : Data Analytics & Data Security Professional (Google)\n• Deep Tech : DeepLearning.AI Specialization."
  },
  {
    keywords: ["projet", "réalisations", "portfolio", "nuria", "kanyeh", "sipath", "tila", "epneumo", "adomed"],
    response: "Ibrahim a architecturé plus de 15 solutions majeures en production :\n\n• Nuria : Plateforme nationale pédiatrique pour le neurodéveloppement, validée UNICEF & Ministère de la Santé.\n• Kanyeh Assist : Télépathologie IA pour le cancer validée par la Société Ivoirienne des Pathologistes (SiPath) avec 80% de précision.\n• SiPath Web : Portail scientifique officiel des pathologistes de Côte d'Ivoire.\n• E-PNEUMO : ERP hospitalier pour l'interconnexion des CHU (Fondation MTN).\n• Tila : Plateforme nationale de santé mentale (MSHP & MTN).\n• MonetiquePlus & CI Identité : Systèmes bancaires et d'identité régalienne (IAM)."
  },
  {
    keywords: ["ia", "deep tech", "computer vision", "nlp", "intelligence artificielle", "machine learning"],
    response: "En Intelligence Artificielle, Ibrahim est orienté vers l'application clinique et industrielle directe :\n\n• Computer Vision : Kanyeh Assist (classification histopathologique microscopique temps réel du cancer avec 80% de précision clinique).\n• Traitement du Langage (NLP) : CI Connect (démocratisation vocale des lois en Côte d'Ivoire) et tuteurs adaptatifs RAG (Education For Africa).\n• Stack IA : Python, PyTorch, TensorFlow, FastAPI, OpenCV, TensorRT, Vector Databases."
  },
  {
    keywords: ["tech", "stack", "langage", "code", "compétences", "outils", "framework"],
    response: "Sa boîte à outils technologique couvre l'intégralité du cycle logiciel :\n\n• Frontend : Next.js 15/16, React 19, TypeScript, Flutter (Mobile)\n• Backend : Python (FastAPI, Flask), Java (Spring Boot), Node.js\n• Bases de données : PostgreSQL, MongoDB, Redis, InfluxDB\n• Cloud & DevOps : AWS, Docker, Kubernetes, CI/CD\n• Standards de santé : HL7 / FHIR, cryptographie PKI, Zero-Trust."
  },
  {
    keywords: ["contact", "mail", "téléphone", "joindre", "whatsapp", "email", "coordonnées", "numéro"],
    response: "Vous pouvez joindre Ibrahim directement :\n\n• WhatsApp / Téléphone : +225 07 16 31 37 08 / +225 01 01 59 41 53\n• Email : Ibrahim92karamoko@gmail.com\n• LinkedIn : linkedin.com/in/el-hadj-ibrahim-v-karamoko-76951613b\n• Localisation : Abidjan, Côte d'Ivoire & International."
  },
  {
    keywords: ["disponible", "disponibilité", "mission", "embauche", "recruter", "consulting", "tarif"],
    response: "Ibrahim est actuellement ouvert aux mandats de conseil stratégique, missions de direction technique (Fractional CTO), audits de sécurité et conception d'architectures IA/e-Santé. Vous pouvez convenir d'un échange via WhatsApp ou le formulaire de contact."
  },
  {
    keywords: ["bonjour", "salut", "coucou", "hello", "hi"],
    response: "Bonjour ! Je suis l'assistant IA d'Ibrahim Karamoko. Je peux vous éclairer sur son parcours auprès du Ministère de la Santé (e-Santé), ses modèles d'IA (Kanyeh Assist), ses certifications (CISSP, Google, Stanford) ou ses disponibilités. De quoi souhaitez-vous discuter ?"
  }
];

export const useChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Bonjour ! Je suis l'assistant IA d'El Hadj Ibrahim V. Karamoko. Je peux vous renseigner sur ses 10+ ans d'expérience, ses missions e-Santé avec le Ministère & l'UNICEF, sa stack IA ou ses coordonnées directes. Choisissez une suggestion ci-dessous ou posez votre question !",
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

    return "C'est une excellente question. Pour les cas d'usage très spécifiques ou pour étudier une collaboration technique, je vous invite à échanger directement avec Ibrahim via WhatsApp au +225 07 16 31 37 08 ou par email à Ibrahim92karamoko@gmail.com.";
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
    }, 800);
  };

  const resetChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        text: "Conversation réinitialisée. N'hésitez pas à me poser vos questions sur l'expertise d'Ibrahim Karamoko !",
        sender: "bot",
      },
    ]);
  };

  return { messages, sendMessage, isTyping, resetChat };
};