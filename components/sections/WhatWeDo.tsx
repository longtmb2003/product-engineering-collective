import type { WhatWeDoContent } from "@/content/types";
import { Section, SectionHeader } from "@/components/layout/Section";
import styles from "./WhatWeDo.module.css";

/*
 * Server component. Four capabilities, each attributed to one person.
 *
 * The attribution is the point: it puts four names in front of the visitor
 * before the products, and demonstrates the "no layers" promise structurally
 * instead of asserting it.
 *
 * An ordered list, because the sequence is content rather than presentation.
 */
export function WhatWeDo({ content }: { content: WhatWeDoContent }) {
  return (
    <Section id="what-we-do" labelledBy="what-we-do-title">
      <SectionHeader
        id="what-we-do-title"
        marginalia={content.eyebrow}
        title={content.title}
        intro={content.intro}
      />

      <ol className={styles.list}>
        {content.capabilities.map((capability) => (
          <li key={capability.index} className={styles.entry}>
            <p className={styles.index}>{capability.index}</p>

            <div className={styles.content}>
              <h3 className={styles.title}>{capability.title}</h3>
              <p className={styles.member}>{capability.member}</p>
              <p className={styles.description}>{capability.description}</p>

              <ul className={styles.focus}>
                {capability.focus.map((item) => (
                  <li key={item} className={styles.focusItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
