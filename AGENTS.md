# Agent Instructions

This repository also contains Cursor-specific rules in `.cursor/rules/`. Non-Cursor coding agents should follow the instructions in this file, which mirrors those rules in a portable format.

## General Rules

- Work on one feature at a time.
- Keep code well documented through clear naming, straightforward structure, and concise comments where they help.
- Explain implementation decisions clearly to the user.
- When code is changed, commit the completed change unless the user asks not to or the environment prevents it.

## Frontend Rules

Apply these rules when designing a frontend or frontend components:

- Pay attention to visual clarity and contrast. Do not place white text on a white background.
- Keep the user experience pleasant and resilient. UI containers should grow or adapt to fit their contents.
- Use password-style text inputs for sensitive information.
- Prefer Next.js for frontend work because this project is intended to work well with Vercel.
- The frontend should ultimately be deployable on Vercel while still being easy to test locally.
- After creating or changing UI, provide the user with a way to run and inspect it locally.

## README Rules

Apply these rules when creating or editing README files:

- READMEs should be fun, approachable, and engaging.
- Keep the tone friendly without sacrificing technical accuracy.

## Rule Sources

- `.cursor/rules/general-rule.mdc`
- `.cursor/rules/frontend-rule.mdc`
- `.cursor/rules/readme-rule.mdc`
