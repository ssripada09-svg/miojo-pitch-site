"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronRight, X } from "lucide-react";

const ventures = [
  { numeral: "ONE", name: "MI OJO", line: "my eye", role: "Creative house & venture studio", launch: "Founded 2019", copy: "Brand strategy, cultural IP, creative direction, celebrity partnerships, and venture equity in the next wave of fashion, beauty, and lifestyle.", detail: ["Creative house: brand strategy, positioning, creative direction, campaigns, cultural IP, celebrity and artist partnerships.", "Venture studio: incubation, launch, equity stakes, operating discipline, investor-ready brand worlds.", "Commercial logic: outside retainers fund creative infrastructure while equity upside compounds."], economics: "Monthly retainers $25K–$150K, project fees, and equity stakes from venture clients." },
  { numeral: "TWO", name: "PEPPERS & BELI", line: "a culinary love letter", role: "Restaurant · culinary brand · CPG", launch: "Opening 2026", copy: "Grandmother’s recipes meet Michelin craft: restaurant, membership dining room, farm supply chain, and Beli’s Pantry.", detail: ["LA flagship restaurant and membership dining room built on heritage recipes and premium craft.", "Sweetwater Farm supplies produce; Beli’s Pantry scales sauces, oils, preserves and spice blends.", "Membership, private events, F&B, CPG and hospitality extensions share the same story."], economics: "$5.8M year-three target across F&B, memberships, private events, and pantry retail." },
  { numeral: "THREE", name: "BEAUTYDAYS", line: "the gathering", role: "Beauty & culture festival", launch: "Year one 2026", copy: "A multi-day beauty and culture festival engineered to convert mass attention into portfolio distribution.", detail: ["8,500 target attendees, 125+ vendors, six zones, seven whole-self beauty pillars.", "Every vendor brief becomes a Mi Ojo pitch. Every dish becomes a Peppers & Beli tasting. Every guest list becomes a Residences waitlist.", "The clearest amplifier: ticketing, sponsors, vendor fees, F&B, media rights, content, and first-party demand."], economics: "$2.3M projected Y1 revenue; $9.8M Y3 target across 3 cities in deck economics." },
  { numeral: "FOUR", name: "THE RESIDENCES", line: "a home that holds you", role: "Wellness-forward living", launch: "Phase 2028+", copy: "Curated travel properties, members-only retreats, and eventually owned real estate around rituals that heal.", detail: ["Curated travel and wellness properties; members-only retreats and residencies.", "Eastern medicine, heritage cuisine, ritual, and wellness-forward home environments.", "Evolution path: travel → flagship → owned real estate."], economics: "Later-stage compounding asset: membership, stays, retreats, real estate partnerships, and eventual owned properties." },
];

const stats = [["20+", "Years creative leadership"], ["4", "Fenty brands built at LVMH scale"], ["$3B+", "Brand value created"], ["3", "Unicorns in the making"]];
const journey = [["1979", "Bronx, NY", "Heritage learned at the kitchen table."], ["Early 2000s", "Wall Street", "Morgan Stanley Dean Witter; walks away to chase culture."], ["Mid 2000s", "Def Jam · Island", "Shapes visual language for Jay-Z, Eminem, Usher, The Killers."], ["2007", "Rihanna", "Art Director, Good Girl Gone Bad — the inflection point."], ["2014–19", "Fenty Corp", "Four category-defining brands at LVMH scale."], ["2026", "Ciarra Pardo Co.", "Four ventures, one creative engine."]];
const beautyPillars = ["Skin & Hair", "Wellness", "Nutrition", "Mental Health", "Community", "Culture", "Innovation"];


const peppersFlow = [
  {
    label: "SOURCE",
    numeral: "I",
    image: "/assets/canonical/page10_img02.jpg",
    title: "Sweetwater Farm",
    short: "Regenerative farm supplies heirloom peppers, herbs, and produce.",
    why: "This gives Peppers & Beli provenance — not just a restaurant menu, but a supply story that can become content, product, hospitality, and retail language.",
    ecosystem: ["ingredient storytelling", "Pantry product pipeline", "wellness + nutrition programming"],
  },
  {
    label: "SERVE",
    numeral: "II",
    image: "/assets/canonical/page10_img01.jpg",
    title: "Peppers & Beli Flagship",
    short: "Restaurant and membership dining room; every night a living campaign.",
    why: "The flagship is the cash-generating proof point: membership, private dinners, cultural rooms, chef programming, and a stage for the broader Miojo world.",
    ecosystem: ["membership dining", "private events", "BeautyDays dining oasis"],
  },
  {
    label: "SCALE",
    numeral: "III",
    image: "/assets/canonical/page10_img03.jpg",
    title: "Beli’s Pantry",
    short: "Artisanal sauces, oils, preserves and spice blends sold in-restaurant, DTC, and retail.",
    why: "Pantry turns heritage into a repeatable product layer — lower-friction commerce that can travel through Miojo TV, BeautyDays, hotels, grocers, and gifting.",
    ecosystem: ["DTC + retail", "Miojo TV commerce", "hospitality distribution"],
  },
];

