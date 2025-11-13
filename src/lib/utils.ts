import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Building2, CheckCircle, Home, Sparkles } from "lucide-react";

/** cn: merge class names with tailwind-merge to avoid conflicts */
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export const ScrollTo = (id: string) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: id === "contact" || id === "hero" ? "start" : "center",
    });
  }
};
