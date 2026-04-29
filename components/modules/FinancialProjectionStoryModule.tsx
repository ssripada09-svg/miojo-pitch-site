"use client";

import { useState } from "react";
import { FINANCIAL_PHASES, ASK } from "@/content/economics";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { cn } from "@/lib/cn";

const TONE_BG: Record<string, string> = {
  forest: "bg-forest",
  gold: "bg-gold-500",
  terracotta: "bg-terracotta-500",
  olive: "bg-olive-500",
};

/**
 * Stacked-contribution chart per year + driver narrative.
 * Click a year to see its contributors expanded. Mobile collapses to one column.
 */
export function FinancialProjectionStoryModule() {
  const [activeIdx, setActiveIdx] = useState(2); // default: Year 3 breakeven
  const active = FINANCIAL_PHASES[activeIdx];
  const max = Math.max(...FINANCIAL_PHASES.map((p) => p.revenue));

  return (
    <div className="flex flex-col gap-12">
      {/* Bars + summary */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1.5fr)_22rem]">
        <Reveal>
          <div className="rounded-2xl border hairline bg-cream-50 p-7 card-soft">
            <div className="flex items-end justify-between gap-4 border-b hairline pb-6">
              <div>
                <span className="font-mono text-[0.66rem] uppercase tracking-eyebrow text-forest-500">
                  Illustrative revenue trajectory
                </span>
                <h3 className="mt-1 font-display text-2xl leading-tight text-forest-900 md:text-[1.6rem]">
                  Path to platform breakeven
                </h3>
              </div>
              <span className="font-mono text-[0.66rem] uppercase tracking-eyebrow text-forest-400">
                $M
              </span>
            </div>

            <div className="mt-8 grid grid-cols-4 items-end gap-3 md:gap-6">
              {FINANCIAL_PHASES.map((phase, i) => {
                const isActive = i === activeIdx;
                const heightPct = (phase.revenue / max) * 100;
                return (
                  <button
                    key={phase.id}
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    className="group flex flex-col items-stretch gap-3 text-center"
                  >
                    <span className="font-display text-xl font-medium leading-none text-forest-900 md:text-2xl">
                      <CountUp
                        to={phase.revenue}
                        formatter={(v) =>
                          v < 10 ? v.toFixed(1) : Math.round(v).toString()
                        }
                        prefix="$"
                        suffix="M"
                      />
                    </span>
                    <span
                      className={cn(
                        "relative flex h-44 flex-col-reverse overflow-hidden rounded-t-md border border-b-0 transition-all md:h-56",
                        isActive
                          ? "border-forest/30 shadow-[0_0_24px_-8px_rgba(45,58,45,0.35)]"
                          : "border-forest/10 group-hover:border-forest/25",
                      )}
                    >
                      {/* Stack contributions from bottom */}
                      {phase.contributors.map((c, ci) => {
                        const segPct =
                          (c.value / phase.revenue) * heightPct;
                        return (
                          <span
                            key={c.label}
                            className={cn(
                              "block w-full origin-bottom transition-all duration-1000",
                              TONE_BG[c.tone],
                            )}
                            style={{
                              height: `${segPct}%`,
                              opacity: isActive ? 1 : 0.55,
                              transitionDelay: `${ci * 90}ms`,
                            }}
                          />
                        );
                      })}
                    </span>
                    <span
                      className={cn(
                        "font-mono text-[0.66rem] uppercase tracking-eyebrow",
                        isActive ? "text-forest-900" : "text-forest-500",
                      )}
                    >
                      {phase.year}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-6 border-t hairline pt-4 text-[0.7rem] italic leading-relaxed text-forest-400">
              Directional projection. Illustrative growth drivers — not audited financials. Sourcing on request.
            </p>
          </div>
        </Reveal>

        {/* Active year detail */}
        <Reveal delay={140}>
          <aside className="rounded-2xl border hairline bg-cream-50 p-7 card-soft">
            <span className="font-mono text-[0.66rem] uppercase tracking-eyebrow text-gold-600">
              {active.year}
            </span>
            <h3 className="mt-2 font-display text-2xl font-medium leading-tight text-forest-900 md:text-[1.6rem]">
              <CountUp
                to={active.revenue}
                formatter={(v) =>
                  v < 10 ? v.toFixed(1) : Math.round(v).toString()
                }
                prefix="$"
                suffix="M"
              />
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-forest-500 md:text-base">
              {active.driver}
            </p>
            <ul className="mt-5 space-y-3 border-t hairline pt-4">
              {active.contributors.map((c) => (
                <li
                  key={c.label}
                  className="flex items-center justify-between gap-3"
                >
                  <span className="flex items-center gap-2 text-sm text-forest-700">
                    <span
                      className={cn(
                        "h-2.5 w-2.5 flex-shrink-0 rounded-sm",
                        TONE_BG[c.tone],
                      )}
                    />
                    {c.label}
                  </span>
                  <span className="font-mono text-[0.7rem] uppercase tracking-eyebrow text-forest-500">
                    ${c.value.toFixed(1)}M
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>

      {/* Ask + uses */}
      <Reveal delay={160}>
        <div
          id="ask"
          className="grid grid-cols-1 gap-8 rounded-2xl border hairline bg-char-900 p-8 text-cream-50 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:p-10"
        >
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[0.66rem] uppercase tracking-eyebrow text-gold-300">
              The ask · {ASK.round}
            </span>
            <h3 className="font-display text-3xl font-medium leading-tight md:text-[2.2rem]">
              {ASK.amount}
              <span className="ml-3 text-base font-normal text-cream-100/65">
                / {ASK.runway} runway
              </span>
            </h3>
            <p className="max-w-prose text-sm leading-relaxed text-cream-100/80 md:text-base">
              Funds the wedge into a platform: Beauty Days Year-2, the operating layer, hospitality buildout, and the wellness-travel pilot. 24 months to platform breakeven on this thesis.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {ASK.uses.map((u) => (
              <div
                key={u.label}
                className="grid grid-cols-[3rem_minmax(0,1fr)] items-center gap-4 rounded-xl border border-char-800 bg-char-800/50 px-4 py-3"
              >
                <span className="font-display text-xl font-medium text-gold-300">
                  {u.pct}%
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[0.62rem] uppercase tracking-eyebrow text-cream-100/65">
                    {u.label}
                  </span>
                  <span className="text-xs leading-snug text-cream-100/75">
                    {u.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
