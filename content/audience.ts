import type { AudienceContent } from "@/content/types";

/*
 * Who we help.
 *
 * We work freelance, so the range is deliberately broad — from an individual
 * with an idea to an agency that needs an extra engineering team. Every group
 * here is one we can genuinely serve; none is aspirational.
 */
export const audience: AudienceContent = {
  eyebrow: "Who we help",

  title: "From a first idea to an extra pair of hands.",

  intro:
    "We work as a technology partner, at whatever size the work needs. Take the whole build, or the one part you are missing.",

  audiences: [
    {
      name: "Founders and individuals",
      description:
        "You have an idea and need a team that can take it from a sketch to something real and shipped.",
    },
    {
      name: "Startups",
      description:
        "You need to move quickly without accumulating the kind of technical debt that stalls you six months later.",
    },
    {
      name: "Small and growing businesses",
      description:
        "You need custom software — a web app, an internal system, an integration — built properly and kept running.",
    },
    {
      name: "Agencies and other teams",
      description:
        "You need engineering capacity you can hand a well-defined piece of work to, and trust it comes back done.",
    },
  ],
};
