import styles from "./PlaceholderBlock.module.css";

/*
 * docs/00-project-context.md forbids faking anything, and a convincing-looking
 * placeholder is exactly the artifact that survives into production
 * unnoticed. This one states what is missing.
 *
 * Dimensions match the final asset, so substitution causes zero layout shift.
 */
export function PlaceholderBlock({
  label,
  ratio = "16 / 9",
}: {
  label: string;
  ratio?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      style={{ aspectRatio: ratio }}
      className={styles.block}
    >
      <span className={styles.label}>{label} — not yet produced</span>
    </div>
  );
}
