import type { FeaturedWorkContent } from "@/content/types";

/*
 * Product facts come from what the owners built. Every link is real and
 * checkable.
 *
 * Each product opens with a cover image, then real screenshots — a draggable
 * strip the visitor can pull through.
 */
export const featuredWork: FeaturedWorkContent = {
  eyebrow: "Featured work",

  title: "New team. Real, shipped software.",

  intro:
    "We are a new collective, so instead of a client list we will show you our own products — built to the same standard we bring to client work. Both are live right now. Open them.",

  note: "Built by the team, on our own time. Not client work.",

  products: [
    {
      slug: "our-period",
      name: "Our Period",
      owner: "Ngo Tuan Kiet",
      type: "iOS application",
      summary:
        "A privacy-first cycle tracker. Cycle data stays on the device.",
      engineering:
        "Calculation and prediction run locally on the phone. Infrastructure is provisioned with Terraform and delivered through a GitOps workflow, on a self-managed cluster chosen to keep running costs down.",
      stack: [
        { name: "iOS", logo: "apple" },
        { name: "Flutter", logo: "flutter" },
        { name: "Go", logo: "go" },
        { name: "AWS", logo: "aws" },
        { name: "Terraform", logo: "terraform" },
      ],
      link: {
        label: "View on the App Store",
        href: "https://apps.apple.com/us/app/our-period-cycle-tracker/id6763719419",
      },
      depth: "Architecture write-up coming.",
      gallery: [
        {
          src: "/products/OP_thump.png",
          alt: "Our Period — a privacy-first iOS cycle tracker, shown across two phone screens.",
          ratio: "1684 / 2528",
        },
        {
          src: "/products/OP_light.jpg",
          alt: "The Our Period home screen in light mode, showing the current cycle phase and countdowns.",
          ratio: "1170 / 2532",
        },
        {
          src: "/products/OP_dark.jpg",
          alt: "The Our Period home screen in dark mode.",
          ratio: "1170 / 2532",
        },
      ],
    },
    {
      slug: "gocaro",
      name: "GoCaro",
      owner: "Long Tran",
      type: "Realtime multiplayer game",
      summary:
        "A board game you can play against someone else in the browser.",
      engineering:
        "Matchmaking and live game state over WebSocket, on an event-driven backend built with domain-driven design and clean architecture.",
      stack: [
        { name: "Go", logo: "go" },
        { name: "WebSocket" },
        { name: "Redis", logo: "redis" },
        { name: "PostgreSQL", logo: "postgresql" },
        { name: "Docker", logo: "docker" },
      ],
      link: {
        label: "Play the live demo",
        href: "https://go-caro-frontend.vercel.app",
      },
      depth: "Architecture write-up coming.",
      gallery: [
        {
          src: "/products/GoCaro_home.png",
          alt: "The GoCaro lobby, showing a player profile with rating, a matchmaking panel and the ranked leaderboard.",
          ratio: "1236 / 603",
        },
        {
          src: "/products/GoCaro.png",
          alt: "A GoCaro match in progress on the board.",
          ratio: "1345 / 761",
        },
      ],
    },
  ],
};
