---
target: About page (AboutPage in src/app/App.tsx)
total_score: 24
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
timestamp: 2026-08-07T17-10-57Z
slug: src-app-app-tsx-aboutpage
---
Method: dual-agent (A: design-review sub-agent · B: detector sub-agent)

Note: no browser automation was available in this session, so this is a source-only critique (JSX/Tailwind/CSS inference, no rendered screenshot or live-page detector injection). Both assessments flagged this as a fallback signal rather than skipping silently.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Hover/active-nav states work; instant page swaps with no transition are fine for static content |
| 2 | Match System / Real World | 3 | Domain-appropriate language; one copy defect ("the the science") dents polish |
| 3 | User Control and Freedom | 2 | No URL routing — refresh always resets to About, nothing bookmarkable/shareable |
| 4 | Consistency and Standards | 4 | Bracket-tag motif, section rhythm, hover patterns applied with real discipline site-wide |
| 5 | Error Prevention | 3 | No forms on this page; native validation exists one click away on Join |
| 6 | Recognition Rather Than Recall | 4 | Text nav labels throughout, current-page state always visible |
| 7 | Flexibility and Efficiency | n/a | Persuade-mode marketing page; no power-user path expected |
| 8 | Aesthetic and Minimalist Design | 3 | Clean and disciplined, but zero imagery beyond a grayscale logo — sparse for a trust-building page |
| 9 | Error Recovery | 2 | The one reachable "error" state (Join's contact form) always fakes success regardless of whether anything sent |
| 10 | Help and Documentation | n/a | Persuade-mode landing page; no help system expected |
| **Total** | | **24/32** | **Good (75%)** |

Two heuristics scored n/a (Flexibility & Efficiency, Help & Documentation) — genuinely inapplicable to a Persuade-mode marketing page, not a scoring shortcut.

## Design Specificity Verdict — the primary question

**Verdict: the copy and micro-motifs are specific to MBG; the composition and visual system are generic.**

**What's actually authored for this product**: the `[ bracketed monospace ]` tag motif (nav state, eyebrows, value props) reads like scientific/code annotation and is applied with real consistency — it's the one distinctive design decision on the page. The "how we work" claims ("we do not maintain a library of prior deliverables," "the people who plan the work are the people who do it") are concrete, checkable, and match PRODUCT.md's stated anti-hype voice. The `Ticker` vocabulary and testimonials (OpenBiome, BOSLab) are real domain content, not filler.

**What's category-interchangeable**: the page's *shape* — oversized clamp-sized hero headline with one italicized accent word, bordered-button + underline-link CTA pair, 4-item feature grid, 2 testimonial cards, ending on a scrolling word marquee — is the single most common "indie/Framer/YC-startup" landing template in current circulation. Swap "biotech" for "fintech" and the layout is unchanged; none of the differentiation is coming from the *form*, only the words. The huge-bold-headline-with-one-italic-word move is itself a cliché of this exact template genre. The monochrome, off-white, monospace-label aesthetic carries zero biotech-specific visual signal on its own — no scientific/lab motif, no imagery at all beyond a grayscale-filtered logo.

**Deterministic evidence corroborating an unedited AI/Figma-Make scaffold** (Assessment B): `theme.css` still ships the full default shadcn token set (`--chart-1..5`, `--sidebar-*`) unreferenced anywhere in `App.tsx`, and `fonts.css` imports "Instrument Serif" via Google Fonts — loaded on every page view, including About — but never actually applied anywhere in the source (the only fonts in use are DM Sans and DM Mono). The detector's `overused-font` rule caught this independently; it's a real finding, but its practical impact is "wasted network request from leftover scaffold," not a visible aesthetic problem, since the font isn't rendered. Combined with the repo's own commit history ("Add files from Figma Make"), this reads as a page whose surface copy was authored deliberately but whose underlying system was never fully claimed.

**Bottom line**: if you stripped the text, this could be almost any B2B startup's About page. That's the generic-AI-feel driving this whole critique — and it's fixable without touching the copy, which is the page's strongest asset.

## Overall Impression

The writing does real work; the page's shape does none. This is the most common failure mode for AI/template-scaffolded sites: distinctive voice poured into an interchangeable container. The single biggest opportunity is making the *form* signal "MIT biotech consultancy" as clearly as the words already do — right now a visitor could mistake this for a fintech or design-agency landing page at a glance.

## What's Working

1. **The bracket-monospace tag motif** — the one genuinely distinctive, consistently-executed decision on the page; plausibly nods at scientific/technical notation for a biotech-literate audience.
2. **Concrete, non-hype differentiation copy** — specific, checkable claims instead of typical consulting hedge language, matching PRODUCT.md's stated voice.
3. **Disciplined cognitive load** — scannable in under a minute, clear chunking (0 failures on the 8-item checklist), appropriate for a first-impression surface.

## Priority Issues

**[P1] Generic template composition undermines the "not a marketing agency" positioning**
- **Why it matters**: PRODUCT.md explicitly says MBG avoids typical consulting-firm hype — but the visual form (clamp hero + italic accent + 2-CTA row + 4-card grid + testimonial pair + marquee) is the exact shape of a generic startup template. A skeptical biotech founder pattern-matches on form as fast as on words.
- **Fix**: introduce at least one element an unrelated company couldn't reuse unchanged — team photography woven into the About narrative itself (not gated behind the Team tab), a real deliverable artifact, or an MIT/lab-specific visual anchor instead of relying solely on text for specificity.
- **Suggested command**: `/impeccable shape`

**[P1] No closing call-to-action — weak peak-end**
- **Why it matters**: the page ends on `Ticker`, a decorative word marquee with no path to action. Both CTAs live only in the hero; anyone convinced by the testimonials at the bottom has no next step in view and must scroll back up.
- **Fix**: add a closing CTA band after the testimonials restating "get in touch."
- **Suggested command**: `/impeccable clarify`

**[P2] Muted-foreground text fails WCAG AA contrast**
- **Why it matters**: `--muted-foreground` (#7A7870) on `--background` (#F7F5F0) computes to ~4.06:1 — below the 4.5:1 AA threshold. This class is used pervasively at small sizes (10-11px) for nearly every bracket-tag label, section subtitle, and the footer copyright line on this page.
- **Fix**: darken `--muted-foreground` (or reserve it for ≥18px text) to clear 4.5:1.
- **Suggested command**: `/impeccable harden`

**[P2] No URL routing across the SPA**
- **Why it matters**: `page` is component `useState`, not URL-driven. Refresh always resets to About; nothing (Practice Areas, Team, Join) can be bookmarked, shared, or linked directly — a real cost on a site whose job is winning client engagements via shareable links.
- **Fix**: map the existing `Page` type to real (even hash-based) routes.
- **Suggested command**: `/impeccable harden`

**[P3] Scaffold residue and CSS hygiene signal an unfinished build**
- **Why it matters**: a doubled word in the origin-story copy ("weren't good at the the science"); unused shadcn default tokens (`--chart-1..5`, `--sidebar-*`) still in `theme.css`; an unapplied "Instrument Serif" Google Fonts import loaded on every page (detector-confirmed, exit code 2); and an animated `width` on `.ul-link:hover::after` (App.tsx:191, detector-flagged `layout-transition`) that should use `transform: scaleX()` instead. Individually trivial, together they read as leftover AI-scaffold residue at odds with the "rigorous, understated" brand voice PRODUCT.md asks for.
- **Fix**: proofread the origin-story paragraph; strip unused CSS custom properties and the unused font import; swap the underline hover to a transform-based animation.
- **Suggested command**: `/impeccable polish`

## Persona Red Flags

**Jordan (First-Timer)**: the bracket syntax is overloaded — `[ about ]` in the nav is a clickable active-state indicator, but `[ established 2025 ]` in the hero is a static label using the identical visual pattern, giving no reliable way to guess what's clickable. Terms like "commercialization pathways" and "primary diligence" get zero inline definition.

**Riley (Deliberate Stress Tester)**: refresh mid-visit on any non-About page silently dumps Riley back to About with no explanation. Submitting the Join contact form always returns "We got your note" even though it isn't wired to any backend (a known gap per PRODUCT.md) — a false-success pattern with no way to ever surface a real failure.

**Casey (Distracted Mobile User)**: the hero renders as 3 lines at mobile widths (`clamp(2.8rem,7vw,7.5rem)`), pushing both CTAs and all body copy below the fold. Once scrolled past the hero, neither CTA is sticky — re-engaging requires scrolling all the way back up or navigating through the hamburger menu to Join.

**Priya — Biotech Founder Evaluating Whether to Hire MBG** *(project-specific, derived from PRODUCT.md's primary audience)*: technically literate, time-constrained, actively distrustful of consultants who "don't get the science." Red flags: both testimonials are first-name-only with no title, making them hard to verify; About gives no cost anchor at all (pricing lives only on Practice Areas), forcing an extra hop before she can gauge fit; nothing addresses how a *student-run* team handles confidential/proprietary science, a first-order objection this persona would raise; and if she tests the site's one real ask — the contact form — she gets an unconditional success message regardless of whether her message was ever delivered, the worst possible first real interaction with a firm whose pitch is rigor and trustworthiness.

## Minor Observations

- Logo `alt` text reads "MIT Biotech Group" in three places, missing "Consulting" — inconsistent with the brand name in PRODUCT.md.
- Global `scrollbar-width: none` removes a system-status cue (scroll position/page length) site-wide.
- The logo is force-desaturated everywhere (`grayscale(100%)`); if the source asset carries brand color, that equity is discarded uniformly rather than as a deliberate choice.
- `Ticker` runs a 28s infinite CSS animation with no `prefers-reduced-motion` handling anywhere in the file.
- Two redundant Google Fonts `@import` calls load overlapping DM Sans weight ranges (once in `fonts.css`, once inline in `App`'s global style block).
- Detector scan: `App.tsx` alone → exit code 2 (1 finding); full `src` scan → exit code 2 (2 findings); `theme.css` alone → exit code 0 (clean). Both findings trace to code that renders on the About view; nothing was found that's exclusive to Practice/Team/Join.

## Questions to Consider

- If a competitor copied this exact layout and swapped in different words, would anyone notice? Right now, probably not — is that acceptable for a firm whose whole pitch is "we're not like every other consultant"?
- What would it look like to make the *page itself*, not just the copy, feel like it was built by people who read papers for a living?
- Given the page's job is literally "win client engagements," why does it end on a decorative word marquee instead of a second invitation to act?
- Is a first-name-only, title-less testimonial doing enough credibility work for an audience this skeptical?
