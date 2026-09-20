# Kindlor — AI Coding Agent Instructions

## 0. Mission

You are working on **Kindlor**, a premium digital studio website.

Kindlor provides:
- High-end business websites
- WhatsApp contact/lead flows
- Online booking systems
- Restaurant table/food booking systems
- Appointment systems
- Business automation
- Custom digital workflows

The website itself is a showcase of Kindlor's design and engineering quality.

**Primary principle:**
> Do not merely make the website look good. Build it cleanly, accessibly, performantly, and without breaking existing functionality.

---

# 1. Mandatory Technology Stack

Use these technologies unless the user explicitly changes the stack:

- **Astro** — primary web framework
- **React** — interactive islands/components only where useful
- **TypeScript** — all application logic
- **Tailwind CSS** — styling
- **GSAP** — advanced animation only where CSS/native browser APIs are insufficient
- **MDX / Astro Content Collections** — projects, case studies, and blog content when appropriate
- **Vercel** — deployment target unless explicitly changed

Do NOT replace Astro with Next.js, React-only, Vue, or another framework without explicit user approval.

Do NOT introduce another CSS framework.

Do NOT introduce another animation library unless explicitly approved.

---

# 2. Source of Truth for Technical Guidance

Before implementing framework-specific functionality:

1. Inspect the repository.
2. Inspect the installed package versions.
3. Use the project's available **Astro skill/MCP documentation** when available.
4. Use the project's available **Tailwind skill/MCP documentation** when available.
5. Prefer official documentation and installed-version APIs over remembered syntax.
6. If the repository already has an established pattern, follow it unless it is demonstrably incorrect.

Never invent an API, configuration option, component pattern, or MCP capability.

If a required skill or MCP is unavailable:
- Do not pretend it exists.
- Do not fabricate tool names or instructions.
- State what is missing.
- Use the closest verified official documentation/workflow only if it is safe to do so.

---

# 3. MCP and Skill Safety

MCP servers and skills are **development-tooling configuration**, not application dependencies.

Do not add fake MCP packages to `package.json`.

Do not create fake MCP configuration merely to satisfy an instruction.

If an MCP/skill is required but missing from the user's IDE:

1. Identify exactly what capability is missing.
2. Check whether the IDE supports adding that MCP/skill.
3. If the IDE supports it, provide the exact setup required.
4. Verify the capability after setup.
5. Continue only after the required capability is actually available.

Never assume that installing an npm package installs an MCP server.

Never assume an npm dependency provides an AI skill.

---

# 4. Before Changing Code

Always inspect before editing.

At minimum inspect:

```text
package.json
astro.config.*
tsconfig.json
tailwind.config.* / CSS configuration
src/
public/
existing layouts
existing components
existing styles
```

Also inspect any existing:

```text
AGENTS.md
CLAUDE.md
.cursor/rules/
.github/
README.md
docs/
```

Do not overwrite existing configuration blindly.

If an existing configuration is valid, preserve it.

---

# 5. Change Safety Protocol

Before every significant change:

### Step 1 — Understand

Determine:
- What currently exists
- Which files are involved
- What dependencies are installed
- What conventions the project already follows

### Step 2 — Plan

State the smallest set of changes required.

### Step 3 — Implement

Make focused changes.

### Step 4 — Validate

Run appropriate checks:

```bash
npm run build
```

and, where available:

```bash
npm run lint
npm run check
```

Use the project's actual scripts from `package.json`; do not assume these scripts exist.

### Step 5 — Inspect the result

Check for:
- Type errors
- Build errors
- Broken imports
- Missing assets
- Layout regressions
- Mobile regressions
- Accessibility regressions
- Console errors

### Step 6 — Only then continue

Never stack several unverified changes on top of a broken state.

---

# 6. Dependency Rules

Do not install packages casually.

Before adding a dependency:

1. Check whether the existing stack already solves the problem.
2. Check `package.json`.
3. Prefer native browser APIs or existing dependencies when reasonable.
4. Confirm compatibility with the installed Astro/Tailwind versions.
5. Explain why the dependency is necessary.
6. Install only the minimum required package(s).

Never replace working dependencies just because a newer library is fashionable.

Avoid dependency bloat.

---

# 7. Astro Rules

