# Kindlor — Application Architecture

## 1. Purpose

This document defines the technical architecture for the Kindlor website.

Kindlor is a premium digital studio offering:

- Website design and development
- WhatsApp lead/contact flows
- Online booking systems
- Restaurant table/food booking
- Appointment systems
- Business automation
- Custom digital workflows

The Kindlor website is itself a product demonstration. The implementation must therefore prioritize:

1. Correctness
2. Performance
3. Accessibility
4. Responsive behavior
5. Maintainability
6. Visual polish

---

# 2. Architecture Summary

```text
                    KINDLOR WEBSITE
                           │
              ┌────────────┴────────────┐
              │                         │
           ASTRO                     REACT
        Static/content             Interactive
           pages                    islands
              │                         │
              └────────────┬────────────┘
                           │
                    TAILWIND CSS
                           │
                       DESIGN TOKENS
                           │
                         GSAP
                    selective motion
                           │
              ┌────────────┴────────────┐
              │                         │
          CONTENT                    ACTIONS
          MDX/JSON              Forms / APIs
              │                         │
        Case studies               Email /
        Services                  WhatsApp /
        Blog                      Automation
```

---

# 3. Core Technology

## Required

```text
Framework       Astro
Language        TypeScript
UI              React
Styling         Tailwind CSS
Animation       GSAP
Content         Astro Content Collections / MDX
Deployment      Vercel
Repository      Git
```

Do not replace these technologies without explicit approval.

---

# 4. Rendering Strategy

Use Astro's static-first architecture.

## Static by default

These should preferably be Astro components:

```text
Navbar
Hero
Positioning
Problem
Services
Industries
Projects
Process
About
CTA
Footer
```

## Interactive islands

Use React only where client-side state is genuinely needed:

```text
ContactForm
InteractiveSystemDiagram
ComplexProjectCarousel
AdvancedServiceInteraction
```

Use the least client-side hydration necessary.

Example:

```astro
<ContactForm client:visible />
```

rather than hydrating every component immediately.

The exact hydration strategy must be chosen based on actual behavior.

---

# 5. Directory Structure

Recommended production structure:

```text
kindlor/
│
├── AGENTS.md
├── README.md
├── package.json
├── astro.config.mjs
├── tsconfig.json
├── eslint.config.js
│
├── docs/
│   ├── design.md
│   ├── architecture.md
│   └── AI-TOOLING.md
│
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── images/
│   │   ├── projects/
│   │   ├── og/
│   │   └── general/
│   ├── fonts/
│   └── textures/
│
└── src/
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.astro
    │   │   ├── Footer.astro
    │   │   └── PageTransition.astro
    │   │
    │   ├── sections/
    │   │   ├── Hero.astro
    │   │   ├── Positioning.astro
    │   │   ├── Problem.astro
    │   │   ├── Services.astro
    │   │   ├── SystemDiagram.astro
    │   │   ├── Industries.astro
    │   │   ├── SelectedWork.astro
    │   │   ├── Process.astro
    │   │   ├── Engineering.astro
    │   │   ├── AutomationExample.astro
    │   │   ├── About.astro
    │   │   └── FinalCTA.astro
    │   │
    │   ├── ui/
    │   │   ├── Button.astro
    │   │   ├── SectionLabel.astro
    │   │   ├── ProjectCard.astro
    │   │   ├── ServiceItem.astro
    │   │   ├── Marquee.astro
    │   │   └── StatusIndicator.astro
    │   │
    │   └── react/
    │       ├── ContactForm.tsx
    │       ├── ProjectCarousel.tsx
    │       └── InteractiveSystem.tsx
    │
    ├── content/
    │   ├── config.ts
    │   ├── projects/
    │   │   ├── project-01.mdx
    │   │   └── project-02.mdx
    │   └── blog/
    │
    ├── layouts/
    │   ├── BaseLayout.astro
    │   ├── ProjectLayout.astro
    │   └── BlogLayout.astro
    │
    ├── pages/
    │   ├── index.astro
    │   ├── work/
    │   │   ├── index.astro
    │   │   └── [slug].astro
    │   ├── services/
    │   │   └── index.astro
    │   ├── process/
    │   │   └── index.astro
    │   ├── about/
    │   │   └── index.astro
    │   ├── contact/
    │   │   └── index.astro
    │   ├── start-a-project/
    │   │   └── index.astro
    │   ├── 404.astro
    │   └── api/
    │       └── contact.ts
    │
    ├── lib/
    │   ├── constants.ts
    │   ├── utils.ts
    │   ├── validation.ts
    │   └── analytics.ts
    │
    ├── styles/
    │   ├── global.css
    │   ├── tokens.css
    │   └── animations.css
    │
    └── types/
        ├── project.ts
        └── contact.ts
```

