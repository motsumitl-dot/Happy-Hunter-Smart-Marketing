
export interface Service {
    filter: string;
    name: string;
    icon: string;
    description: string;
}

export interface CaseStudy {
    id: string;
    title: string;
    logo: string | null;
    tags: string[]; // For filtering
    description: string; // Used for card summary
    services: string[]; // List of services for display
    challenge: string;
    system: string;
    outcome: string;
    beforeImage?: string; // New: URL for 'Before' state (e.g., bad ranking map)
    afterImage?: string;  // New: URL for 'After' state (e.g., good ranking map)
}

export interface GMBAuditResponse {
    business_name: string;
    audit_score: number;
    visibility_finding: string;
    trust_finding: string;
    conversion_finding: string;
    activity_finding: string;
    competitor_finding: string;
    the_win: string;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string; // HTML content
    author: string;
    date: string;
    category: string;
    tags: string[];
    image: string;
}

export interface PricingPlan {
    id: string;
    name: string;
    price: string;
    period?: string; // e.g., "per month" or "one-time"
    description: string;
    features: string[];
    isPopular?: boolean;
    cta: string;
    ctaLink: string;
}
