# Agent Instructions

This repository also contains Cursor-specific rules in `.cursor/rules/`. Non-Cursor coding agents should follow the instructions in this file, which mirrors those rules in a portable format.

## General Rules

- Work on one feature at a time.
- Keep code well documented through clear naming, straightforward structure, and concise comments where they help.
- Explain implementation decisions clearly to the user.
- When code is changed, commit the completed change unless the user asks not to or the environment prevents it.

## Frontend Rules

Apply these rules when designing a frontend or frontend components:

- Use the repo-local `skills/nextjs-vercel-frontend` skill as the equivalent of the training's Cursor custom-docs setup for Next.js and Vercel guidance. In Codex, `$nextjs-vercel-frontend` may also be installed as a personal skill for automatic discovery.
- Prefer Next.js for frontend work because this project is intended to work well with Vercel.
- Build screens so they can be tested locally during development and deployed to Vercel without app-specific rewrites.
- After creating or changing UI, provide the exact command and local URL needed to run and inspect it.
- Pay attention to visual clarity and contrast. Do not place white text on a white background.
- Keep the user experience pleasant and resilient. Boxes and containers should grow to fit their contents.
- Use a neobrutalist style for all frontend work, with clean and understated basic colors.
- Base the color scheme on navy blue and eggshell white.
- Use tints of grey for accent colors.
- Make navy blue visible in major structural elements such as headers, primary actions, borders, or active states.
- Avoid bright candy colors; keep the design understated even when using neobrutalist borders and shadows.
- Use password-style text inputs for sensitive information.
- Avoid exposing secrets, API keys, or passwords in visible UI, logs, screenshots, or examples.

## README Rules

Apply these rules when creating or editing README files:

- READMEs should be fun, approachable, and engaging.
- Keep the tone friendly without sacrificing technical accuracy.

## Rule Sources

- `.cursor/rules/general-rule.mdc`
- `.cursor/rules/frontend-rule.mdc`
- `.cursor/rules/readme-rule.mdc`
