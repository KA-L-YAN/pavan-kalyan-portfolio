# Pavan Kalyan — Portfolio

A cinematic, scroll-driven personal portfolio for a data engineer. Big editorial typography, numbered sections, minimal bracket-style nav, and motion inspired by [layrmedia.com](https://layrmedia.com) — rebuilt around a data-integration/AWS story instead of a creative-dev one.

Story flow: **This is Pavan → what he builds → how he thinks → the tech he works with → the projects that prove it → his experience → someone you'd want on your team.**

## Stack

React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Content

All copy lives in [`src/data/content.ts`](src/data/content.ts) — edit that file to update the resume, projects, stats, or links without touching components.

Profile photos are in `public/images/`, resume PDF is `public/pavan-kalyan-resume.pdf` (linked from the Experience section).

## Deploy

Configured for Netlify (`netlify.toml`, build → `dist`). Any static host works the same way.
