import type { ConceptCategory } from "@/types/content";
import { authenticationSecurity, apisCommunication, applicationFrameworks } from "./categories-part1";
import { databasesStorage, messagingEvents, notifications } from "./categories-part2";
import { observability, infrastructure } from "./categories-part3";
import {
  devopsCloud,
  webProtocols,
  dataProcessing,
  artificialIntelligence,
  webDesign,
} from "./categories-part4";

export const conceptsIntro =
  "A collection of commonly used technology, cloud, DevOps, system design, and AI concepts explained in simple language.";

export const conceptCategories: ConceptCategory[] = [
  authenticationSecurity,
  apisCommunication,
  applicationFrameworks,
  databasesStorage,
  messagingEvents,
  notifications,
  observability,
  infrastructure,
  devopsCloud,
  webProtocols,
  dataProcessing,
  artificialIntelligence,
  webDesign,
];
