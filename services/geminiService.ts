
import { GoogleGenAI } from "@google/genai";
import { GMBAuditResponse } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateGMBAudit = async (businessName: string, location: string): Promise<{ audit: GMBAuditResponse, groundingMetadata: any }> => {
    const systemInstruction = `You are Happy Hunter, a holistic digital marketing expert. Perform a "Short. Sharp. Client-friendly" GMB Audit.
    You must return a raw JSON object.
    For each check, provide an "Observation" followed by a specific "Action" (Observation -> Action).
    Be direct.
    `;

    const userQuery = `Perform a Basic Google Business Profile Audit for "${businessName}" in "${location}".
    
    1. Visibility Check: Check if main category is correct, name is clean, address exists.
    2. Trust Check: Check review count/rating and photo recency.
    3. Conversion Check: Check profile completeness (hours, products) and booking options.
    4. Activity Check: Check posts in last 30 days.
    5. Competitor Gap: Compare to 1-2 top competitors.
    
    Provide a score out of 100.
    For "The Win", summarize exactly why fixing these gaps will increase revenue.

    Output JSON format:
    {
        "business_name": "string",
        "audit_score": number,
        "visibility_finding": "string (Observation -> Action)",
        "trust_finding": "string (Observation -> Action)",
        "conversion_finding": "string (Observation -> Action)",
        "activity_finding": "string (Observation -> Action)",
        "competitor_finding": "string (Observation -> Action)",
        "the_win": "string"
    }`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: userQuery,
            config: {
                systemInstruction: systemInstruction,
                tools: [{ googleSearch: {} }]
            }
        });

        let jsonText = response.text || "{}";
        jsonText = jsonText.replace(/```json/g, '').replace(/```/g, '').trim();

        const audit = JSON.parse(jsonText) as GMBAuditResponse;
        const groundingMetadata = response.candidates?.[0]?.groundingMetadata;

        return { audit, groundingMetadata };

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("We couldn't find enough public data for a deeper audit. Please try again or book a call.");
    }
};
