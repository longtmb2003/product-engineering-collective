# Specification Issues

> Defects and internal contradictions found in the governing specifications.
>
> An issue here is **not** resolved locally. The published specification remains
> the source of truth and is implemented verbatim until an amendment is
> approved. Implementers must not apply a personal interpretation.

---

## SPEC-ISSUE-001 · §2.1 line naming is internally inconsistent

**Document** Homepage Implementation Specification v1.0, §2.1 *The page grid*
**Raised** M4 · **Status** Open, awaiting amendment
**Implementation** Published template implemented verbatim. No interpretation applied.

### The three statements

**A — The template** declares columns in this order:

```
[full-start] 64px [cross-start] 32px [gutter-start] 96px [datum] 32px
[content-start] minmax(0,1fr) [content-end] 64px [full-end]
```

Resolving positionally: `full-start` 0 · **`cross-start` 64** · **`gutter-start` 96** · `datum` 192 · `content-start` 224 · `content-end` 1216 · `full-end` 1280.

**B — The resolved-positions table** in the same section states:

| Line | x |
|---|---|
| `full-start` | 0 |
| **`cross-start`** | **96** |
| **`gutter-start`** | **128** |
| `datum` | 192 |

**C — Artifact Specification D-01** fixes the crossing plate's left edge at
**x = 96**, width 1120.

### The contradictions

1. **A and B disagree** on both `cross-start` and `gutter-start`. Under A they
   are 64 and 96; under B they are 96 and 128.
2. **B is not derivable from A.** The value 128 does not appear at any line
   position in the template.
3. **A conflicts with C.** Under A, `cross-start` = 64, so a plate placed
   `cross-start / content-end` has a left edge of 64 and a width of 1152 —
   not the 96 and 1120 that D-01 requires.
4. **B conflicts with the measurement gutter width.** §2.1 states the
   measurement gutter is 128 wide. Under B the region between `gutter-start`
   (128) and `datum` (192) is 64 wide.

### What is self-consistent

Two readings each satisfy part of the specification and neither satisfies all:

**Reading A (template as published).** `cross-start` 64, `gutter-start` 96.
The marginalia sentence in §2.1 — *"Marginalia spans `cross-start / datum`
(128px)"* — is satisfied exactly. **Artifact D-01 is violated** by 32px.

