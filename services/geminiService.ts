import { GoogleGenAI } from "@google/genai";
import { AuditResponse } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateGmbAudit = async (businessName: string, location: string): Promise<AuditResponse> => {
    
    const systemInstruction = `You are Happy Hunter, a holistic digital marketing expert. 
            Perform a "Short. Sharp. Client-friendly" GMB Audit based on the user's input. 
            You MUST return a JSON object. 
            For each of the 5 checks (Visibility, Trust, Conversion, Activity, Competitor Gap), provide a specific, critical finding based on search results. 
            Be direct. If data is missing (e.g., no review count), state that it was 'Not found' or 'N/A' and adjust the score down.`;
    
    const userQuery = `Perform a Basic Google Business Profile Audit for "${businessName}" in "${location}".
            
            1. **Visibility Check:** Check if main category is correct, name is clean (no keyword stuffing), and address/website link exists.
            2. **Trust Check:** Check review count/rating and recency of photos.
            3. **Conversion Check:** Check profile completeness (hours, products/services listed) and booking/messaging options.
            4. **Activity Check:** Check if they have posted in the last 30 days.
            5. **Competitor Gap:** Compare them briefly to 1-2 top competitors in the same area/niche.
            
            Provide a score out of 100.
            For "The Win", summarize exactly why fixing these gaps will increase their revenue.
            
            Return the result as a raw JSON object with keys: business_name, audit_score, visibility_finding, trust_finding, conversion_finding, activity_finding, competitor_finding, the_win.`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [{ parts: [{ text: userQuery }] }],
            config: {
                systemInstruction: systemInstruction,
                tools: [{ googleSearch: {} }]
            }
        });
        
        const jsonText = response.text?.trim() || "{}";
        
        // Sanitize JSON if it comes wrapped in markdown
        const cleanedJson = jsonText.replace(/```json/g, '').replace(/```/g, '');
        
        const parsedResponse: AuditResponse = JSON.parse(cleanedJson);
        
        // Attach grounding metadata if available
        if (response.candidates?.[0]?.groundingMetadata) {
            parsedResponse.groundingMetadata = response.candidates[0].groundingMetadata;
        }

        return parsedResponse;

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("We couldn't find enough public data for a deeper audit. This usually means your visibility is critically low. Please book a call.");
    }
};