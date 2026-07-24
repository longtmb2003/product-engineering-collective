import type { ProcessContent } from "@/content/types";

/*
 * How we work.
 *
 * The real shape of an engagement, not a generic agency funnel. Honest about
 * the parts most teams skip past: that we start by understanding the problem,
 * and that we stay on after launch. docs/11-brand-narrative.md — "we don't
 * disappear after deployment" — is what the last step makes concrete.
 */
export const process: ProcessContent = {
  eyebrow: "How we work",

  title: "One team, the whole way through.",

  intro:
    "The same people stay with a project from the first conversation to long after it ships. No handoffs between a sales team and a build team, because there is only one team.",

  steps: [
    {
      index: "01",
      name: "Understand",
      description:
        "We start with the problem, not the feature list. What are you actually trying to build, and why — before a line of code is written.",
    },
    {
      index: "02",
      name: "Plan",
      description:
        "Scope, architecture and a realistic timeline. You see the shape of the work and what it costs before we begin.",
    },
    {
      index: "03",
      name: "Build",
      description:
        "Short cycles with something working at the end of each. You see progress continuously, not a black box that opens at the deadline.",
    },
    {
      index: "04",
      name: "Test",
      description:
        "Verification that the software does what the business needs — automated where it repeats, checked by hand where judgement matters.",
    },
    {
      index: "05",
      name: "Ship",
      description:
        "Deployment, monitoring and the infrastructure to keep it running, built in from the start rather than bolted on at the end.",
    },
    {
      index: "06",
      name: "Maintain",
      description:
        "We stay on afterwards — updates, fixes and someone who already knows the system when something needs to change.",
    },
  ],
};
