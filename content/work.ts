import type { FeaturedWorkContent } from "@/content/types";

/*
 * DRAFT COPY — pending approval.
 *
 * Product facts come from docs/07-product-showcase.md and from what the
 * owners built. Every link is real and checkable.
 *
 * The `engineering` line states the choices as facts and stops there. The
 * gap between how small each product is and how carefully it was built is
 * the argument — writing a sentence to explain that would weaken it.
 */
export const featuredWork: FeaturedWorkContent = {
  eyebrow: "Featured work",

  title: "The standard does not change depending on who is paying.",

  intro:
    "These are our own products, built in our own time. Both are open to anyone — download one, play the other.",

  note: "Built by members of the collective. Not client projects.",

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
      stack: ["iOS", "Flutter", "Go", "AWS", "Terraform"],
      link: {
        label: "View on the App Store",
        href: "https://apps.apple.com/us/app/our-period-cycle-tracker/id6763719419",
      },
      depth: "Architecture write-up coming.",
      /* Real in-app state, no store or device chrome. A 1170x2532 iPhone
         capture — the light theme rather than the dark, because a black
         rectangle would punch a hole in the paper. */
      plate: {
        src: "/products/OP_light.jpg",
        alt: "The Our Period home screen, showing the current cycle phase, countdowns to the next period and fertile window, and partner connection status.",
      },
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
      stack: ["Go", "WebSocket", "Redis", "PostgreSQL", "Docker"],
      link: {
        label: "Play the live demo",
        href: "https://go-caro-frontend.vercel.app",
      },
      depth: "Architecture write-up coming.",
      /* The lobby rather than a match: a complete interface with real data —
         profile, rating, matchmaking and a live leaderboard — instead of a
         board obscured by a modal announcing a defeat. */
      plate: {
        src: "/products/GoCaro_home.png",
        alt: "The GoCaro lobby, showing a player profile with rating, a matchmaking panel and the ranked leaderboard.",
      },
    },
  ],
};
