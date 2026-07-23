import type { ContactContent } from "@/content/types";

/*
 * Anh Thu is the commercial contact. A named person rather than a form: the
 * rest of the page argues there is nobody between a client and the people
 * building the work, and a generic inbox here would undercut it.
 *
 * No GitHub — she is not an engineer, and an empty repository link would be
 * worse than none.
 */
export const contact: ContactContent = {
  eyebrow: "Contact",

  title: "One conversation starts everything.",

  intro:
    "She looks after new projects, partnerships and client communication. From the first message she brings in whoever the work actually needs, so you are talking to the people who will build it early rather than late.",

  person: {
    name: "Tran Huynh Anh Thu",
    role: "Product & Partnerships",

    email: "tranhuynhathu@gmail.com",

    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/anhthutrann/",
      },
    ],

    responseTime: "Usually within 24 hours",
  },

  closing:
    "Tell us what you are trying to build. If we are not the right people, we will tell you honestly.",

  colophon: "Edition 0.1",
};