const beautyPillarDetails = [
  { title: "Skin & Hair", thesis: "The craft side of beauty: formulation, professional technique, texture, shade, hair health, and visible transformation.", programming: ["masterclasses", "diagnostic demos", "founder-led product drops"], sponsor: "Prestige beauty, salons, dermatology, device brands", conversion: "Moves attendees from inspiration into marketplace purchase, partner trials, and Mi Ojo brand pipeline." },
  { title: "Wellness", thesis: "Beauty as recovery and longevity: movement, breathwork, sleep, nervous-system care, contrast and restoration.", programming: ["breathwork domes", "recovery lounges", "longevity scans"], sponsor: "Longevity clinics, recovery tech, supplements, fitness and wellness studios", conversion: "Creates high-value sponsor zones and feeds Residences / retreat demand." },
  { title: "Nutrition", thesis: "Food as medicine and ritual — the direct bridge between BeautyDays, Peppers & Beli, and Beli’s Pantry.", programming: ["longevity menus", "chef tastings", "pantry education"], sponsor: "Functional food, CPG, grocery, chef partners", conversion: "Turns event attention into restaurant reservations, pantry products, and food-led content." },
  { title: "Mental Health", thesis: "Clinical conversations de-stigmatized in public: therapy, ritual, grief, resilience, and emotional care.", programming: ["physician panels", "guided rituals", "private salons"], sponsor: "Mental-health platforms, clinics, foundations, wellness partners", conversion: "Builds trust and deepens community beyond transactional beauty." },
  { title: "Community", thesis: "Rooms where the Wi‑Fi is bad on purpose: real gathering, presence, member identity, city circles.", programming: ["member meetups", "ambassador circles", "city dinners"], sponsor: "Membership brands, local partners, community-led sponsors", conversion: "Turns a festival spike into year-round membership and first-party audience data." },
  { title: "Culture", thesis: "Music, art, fashion, film and beauty as one language — Ciarra’s native operating terrain.", programming: ["artist conversations", "DJ-led rituals", "fashion/beauty salons"], sponsor: "Editorial, fashion, music, cultural institutions", conversion: "Creates content IP, press moments, and partner storytelling for Miojo TV." },
  { title: "Innovation", thesis: "Where the next wave of beauty and wellness is prototyped in public and read as venture signal.", programming: ["AI diagnostics", "biotech showcases", "juried founder demos"], sponsor: "Beauty-tech, biotech, retail innovation, venture partners", conversion: "Feeds Mi Ojo scouting, sponsor intelligence, and future investment/brand incubation." },
];

const zones = [
  ["Wellness Wing", "Diagnostics, breathwork domes, IV bars, infrared saunas, practitioner rooms. Every session can become a BeautyDays report.", "Upgraded wellness pass + title sponsor", ["Longevity clinics", "Functional medicine", "Recovery tech"]],
  ["The BeautyLab", "Skin-tech diagnostics, AI colour-matching, biotech ingredient reveals and device previews prototyped in public.", "R&D sponsorships + consumer data", ["Prestige beauty", "Dermatology", "Beauty-tech hardware"]],
  ["The Marketplace", "125+ curated beauty, wellness, and lifestyle brands with exclusive drops, founder meet-and-greets and co-labs.", "Vendor fees + rev share", ["Vendor Y1: 125+", "Avg vendor fee: $8K", "+5% on-site rev share"]],
  ["Dining Oasis", "Peppers & Beli residency, heritage chefs, longevity-menu tastings, and late-night intimate dinners.", "Ticketed dinners + sponsor", ["Seats/day: 1,200", "Ticket range: premium", "Pantry conversion"]],
  ["BeautyDays Chats", "Founders, physicians, artists and athletes on a programmed stage; archived as podcast and video series.", "Media rights + syndication", ["Title sponsor", "Media rights", "Year-round series"]],
  ["Innovation Hub", "A juried showcase for beauty, wellness, tech and culture ventures — a live scouting surface for Mi Ojo.", "Pipeline + venture signal", ["Juried showcase", "Founder pipeline", "Investment radar"]],
] as const;
const frameworks = [
  ["Customer Lens", "Maps buyer temperature from Ice → Cold → Warm → Hot → Client."],
  ["List · Offer · Creative", "Who we sell to, what we give them, how we present it."],
  ["Three Products", "Commodity, differentiated, investment — the portfolio avoids commodity."],
  ["Offer Stacking", "DIY · DWY · DFY price ladder from $18 to $18M."],
  ["Sales Funnel", "Pain → solution → AOV ≥ CPA + COGS."],
  ["Lead Flow", "Capture, qualify, convert across shared customer infrastructure."],
  ["Content Phases", "Zero → 10K views baseline, engineered."],
  ["Content That Sells", "Hook · Value · CTA — no vanity content."],
  ["Retention Hooks", "Keep them, resell them, graduate them up the ladder."],
  ["Launch Runbook", "90-day cadence: offer lock, soft launch, public scale."],
];
const revenue = [["Peppers & Beli", "$5.8M", "Restaurant · Membership", 100], ["BeautyDays", "$2.3M", "Festival · Sponsorship", 40], ["Mi Ojo", "$2.1M", "Creative · Venture Equity", 36], ["Beli’s Pantry", "$1.5M", "CPG · DTC & Retail", 26]];
const threeYear = [["Revenue", "$3.9M", "$7.6M", "$12.2M"], ["Gross margin", "52%", "58%", "63%"], ["Operating costs", "$4.2M", "$5.1M", "$6.4M"], ["EBITDA", "–$2.1M", "–$0.7M", "+$1.3M"], ["Headcount", "22", "34", "48"]];
const useFunds = [["LA flagship build & team", "$2.6M", "40%"], ["Beli’s Pantry launch & inventory", "$1.6M", "25%"], ["BeautyDays Y1 production", "$1.3M", "20%"], ["Mi Ojo ops & working capital", "$1.0M", "15%"]];
const channels = [["Founder-led organic", "45%", "Ciarra channels + press, CAC ≈ $0"], ["Cultural partnerships", "25%", "Brands, creators, editorial"], ["Paid performance", "20%", "Meta, TikTok, YouTube VSLs"], ["Retail + distribution", "10%", "Grocers, hotels, boutiques"]];
const traction = [["Mi Ojo · Active", "7", "Active client retainers"], ["Peppers & Beli · Pre-launch", "2,400", "Membership waitlist"], ["BeautyDays · Year Zero", "28", "Brand LOIs signed"], ["Owned channels", "1.2M+", "Social reach"]];
const market = [["Beauty", "$579B", "Global · 2026"], ["Food & CPG", "$1.1T", "US specialty · 2026"], ["Experiences", "$183B", "Festivals + events · 2026"], ["Wellness home", "$1.8T", "Global wellness · 2026"], ["TAM total", "$3.6T", "Across four verticals"]];

