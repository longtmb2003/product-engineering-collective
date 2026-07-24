"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { ImageAsset } from "@/content/types";
import styles from "./Gallery.module.css";

/*
 * Client component. The only interactive part of the work section.
 *
 * Scrolling is native — overflow with scroll-snap — so drag, trackpad and
 * keyboard all work without script. The arrows call scrollBy on that same
 * element, which means the buttons and the drag are one mechanism rather than
 * two that can disagree.
 *
 * State is only what the buttons need: whether either end has been reached.
 */
export function Gallery({
  images,
  label,
  eager = false,
}: {
  images: ImageAsset[];
  /** Names the strip for assistive technology. */
  label: string;
  /** Loads the first image eagerly — used for the first product only. */
  eager?: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    /* A pixel of tolerance: sub-pixel scroll offsets otherwise leave a
       button enabled at a end it has already reached. */
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    sync();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const scrollByOne = useCallback((direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    /* Advance by the width of the visible slide, so one press moves one
       image whatever its ratio. */
    const slide = el.querySelector<HTMLElement>("[data-slide]");
    const step = slide ? slide.offsetWidth + 16 : el.clientWidth;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    el.scrollBy({
      left: step * direction,
      behavior: reduced ? "auto" : "smooth",
    });
  }, []);

  const multiple = images.length > 1;

  return (
    <div className={styles.gallery}>
      <div
        ref={trackRef}
        className={styles.track}
        role="group"
        aria-roledescription="carousel"
        aria-label={label}
        tabIndex={0}
      >
        {images.map((image, i) => (
          <div
            key={image.src}
            data-slide=""
            className={styles.slide}
            style={{ "--slide-ratio": image.ratio ?? "4 / 3" } as CSSProperties}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 40vw, 80vw"
              loading={eager && i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}
      </div>

      {multiple ? (
        <div className={styles.controls}>
          <p className={styles.count}>{images.length} images</p>

          <div className={styles.buttons}>
            <button
              type="button"
              onClick={() => scrollByOne(-1)}
              disabled={atStart}
              aria-label={`Previous image, ${label}`}
              className={styles.button}
            >
              <Arrow direction="left" />
            </button>
            <button
              type="button"
              onClick={() => scrollByOne(1)}
              disabled={atEnd}
              aria-label={`Next image, ${label}`}
              className={styles.button}
            >
              <Arrow direction="right" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={styles.icon}
      style={
        direction === "left" ? { transform: "scaleX(-1)" } : undefined
      }
    >
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}
