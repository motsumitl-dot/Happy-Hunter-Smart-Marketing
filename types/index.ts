export interface Service {
  id: string;
  filterId: string;
  icon: string;
  name: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  logo: string;
  tags: string[];
  services: string[];
  challenge: string;
  system: string;
  outcome: string;
}

export interface AuditResult {
  business_name: string;
  audit_score: number;
  visibility_finding: string;
  trust_finding: string;
  conversion_finding: string;
  activity_finding: string;
  competitor_finding: string;
  the_win: string;
}