const osViews = [
  ["Founder Command", "Daily brief, investor pipeline, priority decisions, partner risks, and ecosystem interlock."],
  ["Mi Ojo Studio", "AI-assisted positioning, concept testing, launch readiness, and narrative pressure-testing."],
  ["Beauty Days Community OS", "RSVP → attendance → activation → retention, sponsor intelligence, city density, and cohort pulse."],
  ["Experience Engine", "Reservations, residencies, wellness programming, guest segments, utilization, and package mix."],
  ["Trend Intelligence", "Signal velocity, creator watchlists, retailer opportunities, whitespace, and concept scoring."],
];
const tvChannels = ["Get Ready", "Soft Life / Reset", "Dress the Mood", "Pantry / Table", "Beauty Days Live", "House Channel"];


const ecosystemNodes = [
  {
    key: "mi-ojo",
    label: "MI OJO",
    role: "Creative engine",
    position: "eco-top",
    copy: "Turns Ciarra’s eye into repeatable strategy: brand language, venture briefs, cultural IP, partner storytelling, and launch systems.",
    feeds: ["Creative direction", "Brand incubation", "Investor-grade narratives"],
    ai: "Miojo OS pressure-tests concepts, tracks partner/retailer targets, and converts Ciarra’s pattern recognition into reusable launch playbooks.",
  },
  {
    key: "beautydays",
    label: "BEAUTYDAYS",
    role: "Community amplifier",
    position: "eco-right",
    copy: "Converts mass attention into distribution: members, sponsors, vendors, event data, content, and first-party demand signals.",
    feeds: ["Sponsor intelligence", "Membership loops", "Beauty + wellness demand"],
    ai: "The Community OS reads RSVP, attendance, activation and retention signals so Ciarra can respond to the community faster and program what people actually want next.",
  },
  {
    key: "peppers",
    label: "PEPPERS & BELI",
    role: "Revenue core",
    position: "eco-bottom",
    copy: "Turns heritage into cash flow: restaurant, membership dining, farm supply chain, private events, and Beli’s Pantry CPG.",
    feeds: ["Hospitality proof", "Pantry products", "Ritual + food programming"],
    ai: "Experience intelligence tracks demand, reservations, guest segments, menu/programming themes, and content-commerce opportunities.",
  },
  {
    key: "residences",
    label: "THE RESIDENCES",
    role: "Long-term compounding asset",
    position: "eco-left",
    copy: "Extends the world into travel, retreats, wellness-forward homes, private membership, and eventually owned real estate.",
    feeds: ["Retreat demand", "Wellness programming", "Membership expansion"],
    ai: "Miojo OS links BeautyDays interests, Miojo TV rituals, and hospitality demand into a smarter retreat/residence pipeline.",
  },
  {
    key: "tv",
    label: "MIOJO TV",
    role: "Always-on surface",
    position: "eco-midright",
    copy: "Makes the ecosystem continuous between events: a channel guide where beauty, wellness, fashion, food, and community become daily habit.",
    feeds: ["Content-to-commerce", "First-party intent", "Event + membership conversion"],
    ai: "Programming data becomes a demand-sensing engine: what people watch, save, RSVP to, shop, and repeat informs the next activation.",
  },
];

