import { GoogleGenAI, ChatSession, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let chatSession: ChatSession | null = null;

const getAiClient = () => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY is not set");
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const initializeChat = async (): Promise<ChatSession> => {
  if (chatSession) return chatSession;

  const ai = getAiClient();
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
  return chatSession;
};

export const sendMessageToGemini = async (
  message: string,
  onChunk: (text: string) => void
): Promise<string> => {
  try {
    const session = await initializeChat();
    const resultStream = await session.sendMessageStream({ message });

    let fullText = '';
    for await (const chunk of resultStream) {
        const c = chunk as GenerateContentResponse;
        const text = c.text;
        if (text) {
            fullText += text;
            onChunk(fullText);
        }
    }
    return fullText;
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    throw error;
  }
};
