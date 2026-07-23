import type { SiteContent } from "@/content/types";
import { Header } from "@/layouts/Header";
import { FocusRestore } from "@/features/FocusRestore";
import { Reveal } from "@/features/Reveal";
import styles from "./Page.module.css";

/*
 * The datum host, and its sole owner.
 *
 * Architecture Specification §4: the datum belongs to Page. Not to Hero,
 * not to a layout wrapper, not to any section. There is exactly one
 * instance and this component renders it.
 *
 * Implementation Specification §1.1: Page contains header and main only.
 * The footer sits outside deliberately — the datum's extent is defined as
 * viewport top to footer top edge, and .page's height is what supplies it.
 */
export function Page({
  site,
  children,
}: {
  site: SiteContent;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.page}>
      <div className={styles.datum} aria-hidden="true" />

      <FocusRestore />
      <Reveal />

      <Header site={site} className={styles.header} />

      <main id="main" className={styles.main}>
        {children}
      </main>
    </div>
  );
}
