import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Brain,
  Building2,
  ChevronRight,
  CircleDollarSign,
  Command,
  Compass,
  Crown,
  Gem,
  HeartHandshake,
  Layers3,
  LineChart,
  Map,
  RadioTower,
  Store,
  Users,
  Waves,
} from "lucide-react";

type Pillar = {
  name: string;
  role: string;
  domains: string[];
  note: string;
};

type Proof = {
  value: string;
  label: string;
  detail: string;
};

const nav = [
  ["Overview", "hero"],
  ["Platform", "platform"],
  ["Beauty Days", "beauty-days"],
  ["Operating Layer", "operating-layer"],
  ["OS Proof", "os-proof"],
  ["Expansion", "expansion"],
];

const pillars: Pillar[] = [
  {
    name: "Mi Ojo",
    role: "Creative and strategic brain",
    domains: ["brand", "story", "advisory"],
    note: "Turns Ciarra’s taste into briefs, launches, partner narratives, and future brand IP.",
  },
  {
    name: "Beauty Days",
    role: "Community and membership wedge",
    domains: ["beauty", "community", "sponsors"],
    note: "The clearest near-term proof that Miojo can aggregate audience, partners, data, and repeat engagement.",
  },
  {
    name: "Peppers & Bellies",
    role: "Food, hosting, culture",
    domains: ["food", "hospitality", "editorial commerce"],
    note: "Extends the platform into table culture, culinary programming, products, and intimate experiences.",
  },
  {
    name: "Residences",
    role: "Physical embodiment",
    domains: ["wellness", "place", "stays"],
    note: "Makes the Miojo world bookable, spatial, and premium through retreats, residencies, and wellness stays.",
  },
];

const founderProof: Proof[] = [
  {
    value: "Fenty",
    label: "Proven playbook",
    detail: "Founder-grade experience around celebrity, product, retail, culture, and launch execution.",
  },
  {
    value: "$2.3T",
    label: "Market context",
    detail: "Beauty and fashion are massive, but the infrastructure for taste-led venture building remains underbuilt.",
  },
  {
    value: "1 engine",
    label: "Many expressions",
    detail: "Miojo is not a bundle of ideas. It is a shared cultural, community, and commercial operating system.",
  },
];

const beautyJourney = [
  ["RSVP", "Live community demand enters the platform."],
  ["Attend", "IRL energy becomes trust, memory, and social proof."],
  ["Activate", "Sponsors, creators, and members create measurable touchpoints."],
  ["Retain", "Event energy becomes app, membership, content, and city-circle behavior."],
  ["Compound", "Data informs brands, partnerships, products, and future experiences."],
];

const crews = [
  {
    title: "Founder Command",
    subtitle: "Keeps the whole ecosystem coherent.",
    items: ["daily brief", "relationship memory", "decision log"],
  },
  {
    title: "Cultural Signal",
    subtitle: "Turns timing into repeatable advantage.",
    items: ["trend radar", "whitespace", "collaborator scans"],
  },
  {
    title: "Brand Studio",
    subtitle: "Accelerates story, positioning, and launches.",
    items: ["narrative", "launch briefs", "partner language"],
  },
  {
    title: "Community OS",
    subtitle: "Converts Beauty Days into year-round intelligence.",
    items: ["segments", "sponsor fit", "retention loops"],
  },
];

const revenueLayers = [
  ["Community", "memberships, city circles, programming access"],
  ["Partners", "sponsors, brand worlds, Beauty Days extensions"],
  ["Commerce", "curated kits, affiliate, future owned products"],
  ["Experiences", "salons, dinners, retreats, wellness stays"],
  ["IP", "new brands, content formats, data-informed launches"],
];

const expansion = [
  {
    phase: "01",
    title: "Prove the wedge",
    text: "Beauty Days becomes the first measurable community, sponsor, and membership loop.",
  },
  {
    phase: "02",
    title: "Install the operating layer",
    text: "Miojo OS captures context, signals, briefs, partner memory, and execution standards.",
  },
  {
    phase: "03",
    title: "Extend the platform",
    text: "Mi Ojo, food, wellness stays, commerce, and partner programming compound around the same audience intelligence.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mono mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0F7A7C]">
      <span className="h-px w-12 bg-[#0F7A7C]" />
      {children}
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl lg:mx-0">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#151515] md:text-6xl">
        {title}
      </h2>
      <p className="mt-6 text-lg leading-8 text-[#6A625C] md:text-xl">{children}</p>
    </div>
  );
}

function TopNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#F6F1E8]/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#hero" className="flex items-center gap-3" aria-label="Miojo home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0B0F12] text-sm font-semibold text-[#1FB6B8]">
            M
          </span>
          <span className="font-semibold tracking-[-0.03em]">Miojo</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-[#6A625C] lg:flex">
          {nav.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="transition hover:text-[#151515]">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-[#151515] px-4 py-2 text-sm font-medium text-[#FBF7F0] transition hover:bg-[#0F7A7C]"
        >
          Request walkthrough
        </a>
      </div>
    </header>
  );
}

function ProofChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="mono rounded-full border border-black/10 bg-white/70 px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-[#2F2B28]">
      {children}
    </span>
  );
}

function HeroObject() {
  return (
    <div className="dark-stage relative overflow-hidden rounded-[2rem] p-5 md:p-7">
      <div className="relative z-10">
        <div className="mb-5 flex items-center justify-between">
          <span className="mono text-[10px] uppercase tracking-[0.2em] text-[#1FB6B8]">
            Founder operating layer
          </span>
          <span className="rounded-full border border-[#1FB6B8]/30 bg-[#1FB6B8]/10 px-3 py-1 text-xs text-[#A5F3F4]">
            human-led
          </span>
        </div>
        <div className="rounded-3xl border border-white/12 bg-white/[0.06] p-5">
          <div className="flex items-center gap-3">
            <Crown className="h-5 w-5 text-[#E68A3F]" />
            <div>
              <div className="text-lg font-semibold">Ciarra / Miojo</div>
              <div className="text-sm text-white/55">taste, timing, relationships, standards</div>
            </div>
          </div>
        </div>
        <svg className="my-2 h-14 w-full" viewBox="0 0 480 70" aria-hidden="true">
          <path className="trace-line" d="M240 0 C240 28 92 34 92 70" fill="none" stroke="#1FB6B8" strokeWidth="1.4" />
          <path className="trace-line" d="M240 0 C240 28 240 34 240 70" fill="none" stroke="#1FB6B8" strokeWidth="1.4" />
          <path className="trace-line" d="M240 0 C240 28 388 34 388 70" fill="none" stroke="#1FB6B8" strokeWidth="1.4" />
        </svg>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            ["Mi Ojo", "story + launch"],
            ["Beauty Days", "community + sponsors"],
            ["Residences", "place + wellness"],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
              <div className="font-medium">{title}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.16em] text-white/45">{text}</div>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-[#E68A3F]/30 bg-[#E68A3F]/10 p-4 text-sm text-[#F1C38A]">
          AI does not create the taste. It remembers, coordinates, scans, and compresses execution around the founder’s standard.
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="anchor-offset section-shell px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal">
          <Eyebrow>Miojo × Pharos</Eyebrow>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-[#151515] md:text-7xl lg:text-8xl">
            A founder-led lifestyle platform built for <span className="fraunces text-[#0F7A7C]">taste with leverage.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-[#5F574F] md:text-2xl md:leading-9">
            Miojo turns Ciarra Pardo’s proven cultural judgment into repeatable enterprise value across community, commerce, wellness, hospitality, and brand creation.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6A625C]">
            AI is the operating layer. It scales memory, timing, signal, and execution without replacing the founder’s authorship.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ProofChip>founder first</ProofChip>
            <ProofChip>one platform</ProofChip>
            <ProofChip>human in command</ProofChip>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#platform" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#151515] px-6 py-3 text-sm font-semibold text-[#FBF7F0] transition hover:bg-[#0F7A7C]">
              View the platform model <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#os-proof" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-semibold text-[#151515] transition hover:bg-white">
              Explore Miojo OS proof
            </a>
          </div>
        </div>
        <HeroObject />
      </div>
    </section>
  );
}

