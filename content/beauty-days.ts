export type JourneyStage = {
  id: string;
  title: string;
  audienceCount: string;
  audienceLabel: string;
  whatHappens: string;
  proof: string;
  monetization: string[];
};

export const BEAUTY_DAYS_JOURNEY: JourneyStage[] = [
  {
    id: "discover",
    title: "Discover",
    audienceCount: "120K",
    audienceLabel: "interested audience",
    whatHappens:
      "Cultural launch waves — editorial, talent partnerships, owned channels — pull a beauty/wellness-curious audience into the Miojo world.",
    proof:
      "Founder's existing reach + partner amplification creates demand without paid burn.",
    monetization: ["Top-of-funnel data", "Partner co-marketing"],
  },
  {
    id: "rsvp",
    title: "RSVP",
    audienceCount: "30K",
    audienceLabel: "registered intent",
    whatHappens:
      "RSVP, waitlist, and presale convert interest into a known audience — first-party, opt-in, contactable.",
    proof:
      "A tier-able audience: free signups, paying ticket holders, sponsor-eligible cohorts.",
    monetization: ["Email + SMS list", "Sponsor data rights"],
  },
  {
    id: "attend",
    title: "Attend",
    audienceCount: "8K",
    audienceLabel: "in-person attendees",
    whatHappens:
      "Multi-day festival programming — pillar zones, brand activations, talent moments. The strongest demonstration of Miojo taste at scale.",
    proof:
      "High-margin tickets, sponsor packages, and proof for the rest of the platform that the audience is real.",
    monetization: ["Tickets", "Sponsor packages", "Activation fees"],
  },
  {
    id: "activate",
    title: "Activate",
    audienceCount: "6K",
    audienceLabel: "active members",
    whatHappens:
      "Year-round programming converts attendees into members — content drops, IRL meetups, partner perks, OS access.",
    proof:
      "Membership replaces episodic attention with subscription economics.",
    monetization: ["Membership dues", "Premium tiers", "Partner perk margin"],
  },
  {
    id: "compound",
    title: "Compound",
    audienceCount: "+",
    audienceLabel: "ecosystem fly-back",
    whatHappens:
      "Members become Peppers & Beli regulars, Residence guests, and Mi Ojo brand customers. Sponsor data feeds Miojo OS for the next cycle.",
    proof:
      "One audience monetized across four expressions — the platform thesis becomes legible.",
    monetization: ["Cross-venture LTV", "Sponsor renewals at higher tiers", "Compounding data"],
  },
];

export const BEAUTY_DAYS_PILLARS = [
  {
    id: "skin",
    label: "Skin",
    note: "Editorial-led skincare programming",
  },
  {
    id: "scent",
    label: "Scent",
    note: "Fragrance, ritual, sensory",
  },
  {
    id: "body",
    label: "Body",
    note: "Wellness, movement, recovery",
  },
  {
    id: "spirit",
    label: "Spirit",
    note: "Sound, meditation, longer-form",
  },
  {
    id: "table",
    label: "Table",
    note: "Hospitality + culinary programming",
  },
];
