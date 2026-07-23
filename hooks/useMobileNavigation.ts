"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/*
 * Owns the mobile navigation panel's open state and its keyboard contract.
 *
 * Extracted from layouts/Header.tsx unchanged. Architecture Specification §9:
 * hooks exist for behaviour, never for styling — this returns state and
 * handlers, and no class names or style values.
 *
 * The Escape handler is bound only while the panel is open, so the page has
 * no idle keyboard listener.
 */
export function useMobileNavigation() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setOpen((value) => !value);
  }, []);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      /* Focus returns to the control that opened the panel. Without this the
         keyboard user is left at the document root. */
      triggerRef.current?.focus();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return { open, toggle, close, triggerRef };
}
