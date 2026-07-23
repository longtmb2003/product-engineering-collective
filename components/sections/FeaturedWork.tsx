import Image from "next/image";
import type { FeaturedWorkContent, Product } from "@/content/types";
import { Section, SectionHeader } from "@/components/layout/Section";
import { ExternalArrow } from "@/components/ui/ExternalArrow";
import { cn } from "@/lib/utils";
import styles from "./FeaturedWork.module.css";

/* The crossing plate is wider than the standard plate at every breakpoint
   above 768, so the two need different `sizes`. Both derive from the page
   grid: crossing spans cross-start -> content-end, standard spans
   content-start -> content-end. */
const SIZES_CROSSING =
  "(min-width: 1280px) 1152px, (min-width: 768px) calc(100vw - 128px), (min-width: 480px) calc(100vw - 72px), calc(100vw - 56px)";

const SIZES_STANDARD =
  "(min-width: 1280px) 992px, (min-width: 768px) calc(100vw - 224px), (min-width: 480px) calc(100vw - 72px), calc(100vw - 56px)";

/*
 * Server component. This section carries the credibility for the whole page.
 *
 * The first product's plate crosses the datum; the second does not. With two
 * products, alternation reads as arbitrary — a single exception reads as
 * emphasis. Adding a third product is a change to content/work.ts and
 * nothing else.
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
          <ProductEntry
            key={product.slug}
            product={product}
            index={index}
            crossing={index === 0}
          />
        ))}
      </ul>
    </Section>
  );
}

function ProductEntry({
  product,
  index,
  crossing,
}: {
  product: Product;
  index: number;
  crossing: boolean;
}) {
  const plate = String(index + 1).padStart(2, "0");

  return (
    <li className={styles.entry}>
      <div className={cn(crossing ? styles.plateCrossing : styles.plate)}>
        <Image
          src={product.plate.src}
          alt={product.plate.alt}
          fill
          sizes={crossing ? SIZES_CROSSING : SIZES_STANDARD}
          loading="lazy"
          decoding="async"
        />
      </div>

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
          {product.stack.map((item) => (
            <li key={item} className={styles.stackItem}>
              {item}
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
