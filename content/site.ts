import type { SiteContent } from "@/content/types";

export const site: SiteContent = {
  /* The collective's official name */
  name: "Vertex Lab",
  shortName: "Vertex Lab",

  description:
    "An independent collective that builds digital products end to end. Four people covering product engineering, infrastructure, quality and growth.",

  /* PLACEHOLDER — no address decided yet. */
  email: "tranhuynhathu@gmail.com",

  edition: "01",

  nav: [
    { label: "Services", href: "#what-we-do" },
    { label: "Work", href: "#work" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
};