Astro is the primary framework.

Prefer:

```text
Astro components
```

for static/content-heavy UI.

Use React only when a component genuinely benefits from client-side state/interactivity.

Prefer:

```astro
<Component />
```

over unnecessarily converting static sections into React.

For React islands, explicitly choose an appropriate hydration strategy.

Do not use client-side JavaScript for content that can be rendered statically.

Keep the default page as lightweight as possible.

---

# 8. React Rules

React is for interactive islands such as:

- Interactive forms
- Complex accordions
- Interactive system diagrams
- Carousels
- Stateful UI
- Client-side interactions that genuinely require React

Do not build the entire Kindlor website as one giant React application.

Avoid unnecessary global state.

Prefer small, isolated components.

---

# 9. Tailwind Rules

Tailwind is the primary styling system.

Use shared design tokens instead of scattering arbitrary values throughout the project.

The Kindlor visual system uses the ClickHouse-design-analysis approach:

```text
Canvas (Background): #0a0a0a
Surface Soft: #121212
Surface Card: #1a1a1a
Elevated surface: #242424

Primary text (Ink): #ffffff
Body text: #cccccc
Muted text: #888888

Border (Hairline): #2a2a2a
Strong border: #3a3a3a

Primary Accent (Electric Yellow): #faff69
```

Do not introduce random colors without a design reason.

Avoid excessive:
- Rounded cards
- Gradients
- Glassmorphism
- Shadows
- Decorative UI

The design should remain extremely high contrast, flat, and engineering-grade.

---

# 10. Design Direction

The ClickHouse-design-analysis establishes the visual direction.

Use:

- Near-pure black canvas (`#0a0a0a`)
- Electric yellow (`#faff69`) as the singular brand voltage for CTAs and numbers
- Inter font (weight 700 for display, 600 buttons/sub, 400 body)
- JetBrains Mono for code
- Flat dark surface cards (`#1a1a1a`) with no shadow
- Generous whitespace (96px section padding)
- 1px flat borders (`#2a2a2a`)
- Minimal navigation
- Carefully controlled motion
- No film grain, just solid canvas

The reference is inspiration, not a template to copy literally.

The final site should feel like:

> A developer built it, but a designer obsessed over every pixel.

---

# 11. Animation Rules

Use animation to communicate hierarchy and interaction.

Preferred tools:

1. CSS transitions/animations
2. Native browser APIs
3. GSAP for advanced choreography

Use GSAP only where it provides meaningful value.

Good uses:

- Hero text reveal
- Scroll-based project transitions
- System diagram motion
- Service expansion
- Page transitions
- Custom cursor
- Horizontal project movement

Avoid:

- Animation on every element
- Excessive parallax
- Bouncy effects
- Long loading animations
- Motion that reduces readability

Respect:

```css
prefers-reduced-motion
```

---

# 12. Responsive Rules

Mobile is not a shrunken desktop.

Design intentionally for:

- Mobile
- Tablet
- Desktop
- Large desktop

Always test:

```text
~320px
~375px
~430px
768px
1024px
1280px
1440px+
```

No horizontal overflow.

No desktop-only interactions required for core functionality.

Hover effects must have touch-safe alternatives.

---

# 13. Accessibility

Every feature must remain usable without relying on:

- Hover
- Custom cursor
- Animation
- Color alone

Use:

- Semantic HTML
- Proper headings
- Accessible labels
- Keyboard navigation
- Visible focus states
- Alt text
- Sufficient contrast
- Reduced-motion support

Forms must have real labels, not placeholder-only labels.

---

# 14. SEO

Maintain:

- Unique page titles
- Meta descriptions
- Canonical URLs where appropriate
- Semantic headings
- Open Graph metadata
- Twitter/social metadata where useful
- Sitemap
- robots.txt
- Structured data when appropriate

Do not keyword-stuff.

---

# 15. Performance

The Kindlor website is itself a technical demonstration.

Prioritize:

- Static rendering
- Optimized images
- AVIF/WebP where appropriate
- Responsive image sizes
- Lazy loading below the fold
- Minimal JavaScript
- Minimal third-party scripts
- Font optimization
- Avoiding unnecessary client hydration

Do not sacrifice performance for decorative effects.

---

