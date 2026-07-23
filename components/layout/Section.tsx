import { cn } from "@/lib/utils";
import styles from "./Section.module.css";

/*
 * The one place section rhythm lives. Every section uses this, so page-wide
 * spacing is a single edit rather than a sweep through eight files.
 *
 * It owns the anchor id, the section landmark, the scroll target, and the
 * section tick. It re-exposes the page grid to its children via subgrid; it
 * never declares a track list.
 */
export function Section({
  id,
  labelledBy,
  className,
  children,
}: {
  id: string;
  /** Id of the heading that names this landmark. */
  labelledBy: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      /* Programmatically focusable only — not in tab order. Required so
         anchor activation can move focus here (Implementation Spec §6). */
      tabIndex={-1}
      /* Observed by features/Reveal.tsx. The section animates as one unit;
         paragraphs inside it are never staggered. */
      data-reveal=""
      className={cn(styles.section, className)}
    >
      {children}
    </section>
  );
}

/*
 * Eyebrow, heading and intro. The eyebrow renders as marginalia in the
 * measurement gutter, not as a label above the heading — the eyebrow
 * artifact is deleted (Artifact Specification G-01).
 */
export function SectionHeader({
  id,
  marginalia,
  title,
  intro,
}: {
  id: string;
  marginalia: string;
  title: string;
  intro?: string;
}) {
  return (
    <>
      <p className={styles.marginalia}>{marginalia}</p>

      <div className={styles.header}>
        <h2 id={id} className={styles.title}>
          {title}
        </h2>
        {intro ? <p className={styles.intro}>{intro}</p> : null}
      </div>
    </>
  );
}
