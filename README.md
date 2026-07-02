# Peach

UI/UX mockup and component preview platform.

## Getting Started

Requires [pnpm](https://pnpm.io/installation), Node.js 24+, and PostgreSQL (for the API server).

```bash
pnpm install
pnpm run dev          # Main mockup frontend → http://localhost:5173
pnpm run dev:mockup   # Component preview server → http://localhost:5174/preview/ComponentName
```

## All Commands

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start the main mockup frontend (Vite) |
| `pnpm run dev:mockup` | Start the component preview server |
| `pnpm run build` | Build the main frontend for production |
| `pnpm run build:mockup` | Build the component preview server |
| `pnpm run typecheck` | Full typecheck across all packages |
| `pnpm --filter @workspace/api-server run dev` | Start the Express API server (requires `DATABASE_URL`) |
| `pnpm --filter @workspace/db run push` | Push Drizzle schema changes to the database |

## Project Structure

```
artifacts/
  peach/              — Main mockup frontend (Vite + React + Tailwind)
  mockup-sandbox/     — Component preview server (loads components from src/components/mockups/)
  api-server/         — Express API server
lib/
  db/                 — Drizzle schema & DB client
  api-client-react/   — Auto-generated React API hooks
  api-zod/            — Auto-generated Zod schemas
  api-spec/           — OpenAPI spec
```

## Stack

pnpm workspaces · Vite 7 · React 19 · Tailwind CSS 4 · wouter · TypeScript 5.9 · Express 5 · Drizzle ORM · PostgreSQL · Zod
