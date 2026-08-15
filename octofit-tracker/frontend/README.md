# Octofit Tracker Frontend

React 19 presentation tier for the Octofit Tracker multi-tier application.

## Environment

When running in Codespaces, define `VITE_CODESPACE_NAME` in `.env.local` so the frontend can call the backend API on port `8000`:

```text
VITE_CODESPACE_NAME=your-codespace-name
```

If `VITE_CODESPACE_NAME` is unset, the app falls back to `http://localhost:8000` for local development.

## Scripts

```bash
npm run dev
npm run build
npm run lint
```
