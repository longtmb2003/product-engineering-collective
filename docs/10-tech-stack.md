# Tech Stack

> Amended by the Frontend Architecture Specification v1.0.
> Three entries in the original list are void. They are recorded below with
> the reason, so the decision is not silently reversed later.

## Current

Next 15

React 19

TypeScript

CSS Modules

npm

Vercel

## Void

**Tailwind v4** — removed by Architecture Specification §6.
CSS Modules replaces it. The token layer in `styles/tokens.css` is unaffected;
only the utility bridge is discarded. Utility classes cannot enforce the
"no arbitrary values" rule that the Design System depends on.

**shadcn** — removed by Architecture Specification §18/§19 (no UI libraries).
With cards, chips and badges prohibited by the Artifact Specification, it has
no remaining surface to cover. It was never installed.

**Framer Motion** — removed by Architecture Specification §18/§19
(no animation libraries). The Implementation Specification permits exactly one
animation, expressed in CSS. It was never installed.

## Notes

**pnpm → npm.** Corepack requires elevation in the current environment.
This is a lockfile-only difference and may be reversed at any time.
