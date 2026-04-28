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
function TrackRecord() { return <section id="founder" className="cream-section"><div className="shell two-col founder-grid"><div className="portrait-panel reveal-on-view"><Image src="/assets/canonical/page02_img01.png" alt="Ciarra Pardo portrait" fill sizes="(max-width: 900px) 100vw, 38vw" className="object-cover grayscale" /></div><div><SectionTitle eyebrow="02 · The Founder" title="TWENTY YEARS BUILDING THE BRANDS THE CULTURE QUOTES BACK." italic="institutional rigor, cultural fluency.">Born in the Bronx to Puerto Rican parents, Ciarra has spent twenty years at the intersection of culture, commerce, and creative authority — from Def Jam and Rihanna to Fenty Corp and the next portfolio.</SectionTitle><div className="stat-grid">{stats.map(([num, label], i) => <button className="stat-card reveal-on-view" style={{ animationDelay: `${i * 90}ms` }} key={label}><strong><SmartNumber value={num} /></strong><span>{label}</span><small>click for source context</small></button>)}</div><blockquote>“In 2021 I was diagnosed with Stage 3C triple-negative breast cancer. I beat it. Everything after is built in that clarity.”</blockquote></div></div></section>; }
function Journey() { return <section className="forest-section"><div className="shell"><SectionTitle eyebrow="04 · The Journey" title="FROM BRONX KITCHEN TABLES TO THE FENTY BLUEPRINT." italic="Every chapter trained the next." /><div className="timeline">{journey.map(([year, place, copy], i) => <button className="timeline-item reveal-on-view" key={year} style={{ animationDelay: `${i * 80}ms` }}><span className="dot" /><strong>{year}</strong><b>{place}</b><p>{copy}</p></button>)}</div></div></section>; }

function Portfolio() {
  const [active, setActive] = useState(0); const [open, setOpen] = useState(false); const v = ventures[active];
  return <section id="portfolio" className="cream-section"><div className="shell"><SectionTitle eyebrow="05 · The Portfolio" title="FOUR VENTURES. ONE CREATIVE ENGINE." italic="Every brand inherits Fenty’s institutional rigor.">Shared audience. Shared supply chain. Shared creative direction. Every dollar invested amplifies across all four. Click any venture for the deeper investor logic.</SectionTitle><div className="venture-grid">{ventures.map((v, i) => <button className={`venture-card reveal-on-view ${active === i ? "active" : ""}`} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => { setActive(i); setOpen(true); }} key={v.name}><span>{v.numeral}</span><h3>{v.name}</h3><em>{v.line}</em><b>{v.role}</b><p>{v.copy}</p><small>{v.launch} · open detail</small></button>)}</div><div key={v.name} className="active-venture active-panel"><strong>{v.name}</strong><span>{v.copy}</span><button onClick={() => setOpen(true)}>Open investor detail <ArrowRight size={14}/></button></div></div><DetailDrawer open={open} onClose={() => setOpen(false)} title={v.name}><p className="drawer-lede">{v.line} — {v.role}</p><ul>{v.detail.map((d) => <li key={d}>{d}</li>)}</ul><div className="drawer-metric"><span>Economics</span><strong>{v.economics}</strong></div></DetailDrawer></section>;
}
function Peppers() { return <section className="cream-section image-story"><div className="shell"><SectionTitle eyebrow="08 · Farm to Pantry" title="ONE SUPPLY CHAIN. THREE REVENUE STREAMS." italic="Sweetwater grows it. Peppers plates it. Beli’s jars it." /><div className="image-triptych">{["SOURCE", "SERVE", "SCALE"].map((label, i) => <button className="trip-card reveal-on-view" key={label}><Image src={`/assets/canonical/page10_img0${i + 1}.jpg`} alt={label} width={1344} height={768} /><span>{["I", "II", "III"][i]} · {label}</span><p>{i === 0 ? "Regenerative farm supplies heirloom peppers, herbs, and produce." : i === 1 ? "Flagship restaurant and membership dining room; every night a living campaign." : "Artisanal sauces, oils, preserves and spice blends sold in-restaurant, DTC, and retail."}</p></button>)}</div></div></section>; }

function BeautyDays() {
  const [active, setActive] = useState(0); const zone = zones[active];
  return <section id="beautydays" className="forest-section beauty-section"><div className="shell"><div className="beauty-hero reveal-on-view"><Image src="/assets/canonical/page11_img01.jpg" alt="BeautyDays activation render" fill sizes="100vw" className="object-cover" /><div><Kicker left="09 · BeautyDays" right="The Amplifier" /><h2>BEAUTYDAYS</h2><p className="deck-italic">the gathering</p><p>A multi-day beauty and culture festival engineered to convert mass attention into portfolio distribution.</p></div></div><div className="beauty-metrics">{[["8,500", "Target attendees"], ["125+", "Brand vendors"], ["$2.3M", "Projected revenue Y1"]].map(([n,l]) => <button key={l}><strong><SmartNumber value={n} /></strong><span>{l}</span></button>)}</div><div className="pillar-row">{beautyPillars.map((p, i) => <button key={p}><b>{["I","II","III","IV","V","VI","VII"][i]}</b>{p}</button>)}</div><div className="zone-explorer"><div className="zone-tabs">{zones.map((z, i) => <button key={z[0]} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)} className={active === i ? "active" : ""}>ZONE {String(i + 1).padStart(2, "0")}<ChevronRight size={14}/></button>)}</div><div key={zone[0]} className="zone-panel active-panel"><Kicker left={zone[2]} /><h3>{zone[0]}</h3><p>{zone[1]}</p><div className="zone-chips">{zone[3].map((x) => <span key={x}>{x}</span>)}</div></div></div><BeautyEconomics /></div></section>;
}
function BeautyEconomics() { const lines = [["Ticketing", "$1.05M", "8,500 pax", 100], ["Title Sponsorship", "$700K", "2 deals", 67], ["Vendor Fees", "$470K", "125 brands", 45], ["F&B / Dining", "$220K", "3,600 seats", 21], ["Media Rights", "$100K", "1 partner", 10]]; return <div className="beauty-econ"><Kicker left="BeautyDays Y1 economics" right="click zones above" />{lines.map(([name, amt, src, w]) => <div className="mini-bar" key={name}><span>{name}<small>{src}</small></span><div><i style={{ width: `${w}%` }} /></div><b>{amt}</b></div>)}</div>; }

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

export default function Home() { return <main><ScrollProgress /><nav className="top-nav"><a href="#top">CIARRA PARDO CO</a><div><a href="#founder">Founder</a><a href="#portfolio">Portfolio</a><a href="#beautydays">BeautyDays</a><a href="#ecosystem">Ecosystem</a><a href="#financials">Financials</a></div></nav><Hero /><TrackRecord /><Journey /><Portfolio /><Peppers /><BeautyDays /><Ecosystem /><TechLayer /><Blueprint /><MarketAndRisk /><Financials /></main>; }
