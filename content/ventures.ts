export type Venture = {
  id: string;
  name: string;
  role: string;
  eyebrow: string;
  pitch: string;
  proof: string;
  channels: string[];
  audience: string;
  monetization: string[];
  tone: "forest" | "gold" | "terracotta" | "olive";
};

export const VENTURES: Venture[] = [
  {
    id: "mi-ojo",
    name: "Mi Ojo",
    role: "The taste engine",
    eyebrow: "Creative house · Studio",
    pitch:
      "Where Ciarra's taste becomes brand-building IP — concepts, identity, campaigns, and original brands that the rest of the platform draws from.",
    proof:
      "Operating system for taste — a creative studio, an incubator, and the source of Miojo's intellectual capital.",
    channels: ["Brand strategy", "Identity systems", "Campaign craft", "Original IP"],
    audience: "Founders, brands, and Miojo-owned ventures",
    monetization: ["Studio retainers", "Brand equity stakes", "Licensing"],
    tone: "forest",
  },
  {
    id: "beauty-days",
    name: "Beauty Days",
    role: "The community wedge",
    eyebrow: "Festival · Community OS",
    pitch:
      "A multi-day cultural festival that becomes a year-round community engine — sponsors, members, and brand partners running on shared infrastructure.",
    proof:
      "Convenes the audience that every other Miojo expression compounds against. Tickets, sponsors, membership, content — one funnel.",
    channels: ["Live events", "Membership", "Sponsor partnerships", "Editorial / TV"],
    audience: "Beauty, wellness, and culture super-consumers",
    monetization: ["Tickets", "Sponsor packages", "Membership", "Brand activations"],
    tone: "gold",
  },
  {
    id: "peppers-beli",
    name: "Peppers & Beli",
    role: "The hospitality + commerce expression",
    eyebrow: "Restaurant · Membership · CPG",
    pitch:
      "Restaurant + membership + small-batch CPG — Ciarra's domestic taste turned into hospitality and product surfaces with platform leverage.",
    proof:
      "A repeatable template: hospitality flagship, members-only programming, branded CPG line. Plays back into Miojo OS commerce.",
    channels: ["Flagship restaurant", "Members club", "Retail CPG", "Wholesale"],
    audience: "Hospitality regulars, CPG buyers, food-culture press",
    monetization: ["F&B", "Membership dues", "Product margin", "Wholesale"],
    tone: "terracotta",
  },
  {
    id: "residences",
    name: "The Residences",
    role: "The continuity asset",
    eyebrow: "Wellness travel · Hospitality",
    pitch:
      "A wellness-travel and residency hospitality concept — the highest-margin, most asset-backed expression of the Miojo world.",
    proof:
      "Where Beauty Days members and Peppers & Beli regulars graduate to. Multi-night stays, programming, and continuity.",
    channels: ["Stays", "Retreat programming", "Owned + partnered properties"],
    audience: "Members and high-LTV community",
    monetization: ["Nightly rate", "Retreat packages", "Real estate appreciation"],
    tone: "olive",
  },
];
