import { site } from "@/content/site";
import { hero } from "@/content/hero";
import { whatWeDo } from "@/content/capabilities";
import { featuredWork } from "@/content/work";
import { team } from "@/content/team";
import { contact } from "@/content/contact";

import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { MeetTheTeam } from "@/components/sections/MeetTheTeam";
import { Contact } from "@/components/sections/Contact";

/*
 * Composition root. Every section is a sibling; none owns another
 * (Architecture Specification §3). Content is read here and passed down as
 * props, so any section can be replaced without touching the others.
 *
 * Process is withheld until it has real content. A section that says
 * "coming next" costs more trust than its absence does. Its content file
 * and type are kept, so restoring it is one line here and one in site.nav.
 */
export default function HomePage() {
  return (
    <>
      <Hero content={hero} />

      <Philosophy lines={hero.philosophy} edition={site.edition} />

      <WhatWeDo content={whatWeDo} />

      <FeaturedWork content={featuredWork} />

      <MeetTheTeam content={team} />

      <Contact content={contact} />
    </>
  );
}
