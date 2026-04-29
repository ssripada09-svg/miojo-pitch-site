import { Section } from "@/components/primitives/Section";
import { SectionIntro } from "@/components/primitives/SectionIntro";
import { Stagger } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";
import { FOUNDER } from "@/content/founder";

export function FounderProofSection() {
  return (
    <Section id="founder-proof" tone="raised">
      <SectionIntro
        eyebrow="00 / Founder proof"
        tone="forest"
        headline={
          <>
            The investable asset is not the deck.
            <br />
            <span className="italic text-gold-500">It is the founder.</span>
          </>
        }
        lede={FOUNDER.oneLine}
      />

      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-16">
        {/* Founder portrait stand-in — editorial frame */}
        <Reveal>
          <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl border hairline-strong bg-gradient-to-br from-forest-700 via-forest to-forest-900 shadow-[0_30px_80px_-30px_rgba(31,44,32,0.55)]">
            {/* Texture layers */}
            <span
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(196,164,95,0.18),transparent_55%)]"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(193,90,59,0.22),transparent_60%)]"
            />
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-forest-900/90 to-transparent"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 text-cream-50">
              <span className="font-mono text-[0.66rem] uppercase tracking-eyebrow text-gold-300">
                {FOUNDER.role}
              </span>
              <span className="font-display text-3xl font-medium leading-tight md:text-[2.2rem]">
                {FOUNDER.name}
              </span>
            </figcaption>
            <span
              aria-hidden
              className="absolute right-6 top-6 font-mono text-[0.6rem] uppercase tracking-eyebrow text-cream-100/65"
            >
              Investor preview · 2026
            </span>
          </figure>
        </Reveal>

        {/* Pillars */}
        <Stagger className="flex flex-col gap-6" step={120}>
          {FOUNDER.pillars.map((p) => (
            <article
              key={p.eyebrow}
              className="border-l-2 border-gold-500/50 pl-5 transition-all hover:border-gold-500"
            >
              <span className="font-mono text-[0.66rem] uppercase tracking-eyebrow text-gold-600">
                {p.eyebrow}
              </span>
              <h3 className="mt-2 max-w-[32ch] font-display text-lg font-medium leading-tight text-forest-900 md:text-xl">
                {p.title}
              </h3>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-forest-500 md:text-[0.95rem]">
                {p.detail}
              </p>
            </article>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
