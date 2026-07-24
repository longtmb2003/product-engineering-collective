import type { FooterContent, SiteContent } from "@/content/types";
import styles from "./Footer.module.css";

/*
 * Outside .page: the datum must not extend into the footer. Its terminal
 * tick sits at this element's top edge.
 *
 * The footer is the page's last chance to convert: it opens with a prompt
 * and a direct action and a real email, states plainly what the team does,
 * then gives clean navigation and proof links. Nothing here is filler.
 */
export function Footer({
  site,
  content,
}: {
  site: SiteContent;
  content: FooterContent;
}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.lead}>
          <p className={styles.prompt}>{content.prompt}</p>
          <div className={styles.actions}>
            <a href={content.cta.href} className={styles.cta}>
              {content.cta.label}
            </a>
            <a href={`mailto:${site.email}`} className={styles.email}>
              {site.email}
            </a>
          </div>
        </div>

        <div className={styles.columns}>
          {content.columns.map((column) => (
            <div key={column.title}>
              <h2 className={styles.columnTitle}>{column.title}</h2>
              <ul className={styles.columnList}>
                {column.links.map((link) => {
                  const external = link.href.startsWith("http");
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        {...(external
                          ? { target: "_blank", rel: "noreferrer noopener" }
                          : {})}
                        className={styles.link}
                      >
                        {link.label}
                        {external ? (
                          <span className="srOnly"> (opens in a new tab)</span>
                        ) : null}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.baseline}>
        <a href="#top" className={styles.mark}>
          <img
            src="/logo.svg?v=10"
            alt={site.shortName}
            className={styles.logo}
          />
        </a>
        <p className={styles.tagline}>{content.tagline}</p>
        <p className={styles.copyright}>{content.note}</p>
      </div>
    </footer>
  );
}
