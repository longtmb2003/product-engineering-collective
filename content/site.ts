import type { SiteContent } from "@/content/types";

export const site: SiteContent = {
  /* The collective's official name */
  name: "Quadra Collective",
  shortName: "QC",

  description:
    "An independent collective that builds digital products end to end. Four people covering product engineering, infrastructure, quality and growth.",

  /* PLACEHOLDER — no address decided yet. */
  email: "hello@example.com",

  edition: "01",

  nav: [
    { label: "What we do", href: "#what-we-do" },
    { label: "Work", href: "#work" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
};
