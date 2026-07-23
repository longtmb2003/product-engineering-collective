import styles from "./ServiceIcon.module.css";

/*
 * Service marks.
 *
 * Line-drawn at 1px — the same weight as the datum and the ticks — so they
 * belong to the page's drawing system rather than arriving as a decorative
 * icon set. Each describes its subject literally instead of illustrating it.
 *
 * Decorative in the accessibility sense: the title beside each one says the
 * same thing, so they are hidden from assistive technology.
 */
const PATHS: Record<string, React.ReactNode> = {
  /* --- Four main service groups --- */

  /* Product engineering — a system of parts wired together. */
  "01": (
    <>
      <rect x="2.5" y="2.5" width="7" height="7" />
      <rect x="14.5" y="14.5" width="7" height="7" />
      <rect x="14.5" y="2.5" width="7" height="7" />
      <path d="M9.5 6h5M6 9.5v8.5h8.5M18 9.5v5" />
    </>
  ),

  /* Cloud & infrastructure — planes stacked, the lowest carrying the rest. */
  "02": (
    <>
      <path d="M12 2.5 21 7l-9 4.5L3 7l9-4.5Z" />
      <path d="M3 12l9 4.5L21 12" />
      <path d="M3 17l9 4.5L21 17" />
    </>
  ),

  /* Quality engineering — a field checked, twice. */
  "03": (
    <>
      <path d="M2.5 8.5 6 12l5-5.5" />
      <path d="M2.5 16.5 6 20l5-5.5" />
      <path d="M14 7h7.5M14 15h7.5" />
    </>
  ),

  /* Product growth — a line that leaves the frame. */
  "04": (
    <>
      <path d="M2.5 21.5V4" />
      <path d="M2.5 21.5H21" />
      <path d="M6 17l4.5-5.5 3.5 3L21.5 5" />
      <path d="M16.5 5h5v5" />
    </>
  ),

  /* --- Secondary services --- */

  /* Interface design — a frame with its own contents. */
  design: (
    <>
      <rect x="2.5" y="3.5" width="19" height="17" />
      <path d="M2.5 8.5h19M8 8.5v12" />
    </>
  ),

  /* Maintenance & support — a cycle that keeps returning. */
  support: (
    <>
      <path d="M20.5 12a8.5 8.5 0 1 1-2.8-6.3" />
      <path d="M21 3.5v5h-5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),

  /* Technical review — an existing structure, inspected. */
  review: (
    <>
      <circle cx="10.5" cy="10.5" r="7" />
      <path d="M15.6 15.6 21.5 21.5" />
      <path d="M7.5 10.5h6M10.5 7.5v6" />
    </>
  ),

  /* Customer operations — people, and the channels between them. */
  customer: (
    <>
      <circle cx="8" cy="8" r="3.5" />
      <circle cx="17" cy="16" r="3" />
      <path d="M2.5 20.5c0-3.3 2.5-5.5 5.5-5.5" />
      <path d="M11.5 8.5H18a2 2 0 0 1 2 2v2.5" />
    </>
  ),
};

export function ServiceIcon({ index }: { index: string }) {
  const paths = PATHS[index];
  if (!paths) return null;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className={styles.icon}
    >
      {paths}
    </svg>
  );
}
