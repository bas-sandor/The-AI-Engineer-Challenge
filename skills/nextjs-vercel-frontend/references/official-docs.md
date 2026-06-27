# Official Docs Strategy

Use official documentation for version-sensitive Next.js and Vercel decisions. Treat this file as routing guidance, not as a replacement for the docs.

## Primary Sources

- Next.js docs: https://nextjs.org/docs
- Vercel docs: https://vercel.com/docs

## When to Check the Web

Check the official docs when the user asks about or the implementation touches:

- Creating or configuring a Next.js app.
- App Router, Pages Router, routing conventions, layouts, metadata, route handlers, or middleware.
- Server Components, Client Components, Server Actions, data fetching, caching, or streaming.
- Static export, image optimization, fonts, scripts, or metadata.
- Environment variables, build settings, deployment settings, domains, preview deployments, or Vercel project configuration.
- Errors, warnings, or deprecations from Next.js, React, or Vercel.

## How to Use Docs During Work

1. Prefer official Next.js and Vercel pages over blog posts or copied snippets.
2. Verify current commands, file conventions, and deployment behavior before making version-sensitive recommendations.
3. Summarize only the relevant guidance in the response; do not copy long passages.
4. Link the official source when the final answer depends on looked-up docs.

## Repo-Specific Context

For training repos, local rules are more specific than generic docs. Apply them in this order:

1. User's latest request.
2. Repo instructions such as `AGENTS.md`.
3. Cursor rules such as `.cursor/rules/frontend-rule.mdc`.
4. Official Next.js and Vercel docs.
5. General frontend best practices.
