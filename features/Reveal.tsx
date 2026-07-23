"use client";

import { useReveal } from "@/hooks/useReveal";

/*
 * Behavioural feature. Renders nothing.
 *
 * Mounted once in Page so a single observer serves every [data-reveal]
 * element on the document, keeping the client boundary at one leaf.
 */
export function Reveal() {
  useReveal();
  return null;
}
