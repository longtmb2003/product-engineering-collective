/*
 * Content types
 *
 * One shape per section. Sections receive these as props and never import
 * from /content themselves, which is what lets a section be swapped out
 * without touching anything around it.
 *
 * Relocated from types/content.ts by Architecture Specification amendment 3.
 * These types describe content and nothing else, so they belong beside it.
 */

export type NavItem = {
  label: string;
  href: string;
};

/*
 * An image asset. Alt text is content, not markup — it is written with the
 * copy, reviewed with the copy, and translated with the copy. A component
 * may never author it.
 *
 * No dimensions are carried here. Every image renders with `fill` inside a
 * container whose aspect ratio is fixed in CSS, so intrinsic size cannot
 * affect layout and CLS is zero by construction.
 */
export type ImageAsset = {
  src: string;
  alt: string;
  /*
   * Optional CSS `object-position` value. Only meaningful where the source
   * ratio differs from the box and the image is therefore cropped.
   *
   * This is content, not design: where a face sits in a photograph is a
   * property of that photograph. It is authored per asset and travels with
   * it. Defaults to centre when absent.
   */
  focal?: string;
};

export type SiteContent = {
  /* PLACEHOLDER: the collective has no agreed name yet. Change it here
     and it updates the nav, footer, metadata and page title at once. */
  name: string;
  shortName: string;
  description: string;
  email: string;
  /* The edition numeral. Set once, oversized, in the gutter beside the
     philosophy — the page's single editorial interruption. */
  edition: string;
  nav: NavItem[];
};

export type HeroContent = {
  /* The name. Identity comes before philosophy. */
  eyebrow: string;
  headline: string;
  subhead: string;
  primaryCta: NavItem;
  secondaryCta: NavItem;
  /* The two shipped products, named and linked. Evidence, not teasers —
     docs/00-project-context.md forbids claims a visitor cannot check. */
  evidence: {
    name: string;
    meta: string;
    href: string;
  }[];
  /* 2-3 lines shown directly beneath the hero. Not a section: no heading,
     no anchor, no nav entry. */
  philosophy: string[];
};

export type Capability = {
  /* Two-digit index shown as a monospace marker. */
  index: string;
  title: string;
  description: string;
  /* What a client actually receives. Deliverables, not adjectives. */
  focus: string[];
  /* Technologies, with a brand mark where one exists. Logos are nominative
     use — they say which tools the team works with, nothing more. */
  stack: { name: string; logo?: string }[];
};

/*
 * Secondary services. Real work the team takes on, but not part of the four
 * main service groups — listed separately and at a quieter weight so the
 * core offering stays legible.
 */
export type SupportService = {
  name: string;
  description: string;
  /* Index into the support-service icon set. */
  icon: string;
};

export type WhatWeDoContent = {
  eyebrow: string;
  title: string;
  intro: string;
  capabilities: Capability[];
  additional: {
    title: string;
    services: SupportService[];
  };
};

export type Product = {
  slug: string;
  name: string;
  /* Who in the collective owns it. Products are ours, not client work. */
  owner: string;
  type: string;
  summary: string;
  /* The engineering choices, stated as facts. No sentence explaining why
     they matter — the gap between the scope and the rigour is the argument. */
  engineering: string;
  stack: string[];
  link: {
    label: string;
    href: string;
  };
  /* Points at the case study that will exist later. Teased, not shown. */
  depth: string;
  /* Artifact D-01. Rendered at 4:3 regardless of the source's own ratio. */
  plate: ImageAsset;
};

export type FeaturedWorkContent = {
  eyebrow: string;
  title: string;
  intro: string;
  note: string;
  products: Product[];
};

export type TeamMember = {
  id: string;
  /* Person first, discipline second — the collective is built around people
     rather than services. */
  name: string;
  discipline: string;
  bio: string;
  /* Optional. Two members have no public profiles; the card must not show
     an empty slot where their links would be. */
  links?: NavItem[];
  /* Optional. Only Kiet and Long own a shipped product. */
  product?: NavItem;
  /* Artifact D-02. Rendered at 1:1 regardless of the source's own ratio. */
  portrait: ImageAsset;
};

export type TeamContent = {
  eyebrow: string;
  title: string;
  intro: string;
  members: TeamMember[];
};

/*
 * Process and Contact are not yet designed. These shapes carry only the
 * placeholder copy currently rendered on the page, moved out of page.tsx
 * to satisfy §13 (components never define content). They will be replaced
 * wholesale when the sections are specified — no copy here is approved.
 */
export type StubContent = {
  eyebrow: string;
  title: string;
  intro: string;
  placeholderLabel: string;
};

export type ProcessContent = StubContent;

export type ContactContent = {
  eyebrow: string;
  title: string;
  intro: string;
  /* One named person rather than a form or a generic inbox. */
  person: {
    name: string;
    role: string;
    email: string;
    links: NavItem[];
    responseTime?: string;
  };
  /* Closing line. The last words on the page. */
  closing: string;
  /* Colophon, set in the gutter — an editorial sign-off, not a footer. */
  colophon: string;
};

export type FooterContent = {
  tagline: string;
  columns: {
    title: string;
    links: NavItem[];
  }[];
  note: string;
};
