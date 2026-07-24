import type { ProcessContent } from "@/content/types";
import { Section, SectionHeader } from "@/components/layout/Section";
import styles from "./Process.module.css";

/*
 * Server component. Six ordered steps — the real shape of an engagement.
 * An <ol>, because the sequence is content: Understand comes before Ship.
 */
export function Process({ content }: { content: ProcessContent }) {
  return (
    <Section id="process" labelledBy="process-title">
      <SectionHeader
        id="process-title"
        marginalia={content.eyebrow}
        title={content.title}
        intro={content.intro}
      />

      <ol className={styles.list}>
        {content.steps.map((step) => (
          <li key={step.index} className={styles.entry}>
            <p className={styles.index}>{step.index}</p>

            <div className={styles.content}>
              <h3 className={styles.name}>{step.name}</h3>
              <p className={styles.description}>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
