"use client";

import { useState } from "react";
import { BEAUTY_DAYS_JOURNEY, BEAUTY_DAYS_PILLARS } from "@/content/beauty-days";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { cn } from "@/lib/cn";

/**
 * Five-stage funnel: Discover → RSVP → Attend → Activate → Compound.
 * Click a stage; right panel deepens. On mobile becomes a vertical accordion.
 */
export function BeautyDaysJourneyModule() {
  const [activeId, setActiveId] = useState(BEAUTY_DAYS_JOURNEY[2].id);
  const active = BEAUTY_DAYS_JOURNEY.find((s) => s.id === activeId)!;

  return (
    <div className="flex flex-col gap-10">
      {/* Pillars row (above journey) */}
      <Reveal>
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[0.66rem] uppercase tracking-eyebrow text-forest-500">
            Programmed pillars ·
          </span>
          {BEAUTY_DAYS_PILLARS.map((p) => (
            <span
              key={p.id}
              className="rounded-full border hairline bg-cream-50 px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-eyebrow text-forest-700"
            >
              {p.label}
              <span className="ml-2 normal-case text-forest-400">· {p.note}</span>
            </span>
          ))}
        </div>
      </Reveal>

      {/* Funnel */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_22rem]">
        {/* Stages: horizontal on desktop, vertical on mobile */}
        <Stagger
          className="grid grid-cols-1 gap-3 md:grid-cols-5 md:gap-2"
          step={80}
        >
          {BEAUTY_DAYS_JOURNEY.map((stage, i) => {
            const isActive = stage.id === activeId;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveId(stage.id)}
                className={cn(
                  "group relative flex flex-col items-start gap-2 rounded-xl border px-4 py-5 text-left transition-all duration-300",
                  isActive
                    ? "border-gold-500/60 bg-cream-50 card-raised"
                    : "border-forest/10 bg-cream-50/60 hover:border-forest/30",
                )}
              >
                <span className="font-mono text-[0.6rem] uppercase tracking-eyebrow text-forest-400">
                  {String(i + 1).padStart(2, "0")} / {stage.title}
                </span>
                <span
                  className={cn(
                    "font-display text-2xl leading-none transition-colors md:text-[1.7rem]",
                    isActive ? "text-gold-600" : "text-forest-900",
                  )}
                >
                  {stage.audienceCount}
                </span>
                <span className="font-mono text-[0.6rem] uppercase tracking-eyebrow text-forest-500">
                  {stage.audienceLabel}
                </span>
                {/* Connector arrow on desktop */}
                {i < BEAUTY_DAYS_JOURNEY.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute right-[-10px] top-1/2 hidden h-px w-3 -translate-y-1/2 bg-forest/15 md:block"
                  />
                )}
                {/* Active underline */}
                <span
                  aria-hidden
                  className={cn(
                    "absolute bottom-0 left-4 right-4 h-px transition-all",
                    isActive
                      ? "bg-gradient-to-r from-gold-500 to-gold-300 opacity-100"
                      : "opacity-0",
                  )}
                />
              </button>
            );
          })}
        </Stagger>

        {/* Active stage detail */}
        <Reveal delay={140}>
          <aside className="rounded-2xl border hairline bg-cream-50 p-7 card-soft">
            <span className="font-mono text-[0.66rem] uppercase tracking-eyebrow text-gold-600">
              Stage / {active.title}
            </span>
            <h3 className="mt-3 font-display text-2xl font-medium leading-tight text-forest-900 md:text-[1.6rem]">
              {active.audienceCount}{" "}
              <span className="font-sans text-base font-normal text-forest-500">
                {active.audienceLabel}
              </span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-forest-700 md:text-base">
              {active.whatHappens}
            </p>
            <p className="mt-4 border-t hairline pt-4 text-sm italic text-forest-500">
              {active.proof}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 border-t hairline pt-4">
              {active.monetization.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-gold-500/40 bg-gold-50 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-eyebrow text-gold-600"
                >
                  {m}
                </span>
              ))}
            </div>
          </aside>
        </Reveal>
      </div>

      {/* Compound logic — flywheel narrative */}
      <Reveal delay={160}>
        <div className="rounded-2xl border hairline bg-sand-100/60 p-7">
          <span className="font-mono text-[0.66rem] uppercase tracking-eyebrow text-terracotta-600">
            Compound · platform fly-back
          </span>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-forest-900 md:text-base">
            Every cohort that activates becomes a candidate for Peppers &amp; Beli, a Residence guest, and a customer for Mi Ojo&#8208;built brands. Sponsors pay more on renewal because the audience compounded. The festival is a wedge for one platform — not a standalone events business.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
