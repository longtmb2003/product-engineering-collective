import type { TeamContent } from "@/content/types";

/*
 * DRAFT COPY — pending approval by each person named.
 *
 * Person first, discipline second. Disciplines match content/capabilities.ts
 * exactly, so the two sections read as one argument.
 *
 * Deliberately absent, and it must stay that way:
 *   - years of experience     (nobody here is being sold as senior)
 *   - employer names          (they are employers, not our clients)
 *   - certifications, degrees (capability, not credentials)
 *   - client or system names  (two members work under confidentiality)
 *
 * `links` and `product` are optional. Nhi and Thu have no public profiles
 * on file; the card must render without leaving a visible gap where their
 * links would sit. Ordering follows the delivery path — build, run, verify,
 * grow — so it reads as a sequence rather than a ranking.
 */
export const team: TeamContent = {
  eyebrow: "Meet the team",

  title: "Four people. This is everyone.",

  intro:
    "No bench, no account layer, no one between you and the people writing the code.",

  members: [
    {
      id: "long-tran",
      name: "Long Tran",
      discipline: "Product engineering",
      bio: "Builds backend services and the flow of data between them. Works mostly on systems where mistakes are expensive — event pipelines, authentication, and permission structures that have to hold as an organisation gets more complicated.",
      links: [
        { label: "GitHub", href: "https://longtmb2003.github.io" },
        { label: "LinkedIn", href: "https://linkedin.com/in/long-tmb" },
      ],
      product: { label: "GoCaro", href: "https://go-caro-frontend.vercel.app" },
      portrait: { src: "/team/TMBL.jpg", alt: "Long Tran", focal: "50% 50%" },
    },
    {
      id: "ngo-tuan-kiet",
      name: "Ngo Tuan Kiet",
      discipline: "Cloud & infrastructure",
      bio: "Runs the infrastructure products depend on. Works on high-availability systems, disaster recovery, and platforms carrying large volumes of live device traffic. Treats deployment and monitoring as part of the product rather than a step at the end.",
      links: [
        { label: "Website", href: "https://beyonddeployer.cc" },
        { label: "LinkedIn", href: "https://linkedin.com/in/kietngo255" },
      ],
      product: {
        label: "Our Period",
        href: "https://apps.apple.com/us/app/our-period-cycle-tracker/id6763719419",
      },
      portrait: { src: "/team/NTK.jpg", alt: "Ngo Tuan Kiet", focal: "50% 46%" },
    },
    {
      id: "chau-thanh-nhi",
      name: "Chau Thanh Nhi",
      discipline: "Quality engineering",
      bio: "Tests whether the product does what the business actually needs. Has validated business rules across SaaS, industrial order management and container logistics. Came to testing from a finance background, which is why she checks the rule as well as the code.",
      portrait: { src: "/team/CTN.jpg", alt: "Chau Thanh Nhi", focal: "50% 50%" },
    },
    {
      id: "tran-huynh-anh-thu",
      name: "Anh Thu",
      discipline: "Product growth",
      bio: "Handles positioning, content and the commercial side of a launch. Has taken a B2B technology product to market and runs the customer-facing operations around it. Usually the one asking who the product is for, and what happens the day after it ships.",
      portrait: { src: "/team/THAT.jpg", alt: "Anh Thu", focal: "50% 94%" },
    },
  ],
};