The structure may evolve as the project grows. Do not create files that are not needed.

---

# 6. Page Architecture

## Homepage

`src/pages/index.astro`

The homepage should compose sections:

```astro
<BaseLayout>
  <Navbar />

  <main>
    <Hero />
    <Positioning />
    <Problem />
    <Services />
    <SystemDiagram />
    <Industries />
    <SelectedWork />
    <Process />
    <Engineering />
    <AutomationExample />
    <About />
    <FinalCTA />
  </main>

  <Footer />
</BaseLayout>
```

Do not put all homepage markup into `index.astro`.

---

# 7. Layout Architecture

## BaseLayout

Responsibilities:

- HTML document
- `<head>`
- metadata
- fonts
- global styles
- theme
- accessibility basics
- global scripts only when required

It should not contain page-specific content.

Example conceptual structure:

```astro
---
interface Props {
  title: string;
  description?: string;
  image?: string;
}

const {
  title,
  description = "...",
  image
} = Astro.props;
---

<html lang="en">
  <head>
    <!-- metadata -->
  </head>

  <body>
    <slot />
  </body>
</html>
```

---

# 8. Design Token Architecture

Centralize visual values.

Use CSS variables for core design tokens.

```css
:root {
  --color-bg: #101114;
  --color-bg-secondary: #17181c;

  --color-surface: #1d1f23;
  --color-surface-elevated: #24262b;

  --color-text: #f2f1ed;
  --color-text-secondary: #a7a7a3;
  --color-text-muted: #6e7074;

  --color-border: rgba(242, 241, 237, 0.12);
  --color-border-strong: rgba(242, 241, 237, 0.22);

  --color-accent: #d8ff5a;
}
```

Typography:

```text
Primary: Manrope
Technical: IBM Plex Mono
```

Do not scatter font definitions across components.

---

# 9. Component Rules

## Components should be:

- Small
- Focused
- Reusable where repetition exists
- Accessible
- Easy to reason about

## Avoid:

- Giant components
- Components containing unrelated sections
- Deep prop chains without need
- Global state for simple local interactions
- Generic abstraction layers with no current use

Do not create a component merely because a piece of markup is short.

---

# 10. Section Component Rules

Each major homepage section should:

- Own its own layout
- Accept only meaningful props
- Avoid page-level business logic
- Use shared design tokens
- Be responsive independently

Example:

```astro
<SectionLabel number="02" label="SERVICES" />

<section>
  ...
</section>
```

---

# 11. Project Content Model

Projects should be content-driven.

Recommended schema:

```ts
{
  title: string;
  slug: string;
  year: number;
  industry: string;
  summary: string;
  description: string;
  services: string[];
  technologies: string[];
  heroImage: string;
  featured: boolean;
  challenge?: string;
  approach?: string;
  solution?: string;
  results?: string[];
  gallery?: string[];
}
```

Use Astro Content Collections/MDX for long-form case studies.

Do not duplicate project content between:

```text
homepage
work page
case study page
```

The source of truth should be the project content entry.

---

# 12. Project Routes

Use:

```text
/work/
/work/[slug]
```

Example:

```text
/work/keets-cafe
/work/newway-fitness
/work/example-clinic
```

The `[slug].astro` page should load the project content and use `ProjectLayout`.

---

# 13. Services Architecture

Services should be data-driven where repetition exists.

Example:

```ts
const services = [
  {
    number: "01",
    title: "WEBSITES",
    description: "...",
    features: [...]
  },
  ...
];
```

The visual component:

```text
ServiceItem
```

should render the data.

Do not duplicate six large blocks of almost-identical markup.

---

# 14. Contact Architecture

The contact flow should eventually support:

```text
Visitor
  ↓
Project Type
  ↓
Project Description
  ↓
Contact Details
  ↓
Budget
  ↓
Submit
```

The UI may be React if stateful multi-step behavior is required.

Validation should exist both:

```text
client-side
server-side
```

Never trust only browser validation.

---

# 15. API Architecture

Use Astro server endpoints only where server-side behavior is necessary.

Example:

```text
src/pages/api/contact.ts
```

Responsibilities:

