import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** cn: merge class names with tailwind-merge to avoid conflicts */
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
