export interface NavItem {
  label: string;
  href: string;
}

export interface RoadmapPhase {
  phase: number;
  title: string;
  topics: string[];
  status: "completed" | "in-progress" | "upcoming";
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  status: "planned" | "in-progress" | "completed";
  tags: string[];
}

export interface InterviewCategory {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export interface ResourceCategory {
  title: string;
  description: string;
  items: { name: string; url?: string; note?: string }[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  author: {
    name: string;
    role: string;
    experience: string;
    focus: string;
    bio: string;
  };
  links: {
    github: string;
    portfolio: string;
  };
  footer: string;
}

export interface ConceptFlowStep {
  step: number;
  title: string;
  description: string;
}

export interface ConceptHowItWorks {
  summary: string;
  steps: ConceptFlowStep[];
}

export interface TechConcept {
  name: string;
  fullForm: string;
  explanation: string;
  example: string;
  howItWorks?: ConceptHowItWorks;
}

export interface ConceptCategory {
  title: string;
  concepts: TechConcept[];
}