const risks = [["Concentration", "Founder key-person risk", "Codify Mi Ojo playbooks and named deputies; execution outlives one person."], ["Execution", "Restaurants are hard", "One flagship P&L first, operating partner seat, proof before rollout."], ["Festival risk", "Events are production-heavy", "Brand LOIs, title sponsorship, phased capacity and sponsor-underwritten zones."], ["Capital", "Multi-venture complexity", "Milestone-gated capital; every allocation tied to a partnership seat and revenue path."]];


function CountUp({ to, prefix = "", suffix = "", decimals = 0 }: { to: number; prefix?: string; suffix?: string; decimals?: number }) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const duration = 1350;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(to * eased);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, to]);
  return <span ref={(node) => {
    if (!node || started) return;
    const io = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setStarted(true); io.disconnect(); } }, { threshold: 0.35 });
    io.observe(node);
  }}>{prefix}{value.toLocaleString(undefined, { maximumFractionDigits: decimals, minimumFractionDigits: decimals })}{suffix}</span>;
}
function SmartNumber({ value }: { value: string }) {
  if (value === "20+") return <CountUp to={20} suffix="+" />;
  if (value === "4") return <CountUp to={4} />;
  if (value === "$3B+") return <CountUp to={3} prefix="$" suffix="B+" />;
  if (value === "3") return <CountUp to={3} />;
  if (value === "8,500") return <CountUp to={8500} />;
  if (value === "125+") return <CountUp to={125} suffix="+" />;
  if (value === "$2.3M") return <CountUp to={2.3} prefix="$" suffix="M" decimals={1} />;
  if (value === "2,400") return <CountUp to={2400} />;
  if (value === "28") return <CountUp to={28} />;
  if (value === "1.2M+") return <CountUp to={1.2} suffix="M+" decimals={1} />;
  if (value === "$12.2M") return <CountUp to={12.2} prefix="$" suffix="M" decimals={1} />;
  return <>{value}</>;
}
function TypeLine({ text }: { text: string }) { return <span className="type-line" style={{ ["--chars" as string]: text.length }}>{text}</span>; }

function TypeStack({ lines }: { lines: string[] }) {
  return <>{lines.map((line, i) => <span key={line} className="type-stack-line" style={{ ["--chars" as string]: line.length, ["--delay" as string]: `${i * 520}ms` }}>{line}</span>)}</>;
}

function WordReveal({ text, accent }: { text: string; accent?: string }) {
  const words = text.split(" ");
  return <>{words.map((word, i) => {
    const clean = word.replace(/[.,]$/, "");
    const isAccent = accent && clean.toLowerCase() === accent.toLowerCase();
    return <span className="tx-word" key={`${word}-${i}`}><span className={isAccent ? "tx-accent" : ""} style={{ transitionDelay: `${i * 48}ms` }}>{word}{i < words.length - 1 ? "\u00a0" : ""}</span></span>;
  })}</>;
}

function ScrollProgress() {
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const h = document.documentElement;
      const pct = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      if (ref.current) ref.current.style.transform = `scaleX(${Math.min(1, Math.max(0, pct))})`;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="scroll-progress"><span ref={ref} /></div>;
}
function Kicker({ left, right }: { left: string; right?: string }) { return <div className="kicker"><span>{left}</span>{right && <span>{right}</span>}</div>; }
function SectionTitle({ eyebrow, title, italic, children }: { eyebrow: string; title: string; italic?: string; children?: React.ReactNode }) { return <div className="section-title reveal-on-view"><Kicker left={eyebrow} /><h2><WordReveal text={title} /></h2>{italic && <p className="deck-italic">{italic}</p>}{children && <p className="lede">{children}</p>}</div>; }
function DetailDrawer({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  const panelRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.dataset.modalOpen = "true";
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    requestAnimationFrame(() => panelRef.current?.focus());
    return () => {
      delete document.body.dataset.modalOpen;
      window.removeEventListener("keydown", onKey);
      previous?.focus?.();
    };
  }, [open, onClose]);
  if (!open) return null;
  return <div className="drawer-backdrop" onClick={onClose}><aside ref={panelRef} tabIndex={-1} role="dialog" aria-modal="true" aria-label={title} className="detail-drawer" onClick={(e) => e.stopPropagation()}><button className="drawer-close" onClick={onClose} aria-label="Close"><X size={18}/></button><Kicker left="Investor detail" right="Esc to close" /><h3>{title}</h3>{children}</aside></div>;
}

