# Upward Physio and Performance

A production-ready marketing website for **Upward Physio and Performance** — a Denver-based physical therapy practice led by **DJ Keim, DPT, CSCS**, serving both individuals and corporate/occupational-health clients.

Built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, shadcn/ui + Radix, Framer Motion, and Resend for contact emails.

---

## What's inside

One brand, four program landing pages (per DJ's direction — separate pages, **not** separate branding):

| Program | Page | Focus |
| --- | --- | --- |
| **Upward Physio** | `/services/physio` | Physical therapy & orthopedics |
| **Upward Performance** | `/services/performance` | Strength & conditioning |
| **Upward Work** | `/services/work` | Occupational health |
| **Upward Wellness** | `/services/wellness` | Workplace & lifestyle wellness |

Plus: Home (`/`), About (`/about`), Services overview (`/services`), **For Businesses** (`/for-businesses` — the priority corporate page), Contact (`/contact`), Blog (`/blog`), and legal pages (`/privacy`, `/terms`).

### Key features
- Full-bleed **hero with background video** (`/public/video/hero-bg.mp4` + poster)
- Sticky navbar that switches logo/text from light → dark on scroll
- **Contact form** + **corporate proposal form** that send branded HTML emails via Resend (server actions)
- Newsletter signup (also via Resend)
- Dark / light mode (`next-themes`, default light)
- Framer Motion scroll reveals and micro-interactions
- SEO metadata, Open Graph, and `MedicalBusiness` JSON-LD
- Brand logo system generated from the provided artwork (navy, white, teal + submarks) in `/public/logos`

---

## Tech stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS** with exact brand tokens in `tailwind.config.ts`
- **shadcn/ui** + **Radix UI** primitives (`src/components/ui`)
- **Framer Motion** animations
- **Lucide React** icons
- **React Hook Form** + **Zod** validation
- **Resend** for transactional email
- Fonts: **Sora** (display) + **Plus Jakarta Sans** (body) via `next/font`

---

## Getting started

### 1. Install

```bash
npm install
```

### 2. Environment variables

A ready-to-use **`.env.local`** is already included in this folder, so the site runs immediately. (If your unzip tool hides dotfiles, there's also a visible copy named **`env.example.txt`** — just rename it to `.env.local`.)

Open `.env.local` and fill in your values when ready:

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | for email | Your Resend API key — https://resend.com/api-keys |
| `CONTACT_TO_EMAIL` | for email | Where form submissions are delivered (DJ's inbox) |
| `CONTACT_FROM_EMAIL` | for email | A verified sender on your Resend domain |
| `NEXT_PUBLIC_SITE_URL` | recommended | Public site URL, used for metadata / Open Graph |

> **No API key yet?** The site still runs. Form submissions are logged to the server console and the user sees a friendly success message, so you can develop without email configured.

### 3. Run locally

```bash
npm run dev
```

Open http://localhost:3000.

### 4. Production build

```bash
npm run build && npm start
```

---

## Setting up Resend (email)

1. Create an account at https://resend.com and verify your sending domain.
2. Create an API key and put it in `.env.local` as `RESEND_API_KEY`.
3. Set `CONTACT_FROM_EMAIL` to an address on your verified domain (e.g. `website@yourdomain.com`).
4. Set `CONTACT_TO_EMAIL` to wherever you want to receive inquiries.

Email logic lives in `src/app/actions.ts`; the branded HTML templates are in `src/lib/emails.ts`.

---

## Deploy to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Go to https://vercel.com/new and import the repository.
3. Add the environment variables from `.env.example` in **Project Settings → Environment Variables**.
4. Deploy. `vercel.json` is already included; no extra config needed.

One-click (after pushing to your own repo):

```
https://vercel.com/new/clone?repository-url=YOUR_REPO_URL
```

---

## Editing content

Almost all copy lives in **one file**: `src/lib/site.ts`.

- `siteConfig` — name, tagline, contact info, DJ's details
- `avenues` — the four program pages (name, blurb, image, highlights)
- `services` — the five service cards on the home/services pages
- `stats` — trust-signal numbers (⚠️ placeholders — swap in DJ's real numbers when ready)
- `testimonials`, `corporateBenefits` — home & corporate content

Images are in `/public/images`, logos in `/public/logos`, the hero video in `/public/video`.

### A couple of placeholders to replace before launch
- **Stats numbers** in `site.ts` (DJ mentioned pulling real home-visit / patient counts)
- **Phone number** and **email** in `siteConfig`
- **Case-study results** on `/for-businesses` (one is intentionally marked "numbers coming soon")
- **Privacy / Terms** body copy (`src/app/privacy`, `src/app/terms`)
- The contact-page **Google Map** is a generic Denver embed — point it at the real address

---

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx            # fonts, theme, navbar, footer, metadata + JSON-LD
│  ├─ page.tsx              # home
│  ├─ actions.ts            # Resend server actions
│  ├─ globals.css           # brand tokens + theme
│  ├─ about/  services/  services/[avenue]/
│  ├─ for-businesses/  contact/  blog/  privacy/  terms/
│  └─ not-found.tsx
├─ components/
│  ├─ ui/                   # shadcn/Radix primitives
│  ├─ layout/               # navbar, footer, page-header, legal-layout
│  ├─ sections/             # hero, home sections, forms, service card
│  └─ shared/               # logo, reveal, section-heading, theme
└─ lib/
   ├─ site.ts               # ← all site content
   ├─ schemas.ts            # Zod form schemas
   ├─ emails.ts             # HTML email templates
   └─ utils.ts
```

---

## Brand colors (in `tailwind.config.ts`)

- **Navy:** `#0A2540`
- **Sage / teal:** `#4DA6A0` (with a `sage` scale 50–900)
- **Off-white:** `#F8F9FA`

© Upward Physio and Performance.