function FounderProofSection() {
  return (
    <section id="founder" className="section-shell px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="01 / founder proof" title={<>The scarce asset is not the software. It is Ciarra’s judgment.</>}>
          The site starts with proof because family offices do not underwrite abstract AI. They underwrite rare operators with taste, network, timing, and execution credibility.
        </SectionIntro>
        <div className="grid gap-5 md:grid-cols-3">
          {founderProof.map((item) => (
            <div key={item.label} className="paper-card rounded-[1.75rem] p-7">
              <div className="text-5xl font-semibold tracking-[-0.05em] text-[#151515]">{item.value}</div>
              <div className="mono mt-5 text-xs uppercase tracking-[0.18em] text-[#0F7A7C]">{item.label}</div>
              <p className="mt-4 leading-7 text-[#6A625C]">{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-[2rem] bg-[#151515] p-8 text-[#FBF7F0] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="mono text-xs uppercase tracking-[0.18em] text-[#E68A3F]">The Fenty lesson</div>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">Cultural authority is valuable when it can become execution.</h3>
            </div>
            <p className="text-lg leading-8 text-white/70">
              Miojo is not asking investors to believe in taste as an abstraction. It is positioning Ciarra’s proven brand-building pattern as the basis for a broader platform: one that can remember, coordinate, launch, measure, and compound.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformThesisSection() {
  return (
    <section id="platform" className="anchor-offset section-shell px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="02 / platform thesis" title={<>One engine, multiple expressions.</>}>
          The connective tissue is not category adjacency. It is founder taste, cultural signal, community formation, storytelling, and commercialization infrastructure.
        </SectionIntro>
        <div className="grid gap-5 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <article key={pillar.name} className="group rounded-[1.75rem] border border-black/10 bg-[#FBF7F0] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-2xl hover:shadow-black/10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B0F12] text-[#1FB6B8]">
                <Layers3 className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">{pillar.name}</h3>
              <div className="mt-2 text-sm font-medium text-[#0F7A7C]">{pillar.role}</div>
              <p className="mt-5 leading-7 text-[#6A625C]">{pillar.note}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {pillar.domains.map((domain) => (
                  <span key={domain} className="mono rounded-full border border-black/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-[#6A625C]">
                    {domain}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InterlockMapSection() {
  return (
    <section id="interlock" className="section-shell px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="03 / interlock map" title={<>Miojo becomes legible when the overlaps are visible.</>}>
          The platform is not a holding company. It is a shared engine where community, commerce, culture, wellness, hospitality, and creative strategy feed one another.
        </SectionIntro>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="dark-stage relative min-h-[540px] overflow-hidden rounded-[2rem] p-4 md:p-6">
            <Image
              src="/assets/generated/miojo-interlock.svg"
              alt="Miojo interlock map showing one platform across creative, community, commerce, hospitality, wellness and culture"
              width={960}
              height={640}
              className="relative z-10 h-full min-h-[500px] w-full rounded-[1.5rem] object-cover"
            />
            <div className="hidden">
              <div className="absolute h-[360px] w-[360px] rounded-full border border-[#1FB6B8]/30 md:h-[430px] md:w-[430px]" />
              <div className="absolute h-[250px] w-[250px] rounded-full border border-[#E68A3F]/20 md:h-[310px] md:w-[310px]" />
              {[
                ["Creative", "top-[8%] left-[38%]"],
                ["Community", "top-[30%] right-[5%]"],
                ["Commerce", "bottom-[16%] right-[12%]"],
                ["Hospitality", "bottom-[10%] left-[10%]"],
                ["Wellness", "top-[30%] left-[4%]"],
                ["Culture", "bottom-[43%] left-[38%]"],
              ].map(([label, pos]) => (
                <div key={label} className={`absolute ${pos} rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm text-white/70`}>
                  {label}
                </div>
              ))}
              <div className="relative z-20 grid h-40 w-40 place-items-center rounded-full border border-[#1FB6B8]/40 bg-[#0B0F12]/90 text-center shadow-2xl shadow-[#1FB6B8]/10">
                <div>
                  <div className="text-xl font-semibold">Ciarra / Miojo</div>
                  <div className="mono mt-2 text-[10px] uppercase tracking-[0.16em] text-[#1FB6B8]">shared engine</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid content-center gap-4">
            {pillars.map((pillar, index) => (
              <details key={pillar.name} open={index === 0} className="group rounded-3xl border border-black/10 bg-white/70 p-5 open:bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <div>
                    <div className="mono text-[10px] uppercase tracking-[0.18em] text-[#0F7A7C]">0{index + 1} / {pillar.role}</div>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">{pillar.name}</h3>
                  </div>
                  <ChevronRight className="h-5 w-5 transition group-open:rotate-90" />
                </summary>
                <p className="mt-4 leading-7 text-[#6A625C]">{pillar.note}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyNowSection() {
  return (
    <section id="why-now" className="section-shell px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#ECE4D8] p-7 md:p-12">
        <SectionIntro eyebrow="04 / why now" title={<>The opportunity is not more content. It is continuity.</>}>
          Modern lifestyle value is moving toward hybrid systems: IRL community, digital memory, premium curation, partner commerce, and AI-enabled operations.
        </SectionIntro>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            [Compass, "Founder timing", "A proven operator can now turn personal playbook into company infrastructure."],
            [Users, "Community appetite", "Premium audiences want belonging, not only products."],
            [RadioTower, "Digital continuity", "Events and experiences need persistent surfaces between moments."],
            [Brain, "AI leverage", "Memory, signal, and coordination can now scale without flattening taste."],
          ].map(([Icon, title, text]) => {
            const I = Icon as typeof Compass;
            return (
              <div key={title as string} className="rounded-3xl bg-white/70 p-6">
                <I className="h-6 w-6 text-[#0F7A7C]" />
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em]">{title as string}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6A625C]">{text as string}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BeautyDaysWedgeSection() {
  return (
    <section id="beauty-days" className="anchor-offset section-shell px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="05 / wedge" title={<>Beauty Days is the first platform proof node.</>}>
          It has the strongest bridge between live community, sponsor relevance, membership logic, first-party data, and repeatable year-round engagement.
        </SectionIntro>
        <div className="rounded-[2rem] border border-black/10 bg-white p-5 md:p-8">
          <Image
            src="/assets/generated/beauty-days-journey.svg"
            alt="Beauty Days journey from RSVP to community, sponsor value and platform intelligence"
            width={960}
            height={360}
            className="mb-6 w-full rounded-[1.5rem] border border-black/10"
          />
          <div className="grid gap-4 lg:grid-cols-5">
            {beautyJourney.map(([step, text], index) => (
              <div key={step} className="relative rounded-3xl bg-[#F6F1E8] p-5">
                <div className="mono text-[11px] uppercase tracking-[0.18em] text-[#0F7A7C]">0{index + 1}</div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">{step}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6A625C]">{text}</p>
                {index < beautyJourney.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 text-[#E68A3F] lg:block" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OperatingLayerSection() {
  return (
    <section id="operating-layer" className="anchor-offset section-shell px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="06 / operating layer" title={<>The bottleneck becomes an operating system.</>}>
          AI supports the work Ciarra should not have to hold manually: memory, synthesis, signal, coordination, and repeatable execution.
        </SectionIntro>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="paper-card rounded-[2rem] p-6 md:p-8">
            <Image
              src="/assets/generated/founder-bottleneck.svg"
              alt="Founder bottleneck transforming into a human-led operating layer"
              width={960}
              height={520}
              className="mb-5 w-full rounded-[1.5rem] border border-black/10"
            />
            <div className="grid gap-4">
              <div className="rounded-3xl border border-[#E68A3F]/30 bg-[#E68A3F]/10 p-5">
                <div className="mono text-[10px] uppercase tracking-[0.18em] text-[#9C5A22]">Today</div>
                <h3 className="mt-3 text-2xl font-semibold">Founder bandwidth is the ceiling.</h3>
                <p className="mt-3 text-[#6A625C]">Opportunities, partners, events, brands, and decisions converge on one person.</p>
              </div>
              <div className="flex justify-center"><ArrowRight className="h-7 w-7 rotate-90 text-[#0F7A7C]" /></div>
              <div className="rounded-3xl border border-[#1FB6B8]/30 bg-[#1FB6B8]/10 p-5">
                <div className="mono text-[10px] uppercase tracking-[0.18em] text-[#0F7A7C]">With Miojo OS</div>
                <h3 className="mt-3 text-2xl font-semibold">The playbook compounds.</h3>
                <p className="mt-3 text-[#6A625C]">AI handles context, pattern recognition, scheduling, and synthesis while founder judgment stays in command.</p>
              </div>
            </div>
          </div>
          <div className="dark-stage relative overflow-hidden rounded-[2rem] p-6 md:p-8">
            <div className="relative z-10">
              <div className="rounded-3xl border border-white/15 bg-white/[0.07] p-5">
                <div className="flex items-center gap-3">
                  <Command className="h-5 w-5 text-[#E68A3F]" />
                  <div>
                    <h3 className="text-2xl font-semibold">Founder Command</h3>
                    <p className="text-sm text-white/55">human interface + quality standard</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {crews.map((crew) => (
                  <div key={crew.title} className="rounded-3xl border border-white/10 bg-white/[0.055] p-5">
                    <h4 className="font-semibold text-white">{crew.title}</h4>
                    <p className="mt-2 text-sm text-white/55">{crew.subtitle}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {crew.items.map((item) => (
                        <span key={item} className="mono rounded-full bg-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[#A5F3F4]">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-3xl border border-[#1FB6B8]/30 bg-[#1FB6B8]/10 p-5 text-sm text-[#A5F3F4]">
                Human-in-the-loop rule: the system recommends, remembers, and prepares; Ciarra sets the standard and approves what matters.
              </div>
            </div>
          </div>
        </div>
        <OrgArchitectureExplorer />
      </div>
    </section>
  );
}


function OrgArchitectureExplorer() {
  const layers = [
    {
      label: "Founder layer",
      title: "Ciarra sets the taste standard",
      text: "Judgment, relationships, cultural timing, and quality control remain human-led.",
    },
    {
      label: "Platform layer",
      title: "Miojo coordinates the expressions",
      text: "Mi Ojo, Beauty Days, Peppers & Bellies, and Residences share community, partner memory, and commercial logic.",
    },
    {
      label: "AI-support layer",
      title: "The operating layer remembers and prepares",
      text: "AI drafts briefs, scans signals, organizes context, and surfaces recommendations for approval.",
    },
  ];

  return (
    <div className="mt-8 rounded-[2rem] border border-black/10 bg-[#FBF7F0] p-5 md:p-8">
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="mono text-[11px] uppercase tracking-[0.18em] text-[#0F7A7C]">OrgArchitectureExplorer</div>
          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Human-led system architecture.</h3>
        </div>
        <div className="rounded-full border border-[#1FB6B8]/30 bg-[#1FB6B8]/10 px-4 py-2 text-sm text-[#0F7A7C]">
          not a robot org chart
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {layers.map((layer, index) => (
          <div key={layer.title} className="relative rounded-[1.5rem] border border-black/10 bg-white p-5">
            <div className="mono text-[10px] uppercase tracking-[0.16em] text-[#948B84]">0{index + 1} / {layer.label}</div>
            <h4 className="mt-4 text-xl font-semibold tracking-[-0.03em]">{layer.title}</h4>
            <p className="mt-3 text-sm leading-6 text-[#6A625C]">{layer.text}</p>
            {index < layers.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 text-[#E68A3F] md:block" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function FinancialProjectionStoryModule() {
  const drivers = [
    ["Near-term", "Services, events, partner programming, and sponsor extensions create cash-generating proof."],
    ["Platform layer", "Community data, membership, and Miojo OS workflows make value repeatable across pillars."],
    ["Owned upside", "Products, hospitality, brand incubation, and IP compound once the audience and operating layer are connected."],
  ];

  return (
    <div className="mt-6 rounded-[1.75rem] border border-[#E68A3F]/30 bg-[#E68A3F]/10 p-6">
      <div className="mono text-[11px] uppercase tracking-[0.18em] text-[#F1C38A]">FinancialProjectionStoryModule / directional</div>
      <div className="mt-5 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white">Growth is staged, not magically assumed.</h3>
          <p className="mt-4 leading-7 text-white/65">If exact projection data is unavailable, the site shows the drivers investors should inspect instead of inventing precise charts.</p>
        </div>
        <div className="grid gap-3">
          {drivers.map(([title, text], index) => (
            <div key={title} className="grid grid-cols-[88px_1fr] gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
              <div className="mono text-[10px] uppercase tracking-[0.16em] text-[#F1C38A]">stage 0{index + 1}</div>
              <div>
                <div className="font-semibold text-white">{title}</div>
                <p className="mt-1 text-sm leading-6 text-white/60">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DeckAssetLightbox() {
  const assets = [
    ["Bottleneck diagram", "Before/after operating leverage translated into a web-native transition."],
    ["Interlock map", "Pillars and overlap zones rendered as an inspectable ecosystem object."],
    ["Projection story", "Growth logic shown as staged drivers, not a spreadsheet dump."],
  ];

  return (
    <div className="mt-8 rounded-[2rem] border border-black/10 bg-white/70 p-6">
      <div className="mono text-[11px] uppercase tracking-[0.18em] text-[#0F7A7C]">DeckAssetLightbox / inspectable artifacts</div>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {assets.map(([title, text]) => (
          <details key={title} className="group rounded-2xl border border-black/10 bg-[#F6F1E8] p-4 open:bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
              <span className="font-semibold">{title}</span>
              <ChevronRight className="h-4 w-4 transition group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-sm leading-6 text-[#6A625C]">{text}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

function MiojoOSProofSection() {
  const screens = [
    ["Founder Command", "Daily priorities, investor prep, and cross-pillar decisions."],
    ["Beauty Days OS", "Member cohorts, RSVP flow, sponsor intelligence, city heat."],
    ["Trend Intelligence", "Signal velocity, opportunity scoring, collaborator watchlists."],
    ["Interlock View", "One map showing how every pillar reinforces the platform."],
  ];
  return (
    <section id="os-proof" className="anchor-offset section-shell px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="07 / Miojo OS proof" title={<>The operating thesis can become software.</>}>
          The site does not become the app. It shows enough of Miojo OS to make the operating layer tangible, inspectable, and credible.
        </SectionIntro>
        <div className="grid gap-5 lg:grid-cols-4">
          {screens.map(([title, text], index) => (
            <div key={title} className="rounded-[1.75rem] border border-black/10 bg-[#0B0F12] p-4 text-[#FBF7F0] shadow-2xl shadow-black/10">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <div className="mb-5 flex items-center justify-between">
                  <span className="h-2 w-2 rounded-full bg-[#1FB6B8]" />
                  <span className="mono text-[9px] uppercase tracking-[0.14em] text-white/40">mockup 0{index + 1}</span>
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-2/3 rounded-full bg-white/20" />
                  <div className="h-3 w-5/6 rounded-full bg-white/10" />
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="h-12 rounded-xl bg-[#1FB6B8]/20" />
                    <div className="h-12 rounded-xl bg-white/10" />
                    <div className="h-12 rounded-xl bg-[#E68A3F]/20" />
                  </div>
                  <div className="mt-4 h-20 rounded-xl border border-white/10 bg-white/[0.05]" />
                </div>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RevenueArchitectureSection() {
  return (
    <section id="revenue" className="section-shell px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="08 / revenue architecture" title={<>Multiple surfaces. One platform logic.</>}>
          The revenue story should not sound scattered. Each layer becomes stronger when it is connected to the same community, taste, data, and experience engine.
        </SectionIntro>
        <div className="grid gap-4 md:grid-cols-5">
          {revenueLayers.map(([title, text], index) => (
            <div key={title} className="rounded-[1.5rem] border border-black/10 bg-white/70 p-5">
              <div className="mono text-[10px] uppercase tracking-[0.18em] text-[#0F7A7C]">layer 0{index + 1}</div>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#6A625C]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpansionPathSection() {
  return (
    <section id="expansion" className="anchor-offset section-shell px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#151515] p-7 text-[#FBF7F0] md:p-12">
        <SectionIntro eyebrow="09 / expansion path" title={<span className="text-[#FBF7F0]">A staged path is what makes the ambition buyable.</span>}>
          <span className="text-white/65">Miojo does not need every pillar to mature at once. It needs a wedge, an operating layer, and a sequence that compounds.</span>
        </SectionIntro>
        <div className="grid gap-4 md:grid-cols-3">
          {expansion.map((item) => (
            <div key={item.phase} className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6">
              <div className="text-6xl font-semibold tracking-[-0.06em] text-[#1FB6B8]">{item.phase}</div>
              <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-7 text-white/60">{item.text}</p>
            </div>
          ))}
        </div>
        <FinancialProjectionStoryModule />
      </div>
    </section>
  );
}

function WhyThisWinsSection() {
  return (
    <section id="why-wins" className="section-shell px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="10 / why this wins" title={<>The edge is the combination.</>}>
          Celebrity brands can lack infrastructure. Software platforms can lack taste. Lifestyle concepts can lack operating discipline. Miojo sits at the intersection.
        </SectionIntro>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            [Gem, "Taste with standards"],
            [HeartHandshake, "Relationships with memory"],
            [Waves, "Community with continuity"],
            [LineChart, "Signals with execution"],
          ].map(([Icon, title]) => {
            const I = Icon as typeof Gem;
            return (
              <div key={title as string} className="paper-card rounded-[1.75rem] p-6">
                <I className="h-7 w-7 text-[#0F7A7C]" />
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">{title as string}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SignalsAndProofSection() {
  return (
    <section id="signals" className="section-shell px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>11 / bounded proof</Eyebrow>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">Proof should clarify, not overwhelm.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            [BadgeCheck, "Sourced facts", "Founder credibility and existing market context."],
            [CircleDollarSign, "Directional projections", "Growth logic framed as staged drivers, not fake precision."],
            [Map, "Platform signals", "City, sponsor, community, and trend data as illustrative proof."],
            [Building2, "Architecture", "Founder, platform, and AI-support layers shown as one system."],
          ].map(([Icon, title, text]) => {
            const I = Icon as typeof BadgeCheck;
            return (
              <div key={title as string} className="rounded-3xl border border-black/10 bg-white/70 p-6">
                <I className="h-6 w-6 text-[#E68A3F]" />
                <h3 className="mt-5 text-xl font-semibold">{title as string}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6A625C]">{text as string}</p>
              </div>
            );
          })}
        </div>
        <DeckAssetLightbox />
      </div>
    </section>
  );
}

function ClosingStatementSection() {
  return (
    <section className="section-shell px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mono mb-5 text-xs uppercase tracking-[0.18em] text-[#0F7A7C]">12 / closing conviction</div>
        <h2 className="text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-7xl">
          Miojo is how a rare founder becomes a <span className="fraunces text-[#0F7A7C]">repeatable platform.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-[#6A625C]">
          The company does not become investable because it says AI. It becomes investable because AI helps institutionalize the thing that was already scarce: Ciarra’s taste, timing, memory, relationships, and execution.
        </p>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contact" className="anchor-offset section-shell px-5 pb-20 md:px-8 md:pb-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#0B0F12] p-8 text-[#FBF7F0] md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="mono text-xs uppercase tracking-[0.18em] text-[#1FB6B8]">Private investor walkthrough</div>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">Review the platform model, then walk the operating proof.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              The next conversation should connect the narrative site, Miojo OS demo, and Beauty Days wedge into one investor-ready story.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
            <div className="flex items-center gap-3">
              <Store className="h-5 w-5 text-[#E68A3F]" />
              <span className="font-semibold">Prepared for strategic backers</span>
            </div>
            <a href="mailto:team@pharos.systems?subject=Miojo%20platform%20walkthrough" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E68A3F] px-6 py-3 text-sm font-semibold text-[#0B0F12] transition hover:bg-[#F1C38A]">
              Request walkthrough <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <TopNav />
      <HeroSection />
      <FounderProofSection />
      <PlatformThesisSection />
      <InterlockMapSection />
      <WhyNowSection />
      <BeautyDaysWedgeSection />
      <OperatingLayerSection />
      <MiojoOSProofSection />
      <RevenueArchitectureSection />
      <ExpansionPathSection />
      <WhyThisWinsSection />
      <SignalsAndProofSection />
      <ClosingStatementSection />
      <CTASection />
    </main>
  );
}
