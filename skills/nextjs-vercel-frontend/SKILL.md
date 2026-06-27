---
name: nextjs-vercel-frontend
description: Build, modify, debug, and prepare Next.js frontends intended for Vercel deployment. Use when the user asks for a frontend, UI, React app, Next.js app, Vercel-ready app, local frontend setup, or a frontend for a FastAPI/API backend, especially in training repos with AGENTS.md or .cursor/rules frontend guidance.
---

# Next.js + Vercel Frontend

## Workflow

1. Read local project instructions first:
   - Prefer `AGENTS.md` at the repo root when it exists.
   - Also inspect `.cursor/rules/frontend-rule.mdc` when present, because training repos may keep frontend style rules there.
2. Inspect the existing frontend structure before choosing commands or files. Use the repo's package manager and framework conventions when already established.
3. Use Next.js for new frontend work unless the user or repo clearly requires another stack.
4. Keep the app Vercel-friendly:
   - Avoid server-only assumptions in client components.
   - Put environment-specific values behind documented environment variables.
   - Keep build and dev commands compatible with Vercel's normal Next.js flow.
5. Provide the exact local command and URL after creating or changing UI.

## Documentation Lookup

This skill is not a static copy of the Next.js or Vercel docs. When behavior may depend on current versions, consult official documentation instead of relying on memory.

Read `references/official-docs.md` when the task involves:

- App Router, routing, layouts, metadata, server/client components, or data fetching.
- Vercel deployment, environment variables, build settings, project configuration, or troubleshooting.
- Any Next.js or Vercel feature where current behavior may have changed.

## Implementation Guidance

- Prefer App Router for new Next.js apps unless the existing project uses Pages Router.
- Keep UI accessible and responsive by default.
- Follow repo style guidance for color, spacing, interaction states, and form handling.
- For API-backed frontends, centralize the API base URL in a small helper or environment variable rather than scattering literal URLs.
- Handle loading, empty, success, and error states for user-facing async actions.
- Use password inputs for secrets or sensitive user-provided values.
- Do not expose API keys or secrets in client-side code.
- Keep changes scoped to the requested frontend feature and avoid unrelated refactors.

## Verification

After implementation:

- Run the most relevant local checks available in the repo, such as lint, typecheck, build, or tests.
- Start the local dev server when practical and report the URL.
- If a command cannot run because dependencies are missing or network access is blocked, explain that clearly and give the next command the user should run.
