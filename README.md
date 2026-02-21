# Intentional — Dating, redesigned for commitment

A production-ready landing page built with **Next.js 14** (App Router), **TypeScript**, and **Tailwind CSS**.

## Tech Stack

| Layer       | Technology                     |
| ----------- | ------------------------------ |
| Framework   | Next.js 14 (App Router)        |
| Language    | TypeScript 5                   |
| Styling     | Tailwind CSS 3.4               |
| Fonts       | DM Sans + Instrument Serif (Google Fonts via `next/font`) |
| Deployment  | Vercel (zero-config)           |

## File Structure

```
intentional-dating-landing/
├── app/
│   ├── globals.css        # Tailwind directives + component classes
│   ├── layout.tsx         # Root layout with fonts, SEO metadata, viewport
│   └── page.tsx           # Landing page with all 7 sections
├── public/                # Static assets (favicons, images)
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind theme (colors, fonts, spacing)
├── postcss.config.js      # PostCSS with Tailwind + Autoprefixer
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies and scripts
├── next-env.d.ts          # Next.js type declarations
├── .gitignore
└── README.md
```

## Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/) 18.17 or later
- npm, yarn, or pnpm

### Setup

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/intentional-dating-landing.git
cd intentional-dating-landing

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start     # Preview production build at http://localhost:3000
```

---

## Deploy to Vercel

### Option A — Vercel Dashboard (easiest)

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository
3. Vercel auto-detects Next.js — no configuration needed
4. Click **Deploy**
5. Live in ~60 seconds

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel          # Preview deployment
vercel --prod   # Production deployment
```

---

## Sections

| #  | Section        | Description                                                  |
| -- | -------------- | ------------------------------------------------------------ |
| 1  | Hero           | Headline, subheadline, dual CTAs                             |
| 2  | Problem        | Why current dating apps fail serious daters                  |
| 3  | Solution       | 6 compatibility dimensions + the reframing question          |
| 4  | How It Works   | 3-step process in responsive columns                         |
| 5  | Who It's For   | Checklist of ideal user traits                               |
| 6  | Early Access   | Dark CTA section for founding cohort sign-up                 |
| 7  | Footer         | Tagline                                                      |

## Design Decisions

- **No external UI libraries** — everything is Tailwind utility classes and a thin component layer in `globals.css`
- **Two-font system** — Instrument Serif for display headings (warmth, humanity) paired with DM Sans for body (clean, modern)
- **Clamp-based typography** — headlines and spacing scale fluidly without breakpoint jumps
- **Accessible throughout** — `aria-labelledby` on every section, `focus-visible` ring on all interactive elements, semantic HTML, proper heading hierarchy
- **No JavaScript required** — the entire page is a server component with zero client-side JS

## License

Proprietary — All rights reserved.