- Validate input
- Sanitize input
- Apply rate limiting where appropriate
- Send notification
- Return safe response

The endpoint must never expose:

- API keys
- provider credentials
- internal error details
- environment variables

---

# 16. Environment Configuration

Example:

```text
.env.example
```

May contain:

```text
CONTACT_EMAIL=
WHATSAPP_NUMBER=
EMAIL_PROVIDER_API_KEY=
```

Never commit actual secrets.

If a value is safe to expose to the browser, follow Astro's public environment variable convention.

Private credentials must remain server-side.

---

# 17. WhatsApp Integration

Use a reusable helper:

```text
src/lib/whatsapp.ts
```

Responsibilities:

- Generate WhatsApp URLs
- Generate encoded messages
- Keep messaging logic consistent

Do not scatter raw WhatsApp URLs throughout components.

---

# 18. Animation Architecture

Create reusable animation utilities where repetition exists.

Possible:

```text
src/lib/animations/
├── reveal.ts
├── magnetic.ts
├── cursor.ts
└── scroll.ts
```

But do not create the directory until multiple animation utilities actually exist.

Use:

```text
CSS
```

for simple hover/fade transitions.

Use:

```text
GSAP
```

for choreography and complex scroll interactions.

Animations must degrade gracefully.

---

# 19. Custom Cursor

Custom cursor is desktop-only enhancement.

Architecture:

```text
Cursor
 ├── default
 ├── link
 ├── project
 └── CTA
```

Requirements:

- Never replace accessibility focus
- Never block clicks
- Disable on touch
- Respect reduced motion
- Do not add heavy per-frame React state updates

Prefer DOM transforms/requestAnimationFrame or GSAP rather than causing unnecessary React re-renders.

---

# 20. Images

All images must be optimized.

Prefer Astro's image tooling where applicable.

Rules:

- Use correct dimensions
- Use meaningful alt text
- Avoid enormous source images
- Lazy load below-the-fold content
- Use eager loading only when justified
- Provide responsive sizes where appropriate

Hero/LCP images should be treated separately from ordinary gallery images.

---

# 21. Fonts

Preferred:

```text
Manrope
IBM Plex Mono
```

Self-host where practical.

Avoid loading unnecessary font weights.

Recommended initial weights:

```text
Manrope:
400
500
600
700
800

IBM Plex Mono:
400
500
```

Only include weights actually used.

---

# 22. SEO Architecture

Every page should have:

```text
title
description
canonical URL where appropriate
Open Graph metadata
social image where appropriate
```

Case studies should have unique metadata.

The homepage should target terms naturally related to:

```text
web design
website development
business automation
booking systems
WhatsApp business solutions
digital studio
```

Do not keyword stuff.

---

# 23. Structured Data

Use structured data only where it accurately represents the business.

Potential types:

```text
Organization
WebSite
BreadcrumbList
Article
```

Do not create fake reviews, ratings, awards, or claims.

---

# 24. Analytics

Analytics should be isolated behind:

```text
src/lib/analytics.ts
```

Track meaningful events such as:

```text
project_cta_clicked
whatsapp_clicked
contact_started
contact_submitted
project_viewed
```

Do not add analytics providers until one is actually selected.

Do not add tracking scripts just for decoration.

---

# 25. Performance Budget

Aim for:

```text
Minimal client JS
Minimal third-party JS
Optimized images
Fast LCP
Low CLS
Low INP
```

The exact Lighthouse score is a goal, not a reason to game the test.

Do not sacrifice accessibility or functionality to inflate a score.

---

# 26. Responsive Architecture

Use mobile-first CSS.

Breakpoints should be based on layout needs, not arbitrary device names.

Every component must remain usable at narrow widths.

Check:

```text
320px
375px
430px
768px
1024px
1280px
1440px
```

No fixed desktop width should leak into mobile.

---

# 27. Accessibility Architecture

Required:

```text
semantic HTML
ARIA only when needed
keyboard navigation
focus states
form labels
alt text
reduced motion
logical tab order
```

Do not use:

```html
<div onclick="...">
```

when a semantic button/link is appropriate.

Use:

```html
<button>
<a>
<nav>
<header>
<main>
<section>
<footer>
```

appropriately.

---

# 28. Error Handling

User-facing errors should be:

```text
Clear
Short
Actionable
```

Example:

```text
Something went wrong.
Please try again or contact us on WhatsApp.
```

Developer errors should remain detailed in development logs but should not leak sensitive information to users.

---

# 29. Testing Strategy

