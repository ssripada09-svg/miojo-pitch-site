# Miojo Pitch Site

Founder-led investor pitch site for **Ciarra Pardo Co. / Miojo** — one founder, one operating engine, four expressions of the same lifestyle platform.

## Stack

- Next.js 15 (App Router) + React 18
- Tailwind CSS 3.4 + custom Miojo palette tokens
- TypeScript
- Zero animation dependencies — all motion via CSS + IntersectionObserver

## Local dev

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

## Production

```bash
npm run build
npm run start
```

Deploys via Vercel from `main`.

## Architecture

```
app/                    Next.js routes
  layout.tsx            Root layout, fonts, SiteShell
  page.tsx              Single-scroll editorial pitch composition
  globals.css           Tokens + reveal CSS

components/
  motion/               Reveal, Stagger, TextReveal, CountUp, RuleDraw
  primitives/           Section, SectionIntro, Card, ProofChip, CTAButton
  shell/                SiteShell, TopNav, Footer, Wordmark, ScrollProgress
  sections/             Hero, FounderProof, PlatformThesis, InterlockMap, ...
  modules/              FounderBottleneckTransition, MiojoInterlockMap,
                        BeautyDaysJourneyModule, MiojoOSMockupRail,
                        RevenueArchitectureMatrix, ExpansionPathTimeline,
                        FinancialProjectionStoryModule, OrgArchitectureExplorer

content/                Structured pitch copy + data
  founder.ts            Founder pillars + proof chips
  ventures.ts           Mi Ojo / Beauty Days / Peppers & Beli / Residences
  beauty-days.ts        Journey funnel + programmed pillars
  operating.ts          Founder bottleneck + OS mockup data
  economics.ts          Revenue layers, expansion phases, financial path, ask
  org.ts                Layered org architecture
  copy.ts               Hero, thesis, why-now, why-wins, closing copy

lib/cn.ts               className helper
```

## Strategic hierarchy (locked)

1. Ciarra is the scarce asset
2. Miojo is one interlocking founder-led platform
3. Beauty Days is the clearest near-term scalable wedge
4. Miojo OS / Miojo TV are operating + continuity layers — never the protagonist
5. Revenue + expansion logic make the platform investable

## Anti-patterns this build refuses

- AI-first / SaaS dashboard framing
- Generic beauty ecommerce
- Pharos enterprise contamination
- Slide-deck literal translation
- Over-animation / decorative interactions
