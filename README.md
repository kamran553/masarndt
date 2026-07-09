# Masar NDT — Corporate Website (MERN Stack)

Company site for **Masar NDT / AKMEC Group**, showcasing inspection, conventional & advanced NDT,
asset integrity engineering, manpower/outsourcing services, industries served, and a resources/workbook
section, with a working contact-enquiry form backed by MongoDB.

## Stack

- **Frontend:** React 18 + Vite + Tailwind CSS + React Router, with Framer Motion for animation and
  lucide-react for iconography
- **Backend:** Node.js + Express + MongoDB (Mongoose)

## Project structure

```
masar-website/
├── client/     React + Vite + Tailwind frontend
└── server/     Express + MongoDB API (contact form)
```

## Getting started

### 1. Backend (server)

```bash
cd server
cp .env.example .env      # then edit .env with your real MongoDB URI
npm install
npm run dev                # starts on http://localhost:5000
```

You need a MongoDB connection string. The quickest options:

- **MongoDB Atlas** (free tier): create a cluster at https://www.mongodb.com/atlas, grab the
  connection string, and paste it into `MONGODB_URI` in `server/.env`.
- **Local MongoDB**: install MongoDB Community Server and use
  `mongodb://127.0.0.1:27017/masar-ndt`.

### 2. Frontend (client)

```bash
cd client
npm install
npm run dev                # starts on http://localhost:5173
```

The Vite dev server proxies `/api` requests to `http://localhost:5000` (see `client/vite.config.js`),
so the contact form works out of the box in development.

### 3. Production build

```bash
cd client
npm run build               # outputs static files to client/dist
```

Deploy `client/dist` to any static host (Vercel, Netlify, S3+CloudFront, etc.) and deploy `server/`
to a Node host (Render, Railway, EC2, etc.). Update `CLIENT_ORIGIN` in the server `.env` to your
deployed frontend URL, and point the frontend's API calls at your deployed API URL (e.g. via an
environment variable and a small `fetch` base-URL helper) if the frontend and backend are on
different domains.

## Editing site content

All copy (services, industries, office details, stats, etc.) lives in one place:

```
client/src/data/content.js
```

Edit this file to update text anywhere on the site — every page pulls from it, so there is no need
to hunt through individual components to change wording.

## Design notes

The visual identity keeps its industrial "inspection nameplate / technical spec-sheet" language —
deep steel-navy and warm off-white surfaces, a signal red-orange accent used for tags, calls to
action and validation states, a brass accent used sparingly for calibration-style highlights, and
nameplate-style cards with corner crop-marks for missions, methods, offices and the contact form —
echoing equipment ID plates and inspection stamps rather than a generic corporate template. Fonts:
Oswald (display/headings), Inter (body), IBM Plex Mono (tags, codes, specs).

On top of that base, the UI layer was rebuilt for a premium, production-grade feel:

- **Motion:** Framer Motion powers scroll-triggered reveals, staggered grids, an animated mobile
  drawer and services dropdown, animated route transitions, and count-up stat counters. Everything
  respects `prefers-reduced-motion` automatically via `MotionConfig` in `src/main.jsx`.
- **Iconography:** every service, NDT method, industry, discipline and resource category is paired
  with a meaningful lucide-react icon via lookup tables in `src/lib/icons.js` — kept separate from
  `content.js` so that file stays pure copy, per the note below.
- **Shared UI primitives** live in `src/components/ui/` (`Button`, `Container`, `PageHero`,
  `Reveal`/`StaggerGroup`, `AnimatedCounter`, `IconTile`, `Badge`, `EmptyState`, `ArrowLink`,
  `SectionEyebrow`) so spacing, elevation, motion and hover behaviour stay consistent across all
  eleven pages instead of being hand-rolled per page.
- **Accessibility:** a skip-to-content link, visible focus rings, semantic landmarks, and
  `aria-expanded`/`aria-haspopup`/`aria-current` wired through the navigation and dropdowns.
- **Forms:** the contact form keeps its exact original field names, required fields and `/api/contact`
  request shape — only the presentation layer (icons, inline validation styling, animated
  success/error states) changed.

No existing functionality, routes, API contracts or business copy were changed as part of this
pass — see "Editing site content" below, which still applies exactly as before.

## Notes on content sourcing

All service copy was consolidated from the provided reference documents (Inspection & Audit,
Conventional NDT, Advanced NDT, Asset Integrity Engineering, Outsourcing/Manpower, About Us,
Industries We Serve, Contact Us). The DJC/Durat Al Jubail PDF was used only as a structural/format
reference (service categories, calibration scope, layout of a similar NDT company profile) — all
text on this site is Masar NDT / AKMEC Group's own content, not DJC's.

The **Resources** page is a scaffold for the "workbook/resources" requirement — it currently lists
categories (service datasheets, standards referenced, and a "request a brochure" flow through the
contact form). Add real downloadable files by dropping them into `client/public/resources/` and
linking to them from `client/src/data/content.js`.