At minimum:

### Every feature

```text
Type/check
Build
Manual browser test
Mobile test
Desktop test
```

### Before release

```text
Production build
Navigation test
Contact form test
WhatsApp CTA test
404 test
SEO metadata check
Accessibility check
Performance check
```

Automated testing can be added as the project grows.

Do not introduce a full testing framework until the project needs it.

---

# 30. Git Workflow

Recommended:

```text
main
  │
  ├── feature/hero
  ├── feature/services
  ├── feature/projects
  ├── feature/contact
  └── fix/...
```

Keep commits focused.

Examples:

```text
feat: add Kindlor hero section
feat: add project content collection
feat: add project inquiry form
fix: prevent mobile navigation overflow
perf: optimize project images
```

Never use destructive Git operations to solve a coding problem.

---

# 31. Implementation Order

Build in this order:

## Phase 1 — Foundation

```text
1. Initialize/verify Astro
2. Configure TypeScript
3. Configure Tailwind
4. Establish design tokens
5. Set up fonts
6. Create BaseLayout
7. Create global styles
8. Verify production build
```

## Phase 2 — Core UI

```text
9. Navbar
10. Hero
11. Positioning
12. Services
13. Industries
14. CTA
15. Footer
```

## Phase 3 — Portfolio

```text
16. Content collection
17. Project card
18. Work index
19. Project detail route
20. Case study layout
```

## Phase 4 — Interaction

```text
21. Service interactions
22. Scroll reveals
23. Project interactions
24. System diagram
25. Custom cursor
```

## Phase 5 — Conversion

```text
26. Contact form
27. Validation
28. Server endpoint
29. WhatsApp integration
30. Success/error states
```

## Phase 6 — Quality

```text
31. SEO
32. Accessibility
33. Performance
34. Mobile QA
35. Desktop QA
36. Production build
37. Deployment
```

Never implement all phases simultaneously.

---

# 32. Development Loop

For every meaningful feature:

```text
UNDERSTAND
    ↓
PLAN
    ↓
IMPLEMENT
    ↓
RUN CHECKS
    ↓
BUILD
    ↓
VISUALLY INSPECT
    ↓
FIX
    ↓
COMMIT
```

If the build breaks:

```text
STOP
 ↓
READ ERROR
 ↓
FIND ROOT CAUSE
 ↓
FIX
 ↓
BUILD AGAIN
```

Do not continue building new features on top of a broken build.

---

# 33. Architecture Boundaries

Keep these responsibilities separate:

```text
UI
↓
Components

Content
↓
Content Collections

Business helpers
↓
lib/

Types
↓
types/

Server behavior
↓
pages/api/

Global design
↓
styles/

Page composition
↓
pages/
```

Avoid putting everything into:

```text
components/
```

---

# 34. Anti-Patterns

Do not:

- Convert every Astro component to React
- Put all logic into `index.astro`
- Create a global state manager without need
- Add a database before requirements exist
- Add three animation libraries
- Install UI libraries for simple components
- Put secrets in client code
- Duplicate project data
- Use inline styles everywhere
- Use arbitrary colors everywhere
- Disable lint/type checks to hide errors
- Rewrite working files unnecessarily
- Copy the reference design literally
- Create fake portfolio statistics or testimonials

---

# 35. Architecture Evolution

This is a living architecture.

When Kindlor grows, architecture may evolve toward:

```text
kindlor.com
    ↓
Marketing website
    ↓
Lead system
    ↓
CRM
    ↓
Client portal
    ↓
Automation platform
```

At that stage, a separate application may be introduced.

Do not prematurely build the future system into the marketing website.

---

# 36. Definition of Done

A feature is complete only when:

```text
[ ] Architecture remains consistent
[ ] Existing behavior still works
[ ] Desktop works
[ ] Mobile works
[ ] Accessibility considered
[ ] SEO considered
[ ] Performance considered
[ ] No unnecessary dependency added
[ ] No secrets exposed
[ ] Type/check passes where configured
[ ] Production build passes
[ ] Visual result matches design.md
```

---

# 37. Final Rule

The architecture exists to protect the project from unnecessary complexity.

When choosing between two valid implementations:

> Choose the simpler implementation that preserves quality, performance, accessibility, and future flexibility.

Do not optimize for clever code.

Optimize for a Kindlor website that is:

```text
BEAUTIFUL
+
FAST
+
ACCESSIBLE
+
MAINTAINABLE
+
TECHNICALLY CREDIBLE
```
