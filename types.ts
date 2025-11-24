export interface Service {
    filter: string;
    name: string;
    icon: string;
    problem: string;
    solution: string;
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

export interface AuditResponse {
    business_name: string;
    audit_score: number;
    visibility_finding: string;
    trust_finding: string;
    conversion_finding: string;
    activity_finding: string;
    competitor_finding: string;
    the_win: string;
    groundingMetadata?: {
        groundingChunks: Array<{
            web?: { uri: string; title: string };
        }>;
    };
}