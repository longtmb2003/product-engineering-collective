import type { HeroContent } from "@/content/types";
import { Action } from "@/components/ui/Action";
import { ExternalArrow } from "@/components/ui/ExternalArrow";
import styles from "./Hero.module.css";

/*
 * Server component. The LCP element is the headline text, not an image —
 * it paints immediately and does not depend on an asset loading.
 *
 * Order is identity -> what you get -> evidence. Philosophy is a sibling
 * component, not a child of this one (Architecture Specification §3).
 */
export function Hero({ content }: { content: HeroContent }) {
  return (
    <section
      id="top"
      aria-label="Introduction"
      tabIndex={-1}
      className={styles.hero}
    >
      {/* Gutter annotation at >=768; falls back into the column below that,
          where the measurement gutter does not exist. */}
      <p className={styles.eyebrow} aria-hidden="true">
        {content.eyebrow}
      </p>

      <div className={styles.inner}>
        <p className={styles.eyebrowInline}>{content.eyebrow}</p>

        <h1 className={styles.headline}>{content.headline}</h1>

        <p className={styles.subhead}>{content.subhead}</p>

        <div className={styles.actions}>
          <Action href={content.primaryCta.href}>
            {content.primaryCta.label}
          </Action>
          <Action href={content.secondaryCta.href} variant="secondary">
            {content.secondaryCta.label}
          </Action>
        </div>

        <ul className={styles.evidence}>
          {content.evidence.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.evidenceItem}
              >
                <span className={styles.evidenceName}>{item.name}</span>
                <span className={styles.evidenceMeta}>{item.meta}</span>
                <ExternalArrow />
                <span className="srOnly">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
