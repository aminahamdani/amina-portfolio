# AGENTS.md

## Cursor Cloud specific instructions

### Project Overview

This is a static React portfolio website (Vite + React 18 + TypeScript + Tailwind CSS v4). The source code lives in `Update portfolio webpage/` (note the spaces in the directory name — always quote the path).

### Development Commands

All commands run from `Update portfolio webpage/`:

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (serves at `http://localhost:5173/amina-portfolio/`) |
| Build | `npm run build` (outputs to `dist/`) |

There is no linter or test suite configured in this project. The only verification is that `npm run build` succeeds without errors.

### Key Caveats

- **Directory name has spaces**: Always use `cd "Update portfolio webpage"` (with quotes).
- **Base path**: Vite is configured with `base: '/amina-portfolio/'` for GitHub Pages deployment; local dev URLs include this path segment.
- **No lockfile**: There is no `package-lock.json`, `yarn.lock`, or `pnpm-lock.yaml` committed, so `npm install` resolves fresh versions within the ranges in `package.json`.
- **EmailJS (optional)**: The contact form uses EmailJS. Without `.env` credentials the site still works but the form shows a configuration warning. See `.env.example` for the required variables (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`).
- **React is a peerDependency**: `react` and `react-dom` are listed as optional peer deps. `npm install` resolves them automatically, but if you see peer-dep warnings, they are expected and non-blocking.
- **Dev server host**: Use `npm run dev -- --host 0.0.0.0` if you need the server accessible outside localhost (e.g., for browser testing in the VM).
