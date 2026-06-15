import type { TechConcept } from "@/types/content";

export function c(
  name: string,
  fullForm: string,
  explanation: string,
  example: string
): TechConcept {
  return { name, fullForm, explanation, example };
}

export const NA = "Not applicable — common industry term";
