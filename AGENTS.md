# Agent Instructions

This repository also contains Cursor-specific rules in `.cursor/rules/`. Non-Cursor coding agents should follow the instructions in this file, which mirrors those rules in a portable format.

## General Rules

- Work on one feature at a time.
- Keep code well documented through clear naming, straightforward structure, and concise comments where they help.
- Explain implementation decisions clearly to the user.
- When code is changed, commit the completed change unless the user asks not to or the environment prevents it.

## Frontend Rules

Apply these rules when designing a frontend or frontend components:

- In Codex, use the personal `$nextjs-vercel-frontend` skill as the equivalent of the training's Cursor custom-docs setup for Next.js and Vercel guidance.
- Prefer Next.js for frontend work because this project is intended to work well with Vercel.
- Build screens so they can be tested locally during development and deployed to Vercel without app-specific rewrites.
- After creating or changing UI, provide the exact command and local URL needed to run and inspect it.
- Use a clean, modern, approachable interface style that feels useful and calm rather than flashy.
- Prioritize visual clarity and contrast. Never place white text on a white or near-white background.
- Use a light default theme unless the user explicitly asks for dark mode.
- Use a small, consistent color palette: off-white or very light neutral backgrounds, dark neutral text, one clear accent color for primary actions, subtle neutral fills and borders for secondary surfaces, and distinct red or amber tones for error or warning states.
- Do not rely on color alone to communicate state. Pair color with labels, icons, borders, or helper text.
- Keep typography readable, with clear headings, comfortable body text, and consistent font sizes across similar elements.
- Use whitespace intentionally so the interface feels breathable, but avoid oversized empty areas that make simple workflows feel sparse.
- Keep the user experience pleasant and resilient. Containers, cards, buttons, inputs, and message areas should grow or adapt to fit their contents.
- Do not let text overflow, clip, or overlap other elements at common desktop and mobile widths.
- Use responsive layouts that work on mobile, tablet, and desktop.
- Keep interactive elements easy to identify and click, with visible hover, focus, disabled, loading, and error states.
- Use consistent spacing, border radius, shadows, and borders across repeated UI elements.
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
