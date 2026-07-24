import type { AudienceContent } from "@/content/types";
import { Section, SectionHeader } from "@/components/layout/Section";
import styles from "./Audience.module.css";

/*
 * Server component. Answers "who is this for" — the one question the page
 * did not yet answer plainly. Broad by design: we work freelance, from a
 * single founder to another team that needs capacity.
 */
export function Audience({ content }: { content: AudienceContent }) {
  return (
    <Section id="who-we-help" labelledBy="who-we-help-title">
      <SectionHeader
        id="who-we-help-title"
        marginalia={content.eyebrow}
        title={content.title}
        intro={content.intro}
      />

      <ul className={styles.list}>
        {content.audiences.map((audience) => (
          <li key={audience.name} className={styles.entry}>
            <p className={styles.name}>{audience.name}</p>
            <p className={styles.description}>{audience.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