function Hero() { return <section id="top" className="split-hero"><div className="hero-copy reveal-on-view"><Kicker left="CIARRA PARDO CO · 2026" right="CONFIDENTIAL" /><p className="deck-italic hero-italic">Heritage is medicine.</p><h1><span className="mask-reveal">CIARRA</span><br /><span className="mask-reveal delay">PARDO</span></h1><p className="source-code"><TypeLine text="the ecosystem’s source code" /></p><p className="hero-sub">MI OJO · PEPPERS & BELI · BEAUTYDAYS · THE RESIDENCES</p><div className="hero-actions"><a href="#portfolio" className="gold-btn">Explore the ecosystem <ArrowRight size={16} /></a><a href="#financials" className="line-btn">View investor model</a></div></div><div className="hero-image"><Image src="/assets/canonical/page01_img02.png" alt="Ciarra Pardo black and white founder portrait" fill priority sizes="(max-width: 900px) 100vw, 44vw" className="object-cover grayscale" /></div></section>; }
function TrackRecord() { return <section id="founder" className="cream-section founder-proof-section"><div className="shell two-col founder-grid"><div className="portrait-panel portrait-reveal"><Image src="/assets/canonical/page02_img01.png" alt="Ciarra Pardo portrait" fill sizes="(max-width: 900px) 100vw, 38vw" className="object-cover grayscale" /></div><div><div className="section-title founder-typed-title"><Kicker left="02 · The Founder" /><h2><TypeStack lines={["TWENTY YEARS", "BUILDING", "THE BRANDS", "THE CULTURE", "QUOTES BACK."]} /></h2><p className="deck-italic typed-caption">institutional rigor, cultural fluency.</p><p className="lede">Born in the Bronx to Puerto Rican parents, Ciarra has spent twenty years at the intersection of culture, commerce, and creative authority — from Def Jam and Rihanna to Fenty Corp and the next portfolio.</p></div><div className="stat-grid">{stats.map(([num, label], i) => <button className="stat-card reveal-on-view" style={{ animationDelay: `${i * 90}ms` }} key={label}><strong><SmartNumber value={num} /></strong><span>{label}</span><small>click for source context</small></button>)}</div><blockquote>“In 2021 I was diagnosed with Stage 3C triple-negative breast cancer. I beat it. Everything after is built in that clarity.”</blockquote></div></div></section>; }
function Journey() { return <section className="forest-section"><div className="shell"><SectionTitle eyebrow="04 · The Journey" title="FROM BRONX KITCHEN TABLES TO THE FENTY BLUEPRINT." italic="Every chapter trained the next." /><div className="timeline">{journey.map(([year, place, copy], i) => <button className="timeline-item reveal-on-view" key={year} style={{ animationDelay: `${i * 80}ms` }}><span className="dot" /><strong>{year}</strong><b>{place}</b><p>{copy}</p></button>)}</div></div></section>; }

function Portfolio() {
  const [active, setActive] = useState(0); const [open, setOpen] = useState(false); const v = ventures[active];
  return <section id="portfolio" className="cream-section"><div className="shell"><SectionTitle eyebrow="05 · The Portfolio" title="FOUR VENTURES. ONE CREATIVE ENGINE." italic="Every brand inherits Fenty’s institutional rigor.">Shared audience. Shared supply chain. Shared creative direction. Every dollar invested amplifies across all four. Click any venture for the deeper investor logic.</SectionTitle><div className="venture-grid">{ventures.map((v, i) => <button className={`venture-card reveal-on-view ${active === i ? "active" : ""}`} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => { setActive(i); setOpen(true); }} key={v.name}><span>{v.numeral}</span><h3>{v.name}</h3><em>{v.line}</em><b>{v.role}</b><p>{v.copy}</p><small>{v.launch} · open detail</small></button>)}</div><div key={v.name} className="active-venture active-panel"><strong>{v.name}</strong><span>{v.copy}</span><button onClick={() => setOpen(true)}>Open investor detail <ArrowRight size={14}/></button></div></div><DetailDrawer open={open} onClose={() => setOpen(false)} title={v.name}><p className="drawer-lede">{v.line} — {v.role}</p><ul>{v.detail.map((d) => <li key={d}>{d}</li>)}</ul><div className="drawer-metric"><span>Economics</span><strong>{v.economics}</strong></div></DetailDrawer></section>;
}

function MiOjoVenture() {
  return <section id="mi-ojo" className="cream-section venture-deep-section"><div className="shell two-col venture-deep-grid"><div><SectionTitle eyebrow="ONE · The Engine" title="MI OJO TURNS CIARRA’S EYE INTO A CREATIVE PLATFORM." italic="my eye.">The portfolio begins with the asset Ciarra already has: taste, cultural timing, brand language, and the ability to see what a market is about to want before it becomes obvious. Mi Ojo converts that into services, venture equity, creative IP, and launch systems.</SectionTitle><div className="venture-proof-list"><div><span>Creative house</span><p>Brand strategy, positioning, campaigns, creative direction, celebrity and artist partnerships.</p></div><div><span>Venture studio</span><p>Incubates fashion, beauty, wellness, and lifestyle brands with equity upside and operating discipline.</p></div><div><span>AI leverage</span><p>Miojo OS helps pressure-test concepts, map audiences, track retailer/sponsor targets, and turn Ciarra’s pattern recognition into reusable launch playbooks.</p></div></div></div><div className="venture-quote-card"><Kicker left="Why it comes first" /><h3>The ecosystem needs a creative brain before it needs more products.</h3><p>Mi Ojo is the engine that gives every other venture its language, point of view, campaign architecture, and investment-grade story.</p></div></div></section>;
}

