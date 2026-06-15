import type { TechConcept, ConceptHowItWorks } from "@/types/content";

export function c(
  name: string,
  fullForm: string,
  explanation: string,
  example: string,
  howItWorks?: ConceptHowItWorks
): TechConcept {
  return { name, fullForm, explanation, example, howItWorks };
}

export const NA = "Not applicable — common industry term";
