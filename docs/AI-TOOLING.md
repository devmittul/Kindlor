# Kindlor AI Tooling Registry

This document records the AI-development capabilities expected by the Kindlor project.

## Required

### Framework
- Astro

### Styling
- Tailwind CSS

### Language
- TypeScript

### UI
- React

### Animation
- GSAP

---

# AI Skills / MCP

The AI coding environment should have access to the project's relevant:

- Astro skill/documentation
- Tailwind CSS skill/documentation
- Git/GitHub tooling
- Browser/preview tooling if available
- Package/runtime tooling if available

## Important

MCP configuration is normally controlled by the AI IDE/environment.

This repository document does **not** install an MCP server.

If an expected MCP is missing, the coding agent must:

1. Identify the missing capability.
2. Tell the user exactly what is missing.
3. Check the IDE's supported MCP/skill installation mechanism.
4. Install/configure it only through the supported mechanism.
5. Verify it works.
6. Continue implementation.

Never fabricate an MCP name, server URL, tool name, or skill path.

---

# Skill Priority

When multiple sources of guidance exist:

1. Project-specific instructions
2. Installed skill instructions
3. Installed package/version behavior
4. Official framework documentation
5. General knowledge

Do not blindly follow old tutorials when they conflict with the installed versions.

---

# Verification Checklist

Before a framework-level change:

```text
[ ] package.json inspected
[ ] installed versions checked
[ ] Astro guidance checked
[ ] Tailwind guidance checked
[ ] existing config inspected
[ ] existing patterns inspected
```

After a framework-level change:

```text
[ ] type/check command run if available
[ ] lint command run if available
[ ] production build run
[ ] errors resolved
[ ] mobile behavior checked
[ ] desktop behavior checked
```