function Peppers() {
  const [active, setActive] = useState(1);
  const item = peppersFlow[active];
  return <section className="cream-section image-story peppers-section"><div className="shell"><SectionTitle eyebrow="TWO · The Core" title="PEPPERS & BELI TURNS HERITAGE INTO CASH FLOW." italic="a culinary love letter, built to scale.">This is not a random restaurant slide. It is the ecosystem’s revenue core: a heritage dining room, a membership product, a content set, a BeautyDays activation layer, and a pantry/retail pipeline that can travel beyond one location.</SectionTitle><div className="peppers-context"><strong>Why it belongs in the investor story</strong><p>Mi Ojo creates the brand language. BeautyDays creates attention and community. Peppers & Beli gives the ecosystem an immediate, sensory, monetizable proof point — food, membership, private events, pantry products, and hospitality partnerships.</p></div><div className="image-triptych peppers-triptych">{peppersFlow.map((flow, i) => <button className={`trip-card reveal-on-view ${active === i ? "active" : ""}`} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)} key={flow.label}><Image src={flow.image} alt={flow.title} width={1344} height={768} /><span>{flow.numeral} · {flow.label}</span><h3>{flow.title}</h3><p>{flow.short}</p></button>)}</div><div key={item.label} className="peppers-detail active-panel"><Kicker left={`${item.numeral} · ${item.label}`} right="click source / serve / scale" /><h3>{item.title}</h3><p>{item.why}</p><div>{item.ecosystem.map((x) => <span key={x}>{x}</span>)}</div></div></div></section>;
}

function BeautyDays() {
  const [active, setActive] = useState(0); const [pillarActive, setPillarActive] = useState(0); const zone = zones[active]; const pillar = beautyPillarDetails[pillarActive];
  return <section id="beautydays" className="forest-section beauty-section"><div className="shell"><div className="beauty-hero reveal-on-view"><Image src="/assets/canonical/page11_img01.jpg" alt="BeautyDays activation render" fill sizes="100vw" className="object-cover" /><div><Kicker left="THREE · BeautyDays" right="The Amplifier" /><h2>BEAUTYDAYS</h2><p className="deck-italic">the gathering</p><p>A multi-day beauty and culture festival engineered to convert mass attention into portfolio distribution.</p></div></div><div className="beauty-metrics">{[["8,500", "Target attendees"], ["125+", "Brand vendors"], ["$2.3M", "Projected revenue Y1"]].map(([n,l]) => <button key={l}><strong><SmartNumber value={n} /></strong><span>{l}</span></button>)}</div><div className="pillar-row">{beautyPillars.map((p, i) => <button key={p} onMouseEnter={() => setPillarActive(i)} onFocus={() => setPillarActive(i)} onClick={() => setPillarActive(i)} className={pillarActive === i ? "active" : ""}><b>{["I","II","III","IV","V","VI","VII"][i]}</b>{p}</button>)}</div><div key={pillar.title} className="pillar-detail active-panel"><Kicker left="Seven pillars · one whole-self ritual" right="click a pillar" /><h3>{pillar.title}</h3><p>{pillar.thesis}</p><div className="pillar-detail-grid"><div><span>Programming</span>{pillar.programming.map((x) => <b key={x}>{x}</b>)}</div><div><span>Sponsor fit</span><p>{pillar.sponsor}</p></div><div><span>Ecosystem conversion</span><p>{pillar.conversion}</p></div></div></div><div className="zone-explorer"><div className="zone-tabs">{zones.map((z, i) => <button key={z[0]} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)} className={active === i ? "active" : ""}>ZONE {String(i + 1).padStart(2, "0")}<ChevronRight size={14}/></button>)}</div><div key={zone[0]} className="zone-panel active-panel"><Kicker left={zone[2]} /><h3>{zone[0]}</h3><p>{zone[1]}</p><div className="zone-chips">{zone[3].map((x) => <span key={x}>{x}</span>)}</div></div></div><BeautyEconomics /></div></section>;
}
function MoneyCount({ amount }: { amount: string }) {
  if (amount === "$1.05M") return <><CountUp to={1.05} prefix="$" suffix="M" decimals={2} /></>;
  if (amount === "$700K") return <><CountUp to={700} prefix="$" suffix="K" /></>;
  if (amount === "$470K") return <><CountUp to={470} prefix="$" suffix="K" /></>;
  if (amount === "$220K") return <><CountUp to={220} prefix="$" suffix="K" /></>;
  if (amount === "$100K") return <><CountUp to={100} prefix="$" suffix="K" /></>;
  return <>{amount}</>;
}
function BeautyEconomics() { const lines = [["Ticketing", "$1.05M", "8,500 pax", 100], ["Title Sponsorship", "$700K", "2 deals", 67], ["Vendor Fees", "$470K", "125 brands", 45], ["F&B / Dining", "$220K", "3,600 seats", 21], ["Media Rights", "$100K", "1 partner", 10]]; return <div className="beauty-econ animated-econ"><Kicker left="BeautyDays Y1 economics" right="click zones above" />{lines.map(([name, amt, src, w], i) => <div className="mini-bar econ-row" style={{ ["--bar" as string]: `${w}%`, ["--delay" as string]: `${i * 130}ms` }} key={name}><span>{name}<small>{src}</small></span><div><i /></div><b><MoneyCount amount={amt as string} /></b></div>)}</div>; }


