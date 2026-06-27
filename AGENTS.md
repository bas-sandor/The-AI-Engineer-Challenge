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
- Use a neobrutalist interface style: bold, playful, high-contrast, useful, and intentionally chunky.
- Favor flat color blocks, thick black borders, hard edges, and offset shadows over soft gradients, glassmorphism, subtle shadows, or overly polished SaaS styling.
- Prioritize visual clarity and contrast. Never place white text on a white or near-white background.
- Use a light default theme unless the user explicitly asks for dark mode.
- Use a small, punchy neobrutalist color palette: warm off-white or pale yellow backgrounds, near-black text and borders, one saturated accent for primary actions, flat pastel fills for secondary surfaces, and distinct red or amber tones for error or warning states.
- Do not rely on color alone to communicate state. Pair color with labels, icons, borders, or helper text.
- Keep typography readable and assertive, with clear headings, strong weights, comfortable body text, and consistent font sizes across similar elements.
- Use whitespace intentionally, but keep layouts compact enough to feel like a working app rather than a landing page.
- Keep the user experience pleasant and resilient. Containers, cards, buttons, inputs, and message areas should grow or adapt to fit their contents.
- Do not let text overflow, clip, or overlap other elements at common desktop and mobile widths.
- Use responsive layouts that work on mobile, tablet, and desktop.
- Keep interactive elements easy to identify and click, with visible hover, focus, disabled, loading, and error states.
- Use consistent spacing, thick borders, square or low-radius corners, and offset shadows across repeated UI elements.
- Use hover and active states that feel physical, such as reducing or moving the offset shadow.
- Prefer simple, familiar controls over custom interaction patterns unless the feature clearly needs something custom.
- Use password-style text inputs for sensitive information.
- Label all inputs clearly and include useful placeholder or helper text where it reduces confusion.
- Show validation errors close to the relevant field and write them in plain language.
- Avoid exposing secrets, API keys, or passwords in visible UI, logs, screenshots, or examples.

## README Rules

Apply these rules when creating or editing README files:

- READMEs should be fun, approachable, and engaging.
- Keep the tone friendly without sacrificing technical accuracy.

## Rule Sources

- `.cursor/rules/general-rule.mdc`
- `.cursor/rules/frontend-rule.mdc`
- `.cursor/rules/readme-rule.mdc`
