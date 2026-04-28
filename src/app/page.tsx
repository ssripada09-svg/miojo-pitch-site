"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

const ventures = [
  { numeral: "ONE", name: "MI OJO", line: "my eye", role: "Creative house & venture studio", launch: "Founded 2019", copy: "Brand strategy, cultural IP, creative direction, celebrity partnerships, and venture equity in the next wave of fashion, beauty, and lifestyle." },
  { numeral: "TWO", name: "PEPPERS & BELI", line: "a culinary love letter", role: "Restaurant · culinary brand · CPG", launch: "Opening 2026", copy: "Grandmother’s recipes meet Michelin craft: restaurant, membership dining room, farm supply chain, and Beli’s Pantry." },
  { numeral: "THREE", name: "BEAUTYDAYS", line: "the gathering", role: "Beauty & culture festival", launch: "Year one 2026", copy: "A multi-day beauty and culture festival engineered to convert mass attention into portfolio distribution." },
  { numeral: "FOUR", name: "THE RESIDENCES", line: "a home that holds you", role: "Wellness-forward living", launch: "Phase 2028+", copy: "Curated travel properties, members-only retreats, and eventually owned real estate around rituals that heal." },
];

const stats = [
  ["20+", "Years creative leadership"],
  ["4", "Fenty brands built at LVMH scale"],
  ["$3B+", "Brand value created"],
  ["3", "Unicorns in the making"],
];

const journey = [
  ["1979", "Bronx, NY", "Heritage learned at the kitchen table."],
  ["Early 2000s", "Wall Street", "Morgan Stanley Dean Witter; walks away to chase culture."],
  ["Mid 2000s", "Def Jam · Island", "Shapes visual language for Jay-Z, Eminem, Usher, The Killers."],
  ["2007", "Rihanna", "Art Director, Good Girl Gone Bad — the inflection point."],
  ["2014–19", "Fenty Corp", "Four category-defining brands at LVMH scale."],
  ["2026", "Ciarra Pardo Co.", "Four ventures, one creative engine."],
];

const beautyPillars = ["Skin & Hair", "Wellness", "Nutrition", "Mental Health", "Community", "Culture", "Innovation"];
const zones = [
  ["Wellness Wing", "Diagnostics, breathwork domes, IV bars, infrared saunas, practitioner rooms.", "Upgraded wellness pass + title sponsor"],
  ["The BeautyLab", "Skin-tech diagnostics, AI colour-matching, biotech reveals, device previews.", "R&D sponsorships + consumer data"],
  ["The Marketplace", "125+ curated beauty, wellness, and lifestyle brands with limited drops.", "Vendor fees + rev share"],
  ["Dining Oasis", "Peppers & Beli residency, heritage chefs, longevity-menu tastings.", "Ticketed dinners + sponsor"],
  ["BeautyDays Chats", "Founders, physicians, artists and athletes on a programmed stage.", "Media rights + syndication"],
  ["Innovation Hub", "Juried showcase for what beauty, wellness, and technology become next.", "Pipeline + venture signal"],
];

const frameworks = [
  "Customer Lens", "List · Offer · Creative", "Three Products", "Offer Stacking", "Sales Funnel", "Lead Flow", "Content Phases", "Content That Sells", "Retention Hooks", "Launch Runbook",
];

const revenue = [
  ["Peppers & Beli", "$5.8M", "Restaurant · Membership"],
  ["BeautyDays", "$2.3M", "Festival · Sponsorship"],
  ["Mi Ojo", "$2.1M", "Creative · Venture Equity"],
  ["Beli’s Pantry", "$1.5M", "CPG · DTC & Retail"],
];

const traction = [
  ["Mi Ojo · Active", "7", "Active client retainers"],
  ["Peppers & Beli · Pre-launch", "2,400", "Membership waitlist"],
  ["BeautyDays · Year Zero", "28", "Brand LOIs signed"],
  ["Owned channels", "1.2M+", "Social reach"],
];

function Kicker({ left, right }: { left: string; right?: string }) {
  return (
    <div className="kicker">
      <span>{left}</span>
      {right && <span>{right}</span>}
    </div>
  );
}

