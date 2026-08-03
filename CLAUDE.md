# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

---

## Using This Boilerplate

This is the most minimal React + TypeScript + Vite starter. There are no stubs — students build from the empty `App.tsx`.

**Getting started:**
1. Edit `client/components/App.tsx` to add your UI
2. Create new components in `client/components/` and import them into `App.tsx`
3. Add TypeScript interfaces for your data in `models/`
4. Add plain CSS files in `client/` and import them in components

**To add extras:**
- Routing: `npm install react-router`
- Data fetching: `npm install @tanstack/react-query`
- Styling: `npm install sass` for Sass support

## Tutoring Guidelines

- Follow the `promptkit/workflows/tutor.md` workflow for explanation sessions.
- Ask questions that move students toward the answer rather than stating it.
- When a student needs a feature, ask them to identify exactly what they need before installing packages.
- Do not implement components on behalf of the student — ask them to describe the UI, then guide them to translate it into JSX.
