import type { SiteContent } from "@/content/types";

export const site: SiteContent = {
  /* The collective's official name */
  name: "Vertex Lab",
  shortName: "Vertex Lab",

  description:
    "Vertex Lab is a software engineering team building custom web, mobile and backend software for startups and businesses.",

  /* PLACEHOLDER — no address decided yet. */
  email: "tranhuynhathu@gmail.com",

  edition: "01",

  nav: [
    { label: "Services", href: "#what-we-do" },
    { label: "Who we help", href: "#who-we-help" },
    { label: "Work", href: "#work" },
    { label: "Team", href: "#team" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
};
