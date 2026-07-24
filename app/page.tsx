import { site } from "@/content/site";
import { hero } from "@/content/hero";
import { whatWeDo } from "@/content/capabilities";
import { audience } from "@/content/audience";
import { featuredWork } from "@/content/work";
import { team } from "@/content/team";
import { process } from "@/content/process";
import { contact } from "@/content/contact";

import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Audience } from "@/components/sections/Audience";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { MeetTheTeam } from "@/components/sections/MeetTheTeam";
import { Process } from "@/components/sections/Process";
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

      <Audience content={audience} />

      <FeaturedWork content={featuredWork} />

      <MeetTheTeam content={team} />

      <Process content={process} />

      <Contact content={contact} />
    </>
  );
}
