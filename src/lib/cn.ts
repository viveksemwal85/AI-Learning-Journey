import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export { cn } from "./utils";

export function cva(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
