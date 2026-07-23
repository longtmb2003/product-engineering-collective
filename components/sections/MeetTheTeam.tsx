import Image from "next/image";
import type { TeamContent, TeamMember } from "@/content/types";
import { Section, SectionHeader } from "@/components/layout/Section";
import styles from "./MeetTheTeam.module.css";

/*
 * Server component. Person first, discipline second.
 *
 * Ordering follows the delivery path — build, run, verify, grow — so it
 * reads as a sequence rather than a ranking.
 */
export function MeetTheTeam({ content }: { content: TeamContent }) {
  return (
    <Section id="team" labelledBy="team-title">
      <SectionHeader
        id="team-title"
        marginalia={content.eyebrow}
        title={content.title}
        intro={content.intro}
      />

      <ul className={styles.list}>
        {content.members.map((member) => (
          <MemberEntry key={member.id} member={member} />
        ))}
      </ul>
    </Section>
  );
}

function MemberEntry({ member }: { member: TeamMember }) {
  const hasLinks = Boolean(member.product || member.links?.length);

  return (
    <li className={styles.entry}>
      <div className={styles.detail}>
        <h3 className={styles.name}>{member.name}</h3>
        <p className={styles.discipline}>{member.discipline}</p>
        <p className={styles.bio}>{member.bio}</p>

        {hasLinks ? (
          <div className={styles.links}>
            {member.product ? (
              <a
                href={member.product.href}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.product}
              >
                Built {member.product.label}
                <span className="srOnly">(opens in a new tab)</span>
              </a>
            ) : null}

            {member.links?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.link}
              >
                {link.label}
                <span className="srOnly">(opens in a new tab)</span>
              </a>
            ))}
          </div>
        ) : null}
      </div>

      {/* The image owns src, alt, sizes, loading and decoding. Nothing else.
          Ratio, size and fit belong to .portrait in the stylesheet.

          The focal point arrives as a custom property rather than a style on
          the image, so the stylesheet still owns object-position and simply
          reads a per-asset value. Architecture §6 permits inline style for
          CSS variables; this one originates from content rather than a token,
          because where a face sits is a property of the photograph. */}
      <div
        className={styles.portrait}
        style={
          member.portrait.focal
            ? ({ "--focal": member.portrait.focal } as React.CSSProperties)
            : undefined
        }
      >
        <Image
          src={member.portrait.src}
          alt={member.portrait.alt}
          fill
          sizes="(min-width: 1280px) 384px, (min-width: 768px) 320px, 256px"
          loading="lazy"
          decoding="async"
        />
      </div>
    </li>
  );
}
