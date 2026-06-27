# Momentum Coach Frontend

This is the Next.js frontend for the AI Engineer Challenge backend. It gives the FastAPI chat endpoint a calm, usable coaching interface with message history, suggested prompts, loading states, and backend status feedback.

## Prerequisites

- Node.js 20.9 or newer
- npm
- The FastAPI backend running on `http://127.0.0.1:8000`
- An `OPENAI_API_KEY` set before starting the backend

## Setup

Install frontend dependencies:

```bash
cd frontend
npm install
```

Optional: create a local environment file if your backend runs somewhere else:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local`:

```bash
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

## Run Locally

Start the backend from the repo root:

```bash
export OPENAI_API_KEY=sk-your-key-here
uv run uvicorn api.index:app --reload
```

Start the frontend in a second terminal:

```bash
cd frontend
npm run dev
```

Open the app at:

```text
http://localhost:3000
```

## Useful Checks

```bash
npm run lint
npm run build
```

## Backend Contract

The UI sends chat messages to:

```text
POST /api/chat
```

with this JSON body:

```json
{
  "message": "string"
}
```

and expects:

```json
{
  "reply": "string"
}
```
