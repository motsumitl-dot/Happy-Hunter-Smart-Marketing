
export interface Service {
    filter: string;
    name: string;
    icon: string;
    description: string;
}

export interface CaseStudy {
    id: string;
    title: string;
    logo: string;
    tags: string[];
    description: string;
    tagsDisplay: string[];
    modalContent: {
        challenge: string;
        system: string[];
        outcome: string;
    };
}

export interface GeminiResponse {
    sentiment: 'Positive' | 'Negative' | 'Neutral';
    response_draft: string;
}
