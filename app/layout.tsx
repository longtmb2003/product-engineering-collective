import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "@/styles/globals.css";

import { site } from "@/content/site";
import { footer } from "@/content/footer";
import { Page } from "@/layouts/Page";
import { Footer } from "@/layouts/Footer";
import styles from "./layout.module.css";

/*
 * Vietnamese is required now — three team members' names carry diacritics in
 * their full form — and again at Phase 10. Only the two weights the system
 * uses are loaded; there is no bold.
 *
 * adjustFontFallback generates a metric-matched fallback face, which is what
 * holds CLS at zero during swap (Implementation Specification §8.3).
 */
const archivo = Archivo({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500"],
  variable: "--font-archivo",
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <a href="#main" className={styles.skip}>
          Skip to content
        </a>

        {/* Footer is outside Page: the datum must not extend into it. */}
        <Page site={site}>{children}</Page>
        <Footer site={site} content={footer} />
      </body>
    </html>
  );
}
