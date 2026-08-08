# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: early- and growth-stage biotech/life-science companies, labs, and investors evaluating whether to hire MBG for a consulting engagement — this is the primary audience the site is optimized for.

Secondary: MIT undergrads, grad students, and researchers considering joining MBG as student consultants (served by the "join us" recruiting tab).

## Product Purpose

MIT Biotech Consulting Group (MBG) is a student-led strategy consulting firm based at MIT that works with early- and growth-stage biotech companies on strategy, operations, digital presence, and marketing problems. The site's job is to win client engagements first, and recruit students second.

## Positioning

MBG's stated differentiator: most consultants are good at strategy but not the underlying science, and most scientists understand the biology but not what investors or partners need to hear. MBG positions itself as neither — a small, MIT-recruited team that does primary diligence (reads the actual paper), runs short (4–10 week) engagements, builds every deliverable from scratch rather than recycling a slide library, and keeps small teams (4–5 people) where the planners are also the doers.

## Operating Context

Engagements are project-based or ongoing, typically 4–10 weeks, run by small teams of 4–5 MBG consultants. Work spans four practice areas (Strategy, Operations, Digital Presence, Marketing) plus a la carte services (resume book access, startup consulting, event hosting). Client contact and student recruiting both route to mbgci@mit.edu; the group is based in Cambridge, MA.

## Capabilities and Constraints

- Built with Vite + React + TypeScript, Tailwind, shadcn/ui (Radix primitives); MUI/Emotion packages are present in dependencies but unused by App.tsx as of this writing.
- Single-file app (`src/app/App.tsx`) drives four client-side pages (about, practice areas, team, join) with no router/URL-based navigation — page state is in-memory only.
- The "join us" page has two forms (client inquiry, recruit application). The client inquiry form submits to a Vercel serverless function (`api/contact.ts`) that emails the submission via nodemailer over Resend's SMTP relay to mbgci@mit.edu; requires a `RESEND_API_KEY` env var (see `.env.example`) and only works when deployed to/run through Vercel (`vercel dev` locally, not plain `vite dev`). The "recruit" tab remains a static email address with no form — **known gap**, not yet built.
- Pricing, team bios, and testimonials shown are real (not placeholder) and should be preserved/updated deliberately, not treated as sample content.

## Brand Commitments

- Name: MIT Biotech Consulting Group (MBG). Logo asset at `src/imports/MBG-logo-transparent.png`, currently always rendered grayscale.
- MIT affiliation is a core credibility signal (recruiting pool, "MIT-BCG" reference in a testimonial) — do not weaken or genericize the MIT tie.
- Voice: direct, understated, slightly self-deprecating ("We try to be useful, not exhaustive," "We are not a marketing agency"). Avoid typical consulting-firm hype language.

## Evidence on Hand

- Real team photos and bios for 4 core consultants and 8 consulting partners (`src/imports/*.jpg`), one partner (Erika Ruiz) has no photo on file.
- Two real client testimonials on file (OpenBiome, BOSLab) — do not fabricate additional testimonials, logos, or case studies beyond what's provided.
- Real practice-area pricing (starting-at figures) and additional-service pricing.
- No case studies, press mentions, or quantitative outcome metrics currently on hand.

## Product Principles

- Client acquisition is the priority; recruiting content supports it but shouldn't compete for primary attention.
- The copy's understated, credibility-over-hype voice is a deliberate choice — preserve it in any new content.
- Real content (team, pricing, testimonials) is load-bearing; treat it as product truth, not filler to be swapped out.
- The client inquiry form is now wired to send real email; treat that as working, not mock, behavior going forward. The recruit tab having no actual form (just a static email address) remains a known, tracked gap.
