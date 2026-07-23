# Component Contract

> This document defines how components should be designed before implementation.
>
> It establishes consistency, reusability and scalability.
>
> Every component should follow these rules.

---

# Design Philosophy

Components should solve one responsibility.

Composition is preferred over configuration.

Favor small reusable pieces.

Avoid creating large "god components."

---

# Component Categories

The project contains five categories.

Layout

Global page structure.

Examples

- Container
- Section
- Grid

---

UI

Small reusable interface elements.

Examples

- Button
- Badge
- Card
- Chip
- Tag
- Divider

---

Shared

Reusable business-independent components.

Examples

- Section Header
- CTA Group
- Feature List
- Product Grid

---

Sections

Page-specific compositions.

Examples

- Hero Section
- Journey Section
- Capabilities Section
- Products Section
- Team Section
- Process Section
- CTA Section

---

Effects

Visual enhancements.

Examples

- Aurora
- Grid Background
- Noise
- Glow
- Gradient

Effects should never contain business logic.

---

# Component Rules

A component should have one clear purpose.

Avoid components with multiple unrelated responsibilities.

If a component becomes difficult to explain, split it.

---

# Composition

Prefer

Section

↓

Shared Components

↓

UI Components

↓

HTML

Avoid

Section

↓

Large custom implementation

↓

Duplicate code

---

# Content Separation

Components never own content.

Content lives inside

/content

Components receive data through props.

Never hardcode copy inside components.

---

# State

Prefer local state.

Avoid unnecessary global state.

Do not introduce state management libraries unless clearly required.

---

# Server Components

Use Server Components by default.

Only introduce Client Components when necessary.

Examples

- animation
- interaction
- browser APIs

Keep Client Components as small as possible.

---

# Motion

Animation should be isolated.

Business logic should never depend on animation.

Prefer reusable animation wrappers.

---

# Accessibility

Every component should support

Keyboard navigation

Screen readers

Visible focus

Accessible labels

Reduced motion

Accessibility is not optional.

---

# Responsiveness

Every component should function independently.

Avoid assuming fixed screen widths.

Components should adapt naturally inside different layouts.

---

# Naming

Component names should describe purpose.

Good

HeroSection

ProductCard

SectionHeader

CapabilityItem

Bad

BigCard

AwesomeBox

NewComponent

---

# Variants

Use variants only when they represent meaningful design differences.

Avoid unnecessary configuration.

If a component requires too many props, consider splitting it.

---

# Reusability Rule

Do not extract a shared component after the first use.

Extract when

- reused multiple times
- identical behavior
- improves clarity

Avoid premature abstraction.

---

# Performance

Avoid unnecessary client-side rendering.

Prefer static rendering whenever possible.

Lazy load heavy assets.

Optimize images.

Keep the JavaScript bundle small.

---

# SEO

Sections should use semantic HTML.

Headings must preserve hierarchy.

Images require descriptive alt text.

Metadata should be centralized.

---

# Component Checklist

Before creating a new component, ask

Does it have a single responsibility?

Can it be composed?

Can it remain server-side?

Does it separate content from presentation?

Is it accessible?

Is it responsive?

Is the name clear?

Will another developer immediately understand its purpose?

---

# Definition of Done

A component is considered complete when it

✓ Has a single responsibility

✓ Uses semantic HTML

✓ Is responsive

✓ Is accessible

✓ Separates content from presentation

✓ Uses shared design tokens

✓ Avoids duplicate logic

✓ Supports future growth without unnecessary complexity

Every component should be simple enough that another engineer can understand it within a few minutes.