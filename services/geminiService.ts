
import { GoogleGenAI } from "@google/genai";
import { GMBAuditResponse } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateGMBAudit = async (businessName: string, location: string): Promise<{ audit: GMBAuditResponse, groundingMetadata: any }> => {
    const systemInstruction = `You are Happy Hunter, a holistic digital marketing expert. Perform a "Short. Sharp. Client-friendly" GMB Audit based on the user's input.
    You must return a raw JSON object (no markdown formatting).
    For each of the 5 checks (Visibility, Trust, Conversion, Activity, Competitor Gap), provide a specific, critical finding based on search results.
    Be direct. If data is missing (e.g., no review count), state that it was 'Not found' or 'N/A' and adjust the score down.`;

    const userQuery = `Perform a Basic Google Business Profile Audit for "${businessName}" in "${location}".
    1. Visibility Check: Check if main category is correct, name is clean (no keyword stuffing), and address/website link exists.
    2. Trust Check: Check review count/rating and recency of photos.
    3. Conversion Check: Check profile completeness (hours, products/services listed) and booking/messaging options.
    4. Activity Check: Check if they have posted in the last 30 days.
    5. Competitor Gap: Compare them briefly to 1-2 top competitors in the same area/niche.
    
    Provide a score out of 100.
    For "The Win", summarize exactly why fixing these gaps will increase their revenue.

    Output JSON format:
    {
        "business_name": "string",
        "audit_score": number,
        "visibility_finding": "string",
        "trust_finding": "string",
        "conversion_finding": "string",
        "activity_finding": "string",
        "competitor_finding": "string",
        "the_win": "string"
    }`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: userQuery,
            config: {
                systemInstruction: systemInstruction,
                tools: [{ googleSearch: {} }]
                // Note: responseMimeType and responseSchema are not used with googleSearch as per guidelines.
            }
        });

        let jsonText = response.text || "{}";
        // Clean up markdown blocks if present
        jsonText = jsonText.replace(/```json/g, '').replace(/```/g, '').trim();

        const audit = JSON.parse(jsonText) as GMBAuditResponse;
        const groundingMetadata = response.candidates?.[0]?.groundingMetadata;

        return { audit, groundingMetadata };

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("We couldn't find enough public data for a deeper audit or an error occurred. Please try again or book a call.");
    }
};
