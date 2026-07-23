import type { FooterContent, SiteContent } from "@/content/types";
import styles from "./Footer.module.css";

/*
 * Outside .page: the datum must not extend into the footer. Its terminal
 * tick sits at this element's top edge.
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
        <div className={styles.identity}>
          <p className={styles.mark}>{site.shortName}</p>
          <p className={styles.tagline}>{content.tagline}</p>
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

        <div className={styles.legal}>
          <p>{site.name}</p>
          <p>{content.note}</p>
        </div>
      </div>
    </footer>
  );
}
