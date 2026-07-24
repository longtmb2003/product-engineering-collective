import type { FooterContent } from "@/content/types";

export const footer: FooterContent = {
  prompt: "Have something to build?",
  cta: { label: "Start a conversation", href: "#contact" },

  tagline:
    "Vertex Lab — a software engineering team building custom web, mobile and backend software for startups and businesses.",

  columns: [
    {
      title: "Explore",
      links: [
        { label: "Services", href: "#what-we-do" },
        { label: "Who we help", href: "#who-we-help" },
        { label: "Work", href: "#work" },
        { label: "Team", href: "#team" },
        { label: "Process", href: "#process" },
        { label: "Contact", href: "#contact" },
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

  note: "© 2026 Vertex Lab",
};
