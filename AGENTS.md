@promptkit/

# AGENTS.md

## Project Overview

boilerplate-react is the most minimal React starter template — React + TypeScript + Vite with ESLint and Prettier. No routing, no data-fetching library, no backend. Use this when you need the simplest possible React starting point.

**Key Technologies:**
- **Frontend**: React, TypeScript, Vite
- **Testing**: Vitest
- **Linting/Formatting**: ESLint, Prettier

**Architecture:**
- `client/`: All source code
  - `client/components/` — React components
  - `client/index.tsx` — app entry point
- `models/` — TypeScript interfaces (if needed)

## Building and Running

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `http://localhost:5173` |
| `npm run build` | Production build |
| `npm test -- --run` | Run all tests once |
| `npm run lint` | Check code with ESLint |
| `npm run format` | Format code with Prettier |

**Important:** Always use `npm run dev`. Opening `index.html` directly won't load TypeScript.

## Development Conventions

- **Components** in `client/components/`.
- **Styling**: Add `.css` files and import them in components. No preprocessor included.
- **Testing**: Vitest. Add test files alongside the components they test.

## Architecture Decisions

- **Absolute minimum scaffold**: Just React + Vite + TypeScript + linting. Everything else is optional — students add only what they need.
- **`App.tsx` as root**: `client/index.tsx` mounts `<App />` into `#app`. Students build everything inside `App.tsx` or extract to child components.

## Key Conventions

- New components go in `client/components/` — import them into `App.tsx`.
- TypeScript interfaces go in `models/` — import them where needed.
- **Note:** This template uses strict ESLint and Prettier rules. Follow them exactly.

## Potential Pitfalls

- **No routing, data fetching, or styling library included**: All must be added manually if needed.
- **No server**: If the project needs an API, either call a public API from the client or use a fullstack boilerplate instead.

## Related Documentation

- [AGENTS.md](AGENTS.md): Shared AI context file — source of truth for all agent briefings.
- [CLAUDE.md](CLAUDE.md): Claude Code context (imports AGENTS.md; may include tutoring guidelines if used in educational settings).
- [GEMINI.md](GEMINI.md): Gemini AI context (self-contained copy of this file's content).

## PromptKit Quick Reference
- Review the available artefacts when the student requests them:
  - Protocol: `promptkit/protocols/setup.md` — instructions for updating these CLI briefings.
  - Workflow: `promptkit/workflows/tutor.md` — guide for tutoring/explanation sessions.
  - Workflow: `promptkit/workflows/reflect.md` — guide for documenting outcomes and next steps.
- Student notes live in `promptkit/notes/`; The table in `progress-journal.md` is main place to update with reflections. Instructor Activities are in `promptkit/activities/` (read-only).
- When new workflows arrive, expect additional files under `promptkit/workflows/`.
