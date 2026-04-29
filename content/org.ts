export type OrgRole = {
  id: string;
  title: string;
  detail: string;
};

export type OrgLayer = {
  id: string;
  label: string;
  caption: string;
  tone: "forest" | "gold" | "terracotta" | "olive" | "char";
  roles: OrgRole[];
};

export const ORG_LAYERS: OrgLayer[] = [
  {
    id: "founder",
    label: "Founder layer",
    caption: "Taste, relationships, final calls.",
    tone: "forest",
    roles: [
      {
        id: "ciarra",
        title: "Ciarra Pardo · Founder + Creative",
        detail:
          "Sets the standard. Holds the relationships. Decides which expressions go forward.",
      },
      {
        id: "co-founder",
        title: "Operating co-founder",
        detail:
          "Translates founder intent into systems, hires, and commercial structure across the four ventures.",
      },
    ],
  },
  {
    id: "platform",
    label: "Platform crews",
    caption: "Each venture has a dedicated crew with shared infrastructure.",
    tone: "gold",
    roles: [
      {
        id: "miojo-creative",
        title: "Mi Ojo · Creative + studio",
        detail:
          "Brand strategy, identity, and original IP. Source of taste-rich work for the rest of the platform.",
      },
      {
        id: "beauty-days",
        title: "Beauty Days · Community + events",
        detail:
          "Festival production, sponsor partnerships, year-round membership programming.",
      },
      {
        id: "peppers",
        title: "Peppers & Beli · Hospitality + CPG",
        detail:
          "Restaurant operations, members club, CPG line, wholesale relationships.",
      },
      {
        id: "residences",
        title: "Residences · Wellness travel",
        detail:
          "Property partnerships, retreat programming, hospitality operations.",
      },
    ],
  },
  {
    id: "os",
    label: "Miojo OS · operating support",
    caption: "Memory, intelligence, scheduling, and knowledge — humans-in-the-loop.",
    tone: "terracotta",
    roles: [
      {
        id: "memory",
        title: "Founder memory + knowledge",
        detail:
          "Captures the standard so it can be re-applied — briefs, references, decisions, taste choices.",
      },
      {
        id: "signal",
        title: "Cultural signal detection",
        detail:
          "Surface-level trend feed mapped to Miojo pillars; suggests moves, founder makes calls.",
      },
      {
        id: "ops",
        title: "Coordination + scheduling",
        detail:
          "Cross-crew operations layer — calendars, deliverables, partner flows.",
      },
    ],
  },
];
