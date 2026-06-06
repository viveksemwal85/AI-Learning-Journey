import type {
  TopicContent,
  ComponentDetail,
  WorkflowStep,
  InterviewQuestion,
  QuizQuestion,
  ArchitectureDeepDive,
} from "@/types/topic";

export function defaultArchitecture(): ArchitectureDeepDive {
  return {
    scalability: [
      "Design stateless services for horizontal scaling",
      "Use caching layers to reduce compute costs",
      "Implement async processing for long-running tasks",
    ],
    security: [
      "Validate and sanitize all user inputs",
      "Use API keys and OAuth for authentication",
      "Encrypt data at rest and in transit",
    ],
    costOptimization: [
      "Cache frequent queries and embeddings",
      "Use smaller models for simple tasks",
      "Batch API requests where possible",
    ],
    monitoring: [
      "Track latency, token usage, and error rates",
      "Set up alerts for anomalies",
      "Log prompts and responses for debugging",
    ],
  };
}

export function defaultProjectUsage(description: string, useCases: { feature: string; usage: string }[]) {
  return { description, useCases };
}

export function component(
  name: string,
  purpose: string,
  overrides?: Partial<ComponentDetail>
): ComponentDetail {
  return {
    name,
    purpose,
    inputs: overrides?.inputs ?? ["Configuration", "Input data"],
    outputs: overrides?.outputs ?? ["Processed result"],
    benefits: overrides?.benefits ?? ["Modular and reusable", "Clear separation of concerns"],
    challenges: overrides?.challenges ?? ["Requires proper configuration", "Edge cases need handling"],
    bestPractices: overrides?.bestPractices ?? ["Start simple", "Monitor performance", "Document behavior"],
  };
}

export function quiz(
  id: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string,
  type: QuizQuestion["type"] = "multiple-choice"
): QuizQuestion {
  return { id, question, options, correctIndex, explanation, type };
}

export function interview(
  question: string,
  answer: string,
  difficulty: "basic" | "intermediate" | "advanced"
): InterviewQuestion {
  return { question, answer, difficulty };
}

export function workflow(steps: { title: string; description: string; details?: string }[]): WorkflowStep[] {
  return steps;
}
