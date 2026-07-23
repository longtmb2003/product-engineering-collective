"use client";

import { useEffect } from "react";

/*
 * Marks elements as revealed once they enter the viewport.
 *
 * One observer for the whole document, watching [data-reveal]. Sections stay
 * server components: they render the attribute, this adds `data-revealed`,
 * and CSS does the rest. No section is dragged across the client boundary.
 *
 * Authorised by the M8 brief, which explicitly requires IntersectionObserver.
 * Architecture Specification §19 otherwise prohibits observers, and §9 lists
 * three permitted hooks; this is the fourth. Both need amending.
 *
 * Elements are unobserved on first intersection — reveals happen once.
 */
export function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      "[data-reveal], [data-reveal-quote]",
    );
    if (targets.length === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      targets.forEach((el) => el.setAttribute("data-revealed", ""));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          observer.unobserve(entry.target);
        }
      },
      /* Fires once the element is 18% into the viewport. */
      { threshold: 0, rootMargin: "0px 0px -18% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
