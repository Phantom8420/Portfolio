import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Content cards: background matches the page at rest, lifts on hover — mirrors anays.dev's
// bg-neutral-950/border-neutral-800 → hover:bg-neutral-900/border-neutral-700 pattern.
export const cardSurface =
  "rounded-2xl border-2 border-white bg-background transition-all duration-300 hover:-translate-y-1 hover:bg-card hover:shadow-lg";

// Pill/button-like surfaces (social links, badges): one shade lighter than the page at rest.
export const pillSurface =
  "rounded-lg border border-border-strong bg-card transition-all duration-200 hover:bg-border";

// Primary pill: filled accent, for the one CTA that should outrank the rest (e.g. Resume).
export const pillSurfacePrimary =
  "rounded-lg bg-accent text-white shadow-lg shadow-accent/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent-color-dark)]";
