import type { WhatWeDoContent } from "@/content/types";

/*
 * DRAFT COPY — pending approval.
 *
 * Four service groups, delivered by one team. The people behind them are
 * introduced further down the page; naming them here made the offering read
 * as four freelancers rather than as a team you can hire.
 *
 * Written to be BOUGHT, not just understood. `focus` lists what a client
 * actually receives; `stack` shows what it is built with, because a buyer
 * evaluating an engineering team reads the stack.
 *
 * No borrowed metrics. Everything here describes capability the collective
 * can demonstrate — docs/00-project-context.md forbids numbers and clients
 * that belong to anyone else.
 */
export const whatWeDo: WhatWeDoContent = {
  eyebrow: "Services",

  title: "One team, the whole build.",

  intro:
    "Websites, mobile apps, business systems and the infrastructure underneath them. The same team carries a product from first conversation to production and keeps it running afterwards — take all of it, or the single piece you are missing.",

  capabilities: [
    {
      index: "01",
      title: "Product engineering",
      description:
        "The system underneath a product: the services, the data flowing between them, and the rules about who may see what. Built to hold up once real users and real data arrive.",
      focus: [
        "Websites and landing pages",
        "Web applications and dashboards",
        "Mobile apps (iOS and Android)",
        "Internal and business systems",
        "E-commerce platforms",
        "APIs and third-party integrations",
        "Authentication and access control",
        "Database design and migration",
      ],
      stack: [
        { name: "Java", logo: "java" },
        { name: "Spring Boot", logo: "spring" },
        { name: "Go", logo: "go" },
        { name: "PostgreSQL", logo: "postgresql" },
        { name: "Kafka", logo: "kafka" },
        { name: "Redis", logo: "redis" },
      ],
    },
    {
      index: "02",
      title: "Cloud & infrastructure",
      description:
        "Everything that decides whether the product is still running tomorrow. Deployment, monitoring and recovery are built in from the start rather than added after the first incident.",
      focus: [
        "Cloud setup and migration",
        "Server and infrastructure management",
        "CI/CD and automated deployment",
        "High availability and failover",
        "Monitoring, logging and alerting",
        "Backup and disaster recovery",
        "Security hardening",
      ],
      stack: [
        { name: "AWS", logo: "aws" },
        { name: "Kubernetes", logo: "kubernetes" },
        { name: "Docker", logo: "docker" },
        { name: "Terraform", logo: "terraform" },
        { name: "Argo CD", logo: "argocd" },
        { name: "Grafana", logo: "grafana" },
      ],
    },
    {
      index: "03",
      title: "Quality engineering",
      description:
        "Verification that the product does what the business needs — not only that the code runs. Automated where it repeats, manual where judgement is required.",
      focus: [
        "Automated test suites",
        "Web and mobile app testing",
        "API and integration testing",
        "Regression coverage",
        "Release and UAT validation",
        "Defect tracking and reporting",
      ],
      stack: [
        { name: "Playwright", logo: "playwright" },
        { name: "Cypress", logo: "cypress" },
        { name: "Postman", logo: "postman" },
        { name: "TypeScript", logo: "typescript" },
      ],
    },
    {
      index: "04",
      title: "Product growth",
      description:
        "Getting the product in front of the people it was built for, and keeping the commercial side moving after launch.",
      focus: [
        "Positioning and messaging",
        "Landing pages and campaign sites",
        "Product launch campaigns",
        "Facebook and Google Ads",
        "SEO and content production",
        "Customer and CRM operations",
      ],
      stack: [
        { name: "Google Ads", logo: "googleads" },
        { name: "Meta Ads", logo: "meta" },
        { name: "Analytics", logo: "googleanalytics" },
      ],
    },
  ],

  /*
   * Secondary services. All four are work the collective genuinely does —
   * nothing here is aspirational — but none is a discipline that structures
   * the team, so they are listed without owners and at a quieter weight.
   *
   * "Maintenance and support" is the most on-brand of the four:
   * docs/11-brand-narrative.md says plainly "we don't disappear after
   * deployment", and this is where that becomes something you can buy.
   */
  additional: {
    title: "Also available",
    services: [
      {
        name: "Interface design",
        icon: "design",
        description:
          "Product UI and the flows behind it, designed alongside the build rather than handed over to it.",
      },
      {
        name: "Maintenance & support",
        icon: "support",
        description:
          "Keeping a product running after launch — monitoring, updates, and someone to call when something breaks.",
      },
      {
        name: "Technical review",
        icon: "review",
        description:
          "An outside read on an existing system: architecture, security posture, and what will break first under load.",
      },
      {
        name: "Customer operations",
        icon: "customer",
        description:
          "Multi-channel support and order handling for teams selling directly to their customers.",
      },
    ],
  },
};
