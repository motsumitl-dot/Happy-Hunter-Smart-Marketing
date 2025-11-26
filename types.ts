
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
    tags: string[]; // For filtering
    description: string; // Used for card summary
    services: string[]; // List of services for display
    challenge: string;
    system: string;
    outcome: string;
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