# 16. Component Architecture

Prefer small, understandable components.

Potential structure:

```text
src/
├── components/
│   ├── Hero.astro
│   ├── Services.astro
│   ├── ServiceItem.astro
│   ├── Projects.astro
│   ├── ProjectCard.astro
│   ├── Process.astro
│   ├── SystemDiagram.astro
│   ├── About.astro
│   ├── CTA.astro
│   └── Footer.astro
│
├── components/react/
│   ├── ContactForm.tsx
│   ├── ProjectCarousel.tsx
│   └── InteractiveSystem.tsx
│
├── layouts/
├── pages/
├── content/
├── styles/
└── lib/
```

Do not create abstractions just for the sake of abstraction.

---

# 17. Content Architecture

Prefer content-driven project data.

Projects should eventually support:

```text
title
slug
year
industry
description
services
heroImage
gallery
challenge
approach
solution
results
technologies
```

Use Astro Content Collections/MDX when appropriate.

Do not hardcode repeated project data into multiple page components.

---

# 18. Forms and Business Systems

The website should eventually support:

```text
Website visitor
    ↓
Project inquiry
    ↓
Lead capture
    ↓
Email / WhatsApp
    ↓
Automation
```

For the initial marketing site, do not build a full backend/database unless required.

Do not add a database merely because Kindlor sells automation.

Build the simplest reliable architecture first.

---

# 19. WhatsApp

WhatsApp is an important conversion channel.

Maintain a clear CTA such as:

```text
CHAT ON WHATSAPP ↗
```

Use an appropriate pre-filled message.

Do not expose private credentials or API keys in frontend code.

Never put secrets in:

```text
src/
public/
client-side JS
```

---

# 20. Environment Variables

Secrets must use environment variables.

Never commit:

```text
API keys
tokens
passwords
private URLs
service credentials
```

Before adding an environment variable:
- Check existing `.env.example`
- Follow the framework's correct public/private environment variable conventions
- Document required variables without exposing secrets

---

# 21. Git Safety

Before major changes:

- Check git status.
- Do not overwrite unrelated user work.
- Do not reset or delete files without explicit approval.
- Do not force-push.
- Do not rewrite history.
- Do not remove configuration simply because it is unfamiliar.

If unrelated uncommitted changes exist, preserve them.

---

# 22. Existing Code Has Priority

Do not rebuild working functionality simply to match a preferred architecture.

If an existing implementation works:

```text
Understand it
→ Improve it carefully
→ Preserve behavior
```

not:

```text
Delete it
→ Rewrite everything
```

---

# 23. Error Handling

When something fails:

1. Read the actual error.
2. Identify the root cause.
3. Check installed versions.
4. Check official/available skill documentation.
5. Make the smallest fix.
6. Re-run validation.

Never hide an error by disabling checks.

Never downgrade a package simply to make an error disappear without understanding the compatibility issue.

---

# 24. Do Not Guess

If uncertain about:

- An Astro API
- Tailwind configuration
- GSAP API
- MCP capability
- Skill instructions
- Package compatibility
- Existing project behavior

inspect the relevant source/documentation first.

Prefer:

> "I need to verify this against the installed version."

over inventing an answer.

---

# 25. Definition of Done

A feature is not complete until:

```text
✓ Correct technology used
✓ Existing behavior preserved
✓ Desktop works
✓ Mobile works
✓ No horizontal overflow
✓ No obvious console errors
✓ Type checking passes where configured
✓ Build passes
✓ Accessibility considered
✓ SEO considered
✓ Performance considered
✓ No unnecessary dependency added
✓ No secrets exposed
```

---

# 26. Priority Order

When tradeoffs occur, prioritize:

```text
1. Correctness
2. Existing functionality
3. Accessibility
4. Performance
5. Responsive behavior
6. Maintainability
7. Visual polish
8. Decorative effects
```

Never sacrifice correctness to make an animation work.

---

# 27. Final Instruction

Treat the Kindlor website as a production project, not a demo.

Before writing code, understand the existing project.

Before adding technology, verify it.

Before changing configuration, inspect it.

Before using an MCP or skill, confirm it is actually available.

Before declaring a feature complete, build and validate it.

**Make the smallest correct change that moves the project forward.**
