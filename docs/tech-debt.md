# Technical Debt Register

> Known, accepted deviations from the governing specifications.
>
> An entry here is a deliberate decision with a scheduled resolution, not an
> oversight. Anything not listed here is a defect and should be reported.

---

## TD-002 · Supplied imagery does not conform; CSS is cropping it

**Status** Open · **Opened** M5 · **Resolution** Asset re-production, no code change

### Current state

All six production assets fail their artifact specification. To render them at
the specified ratios without distortion or letterboxing, `object-fit: cover`
is applied in `MeetTheTeam.module.css` and `FeaturedWork.module.css`.

This violates two rules simultaneously:

- **Artifact D-03** — *"Every image is cropped by the layout"* applies to
  composition, but *"crops are baked into the asset. The layout never
  re-crops."*
- **Implementation Specification §9, constraint 19** — *"Do not crop portraits
  in CSS."*

### Required state

Assets arrive at the specified ratio and framing. Both `object-fit` rules are
deleted; no other code changes.

### Per-asset status

| Asset | Required | Supplied | Failures |
|---|---|---|---|
| `team/CTN.jpg` | 1:1, ≥256px, studio | 175×177, PNG data in a `.jpg` file | Below minimum size; upscaled 2.2× at desktop; graduation photo; environmental; colour |
| `team/NTK.jpg` | 1:1, studio | 2048×2048 | Ratio only. Beach background; sunglasses; arms crossed (forbidden); waist-up; colour |
| `team/TMBL.jpg` | 1:1, studio | 2560×1710 | Ratio; full-body; outdoor; sunglasses; arms crossed; colour |
| `team/THAT.jpg` | 1:1, studio | 1152×1890 | Ratio; full-body; outdoor; posed; colour |
| `products/GoCaro.png` | 4:3, in-app | 1345×761 | Ratio only — content and chrome conform |
| `products/OurPeriod.png` | 4:3, in-app, ≥1152px | 768×282 | **Not the application** — App Store listing header; store chrome; ratio; resolution |

### Resolution

Re-produce to Artifact D-01, D-02, D-03 and D-04. When they land, delete the
two `object-fit` blocks and this entry. The component code, `sizes`, alt text
and containers require no change — the box dimensions are fixed in CSS and are
already correct.

### Acceptance

Zero `object-fit` declarations in any component module.

---

## TD-001 · Hero entrance animations violate the one-animation rule

**Status** Open · **Opened** M2 · **Resolution milestone** M4

### Current state

Five animations exist on the homepage:

1. `datum-draw` — the datum line, 900ms, correct and specified
2. `rise-in` on the hero eyebrow
3. `rise-in` on the hero headline
4. `rise-in` on the hero subhead
5. `rise-in` on the hero actions and evidence list

Items 2–5 are staggered entrance animations declared in `styles/animations.css`
and applied via `animate-rise` classes in `components/sections/Hero.tsx`.

### Required state

Exactly one animation on the page: the datum draw.

**Homepage Implementation Specification §5** — *"Two animations exist on this
page. No third may be added."* (the datum draw and native anchor scrolling).
**§5.3** — *"`transform` and `opacity` may not be transitioned on any element
except `.datum`."*

The hero animations transform and fade content on load. They are a staggered
entrance sequence, which **§5.1** explicitly excludes (*"Stagger: None"*), and
they predate the Implementation Specification.

### Why it is not being fixed now

Removing them is a visible change to the Hero and falls outside the scope of
both M2 (datum ownership) and M3 (hook extraction). Executing it inside a
milestone that did not authorise it would make the change invisible in review.

M4 rewrites every component's styling for CSS Modules and is the natural point
of removal: `animations.css` is rewritten in that pass, the `animate-rise`
classes disappear with the utility bridge, and the change is reviewed alongside
the rest of the Hero's styling rather than on its own.

### Resolution

In M4:

- Delete the `rise-in` keyframes and the four `animate-rise` delay classes
- Remove `animate-rise*` from `Hero.tsx`
- Retain `datum-draw` and its reduced-motion fallback unchanged
- Verify: exactly one `@keyframes` block remains in the compiled stylesheet

### Acceptance

`grep -c "@keyframes" ` against the built CSS returns `1`.

### No implementation change is authorised by this entry.
