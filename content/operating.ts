export const FOUNDER_BOTTLENECK = {
  todayLabel: "Today",
  todayCaption:
    "Every decision routes through Ciarra. Brilliant for taste — fragile for scale.",
  todayNodes: [
    { id: "talent", label: "Talent + creative" },
    { id: "brand", label: "Brand partners" },
    { id: "ops", label: "Day-to-day ops" },
    { id: "press", label: "Press + culture" },
    { id: "events", label: "Live events" },
    { id: "deals", label: "Deals + capital" },
  ],
  withMiojoLabel: "With Miojo OS",
  withMiojoCaption:
    "Ciarra stays in judgment, relationships, and taste. The OS absorbs coordination, intelligence, and repetition.",
  withMiojoLayers: [
    {
      id: "founder",
      label: "Founder layer",
      role: "Taste, relationships, final calls",
      tone: "forest" as const,
    },
    {
      id: "platform",
      label: "Platform crews",
      role: "Brand, community, hospitality, commerce",
      tone: "gold" as const,
    },
    {
      id: "os",
      label: "Miojo OS",
      role: "Memory, signal detection, scheduling, knowledge",
      tone: "terracotta" as const,
    },
  ],
};

export const OS_SCREENS = [
  {
    id: "founder-command",
    title: "Founder Command",
    subtitle: "One pane for the platform she actually runs",
    bullets: [
      "What's live across all four ventures",
      "Who's waiting on a decision from her",
      "What culture is signaling this week",
    ],
    tone: "forest" as const,
  },
  {
    id: "community-os",
    title: "Beauty Days · Community OS",
    subtitle: "RSVP, members, sponsors — same surface",
    bullets: [
      "Live waitlist and ticket health",
      "Member retention by cohort",
      "Sponsor activation status by zone",
    ],
    tone: "gold" as const,
  },
  {
    id: "trend-intel",
    title: "Trend Intelligence",
    subtitle: "Cultural signal detection that maps to her playbook",
    bullets: [
      "Pillar-tagged trend feeds (skin, scent, body, spirit, table)",
      "Press + creator velocity scores",
      "Suggested moves with founder-judgment gate",
    ],
    tone: "terracotta" as const,
  },
  {
    id: "interlock-view",
    title: "Interlock View",
    subtitle: "How the four ventures pass audience to each other",
    bullets: [
      "Cross-venture LTV per cohort",
      "Sponsor flow-through across expressions",
      "OS-recommended next move per audience segment",
    ],
    tone: "olive" as const,
  },
  {
    id: "stay-flow",
    title: "Residences · Stay Flow",
    subtitle: "Where the highest-LTV members land",
    bullets: [
      "Member-priority calendar",
      "Retreat programming pipeline",
      "Property + partner inventory health",
    ],
    tone: "forest" as const,
  },
];
