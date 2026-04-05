# Minimal Modern Powerpoint Website (Vue)

A slide-style single-page website built with Vue 3 + Vite.
Design direction is inspired by the latsmarbls portfolio mood: strong structure,
clean hierarchy, and elegant contrast.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Build production files:

```bash
npm run build
```

## Deploy to Vercel

This folder includes `vercel.json` configured for Vite static output.

Build settings:

- Build command: `npm run build`
- Output directory: `dist`

If deploying this subfolder from a monorepo, set the Vercel project root directory to:

`powerpoint-vue`
