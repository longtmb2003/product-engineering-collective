import { cn } from "@/lib/utils";
import styles from "./Philosophy.module.css";

/*
 * Sibling of Hero, not a child of it (Architecture Specification §3).
 *
 * Rendered as a <div>: it has no heading, and a <section> without an
 * accessible name pollutes the landmark tree.
 */
export function Philosophy({
  lines,
  edition,
}: {
  lines: string[];
  edition: string;
}) {
  return (
    <div className={styles.philosophy} data-reveal="">
      {/* The one interruption. An oversized edition numeral hanging into
          the gutter and clipped by the page edge — a page number at the
          scale a catalogue would set one, exactly once. */}
      <p className={styles.edition} aria-hidden="true">
        {edition}
      </p>

      <div className={styles.inner}>
        {lines.map((line, index) => (
          <p
            key={line}
            className={cn(
              styles.line,
              index === lines.length - 1 && styles.closing,
            )}
            {...(index === lines.length - 1
              ? { "data-reveal-quote": "" }
              : {})}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
