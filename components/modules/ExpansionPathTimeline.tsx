"use client";

import { useState } from "react";
import { EXPANSION_PHASES } from "@/content/economics";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

/**
 * Horizontal stepped timeline (desktop) / vertical (mobile).
 * Click a phase to see what goes live and what it means.
 */
export function ExpansionPathTimeline() {
  const [activeId, setActiveId] = useState(EXPANSION_PHASES[0].id);
  const active = EXPANSION_PHASES.find((p) => p.id === activeId)!;

  return (
    <div className="flex flex-col gap-10">
      {/* Timeline rail */}
      <Reveal>
        <div className="relative">
          {/* Connector — desktop horizontal */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[2.6rem] hidden h-px bg-gradient-to-r from-forest/30 via-gold-500/40 to-terracotta-500/30 md:block"
          />
          {/* Connector — mobile vertical */}
          <div
            aria-hidden
            className="absolute left-[1.6rem] top-0 bottom-0 w-px bg-gradient-to-b from-forest/30 via-gold-500/40 to-terracotta-500/30 md:hidden"
          />

          <ol className="relative grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-3">
            {EXPANSION_PHASES.map((p, i) => {
              const isActive = p.id === activeId;
              return (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(p.id)}
                    className={cn(
                      "group flex w-full items-start gap-4 text-left md:flex-col md:items-center md:text-center",
                    )}
                  >
                    {/* Node marker */}
                    <span
                      className={cn(
                        "relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 bg-cream-100 font-mono text-[0.66rem] uppercase tracking-eyebrow transition-all md:h-14 md:w-14",
                        isActive
                          ? "border-gold-500 text-gold-600 shadow-[0_0_24px_-6px_rgba(196,164,95,0.6)]"
                          : "border-forest/25 text-forest-500 group-hover:border-forest/50",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                      {isActive && (
                        <span
                          aria-hidden
                          className="absolute -inset-1 rounded-full border border-gold-500/30"
                        />
                      )}
                    </span>

                    {/* Label */}
                    <span className="flex flex-col gap-1 md:items-center">
                      <span className="font-mono text-[0.6rem] uppercase tracking-eyebrow text-forest-400">
                        {p.window}
                      </span>
                      <span
                        className={cn(
                          "font-display text-base font-medium leading-tight md:text-[1.05rem]",
                          isActive ? "text-forest-900" : "text-forest-700",
                        )}
                      >
                        {p.headline}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </Reveal>

      {/* Active phase detail */}
      <Reveal delay={120}>
        <div className="grid grid-cols-1 gap-6 rounded-2xl border hairline bg-cream-50 p-7 card-soft md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-10 md:p-10">
          <div>
            <span className="font-mono text-[0.66rem] uppercase tracking-eyebrow text-gold-600">
              {active.phase} · {active.window}
            </span>
            <h3 className="mt-2 font-display text-2xl font-medium leading-tight text-forest-900 md:text-[1.7rem]">
              {active.headline}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-forest-500 md:text-base">
              {active.meaning}
            </p>
          </div>
          <div>
            <span className="font-mono text-[0.66rem] uppercase tracking-eyebrow text-forest-500">
              What goes live
            </span>
            <ul className="mt-3 space-y-2 text-sm text-forest-700 md:text-base">
              {active.goLive.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold-500" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
