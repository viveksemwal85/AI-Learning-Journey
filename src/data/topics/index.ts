import { aiFundamentals, llms, promptEngineering } from "./foundations";
import { ragSystems, vectorDatabases, mcp } from "./core-ai";
import { agenticAI, multiAgentSystems } from "./agents";
import { backendDevelopment, apiIntegrations, n8nAutomation, fineTuning } from "./engineering";
import {
  mlops,
  docker,
  cloudDeployment,
  cicd,
  scalingLoadBalancing,
  monitoringLogging,
  aiSaasArchitecture,
} from "./devops";
import type { TopicContent } from "@/types/topic";

export const topics: TopicContent[] = [
  aiFundamentals,
  llms,
  promptEngineering,
  ragSystems,
  vectorDatabases,
  mcp,
  agenticAI,
  multiAgentSystems,
  n8nAutomation,
  backendDevelopment,
  apiIntegrations,
  fineTuning,
  mlops,
  docker,
  cloudDeployment,
  cicd,
  scalingLoadBalancing,
  monitoringLogging,
  aiSaasArchitecture,
];

export function getTopicBySlug(slug: string): TopicContent | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getAllTopicSlugs(): string[] {
  return topics.map((t) => t.slug);
}