function ResidencesVenture() {
  return <section id="residences" className="cream-section venture-deep-section residences-section"><div className="shell two-col venture-deep-grid"><div className="residence-image"><Image src="/assets/canonical/page20_img01.jpg" alt="The Residences wellness home concept" fill sizes="(max-width: 900px) 100vw, 45vw" className="object-cover" /></div><div><SectionTitle eyebrow="FOUR · The Residences" title="THE RESIDENCES TURN THE WORLD INTO A PLACE PEOPLE CAN ENTER." italic="a home that holds you.">The final expression of the ecosystem is not another content channel or event. It is a physical membership layer: retreats, wellness-forward stays, private sanctuaries, and eventually owned real estate around the rituals that heal.</SectionTitle><div className="venture-proof-list"><div><span>Offering</span><p>Curated travel and wellness properties, members-only retreats, residencies, Eastern medicine, heritage cuisine, ritual.</p></div><div><span>Expansion path</span><p>Travel → flagship → owned real estate. The brand compounds from attention into place.</p></div><div><span>Data advantage</span><p>Miojo OS and Miojo TV reveal which rituals, cities, communities, and wellness interests should become real-world experiences.</p></div></div></div></div></section>;
}

function Ecosystem() {
  const [active, setActive] = useState(0);
  const node = ecosystemNodes[active];
  return <section id="ecosystem" className="cream-section ecosystem-section"><div className="shell"><SectionTitle eyebrow="11 · Shared Infrastructure" title="FOUR VENTURES. ONE AUDIENCE. ONE CREATIVE ENGINE." italic="The interlock is the investment case.">Click the map. Each node is not a separate idea; it is a different expression of the same audience, taste, content, hospitality, community, and operating system. Miojo OS and Miojo TV make the loop faster and more responsive.</SectionTitle><div className="ecosystem-explorer"><div className="ecosystem-map" aria-label="Clickable Miojo ecosystem interlock map"><div className="eco-ring outer" /><div className="eco-ring inner" /><button className="eco-center" onClick={() => setActive(0)}><strong>MI OJO</strong><em>the engine</em></button>{ecosystemNodes.map((n, i) => <button key={n.key} className={`eco-node ${n.position} ${active === i ? "active" : ""}`} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}><span>{n.role}</span>{n.label}</button>)}</div><aside key={node.key} className="ecosystem-detail active-panel"><Kicker left={node.role} right="click nodes on map" /><h3>{node.label}</h3><p>{node.copy}</p><div className="detail-stack"><div><span>Feeds the ecosystem</span>{node.feeds.map((x) => <b key={x}>{x}</b>)}</div><div><span>AI / tech leverage</span><p>{node.ai}</p></div></div></aside></div><div className="ecosystem-flow"><span>Ciarra’s taste</span><ArrowRight size={15}/><span>Community signal</span><ArrowRight size={15}/><span>Miojo OS synthesis</span><ArrowRight size={15}/><span>Miojo TV habit</span><ArrowRight size={15}/><span>Commerce + experiences</span></div></div></section>;
}

function TechLayer() {
  const [active, setActive] = useState(0);
  const current = osViews[active];
  return <section id="miojo-os" className="forest-section tech-layer"><div className="shell"><SectionTitle eyebrow="Miojo OS · Miojo TV" title="CIARRA’S TASTE BECOMES A FASTER OPERATING SYSTEM." italic="AI does not replace the founder. It shortens the distance between signal, decision, and community response.">The canonical deck proves Ciarra’s taste, track record, and ecosystem. The next layer is how Miojo keeps evolving: Miojo OS turns memory, trend intelligence, community pulse, and execution into a command layer; Miojo TV turns taste into an always-on habit that routes attention into membership, commerce, events, sponsors, and future IP.</SectionTitle><div className="tech-grid"><div className="os-console product-frame signal-sweep"><div className="product-chrome"><span className="live-dot" />MIOJO OS · LIVE COMMAND</div><Kicker left="Miojo OS" right="live operating environment prototype" /><div key={current[0]} className="active-panel os-active-view"><h3 className="os-title">{current[0]}</h3><p>{current[1]}</p></div><div className="os-tabs">{osViews.map((v,i)=><button key={v[0]} className={active===i?"active":""} onClick={()=>setActive(i)} onMouseEnter={()=>setActive(i)}>{String(i+1).padStart(2,"0")} · {v[0]}</button>)}</div></div><div className="tv-console product-frame signal-sweep"><div className="product-chrome"><span className="live-dot" />MIOJO TV · CHANNEL GUIDE</div><Kicker left="Miojo TV" right="always-on community surface" /><h3><WordReveal text="Curated channels make the platform continuous." /></h3><p>Miojo TV is not TV for its own sake. It is a lean-back programming and conversion layer: beauty, wellness, fashion, food, community, and commerce in one daily-use surface.</p><div className="channel-guide">{tvChannels.map((c,i)=><button key={c}><span>{String(i+1).padStart(2,"0")}</span>{c}<small>{i===0?"beauty commerce":i===1?"daily wellness habit":i===2?"style + affiliate":i===3?"food + hosting":i===4?"event-to-platform": "flagship taste layer"}</small></button>)}</div></div></div><div className="ai-flywheel"><span><TypeLine text="Community signal" /></span><ArrowRight size={16}/><span><TypeLine text="AI synthesis" /></span><ArrowRight size={16}/><span><TypeLine text="Ciarra decision" /></span><ArrowRight size={16}/><span><TypeLine text="Faster activation" /></span><ArrowRight size={16}/><span><TypeLine text="New data" /></span></div></div></section>;
}

