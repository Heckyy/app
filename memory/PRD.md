# PRD — Alpha One Studio (Art Direction Reset)

## Original Problem Statement
Redesign the Alpha One Studio website from the ground up as a distinctive, design-led software house site — editorial composition, realistic hand-built product interfaces, no AI-slop patterns, restrained palette (#171817 / #F5F4EF / #858780 / #DADAD3 / #353733 / #D6FF6B), one page with anchor navigation, six clearly-labeled Concept Projects, five-stage process timeline, FAQ accordion, WhatsApp contact (configurable number, prefilled message), motion that is subtle and reduced-motion-safe.

## User Decisions (from ask_human)
- WhatsApp number: clearly-marked placeholder in one config line (`frontend/src/config.js` → `SITE.whatsappNumber`, currently `15550192834`).
- Contact form: opens WhatsApp with the message prefilled (nothing stored).
- Portfolio interfaces: hand-built HTML/CSS (chosen default; user skipped the question).

## Architecture
- Frontend: React 19 (CRA) + Tailwind, framer-motion (masked hero reveal, reveals, accordion, layout filter animation), lenis smooth scrolling (disabled under prefers-reduced-motion), lucide-react icons. No router — single page with IntersectionObserver active-section nav.
- Backend: untouched template FastAPI (only /api/ health used).
- SEO (farm-seo-setup skill): static head (title, description, robots, OG/Twitter without absolute URLs — no confirmed production domain), Organization + FAQPage JSON-LD, noscript fallback, robots.txt with AI-crawler groups, llms.txt, favicon.svg + apple-touch-icon.png (original delta mark). sitemap/canonical/og:image intentionally omitted pending a production domain.
- Design system: shared `.mock` CSS component classes in index.css power all six product-interface mockups + hero console; tokens mapped in tailwind.config.js.

## Implemented (2026-10-21)
- Sampoerna University (second portfolio piece): added as Selected Work #02 — dual device mockup composition (desktop screenshot in Studio Display frame + mobile screenshot in overlapping iPhone frame), served locally as optimized WebP (134KB + 100KB), lime "Production Project" badge, category "Company Profile & Admissions Website", new filter "Company Profile". Concepts renumbered 03–08; section headline/intro and footer disclaimer updated ("Two production builds, six concept studies"). Mobile overlap spacing fixed so the phone never covers text.
- Raw League CMS (user's real first portfolio piece): added as Selected Work #01 — actual product screenshot served locally (public/raw-league-cms.png, 128KB) inside a hand-built Apple Studio Display mockup (aluminum frame + stand), lime "Production Project" badge, case-study copy from the user's description (CMS to change frontend content), filter category "ops". Concepts renumbered 02–07; section headline/intro and footer disclaimer updated to distinguish production work from concept studies.
- Navbar: persistent, active-section lime indicator, full-screen mobile drawer (z-[45], outside header to avoid compositing artifacts).
- Hero: masked line-by-line headline reveal, supporting copy, both CTAs, hand-built "Apex Fulfillment — Operations" console (KPIs, dispatch queue, exceptions, dock capacity), subtle scroll parallax, meta strip.
- Slow editorial marquee (48s, pauses on hover, aria-hidden duplicate half).
- Capabilities: light editorial 6-row split grid (index / title+serif tagline / description / deliverables).
- Selected Work: filterable (3 categories + All), six concept projects with varied 12-col editorial spans, each with problem/solution/features/direction + bespoke interface mockup (Velox Fleet, Strata Expedition, Haven, GastroFlow, Nexus, Aura Privé).
- Process: 5-stage connected timeline — horizontal desktop, vertical mobile.
- About: serif manifesto, approach copy, engagement models line, three pillars.
- FAQ: working animated accordion (5 Q&As matching JSON-LD).
- Contact: form → wa.me prefilled (name/email/company/type/timeline/brief), direct WhatsApp button, placeholder-number disclosure note.
- Footer (concept-work disclaimer), floating WhatsApp FAB (discreet, icon-only on mobile).

## Verification Done
Backend /api/ 200; no horizontal overflow at 390/1440; desktop + mobile screenshot passes of every section; filter, accordion, anchors, drawer, wa.me hrefs all exercised; SEO surface (title/description/robots/JSON-LD/noscript/robots.txt/llms.txt/favicons) verified in served HTML; no scaffold-default or preview-host leaks.

## Backlog
- P0: Replace placeholder WhatsApp number (config.js) before launch.
- P1: og:image share card + canonical/sitemap.xml once production domain confirmed (then redeploy + enable search-crawling toggle + live re-verify).
- P1: Case-study detail pages for the six concept projects.
- P2: Optional email handoff alongside WhatsApp; CMS-less content file for copy edits.
