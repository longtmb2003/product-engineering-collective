import type { FooterContent } from "@/content/types";

export const footer: FooterContent = {
  tagline:
    "An independent collective building digital products end to end.",

  columns: [
    {
      title: "Explore",
      links: [
        { label: "Services", href: "#what-we-do" },
        { label: "Work", href: "#work" },
        { label: "Team", href: "#team" },
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
  note: "",
};