function Blueprint() { const [active, setActive] = useState(0); return <section className="forest-section blueprint-section"><div className="shell"><SectionTitle eyebrow="Blueprint · Operating System" title="SHE DOESN’T COME EMPTY-HANDED." italic="she comes with a system.">Ten frameworks, one operating system — customer, product, marketing, funnel, content, retention and financial discipline proven across twenty years and four nine-figure brands. Click a framework to inspect how it works.</SectionTitle><div className="framework-layout"><div className="framework-grid">{frameworks.map(([f], i) => <button className={active === i ? "active" : ""} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)} key={f}><span>{String(i + 1).padStart(2, "0")}</span><strong>{f}</strong></button>)}</div><div key={frameworks[active][0]} className="framework-detail active-panel"><Kicker left="Selected framework" right="master blueprint" /><h3>{frameworks[active][0]}</h3><p>{frameworks[active][1]}</p></div></div></div></section>; }

function MarketAndRisk() { return <section className="cream-section"><div className="shell"><SectionTitle eyebrow="13 · Why Now / Risk" title="FOUR CATEGORIES. ONE BUYER." italic="Founder-level discipline on where this could break.">The deck is strongest when it shows both market scale and risk discipline. This section makes both inspectable instead of hiding them in slides.</SectionTitle><div className="market-grid">{market.map(([cat, val, note]) => <button key={cat}><span>{cat}</span><strong>{val}</strong><p>{note}</p></button>)}</div><div className="risk-grid">{risks.map(([r,t,m]) => <details key={r}><summary>{r}<ChevronRight size={16}/></summary><h3>{t}</h3><p>{m}</p></details>)}</div></div></section>; }
function Financials() { return <section id="financials" className="cream-section"><div className="shell"><SectionTitle eyebrow="18 · Financials" title="PATH TO $12M REVENUE, BREAKEVEN IN YEAR THREE." italic="Milestone-gated capital. Gross margin discipline inherited from Fenty." /><div className="financial-lab"><div><Kicker left="Year-three revenue streams" /><div className="revenue-bars">{revenue.map(([name, amount, label, w]) => <div className="bar-row" key={name as string}><div><strong>{name}</strong><span>{label}</span></div><div className="bar-track"><span style={{ width: `${w}%` }} /></div><b>{amount}</b></div>)}</div></div><div className="projection-table"><Kicker left="3-year projection" /><table><thead><tr><th></th><th>Y1</th><th>Y2</th><th>Y3</th></tr></thead><tbody>{threeYear.map((r) => <tr key={r[0]}>{r.map((c, i) => i === 0 ? <th key={c}>{c}</th> : <td key={c}>{c}</td>)}</tr>)}</tbody></table></div></div><div className="traction-grid">{traction.map(([k,n,l]) => <button key={k}><span>{k}</span><strong><SmartNumber value={n} /></strong><p>{l}</p></button>)}</div><div className="allocation-grid"><div><Kicker left="Use of funds" />{useFunds.map(([a,b,c]) => <div className="fund-row" key={a}><strong>{a}</strong><span>{b}</span><em>{c}</em></div>)}</div><div><Kicker left="Channel mix · Year one" />{channels.map(([a,b,c]) => <div className="fund-row" key={a}><strong>{a}</strong><span>{b}</span><em>{c}</em></div>)}</div></div><div className="ask-card"><div><Kicker left="19 · The Ask" /><h3>$6.5M SEED · PREFERRED EQUITY.</h3><p>24 months of runway. Four ventures in market. One ecosystem at scale.</p></div><a className="gold-btn" href="mailto:ciarra@miojoco.com">Request meeting <ArrowRight size={16}/></a></div></div></section>; }

export default function Home() { return <main><ScrollProgress /><nav className="top-nav"><a href="#top">CIARRA PARDO CO</a><div><a href="#founder">Founder</a><a href="#portfolio">Portfolio</a><a href="#beautydays">BeautyDays</a><a href="#ecosystem">Ecosystem</a><a href="#financials">Financials</a></div></nav><Hero /><TrackRecord /><Journey /><Portfolio /><MiOjoVenture /><Peppers /><BeautyDays /><ResidencesVenture /><Ecosystem /><TechLayer /><Blueprint /><MarketAndRisk /><Financials /></main>; }