function SectionTitle({ eyebrow, title, italic, children }: { eyebrow: string; title: string; italic?: string; children?: React.ReactNode }) {
  return (
    <div className="section-title reveal-on-view">
      <Kicker left={eyebrow} />
      <h2>{title}</h2>
      {italic && <p className="deck-italic">{italic}</p>}
      {children && <p className="lede">{children}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="split-hero">
      <div className="hero-copy reveal-on-view">
        <Kicker left="CIARRA PARDO CO · 2026" right="CONFIDENTIAL" />
        <p className="deck-italic hero-italic">Heritage is medicine.</p>
        <h1>CIARRA<br />PARDO</h1>
        <p className="source-code">the ecosystem’s source code</p>
        <p className="hero-sub">MI OJO · PEPPERS & BELI · BEAUTYDAYS · THE RESIDENCES</p>
        <div className="hero-actions">
          <a href="#portfolio" className="gold-btn">Explore the ecosystem <ArrowRight size={16} /></a>
          <a href="#financials" className="line-btn">View investor model</a>
        </div>
      </div>
      <div className="hero-image">
        <Image src="/assets/canonical/page01_img02.png" alt="Ciarra Pardo black and white founder portrait" fill priority sizes="(max-width: 900px) 100vw, 44vw" className="object-cover grayscale" />
      </div>
    </section>
  );
}

function TrackRecord() {
  return (
    <section id="founder" className="cream-section">
      <div className="shell two-col founder-grid">
        <div className="portrait-panel reveal-on-view">
          <Image src="/assets/canonical/page02_img01.png" alt="Ciarra Pardo portrait" fill sizes="(max-width: 900px) 100vw, 38vw" className="object-cover grayscale" />
        </div>
        <div>
          <SectionTitle eyebrow="02 · The Founder" title="TWENTY YEARS BUILDING THE BRANDS THE CULTURE QUOTES BACK." italic="institutional rigor, cultural fluency.">
            Born in the Bronx to Puerto Rican parents, Ciarra has spent twenty years at the intersection of culture, commerce, and creative authority — from Def Jam and Rihanna to Fenty Corp and the next portfolio.
          </SectionTitle>
          <div className="stat-grid">
            {stats.map(([num, label], i) => <div className="stat-card reveal-on-view" style={{ animationDelay: `${i * 90}ms` }} key={label}><strong>{num}</strong><span>{label}</span></div>)}
          </div>
          <blockquote>“In 2021 I was diagnosed with Stage 3C triple-negative breast cancer. I beat it. Everything after is built in that clarity.”</blockquote>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="forest-section">
      <div className="shell">
        <SectionTitle eyebrow="04 · The Journey" title="FROM BRONX KITCHEN TABLES TO THE FENTY BLUEPRINT." italic="Every chapter trained the next." />
        <div className="timeline">
          {journey.map(([year, place, copy], i) => <div className="timeline-item reveal-on-view" key={year} style={{ animationDelay: `${i * 80}ms` }}><span className="dot" /><strong>{year}</strong><b>{place}</b><p>{copy}</p></div>)}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [active, setActive] = useState(0);
  return (
    <section id="portfolio" className="cream-section">
      <div className="shell">
        <SectionTitle eyebrow="05 · The Portfolio" title="FOUR VENTURES. ONE CREATIVE ENGINE." italic="Every brand inherits Fenty’s institutional rigor.">
          Shared audience. Shared supply chain. Shared creative direction. Every dollar invested amplifies across all four.
        </SectionTitle>
        <div className="venture-grid">
          {ventures.map((v, i) => <button className={`venture-card reveal-on-view ${active === i ? "active" : ""}`} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)} key={v.name}><span>{v.numeral}</span><h3>{v.name}</h3><em>{v.line}</em><b>{v.role}</b><p>{v.copy}</p><small>{v.launch}</small></button>)}
        </div>
        <div className="active-venture"><strong>{ventures[active].name}</strong><span>{ventures[active].copy}</span></div>
      </div>
    </section>
  );
}

function Peppers() {
  return (
    <section className="cream-section image-story">
      <div className="shell">
        <SectionTitle eyebrow="08 · Farm to Pantry" title="ONE SUPPLY CHAIN. THREE REVENUE STREAMS." italic="Sweetwater grows it. Peppers plates it. Beli’s jars it." />
        <div className="image-triptych">
          {["SOURCE", "SERVE", "SCALE"].map((label, i) => <div className="trip-card reveal-on-view" key={label}><Image src={`/assets/canonical/page10_img0${i + 1}.jpg`} alt={label} width={1344} height={768} /><span>I{ i === 0 ? "" : i === 1 ? "I" : "II" } · {label}</span><p>{i === 0 ? "Regenerative farm supplies heirloom peppers, herbs, and produce." : i === 1 ? "Flagship restaurant and membership dining room; every night a living campaign." : "Artisanal sauces, oils, preserves and spice blends sold in-restaurant, DTC, and retail."}</p></div>)}
        </div>
      </div>
    </section>
  );
}

