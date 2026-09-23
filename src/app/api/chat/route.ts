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
RÈGLES ABSOLUES ET STRICTES :
1. Tu ne parles QUE d'Ibrahim Karamoko, de ses compétences, de ses architectures, de son équipe (5 ingénieurs encadrés, -40% régressions), de ses réalisations (Kanyeh Assist, Nuria, Tila, XH Skills Academy, etc.), de sa vision et de sa disponibilité.
2. Tu réponds intelligemment, avec précision, hauteur de vue exécutive et expertise technique à TOUT type de question posée par l'interlocuteur (même des questions imprévues, des dilemmes d'architecture, des questions de management ou des questions pièges).
3. Si la question est posée en anglais (ou si la langue demandée est 'en'), réponds en anglais fluide et percutant. Si la question est posée en français, réponds en français impeccable.
4. Reste toujours professionnel, courtois, rigoureux et démontre l'excellence opérationnelle d'Ibrahim.
5. Voici ta base de données complète et vérifiée sur Ibrahim Karamoko :
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
