"use client";

import { useEffect } from "react";

/*
 * Moves keyboard focus to the section a same-page anchor points at.
 *
 * Implementation Specification §6: "On anchor activation the target section
 * receives programmatic focus. Sections carry tabindex='-1'. Scrolling
 * without moving focus strands keyboard users."
 *
 * The primary mechanism is the `tabindex="-1"` attribute on every section,
 * which most browsers honour without script. This hook is the guarantee
 * layer — fragment focus handling is inconsistent across engines, and a
 * keyboard user landing at the document root instead of the target is a
 * failure this page is not permitted to have.
 *
 * `preventScroll` is required. Scrolling is owned by CSS `scroll-behavior`;
 * letting focus scroll as well produces a double jump and defeats the
 * reduced-motion override.
 *
 * No observers. Two listeners, both passive in effect, both removed on
 * unmount.
 */
export function useFocusRestore() {
  useEffect(() => {
    function focusHashTarget() {
      const { hash } = window.location;
      if (hash.length < 2) return;

      let target: Element | null = null;
      try {
        target = document.querySelector(hash);
      } catch {
        /* A malformed fragment is not an error worth surfacing. */
        return;
      }

      if (!(target instanceof HTMLElement)) return;
      if (document.activeElement === target) return;

      target.focus({ preventScroll: true });
    }

    /* Covers back/forward navigation and every anchor that changes the hash. */
    window.addEventListener("hashchange", focusHashTarget);

    /* Re-clicking a link to the section already in the address bar does not
       fire hashchange, so the click is handled directly. Deferred to the next
       frame so the browser's own fragment handling runs first. */
    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (!anchor.hash || anchor.pathname !== window.location.pathname) return;

      requestAnimationFrame(focusHashTarget);
    }

    document.addEventListener("click", onClick);

    /* A deep link arrives with the fragment already resolved. */
    focusHashTarget();

    return () => {
      window.removeEventListener("hashchange", focusHashTarget);
      document.removeEventListener("click", onClick);
    };
  }, []);
}
