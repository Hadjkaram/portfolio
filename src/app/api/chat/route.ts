import { NextResponse } from "next/server";
import { generateSmartAnswer } from "@/lib/semanticChatEngine";
import { IBRAHIM_KNOWLEDGE_BASE } from "@/lib/knowledgeBase";

export async function POST(req: Request) {
  try {
    const { message, language } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    // Si une clé Gemini est disponible, on interroge Gemini avec le prompt système d'Ibrahim
    if (apiKey) {
      try {
        const knowledgeText = IBRAHIM_KNOWLEDGE_BASE.map((topic) => {
          return `### ${topic.title_fr} / ${topic.title_en}
FR:
${topic.content_fr}

EN:
${topic.content_en}
`;
        }).join("\n\n---\n\n");

        const systemInstruction = `Tu es l'agent IA personnel et officiel d'Ibrahim Karamoko (Tech Lead IA & Cybersécurité, CTO Opérationnel avec plus de 10 ans d'expérience).
RÈGLES D'EXCELLENCE :
1. TON & POSTURE : Sois chaleureux, courtois, hautement professionnel et convaincant, comme un conseiller exécutif de haut vol (style Claude/ChatGPT d'élite). Salue poliment l'interlocuteur quand il te salue.
2. DÉMONSTRATION DE VALEUR : Lorsque l'on te pose des questions sur les capacités d'Ibrahim (ex: "Pourquoi ferait-il un bon CTO ?", "Comment gère-t-il son équipe ?"), structure ta réponse de façon brillante, percutante et chiffrée :
   - Explique son profil rare : vision stratégique + maîtrise hands-on du code.
   - Mets en avant son management direct de 5 personnes (3 dévs + 2 stagiaires) et la baisse prouvée de 40% des bugs grâce aux revues de code systématiques (MRs) et à la culture Clean Code / DDD.
   - Détaille ses réussites concrètes en IA (YOLOv8/v11 avec Roche/SiPath/CHU, RAG pgvector, scraping résilient, développement assisté par agents avec Antigravity, Claude Code, Codex).
   - Souligne sa rigueur de cybersécurité (certifié CISSP®, CompTIA Security+, normes HDS, Master Exec. IA HEC Maroc).
3. EXCLUSIVITÉ DU SUJET : Tu ne parles QUE d'Ibrahim Karamoko, de ses compétences et de la manière dont son expertise résout les défis de l'interlocuteur. Même face à des questions inattendues ou pièges, raisonne avec son esprit d'ingénieur en chef et de CTO.
4. BILINGUISME : Réponds en français impeccable ou en anglais percutant selon la langue de la question.
5. ENGAGEMENT : Conclus naturellement avec une question d'ouverture ou une invitation courtoise à échanger avec Ibrahim sur un cas d'usage précis.

Voici la base de connaissances vérifiée d'Ibrahim :
${knowledgeText}
`;

        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
        const geminiRes = await fetch(geminiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text: message }]
              }
            ],
            systemInstruction: {
              parts: [{ text: systemInstruction }]
            },
            generationConfig: {
              temperature: 0.4,
              maxOutputTokens: 800
            }
          })
        });

        if (geminiRes.ok) {
          const data = await geminiRes.json();
          const candidate = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (candidate) {
            return NextResponse.json({
              response: candidate,
              source: "gemini_llm"
            });
          }
        }
      } catch (err) {
        console.error("Gemini API call error, falling back to semantic engine:", err);
      }
    }

    // Fallback transparent : Moteur sémantique RAG local haute précision
    const localResult = generateSmartAnswer(message, language === "en" ? "en" : "fr");

    return NextResponse.json({
      response: localResult.text,
      source: "semantic_rag",
      confidence: localResult.confidence
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
