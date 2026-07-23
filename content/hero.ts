import type { HeroContent } from "@/content/types";

/*
 * DRAFT COPY — pending approval.
 *
 * Identity first: the headline says what the collective is before any
 * philosophy. The philosophy lines sit underneath, after the evidence.
 *
 * Nothing here claims seniority or years. Both engineers are early in their
 * careers, and docs/00-project-context.md rules out anything a visitor
 * cannot verify.
 */
export const hero: HeroContent = {
  eyebrow: "Vertex Lab",

  headline: "An independent collective that builds digital products end to end.",

  subhead:
    "Four people covering product engineering, infrastructure, quality and growth. You work with all of them.",

  primaryCta: { label: "See our work", href: "#work" },
  secondaryCta: { label: "Start a conversation", href: "#contact" },

  evidence: [
    {
      name: "Our Period",
      meta: "on the App Store",
      href: "https://apps.apple.com/us/app/our-period-cycle-tracker/id6763719419",
    },
    {
      name: "GoCaro",
      meta: "playable now",
      href: "https://go-caro-frontend.vercel.app",
    },
  ],

  philosophy: [
    "Software gets built across too many hands.",
    "Founders coordinate vendors, freelancers and contractors to ship one product, and ownership disappears in the gaps between them.",
    "We stay one team across the whole path.",
  ],
};
