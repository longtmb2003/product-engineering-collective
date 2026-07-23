import type { WhatWeDoContent } from "@/content/types";

/*
 * DRAFT COPY — pending approval.
 *
 * Every capability maps to exactly one person. That mapping is the argument:
 * four disciplines, four names, nobody between the client and the work.
 * docs/11-brand-narrative.md promises no account managers and no layers —
 * this shows it structurally instead of claiming it.
 *
 * `focus` holds concrete nouns describing the work, deliberately not a
 * technology list.
 */
export const whatWeDo: WhatWeDoContent = {
  eyebrow: "What we do",

  title: "Four disciplines. One team.",

  intro:
    "Most products stall in the gaps between people — between build and deploy, between launch and everything after. Each part of the path has one person who owns it.",

  capabilities: [
    {
      index: "01",
      title: "Product engineering",
      member: "Long Tran",
      description:
        "Backend systems that hold up once real users and real data arrive.",
      focus: [
        "Backend services",
        "APIs",
        "Event pipelines",
        "Authentication",
        "Access control",
      ],
    },
    {
      index: "02",
      title: "Cloud & infrastructure",
      member: "Ngo Tuan Kiet",
      description:
        "The infrastructure a product runs on, and what happens when part of it fails.",
      focus: [
        "Deployment",
        "High availability",
        "Disaster recovery",
        "Monitoring",
        "Infrastructure as code",
      ],
    },
    {
      index: "03",
      title: "Quality engineering",
      member: "Chau Thanh Nhi",
      description:
        "Verification that the product does what the business needs, on every release.",
      focus: [
        "Automated testing",
        "API testing",
        "Integration testing",
        "Release validation",
      ],
    },
    {
      index: "04",
      title: "Product growth",
      member: "Tran Huynh Anh Thu",
      description:
        "Getting the product in front of the people it was built for.",
      focus: [
        "Positioning",
        "Launch",
        "Content",
        "Customer operations",
      ],
    },
  ],
};
