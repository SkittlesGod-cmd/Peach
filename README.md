# Peach

Brand intelligence platform that helps creative teams anticipate cultural trends and consumer sentiment before they happen.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: Vite 7 + React 19 + Tailwind CSS 4 + wouter
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod
- API codegen: Orval (from OpenAPI spec)

## Getting Started

```bash
pnpm install
pnpm run dev
```

Opens the frontend at `http://localhost:5173`.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start the frontend dev server |
| `pnpm run dev:mockup` | Start the mockup sandbox dev server |
| `pnpm run build` | Build the frontend for production |
| `pnpm run build:mockup` | Build the mockup sandbox |
| `pnpm run typecheck` | Full typecheck across all packages |

## Project Structure

```
artifacts/
  peach/          — Main frontend app
  mockup-sandbox/ — UI prototyping sandbox
  api-server/     — Express API server
lib/
  db/             — Drizzle schema & DB client
  api-client-react/ — Auto-generated React API hooks
  api-zod/        — Auto-generated Zod schemas
  api-spec/       — OpenAPI spec
scripts/          — Workspace scripts
```

## Environment

Required for the API server: `DATABASE_URL` — Postgres connection string.
