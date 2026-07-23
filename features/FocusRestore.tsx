"use client";

import { useFocusRestore } from "@/hooks/useFocusRestore";

/*
 * Behavioural feature. Renders nothing.
 *
 * Architecture Specification §1 (amendment A-03): features/ owns ContactForm
 * and future behavioural features. Anchor focus restoration is document-wide
 * behaviour with no visual output, so it belongs here rather than in
 * layouts/, whose ownership is fixed at Page, Header and Footer.
 *
 * It exists as a component because the hook needs a client boundary and Page
 * is a Server Component. Mounting it here keeps that boundary at a leaf: no
 * section is dragged onto the client.
 */
export function FocusRestore() {
  useFocusRestore();
  return null;
}
