import { GoogleGenAI, Type } from "@google/genai";
// FIX: Corrected import path for types to avoid module resolution issue.
import type { AuditResult } from '../types/index';

export const generateGmbAudit = async (businessName: string, businessLocation: string): Promise<AuditResult> => {
    if (!process.env.API_KEY) {
        throw new Error("API Key is not configured.");
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const systemPrompt = `You are Happy Hunter, a holistic digital marketing expert. 
            Perform a "Short. Sharp. Client-friendly" GMB Audit based on the user's input. 
            For each of the 5 checks (Visibility, Trust, Conversion, Activity, Competitor Gap), provide a specific, critical finding based on search results. 
            Be direct. If data is missing (e.g., no review count), state that it was 'Not found' or 'N/A' and adjust the score down.`;
            
    const userQuery = `Perform a Basic Google Business Profile Audit for "${businessName}" in "${businessLocation}".
            
            1. **Visibility Check:** Check if main category is correct, name is clean (no keyword stuffing), and address/website link exists.
            2. **Trust Check:** Check review count/rating and recency of photos.
            3. **Conversion Check:** Check profile completeness (hours, products/services listed) and booking/messaging options.
            4. **Activity Check:** Check if they have posted in the last 30 days.
            5. **Competitor Gap:** Compare them briefly to 1-2 top competitors in the same area/niche.
            
            Provide a score out of 100.
            For "The Win", summarize exactly why fixing these gaps will increase their revenue.`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-09-2025",
            contents: userQuery,
            config: {
                tools: [{googleSearch: {}}],
                systemInstruction: systemPrompt,
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        business_name: { type: Type.STRING },
                        audit_score: { type: Type.NUMBER },
                        visibility_finding: { type: Type.STRING },
                        trust_finding: { type: Type.STRING },
                        conversion_finding: { type: Type.STRING },
                        activity_finding: { type: Type.STRING },
                        competitor_finding: { type: Type.STRING },
                        the_win: { type: Type.STRING }
                    },
                    required: ["business_name", "audit_score", "visibility_finding", "trust_finding", "conversion_finding", "activity_finding", "competitor_finding", "the_win"]
                }
            },
        });

        const jsonText = response.text;
        
        if (jsonText) {
            return JSON.parse(jsonText) as AuditResult;
        } else {
            throw new Error("No valid content received from API.");
        }
    } catch (error) {
        console.error("Error during GMB Audit:", error);
        throw new Error("We couldn't find enough public data for a deeper audit. This usually means your visibility is critically low. Please book a call.");
    }
};