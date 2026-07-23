import type { ContactContent } from "@/content/types";
import { Section, SectionHeader } from "@/components/layout/Section";
import { ExternalArrow } from "@/components/ui/ExternalArrow";
import styles from "./Contact.module.css";

/*
 * Server component. Structurally identical to every other section: Section
 * shell, SectionHeader, then one block in the content column.
 *
 * A named person, not a form. The page has spent eight screens arguing that
 * nobody sits between a client and the people building the work; a generic
 * inbox here would undo it.
 */
export function Contact({ content }: { content: ContactContent }) {
  const { person } = content;

  return (
    <Section id="contact" labelledBy="contact-title">
      <SectionHeader
        id="contact-title"
        marginalia={content.eyebrow}
        title={content.title}
        intro={content.intro}
      />

      <div className={styles.details}>
        <p className={styles.name}>{person.name}</p>
        <p className={styles.role}>{person.role}</p>

        <div className={styles.channels}>
          <a href={`mailto:${person.email}`} className={styles.email}>
            {person.email}
          </a>

          {person.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link}
            >
              {link.label}
              <ExternalArrow />
              <span className="srOnly">(opens in a new tab)</span>
            </a>
          ))}
        </div>

        {person.responseTime ? (
          <p className={styles.response}>{person.responseTime}</p>
        ) : null}

        <p className={styles.closing}>{content.closing}</p>
      </div>

    </Section>
  );
}