function BeautyDays() {
  const [active, setActive] = useState(0);
  const zone = zones[active];
  return (
    <section id="beautydays" className="forest-section beauty-section">
      <div className="shell">
        <div className="beauty-hero reveal-on-view">
          <Image src="/assets/canonical/page11_img01.jpg" alt="BeautyDays activation render" fill sizes="100vw" className="object-cover" />
          <div><Kicker left="09 · BeautyDays" right="The Amplifier" /><h2>BEAUTYDAYS</h2><p className="deck-italic">the gathering</p><p>A multi-day beauty and culture festival engineered to convert mass attention into portfolio distribution.</p></div>
        </div>
        <div className="beauty-metrics">
          {[ ["8,500", "Target attendees"], ["125+", "Brand vendors"], ["$2.3M", "Projected revenue Y1"] ].map(([n,l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}
        </div>
        <div className="pillar-row">{beautyPillars.map((p, i) => <span key={p}><b>{["I","II","III","IV","V","VI","VII"][i]}</b>{p}</span>)}</div>
        <div className="zone-explorer">
          <div className="zone-tabs">{zones.map((z, i) => <button key={z[0]} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)} className={active === i ? "active" : ""}>ZONE {String(i + 1).padStart(2, "0")}<ChevronRight size={14}/></button>)}</div>
          <div className="zone-panel"><Kicker left={zone[2]} /><h3>{zone[0]}</h3><p>{zone[1]}</p></div>
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section id="ecosystem" className="cream-section">
      <div className="shell two-col">
        <div>
          <SectionTitle eyebrow="11 · Shared Infrastructure" title="FOUR VENTURES. ONE AUDIENCE. ONE CREATIVE ENGINE." italic="Shared infrastructure amplifies every dollar invested." />
          <div className="ecosystem-list">{["Creative Direction", "Production & IP", "Supply Chain", "Hospitality & Real Estate"].map(x => <span key={x}>{x}</span>)}</div>
        </div>
        <div className="ecosystem-orbit reveal-on-view">
          <div className="center">MI OJO<br /><em>the engine</em></div>
          {ventures.slice(1).map((v, i) => <span className={`orbit o${i}`} key={v.name}>{v.name}</span>)}
        </div>
      </div>
    </section>
  );
}

function Blueprint() {
  return (
    <section className="forest-section blueprint-section">
      <div className="shell">
        <SectionTitle eyebrow="Blueprint · Operating System" title="SHE DOESN’T COME EMPTY-HANDED." italic="she comes with a system.">
          Ten frameworks, one operating system — customer, product, marketing, funnel, content, retention and financial discipline proven across twenty years and four nine-figure brands.
        </SectionTitle>
        <div className="framework-grid">{frameworks.map((f, i) => <div className="framework-card reveal-on-view" key={f}><span>{String(i + 1).padStart(2, "0")}</span><strong>{f}</strong></div>)}</div>
      </div>
    </section>
  );
}

function Financials() {
  return (
    <section id="financials" className="cream-section">
      <div className="shell">
        <SectionTitle eyebrow="18 · Financials" title="PATH TO $12M REVENUE, BREAKEVEN IN YEAR THREE." italic="Milestone-gated capital. Gross margin discipline inherited from Fenty." />
        <div className="revenue-bars">{revenue.map(([name, amount, label], i) => <div className="bar-row" key={name}><div><strong>{name}</strong><span>{label}</span></div><div className="bar-track"><span style={{ width: ["100%", "40%", "36%", "26%"][i] }} /></div><b>{amount}</b></div>)}</div>
        <div className="traction-grid">{traction.map(([k,n,l]) => <div key={k}><span>{k}</span><strong>{n}</strong><p>{l}</p></div>)}</div>
        <div className="ask-card"><div><Kicker left="19 · The Ask" /><h3>$6.5M SEED · PREFERRED EQUITY.</h3><p>24 months of runway. Four ventures in market. One ecosystem at scale.</p></div><a className="gold-btn" href="mailto:ciarra@miojoco.com">Request meeting <ArrowRight size={16}/></a></div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="top-nav"><a href="#top">CIARRA PARDO CO</a><div><a href="#founder">Founder</a><a href="#portfolio">Portfolio</a><a href="#beautydays">BeautyDays</a><a href="#ecosystem">Ecosystem</a><a href="#financials">Financials</a></div></nav>
      <Hero />
      <TrackRecord />
      <Journey />
      <Portfolio />
      <Peppers />
      <BeautyDays />
      <Ecosystem />
      <Blueprint />
      <Financials />
    </main>
  );
}
