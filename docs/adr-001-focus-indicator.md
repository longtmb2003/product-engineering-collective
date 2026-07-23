# ADR-001 · Focus indication on programmatically focused sections

**Status** Accepted · **Date** M3 · **Supersedes** the open question raised in the post-M3 conformance report

## Context

Every `<section>` carries `tabindex="-1"` so that anchor activation can move
keyboard focus to the target (Implementation Specification §6). Sections are
not in the tab order; they receive focus only programmatically.

Because focus lands on a section, the 2px amber focus ring is drawn around the
entire section for keyboard users. Common practice is to suppress the outline
on `tabindex="-1"` scroll targets on the grounds that they are not interactive
controls, and WCAG 2.4.7 addresses components that receive focus via tabbing.

## Decision

**The focus indicator is kept. The outline is not suppressed on programmatically
focused sections.**

## Rationale

- Implementation Specification §7.8 prohibits `outline: none` without a
  compliant replacement, anywhere in the codebase, including resets. There is
  no compliant replacement here, so there is no permitted suppression.
- Programmatic focus is still focus. A keyboard user whose focus has moved and
  who cannot see where it went is in exactly the position the ring exists to
  prevent.
- Visible location after anchor navigation is worth more than visual
  cleanliness. The ring appears only for keyboard-initiated navigation, which
  is precisely the audience that needs it.
- Accessibility takes precedence over aesthetics. This is not a close call and
  should not be reopened on visual grounds.

## Consequences

- Keyboard users see a section-sized outline after activating a nav anchor.
  This is intended and is not a defect report.
- Mouse users will generally not see it: `:focus-visible` heuristics exclude
  pointer-initiated programmatic focus in current engines.
- No component may add `outline: none` to a section, a scroll target, or a
  reset. Reviewers should treat any such rule as a blocking defect.
- The rule survives the CSS Modules migration unchanged.

## Alternatives rejected

**Suppress the outline on `[tabindex="-1"]`.** Rejected: prohibited by §7.8 and
removes location feedback from the users who depend on it.

**Focus a heading inside the section instead.** Rejected: moves the problem
rather than solving it, and produces an inconsistent target across sections.
