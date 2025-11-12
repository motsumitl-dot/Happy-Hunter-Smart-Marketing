
import { GoogleGenAI, Type } from "@google/genai";
import { GeminiResponse } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateReviewResponse = async (businessName: string, reviewText: string): Promise<GeminiResponse> => {
    
    const systemInstruction = "You are Happy Hunter, an expert in Local Search & Visibility and Review Management. You must classify the sentiment of the review (Positive, Negative, or Neutral) and generate a professional, on-brand response draft from the perspective of the business owner. The response must acknowledge the specific points raised in the review and invite further action (e.g., inviting them back or asking for contact information for negative issues).";
    
    const userQuery = `Analyze the following Google Business Profile review for the business "${businessName}". Review Text: "${reviewText}"`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [{ parts: [{ text: userQuery }] }],
            config: {
                systemInstruction: systemInstruction,
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        sentiment: { type: Type.STRING, enum: ["Positive", "Negative", "Neutral"] },
                        response_draft: { type: Type.STRING }
                    },
                    required: ["sentiment", "response_draft"]
                }
            }
        });
        
        const jsonText = response.text.trim();
        if (!jsonText) {
            throw new Error("Empty response from API.");
        }

        const parsedResponse: GeminiResponse = JSON.parse(jsonText);
        return parsedResponse;

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to generate response from AI. Please check the console for details.");
    }
};
