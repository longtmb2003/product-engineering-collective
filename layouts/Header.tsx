"use client";

import type { SiteContent } from "@/content/types";
import { useMobileNavigation } from "@/hooks/useMobileNavigation";
import { cn } from "@/lib/utils";
import styles from "./Header.module.css";

/*
 * Client component. Its only state is the mobile navigation panel, which
 * lives in useMobileNavigation — this component renders, the hook behaves.
 * Everything else on the page stays server-rendered.
 *
 * `className` carries the grid placement supplied by Page. The header does
 * not place itself.
 */
export function Header({
  site,
  className,
}: {
  site: SiteContent;
  className?: string;
}) {
  const { open, toggle, close, triggerRef } = useMobileNavigation();

  return (
    <header className={className}>
      <div className={styles.inner}>
        <a href="#top" className={styles.mark}>
          <img src="/logo.svg?v=10" alt={site.shortName} className={styles.logo} />
        </a>

        <nav aria-label="Primary" className={styles.desktopNav}>
          <ul className={styles.list}>
            {site.nav.map((item) => {
              const isContact = item.href === "#contact";
              return (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className={cn(styles.link, isContact && styles.ctaLink)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          ref={triggerRef}
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className={styles.trigger}
        >
          <span className="srOnly">{open ? "Close menu" : "Open menu"}</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className={styles.icon}
          >
            {open ? (
              <>
                <path d="M5 5l14 14" />
                <path d="M19 5L5 19" />
              </>
            ) : (
              <>
                <path d="M3 7h18" />
                <path d="M3 17h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Primary"
        className={cn(styles.panel, !open && styles.panelHidden)}
      >
        <ul className={styles.panelList}>
          {site.nav.map((item) => {
            const isContact = item.href === "#contact";
            return (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  onClick={close} 
                  className={cn(styles.panelLink, isContact && styles.ctaPanelLink)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