**Reading B (table as published).** `cross-start` 96, `gutter-start` 64
(swapping the template's names). **Artifact D-01 is satisfied exactly.** The
marginalia sentence then needs to read `gutter-start / datum`, and the table's
`gutter-start` value of 128 is still wrong — it should be 64.

### Implemented

**Reading A — the template, verbatim.** It is the normative construct;
the table is derived commentary, and derived commentary does not override the
declaration it describes.

Consequences accepted for now:

- Marginalia and the capability index span `cross-start / datum` = **128px**.
- The header's inner row spans `cross-start / content-end`, placing the
  logotype at **x = 64**, which matches §7.1 *"logotype at the page gutter"*.
- **The crossing plate's left edge is x = 64, not 96.** This is a known
  violation of Artifact Specification D-01 and is the cost of implementing the
  specification as published rather than interpreting it.

### Requested amendment

A ruling on which of the two readings is correct, and correction of whichever
of the three statements is wrong. Specifically:

1. Confirm the intended x for `cross-start` (64 or 96).
2. Correct the §2.1 resolved-positions table so it derives from the template.
3. Confirm whether Artifact D-01's plate left edge of 96 stands. If it does,
   the template's names must swap and the marginalia sentence must change to
   `gutter-start / datum`.

### Blocked work

The crossing plate geometry cannot be finalised until this is resolved. It is
currently rendered at the published-template position and will move by 32px
if Reading B is ratified.

---

## SPEC-ISSUE-003 · §9.1 contrast table does not match the §3 token values

**Document** Design System v1.0, §9.1 *Contrast* against §3 *Colour System*
**Raised** M5 · **Status** Open, awaiting amendment
**Implementation** §3 OKLCH values implemented verbatim. §9.1 ratios not used.

### The problem

§9.1 publishes contrast ratios for the token ramp. Converting the §3 OKLCH
values to sRGB and computing WCAG relative luminance gives different numbers.
Most are close enough to be rounding. **One is not.**

| Pair | §9.1 claims | Computed | Delta |
|---|---|---|---|
| `text-primary` / `bg` | 16.8:1 | 17.62:1 | +0.8 |
| `text-secondary` / `bg` | 10.9:1 | 10.60:1 | −0.3 |
| `text-muted` / `bg` | 6.8:1 | 6.36:1 | −0.4 |
| `text-faint` / `bg` | 3.9:1 | 3.59:1 | −0.3 |
| `amber` / `bg` | 10.4:1 | 10.44:1 | ✓ |
| `amber-ink` / `amber` | 12.1:1 | 9.55:1 | −2.6 |
| **`border-strong` / `bg`** | **3.1:1 — "AA for non-text ✓"** | **1.56:1** | **−1.5, fails** |

### Why border-strong matters

§9.1 asserts `border-strong` passes WCAG 1.4.11 for non-text contrast at
3.1:1. At `oklch(0.32 0.002 155)` against `oklch(0.145 0.004 155)` the actual
ratio is **1.56:1**, roughly half the requirement.

`border-strong` is currently used on the secondary action's rule. That control
is a text link whose label sits at 10.60:1, so the component itself remains
perceivable and this is not a live conformance failure today. It becomes one
the moment `border-strong` is used as the sole boundary of a control — which
§3.2 anticipates, listing it for "input borders".

To reach 3:1 against `bg`, `border-strong` needs roughly **L 0.42**, not 0.32.

### Two further gaps in §3

- **Chroma is unspecified for the four text tokens and for `amber-ink`.** §3.3
  and §3.4 give lightness only. Implemented at `C 0.002 H 155`, continuing the
  surface ramp's terminal chroma, per §3.2's "chroma decays toward zero".
- **`amber-hover` at `L 0.86 C 0.145 H 80` is outside the sRGB gamut** and
  clips. Implemented at `C 0.130`, holding the specified lightness and hue and
  reducing chroma to the gamut boundary.

### Requested amendment

1. Correct the §9.1 table to the computed values.
2. Rule on `border-strong`: raise it to ~L 0.42 for 1.4.11 conformance, or
   state explicitly that it is decorative and may never be a control's sole
   boundary.
3. Specify chroma for the text tokens and `amber-ink`.
4. Specify an in-gamut `amber-hover`.

### Blocked work

None today. Becomes blocking before any form ships, since inputs are
specified to use `border-strong`.

---

## SPEC-ISSUE-004 · The JavaScript budget is unachievable on the specified stack

**Document** Homepage Implementation Specification v1.0, §8.1 *Budgets*
**Raised** RC audit · **Status** Open, awaiting amendment
**Implementation** No action. The page ships the minimum JavaScript the stack permits.

### The statement

§8.1 sets **JavaScript, gzipped ≤ 10 KB**.

§8.5 permits JavaScript for exactly three behaviours, and the page uses two of
them (mobile navigation, focus restoration). The third arrives with the
contact form.

### The problem

The budget is achievable for *application* code and unachievable for the
*framework*. Doc 10 specifies Next 15 and React 19; their client runtime is
approximately 103 KB First Load before a single line of page code executes.

Measured at RC:

| Layer | Size |
|---|---|
| Page-specific JS (`/`) | **1.13 KB** |
| Shared framework runtime | **103 KB** |
| First Load JS | **104 KB** |

Application code is at 11% of the budget. The framework is at roughly ten
times it. No implementation change closes this gap — only removing React
would, which Doc 10 forbids.

### Requested amendment

One of:

1. **Rescope the budget to application code**, e.g. *"page-specific JavaScript
   ≤ 10 KB gzipped, excluding the framework runtime"*. The current
   implementation passes this at 1.13 KB.
2. **Restate as a First Load budget**, e.g. *"First Load JS ≤ 110 KB"*, which
   measures what the user actually downloads.
3. **Change the stack**, which contradicts Doc 10 and the whole architecture.

Option 1 is recommended: it preserves the intent — that this page ships almost
no JavaScript of its own — and is measurable and enforceable in CI.

### Blocked work

None. This is a measurement definition, not a defect. It blocks only the
ability to state that §8.1 passes.

---

## SPEC-ISSUE-002 · The specified monospace typeface does not exist

**Document** Design System v1.0, §2.1 *The typeface*
**Raised** M5 · **Status** Open, awaiting amendment
**Implementation** Sans implemented as specified. Monospace held on a system stack.

### The statement

§2.1 selects **ABC Diatype + ABC Diatype Mono**, one superfamily, and states:

> *"If licensing blocks it, the substitution is **Archivo + Archivo Mono** —
> the only approved alternative. Do not open this decision to a wider list."*

### The problem

ABC Diatype is commercially licensed and no licence has been procured, so the
fallback applies. **Archivo Mono does not exist.** The Archivo superfamily
ships Archivo, Archivo Narrow, Archivo Black and Archivo Expanded. There is no
monospace member.

The fallback therefore satisfies the sans half of the pairing and cannot
satisfy the mono half.

### Implemented

- **Sans: Archivo** (variable, weights 400 and 500 only), as specified.
- **Mono: a system monospace stack**, pending a ruling. The token
  `--font-mono` remains in place, so a single value change resolves this.

Monospace has three permitted uses (§2.7) and currently appears in three
places — stack labels, the Featured Work note, and the depth line. A system
stack is visually neutral there and does not compromise the identity, but it
is not a decision an implementer may make permanently.

### Requested amendment

One of:

1. Procure ABC Diatype and ABC Diatype Mono, removing the question.
2. Name a specific monospace to pair with Archivo, and record it as the
   approved substitution.
3. Delete the monospace role and reassign its three uses to sans, accepting
   that §2.7 then has nothing to govern.

### Blocked work

None. The site renders correctly with a system mono stack. This is a
correctness issue in the specification, not an implementation blocker.
