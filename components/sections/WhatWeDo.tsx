import type { WhatWeDoContent } from "@/content/types";
import { Section, SectionHeader } from "@/components/layout/Section";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import styles from "./WhatWeDo.module.css";

/*
 * Server component. Four service groups delivered by one team. The people
 * are introduced further down the page — naming them here made the offering
 * read as four freelancers rather than as a team a client can hire.
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
              <div className={styles.heading}>
                <ServiceIcon index={capability.index} />
                <h3 className={styles.title}>{capability.title}</h3>
              </div>

              <p className={styles.description}>{capability.description}</p>

              {/* What a client receives. */}
              <ul className={styles.focus}>
                {capability.focus.map((item) => (
                  <li key={item} className={styles.focusItem}>
                    {item}
                  </li>
                ))}
              </ul>

              {/* What it is built with — the buyer's second question. */}
              <ul className={styles.stack}>
                {capability.stack.map((tool) => (
                  <li key={tool.name} className={styles.stackItem}>
                    {tool.logo ? (
                      <img
                        src={`/logos/${tool.logo}.svg`}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        decoding="async"
                        className={styles.stackLogo}
                      />
                    ) : null}
                    {tool.name}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      {/* Secondary services. No owners, quieter weight — deliberately not
          competing with the four disciplines above. */}
      <div className={styles.additional}>
        <h3 className={styles.additionalTitle}>{content.additional.title}</h3>

        <ul className={styles.services}>
          {content.additional.services.map((service) => (
            <li key={service.name} className={styles.service}>
              <ServiceIcon index={service.icon} />
              <p className={styles.serviceName}>{service.name}</p>
              <p className={styles.serviceDescription}>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
