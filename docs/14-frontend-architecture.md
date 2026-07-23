# The Datum — Frontend Architecture Specification

**v1.1 · Repository Architecture · Binding**

**Scope.** Defines the repository structure, component boundaries, rendering
model, state ownership, styling architecture, and engineering constraints for
the homepage.

This document does not define appearance. Appearance is governed by the
Design System, the Homepage Composition, the Artifact Specification, and the
Homepage Implementation Specification. This document defines only how the
implementation is organised.

**Amendment log at the end of this document.**

---

## 1. Repository

```
app/
components/
content/
docs/
features/
hooks/
layouts/
lib/
public/
styles/
```

No additional top-level directories may be introduced without amendment.

`docs/` holds the governing specifications. It is not application source, and
relocating it would break the documentation hierarchy.

`hooks/` and `features/` are created with their first occupant rather than as
empty directories.

## 2. Rendering model

Homepage is fully static. No runtime API. No CMS. No database. No server
rendering beyond static HTML generation.

Hydration is permitted only where explicitly specified. Everything else must
render as HTML.

## 3. Component hierarchy

```
<HomePage>
  Header
  Hero
  Philosophy
  Capabilities
  FeaturedWork
  Team
  Process
  Contact
  Footer
```

No section may own another section. Every section is a sibling.

## 4. Component ownership

Each artifact belongs to exactly one component. Never duplicate ownership.

- **Datum** — owned by `Page`. Not `Hero`, not a layout wrapper, not a section.
- **Tick** — owned by the element it marks. Never rendered separately.

## 5. State

Allowed state:

- mobile navigation open
- contact form submission
- focus restoration

Everything else is derived. No component-local UI state for styling.

## 6. Styling

CSS Modules. No Tailwind. No Styled Components. No Emotion.

No inline style except CSS variables whose values originate from tokens.

## 7. Tokens

Every colour, spacing value, font size, radius and duration originates from
`styles/tokens.css`. Literal values inside components are prohibited.

## 8. Component size

Soft limit 150 lines. Hard limit 250 lines. Larger components are decomposed.

## 9. Hooks

Custom hooks only for behaviour. Never for styling.

Allowed hooks:

- `useMobileNavigation`
- `useFocusRestore`
- `useContactForm`

No generic utility hooks.

## 10. Utilities

Pure functions only. No DOM access. No side effects.

Examples: `formatName()`, `formatMetadata()`, `buildStack()`.

## 11. Images

Image components own only `src`, `alt`, `sizes`, `loading`, `decoding`.
Layout belongs to CSS.

## 12. Accessibility

Every interactive component exposes keyboard support, focus behaviour, ARIA
and semantic HTML inside itself. Accessibility must never depend on a parent
component.

## 13. Data

Homepage content is immutable. Components consume content; components never
define content.

```
content/
  hero.ts
  capabilities.ts
  work.ts
  team.ts
  process.ts
  contact.ts
  site.ts
  footer.ts
  types.ts
```

`content/types.ts` holds the content contracts. They describe content and
nothing else, so they live beside it.

## 14. Composition

The page composes sections. Sections compose entries. Entries compose
artifacts. Artifacts never compose sections. Hierarchy always flows downward.

## 15. Imports

```
Page → Section → Entry → Primitive
```

No upward dependency. A primitive may never import a section.

## 16. CSS ownership

Every component owns exactly one stylesheet, colocated and named for it.
Never shared CSS Modules.

## 17. Testing

Each component has a render test and an accessibility test. Interactive
components additionally have a keyboard test and a focus test.

## 18. Performance

No component may import date libraries, animation libraries, UI libraries or
utility CSS frameworks without specification amendment.

## 19. Forbidden

Context Providers · Redux · MobX · Zustand · global event bus · animation
libraries · IntersectionObserver · ResizeObserver · MutationObserver — unless
another governing specification explicitly requires them.

## 20. Acceptance

The architecture passes only if:

1. Every artifact has exactly one owner.
2. No duplicated styling values exist.
3. No component exceeds size limits.
4. Every dependency points downward.
5. Homepage renders without JavaScript except the three permitted behaviours.
6. Repository structure matches this document exactly.

---

## Directory ownership

| Directory | Owns |
|---|---|
| `app/` | Route entry, document shell, metadata |
| `layouts/` | `Page`, `Header`, `Footer` |
| `features/` | `ContactForm`, and future behavioural features |
| `components/` | Sections, entries, primitives |
| `hooks/` | The three permitted behavioural hooks |
| `content/` | The nine content files, including contracts |
| `lib/` | Pure utilities |
| `styles/` | Tokens and global stylesheet |
| `docs/` | Governing specifications |
| `public/` | Static assets |

---

## Amendment log

**A-01 · §1 — `docs/` permitted.** Approved post-M1. `docs/` holds the
governing specifications, is not application source, and relocating it would
reduce clarity. Organisational only; no runtime effect. Closes conflict C-04.

**A-02 · §1 — `layouts/` ownership defined.** Approved post-M1. `layouts/`
owns `Page`, `Header` and `Footer`. Resolves undefined term U-02.

**A-03 · §1 — `features/` ownership defined.** Approved post-M1. `features/`
owns `ContactForm` and future behavioural features. Resolves undefined term
U-01.

**A-04 · §13 — content contracts relocated.** Approved post-M1.
`types/content.ts` → `content/types.ts`; the top-level `types/` directory is
removed.

**A-05 · §13 — content file set fixed at nine files.** Approved post-M1. The
original six-file list omitted `site.ts` and `footer.ts`, both of which are
required, and did not account for `types.ts`. Closes conflict C-05.

**A-06 · Doc 10 — styling system.** Approved post-M1. CSS Modules replaces
Tailwind. `shadcn` and Framer Motion are void under §18/§19. Recorded in
`docs/10-tech-stack.md`. Closes conflict C-01, C-02, C-03.
