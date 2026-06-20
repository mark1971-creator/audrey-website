# Audrey — Personal Website

A warm, personal portfolio site for Audrey Vandeneijnde — creative hustler, upcycler (**Designed by Odd**), and living life full from Schaffhausen.

Built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

**Live repo:** [github.com/mark1971-creator/audrey-website](https://github.com/mark1971-creator/audrey-website)

---

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Design system](#design-system)
- [Managing content](#managing-content)
- [Deployment](#deployment)
- [Configuration notes](#configuration-notes)
- [Scripts](#scripts)

---

## Features

| Section | Description |
|---------|-------------|
| **Hero** | Full-screen intro with “BE FULL FILLED” headline and CTAs |
| **About** | Personal introduction |
| **Experience** | Work history with photo thumbnails |
| **Designed by Odd** | Upcycled fashion gallery with lightbox |
| **Living Life** | Photo categories with cover image + lightbox galleries |
| **Contact** | Email CTA |
| **Footer** | Being at Full Potential branding |

**Interactions:**
- Clickable photo galleries with lightbox (keyboard: `Esc`, `←`, `→`)
- Smooth scroll navigation with fixed header
- Mobile-responsive layout
- Auto-detected images from `public/` folders (no code changes needed for most photo updates)

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter (body), Playfair Display (headings) via Google Fonts |
| Language | TypeScript |

---

## Getting started

### Prerequisites

- **Node.js** 20+ (LTS recommended)
- **npm** (comes with Node)

### Install & run

```bash
# Clone the repository
git clone https://github.com/mark1971-creator/audrey-website.git
cd audrey-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Project structure

```
audrey-website/
├── app/
│   ├── layout.tsx          # Root layout, metadata, favicons
│   ├── page.tsx            # Home page (assembles all sections)
│   └── globals.css         # Tailwind v4 + theme tokens
├── Components/
│   ├── Nav.tsx             # Fixed navigation
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx
│   ├── Experience.tsx      # Work history + thumbnails
│   ├── Creative.tsx        # Designed by Odd (reads public/designs/)
│   ├── CreativeGallery.tsx # Design gallery + lightbox UI
│   ├── Moments.tsx         # Living Life (reads public/moments/)
│   ├── MomentsGallery.tsx  # Category cards + lightbox UI
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── Lightbox.tsx        # Shared lightbox component
├── public/
│   ├── designs/            # Designed by Odd photos (+ optional .txt captions)
│   ├── moments/            # Living Life category folders
│   │   ├── golden-hour/
│   │   ├── new-city/
│   │   └── memory-box/
│   ├── experience/         # Experience section thumbnails
│   ├── favicon.ico         # Browser tab icon (from favicon.io)
│   ├── apple-touch-icon.png
│   ├── site.webmanifest
│   └── bfp-logo.png        # Footer logo
├── docs/
│   └── CONTENT-GUIDE.md    # Step-by-step content update guide
├── next.config.ts
├── postcss.config.mjs
└── package.json
```

---

## Design system

### Color palette

| Token | Hex | Usage |
|-------|-----|-------|
| Cream | `#F8F4F0` | Page background |
| Espresso | `#2C2520` | Primary text |
| Cocoa | `#4A4038` | Muted text |
| Sage | `#6B8E73` | Main accent (links, borders, hovers) |
| Clay | `#C97D5B` | Secondary accent (buttons, highlights) |

Tailwind utilities are available via `@theme` in `app/globals.css` (e.g. `bg-cream`, `text-sage`, `text-clay`).

### Typography

- **Body:** Inter
- **Headings:** Playfair Display (`.heading` class)

### Favicon

Generated with [favicon.io](https://favicon.io) using letter **A**, font **Playfair Display**, background `#F8F4F0`, text color `#C97D5B`.

All favicon files live in `public/` and are referenced in `app/layout.tsx`.

---

## Managing content

Most photo updates require **no code changes** — just drop files into the right `public/` folder.

| What | Where | Guide |
|------|-------|-------|
| Living Life photos | `public/moments/<category>/` | [docs/CONTENT-GUIDE.md](./docs/CONTENT-GUIDE.md) |
| Designed by Odd pieces | `public/designs/` | [docs/CONTENT-GUIDE.md](./docs/CONTENT-GUIDE.md) |
| Experience thumbnails | `public/experience/` + `Experience.tsx` | [docs/CONTENT-GUIDE.md](./docs/CONTENT-GUIDE.md) |
| Text copy | Individual `Components/*.tsx` files | Edit directly |

**After adding photos in development:** refresh the browser.

**Before deploying:** run `npm run build` so new images are picked up at build time.

---

## Deployment

This site is a standard Next.js app and deploys to any platform that supports Node.js:

- **[Vercel](https://vercel.com)** (recommended — zero-config for Next.js)
- Netlify, Railway, etc.

### Deploy to Vercel

1. Push your branch to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click **Deploy**

No environment variables are required for the current setup.

---

## Configuration notes

### Turbopack root (`next.config.ts`)

A stray `package-lock.json` in a parent directory can cause Next.js to infer the wrong workspace root, which breaks Tailwind v4 class generation. The project pins `turbopack.root` to the project directory to prevent this.

### Image remote patterns

`picsum.photos` is allowlisted for legacy placeholder usage. All current site images are served locally from `public/`.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Production build |
| `npm start` | Run production server (after build) |
| `npm run lint` | Run ESLint |

---

## Contact

- **Audrey:** [audrey.vandeneijnde@gmail.com](mailto:audrey.vandeneijnde@gmail.com)
- **Site by:** [Being at Full Potential](https://beingatfullpotential.com)

---

*Brought to you by Being at Full Potential, your personal branding specialist.*
