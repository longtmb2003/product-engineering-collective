import type { FooterContent } from "@/content/types";

export const footer: FooterContent = {
  tagline:
    "An independent collective building digital products end to end.",

  columns: [
    {
      title: "Explore",
      links: [
        { label: "What we do", href: "#what-we-do" },
        { label: "Work", href: "#work" },
        { label: "Team", href: "#team" },
        { label: "Process", href: "#process" },
      ],
    },
    {
      title: "Products",
      links: [
        {
          label: "Our Period",
          href: "https://apps.apple.com/us/app/our-period-cycle-tracker/id6763719419",
        },
        { label: "GoCaro", href: "https://go-caro-frontend.vercel.app" },
      ],
    },
  ],

  note: "Version 0.1 — stakeholder preview.",
};
