import { useState } from 'react';

export type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
};

// LA BASE DE CONNAISSANCES (Le "Cerveau" de l'IA)
const knowledgeBase = [
  {
    keywords: ["parle moi", "qui est", "présente", "résumé", "topo", "profil", "pitch"],
    response: "Ibrahim est bien plus qu'un développeur, c'est un véritable partenaire stratégique avec 10 ans d'expérience.\n\n1. L'Expertise : Actuellement Consultant e-Santé auprès du Ministère de la Santé (CIV) et Ingénieur IA/Fullstack.\n2. Le Gestionnaire : Il pilote des écosystèmes complexes de A à Z (hôpitaux, plateformes gouvernementales).\n3. L'Ingénieur : Il maîtrise les architectures robustes (Next.js, Spring Boot) et l'IA (Computer Vision, NLP)."
  },
  {
    keywords: ["expérience", "parcours", "chef de projet", "management", "gestion", "ancienneté", "consultant"],
    response: "Il cumule plus de 10 ans d'expérience. Actuellement Consultant e-Santé pour le Ministère de la Santé de Côte d'Ivoire, il a également piloté la transformation digitale de la clinique H2A et occupe un rôle central dans des projets institutionnels majeurs (Programme National de Santé Mentale, Campagne Avril Bleu)."
  },
  {
    keywords: ["diplome", "etude", "formation", "hec", "stanford", "pigier", "scolarité"],
    response: "Ibrahim a un parcours académique d'excellence :\n• Masters Executive en IA, CyberSécurité & Data Science (HEC Maroc)\n• Certificats DeepLearning.AI (Stanford Univ.)\n• Licence Pro Génie Logiciel (PIGIER CIV)."
  },
  {
    keywords: ["certif", "cissp", "comptia", "google", "imperial", "certification", "sécurité"],
    response: "Il est certifié au niveau international sur des domaines critiques :\n• Cybersécurité : CISSP et CompTIA Security+\n• Santé Numérique : Digital Health Specialization (Imperial College London)\n• Data : Data Analytics & Data Security Pro (Google)."
  },
  {
    keywords: ["tech", "stack", "langage", "code", "maîtrise", "développement", "competence", "outils"],
    response: "C'est un véritable couteau suisse technologique :\n• IA & Data : Machine Learning, Computer Vision, NLP, Python (FastAPI)\n• Fullstack : Next.js, React, Java (Spring Boot), Node.js\n• Mobile : Flutter, Dart\n• DevOps & Cloud : AWS, Docker\n• CyberSécurité : IAM, Audit."
  },
  {
    keywords: ["ia", "intelligence", "deep learning", "nlp", "vision", "artificielle"],
    response: "En Intelligence Artificielle, Ibrahim est un expert en Computer Vision et Traitement du Langage Naturel (NLP). Il a notamment conçu 'Kanyeh Assist', une IA de télépathologie (précision 80%) pour détecter le cancer en temps réel, et 'CI Connect' pour l'accès vocal aux lois."
  },
  {
    keywords: ["projet", "réalisations", "portfolio", "créé", "app", "nuria", "tila", "epneumo"],
    response: "Parmi ses plus de 15 réalisations majeures :\n• Nuria & Tila : Plateformes e-Santé institutionnelles (Ministère de la Santé).\n• Kanyeh Assist : Télépathologie IA pour le cancer.\n• E-PNEUMO : Digitalisation des hôpitaux publics avec la Fondation MTN.\n• Yamoh : Application de covoiturage innovante.\n• AVLYTECH : Startup GovTech en France."
  },
  {
    keywords: ["contact", "mail", "téléphone", "joindre", "embaucher", "whatsapp", "email"],
    response: "Vous pouvez le contacter directement pour discuter de votre vision :\n📧 Email : Ibrahim92karamoko@gmail.com\n📱 WhatsApp / Tél : +225 01 01 59 41 53\nVous pouvez aussi utiliser le formulaire dans la section Contact du site !"
  },
  {
    keywords: ["bonjour", "salut", "coucou", "hello"],
    response: "Bonjour ! Comment puis-je vous aider ? Demandez-moi ses projets (Nuria, IA...), ses diplômes, ses certifications (CISSP...) ou ses compétences techniques."
  }
];

export const useChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      text: "Bonjour ! Je suis l'assistant IA d'Ibrahim. Je peux vous résumer son profil, détailler ses certifications mondiales (CISSP, Google...), ses projets en e-Santé ou sa stack IA. Que souhaitez-vous savoir ?", 
      sender: 'bot' 
    }
  ]);
  
  // État pour gérer l'animation "L'IA écrit..."
  const [isTyping, setIsTyping] = useState(false);

  // ALGORITHME D'ANALYSE (Compréhension de la requête)
  const getBotResponse = (userInput: string): string => {
    // Normalisation : met en minuscules et enlève les accents pour faciliter la recherche
    const normalizedInput = userInput.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    for (const item of knowledgeBase) {
      if (item.keywords.some(kw => normalizedInput.includes(kw.normalize("NFD").replace(/[\u0300-\u036f]/g, "")))) {
        return item.response;
      }
    }

    return "C'est une question très spécifique. Je n'ai pas cette information exacte dans ma base. Je vous invite à cliquer sur le bouton 'Discutons' ou à le contacter via WhatsApp au +225 01 01 59 41 53 pour en parler directement avec lui !";
  };

  const sendMessage = (text: string) => {
    // 1. Affiche le message de l'utilisateur
    const userMsg: Message = { id: Date.now().toString(), text, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);

    // 2. Déclenche l'état "en train d'écrire"
    setIsTyping(true);

    // 3. Simule le temps de réflexion d'une IA (1.5 secondes)
    setTimeout(() => {
      const botResponseText = getBotResponse(text);
      const botMsg: Message = { id: (Date.now() + 1).toString(), text: botResponseText, sender: 'bot' };
      
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false); // Arrête l'animation
    }, 1500); 
  };

  return { messages, sendMessage, isTyping };
};