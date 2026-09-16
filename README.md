# k223kim.github.io

Personal site, built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build). Live at [https://k223kim.github.io](https://k223kim.github.io).

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Add a project

Create a markdown file:

```bash
src/content/docs/projects/my-thing.md
```

```md
---
title: My Thing
description: Short one-liner.
sidebar:
  order: 4
---

What it is, why it exists, a couple of photos or links.
```

The sidebar updates from the `projects/` folder. Nested groups: a folder with `index.md` plus child pages.

## Add a post

Same pattern under `src/content/docs/blog/`.

## Deploy

Push to `main`. GitHub Actions builds the site and publishes to GitHub Pages.

Enable Pages once: repo **Settings → Pages → Source = GitHub Actions**.
