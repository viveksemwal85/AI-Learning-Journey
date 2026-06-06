export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface TopicOverview {
  what: string;
  why: string;
  where: string;
}

export interface ComponentDetail {
  name: string;
  purpose: string;
  inputs: string[];
  outputs: string[];
  benefits: string[];
  challenges: string[];
  bestPractices: string[];
}

export interface WorkflowStep {
  title: string;
  description: string;
  details?: string;
}

export interface RealExample {
  question: string;
  steps: { label: string; content: string }[];
  response: string;
}

export interface CodeExample {
  title: string;
  language: string;
  code: string;
  description?: string;
}

export interface ArchitectureDeepDive {
  scalability: string[];
  security: string[];
  costOptimization: string[];
  monitoring: string[];
}

export interface InterviewQuestion {
  question: string;
  answer: string;
  difficulty: "basic" | "intermediate" | "advanced";
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  type: "multiple-choice" | "architecture" | "scenario";
}

export interface TopicContent {
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  category: string;
  estimatedTime: string;
  difficulty: Difficulty;
  tags: string[];
  overview: TopicOverview;
  analogy: string;
  mermaidDiagram: string;
  flowNodes?: { id: string; label: string; type?: string }[];
  flowEdges?: { source: string; target: string; label?: string }[];
  components: ComponentDetail[];
  workflow: WorkflowStep[];
  realExample: RealExample;
  codeExamples: CodeExample[];
  architectureDeepDive: ArchitectureDeepDive;
  interviewQuestions: InterviewQuestion[];
  quiz: QuizQuestion[];
  projectUsage: {
    description: string;
    useCases: { feature: string; usage: string }[];
  };
  keyConcepts?: { term: string; definition: string }[];
}

export interface NavItem {
  slug: string;
  title: string;
  icon: string;
  category?: string;
}
