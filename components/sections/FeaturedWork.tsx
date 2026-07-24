import type { FeaturedWorkContent, Product } from "@/content/types";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Gallery } from "@/components/ui/Gallery";
import { ExternalArrow } from "@/components/ui/ExternalArrow";
import styles from "./FeaturedWork.module.css";

/*
 * Server component. This section carries the credibility for the whole page.
 *
 * Each product opens with a cover image and continues into real screenshots,
 * as a horizontal strip the visitor drags through. Native overflow scroll and
 * scroll-snap only — no carousel library, no JavaScript.
 *
 * Adding a product, or a screenshot, is a change to content/work.ts alone.
 */
export function FeaturedWork({ content }: { content: FeaturedWorkContent }) {
  return (
    <Section id="work" labelledBy="work-title">
      <SectionHeader
        id="work-title"
        marginalia={content.eyebrow}
        title={content.title}
        intro={content.intro}
      />

      <p className={styles.note}>{content.note}</p>

      <ul className={styles.list}>
        {content.products.map((product, index) => (
          <ProductEntry key={product.slug} product={product} index={index} />
        ))}
      </ul>
    </Section>
  );
}

function ProductEntry({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const plate = String(index + 1).padStart(2, "0");

  return (
    <li className={styles.entry}>
      <Gallery
        images={product.gallery}
        label={product.name}
        eager={index === 0}
      />

      <p className={styles.plateNumber} aria-hidden="true">
        Plate {plate}
      </p>

      <div className={styles.caption}>
        <p className={styles.meta}>
          <span>{product.type}</span>
          <span aria-hidden="true">·</span>
          <span>Built by {product.owner}</span>
        </p>

        <h3 className={styles.name}>{product.name}</h3>

        <p className={styles.summary}>{product.summary}</p>

        <p className={styles.engineering}>{product.engineering}</p>

        <ul className={styles.stack}>
          {product.stack.map((tool) => (
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

        <div className={styles.footerRow}>
          <a
            href={product.link.href}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.link}
          >
            {product.link.label}
            <ExternalArrow />
            <span className="srOnly">(opens in a new tab)</span>
          </a>

          <p className={styles.depth}>{product.depth}</p>
        </div>
      </div>
    </li>
  );
}
