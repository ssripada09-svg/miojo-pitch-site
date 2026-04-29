export type RevenueLayer = {
  id: string;
  layer: string;
  label: string;
  driver: string;
  detail: string;
  contribution: number; // 0-100 illustrative share
  tone: "forest" | "gold" | "terracotta" | "olive";
};

export const REVENUE_LAYERS: RevenueLayer[] = [
  {
    id: "membership",
    layer: "01",
    label: "Community membership",
    driver: "Beauty Days members + cross-venture access",
    detail:
      "Predictable annual subscription. The base layer that turns episodic attention into a renewable contract.",
    contribution: 22,
    tone: "gold",
  },
  {
    id: "sponsor",
    layer: "02",
    label: "Sponsor + brand partners",
    driver: "Pillar-aligned packages across festival + year-round",
    detail:
      "Brand partners pay to access the audience Miojo earned — at festival, in members-only programming, and inside hospitality.",
    contribution: 28,
    tone: "terracotta",
  },
  {
    id: "experiences",
    layer: "03",
    label: "Experiences + hospitality",
    driver: "Beauty Days tickets, Peppers & Beli, Residences",
    detail:
      "High-margin live and hospitality revenue. The most defensible because it requires real-world infrastructure and taste.",
    contribution: 26,
    tone: "olive",
  },
  {
    id: "commerce",
    layer: "04",
    label: "Brand incubation + commerce",
    driver: "Mi Ojo IP, original brands, CPG, equity stakes",
    detail:
      "The compounding asset — every brand built on the platform creates equity value, not just revenue.",
    contribution: 24,
    tone: "forest",
  },
];

export type ExpansionPhase = {
  id: string;
  phase: string;
  window: string;
  headline: string;
  goLive: string[];
  meaning: string;
};

export const EXPANSION_PHASES: ExpansionPhase[] = [
  {
    id: "p1",
    phase: "Phase 01",
    window: "Year 1",
    headline: "Prove the wedge",
    goLive: [
      "Beauty Days flagship + community OS v1",
      "Mi Ojo studio operating",
      "Peppers & Beli concept in soft-launch",
    ],
    meaning:
      "Show the wedge converts. One founder, one festival, one engine — investable on its own.",
  },
  {
    id: "p2",
    phase: "Phase 02",
    window: "Year 2",
    headline: "Deepen the operating layer",
    goLive: [
      "Beauty Days Year-2 with member economy",
      "Miojo OS internal release across crews",
      "Peppers & Beli flagship + CPG soft-line",
    ],
    meaning:
      "The platform thesis becomes legible. Membership economics, recurring sponsors, repeatable taste IP.",
  },
  {
    id: "p3",
    phase: "Phase 03",
    window: "Year 3",
    headline: "Extend the expressions",
    goLive: [
      "Residences pilot programming",
      "Mi Ojo branded original IP into market",
      "Sponsor renewal at upgraded tiers",
    ],
    meaning:
      "Expressions compound. Same audience monetized across four surfaces. Platform compounding becomes visible.",
  },
  {
    id: "p4",
    phase: "Phase 04",
    window: "Year 4-5",
    headline: "Compound and own",
    goLive: [
      "Owned property line for Residences",
      "Mi Ojo equity portfolio of branded ventures",
      "Beauty Days franchise model abroad",
    ],
    meaning:
      "Platform owns its own infrastructure. Real estate, IP equity, and franchise economics — all under one founder.",
  },
];

export type FinancialPhase = {
  id: string;
  year: string;
  revenue: number; // $M illustrative
  contributors: { label: string; value: number; tone: "forest" | "gold" | "terracotta" | "olive" }[];
  driver: string;
};

export const FINANCIAL_PHASES: FinancialPhase[] = [
  {
    id: "y1",
    year: "Year 1",
    revenue: 1.6,
    contributors: [
      { label: "Beauty Days", value: 0.8, tone: "gold" },
      { label: "Mi Ojo studio", value: 0.5, tone: "forest" },
      { label: "Peppers & Beli", value: 0.3, tone: "terracotta" },
    ],
    driver: "Wedge + studio cash. Festival proves out, studio carries fixed costs.",
  },
  {
    id: "y2",
    year: "Year 2",
    revenue: 4.4,
    contributors: [
      { label: "Beauty Days", value: 1.9, tone: "gold" },
      { label: "Mi Ojo studio", value: 0.8, tone: "forest" },
      { label: "Peppers & Beli", value: 1.3, tone: "terracotta" },
      { label: "Residences", value: 0.4, tone: "olive" },
    ],
    driver: "Membership flywheel begins. Sponsor renewals at higher tier.",
  },
  {
    id: "y3",
    year: "Year 3",
    revenue: 8.2,
    contributors: [
      { label: "Beauty Days", value: 3.1, tone: "gold" },
      { label: "Mi Ojo studio", value: 1.4, tone: "forest" },
      { label: "Peppers & Beli", value: 2.4, tone: "terracotta" },
      { label: "Residences", value: 1.3, tone: "olive" },
    ],
    driver: "Platform breakeven. Cross-venture LTV becomes visible to sponsors.",
  },
  {
    id: "y4",
    year: "Year 4",
    revenue: 12.0,
    contributors: [
      { label: "Beauty Days", value: 4.0, tone: "gold" },
      { label: "Mi Ojo studio", value: 2.0, tone: "forest" },
      { label: "Peppers & Beli", value: 3.4, tone: "terracotta" },
      { label: "Residences", value: 2.6, tone: "olive" },
    ],
    driver: "All four expressions contribute. Compounding kicks in.",
  },
];

export const ASK = {
  amount: "$6.5M",
  round: "Seed",
  runway: "24 months",
  uses: [
    {
      label: "Beauty Days Year-2 + member OS",
      pct: 38,
      detail: "Festival economics, community OS build, year-round programming.",
    },
    {
      label: "Mi Ojo studio + Miojo OS",
      pct: 28,
      detail: "Studio team, OS engineering, taste-IP development.",
    },
    {
      label: "Peppers & Beli flagship + CPG",
      pct: 18,
      detail: "Hospitality buildout, soft-line CPG, commerce surface.",
    },
    {
      label: "Residences pilot + general",
      pct: 16,
      detail: "Wellness travel pilot, partnerships, working capital.",
    },
  ],
};
