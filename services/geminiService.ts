import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const streamTechnicalResponse = async function* (
  userMessage: string,
  context: string
) {
  const ai = getAIClient();

  try {
    const model = 'gemini-3-flash-preview';
    const systemInstruction = `
      You are an expert Technical Architect for a Moodle Plugin portfolio. 
      Your tone is precise, technical, yet accessible. 
      You are embedded in a portfolio site with a "Deep Space" aesthetic and an "Exploded View" architecture section.
      
      Context of the project:
      - Architecture: React Frontend, PHP Logic Layer, PostgreSQL Database.
      - Key Features: 40% optimized cron jobs, Real-time React updates, SQL connection pooling.
      - User Question Context: ${context}

      Answer the user's technical questions about the architecture concisely.
      If asked about visual style, mention "Brutalist aesthetics" and "Glassmorphism".
    `;

    const result = await ai.models.generateContentStream({
      model,
      contents: { parts: [{ text: userMessage }] },
      config: {
        systemInstruction,
      },
    });

    for await (const chunk of result) {
      const text = chunk.text;
      if (text) {
        yield text;
      }
    }
  } catch (error: any) {
    console.error("Gemini Error:", error);
    yield `Error: ${error.message || "Something went wrong with the AI service."}`;
  }
};