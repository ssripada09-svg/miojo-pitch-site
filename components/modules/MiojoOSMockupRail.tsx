"use client";

import { useState } from "react";
import { OS_SCREENS } from "@/content/operating";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

const TONE_ACCENT: Record<string, string> = {
  forest: "border-forest/20 bg-forest/[0.06] text-forest",
  gold: "border-gold-500/30 bg-gold-50 text-gold-600",
  terracotta: "border-terracotta-500/30 bg-terracotta-500/5 text-terracotta-600",
  olive: "border-olive-500/30 bg-olive-500/5 text-olive-500",
};

const TONE_DOT: Record<string, string> = {
  forest: "bg-forest",
  gold: "bg-gold-500",
  terracotta: "bg-terracotta-500",
  olive: "bg-olive-500",
};

/**
 * Mockup rail with framed product screens. Reconstructed cards (web-native),
 * not screenshots. One large frame + storyboard caption.
 */
export function MiojoOSMockupRail() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = OS_SCREENS[activeIdx];

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_18rem]">
        {/* Featured frame */}
        <Reveal>
          <ProductFrame screen={active} />
        </Reveal>

        {/* Caption */}
        <Reveal delay={140}>
          <div className="flex flex-col gap-4 rounded-2xl border hairline bg-cream-50 p-6 card-soft">
            <span className="font-mono text-[0.66rem] uppercase tracking-eyebrow text-forest-400">
              Screen {String(activeIdx + 1).padStart(2, "0")} of {String(OS_SCREENS.length).padStart(2, "0")}
            </span>
            <h3 className="font-display text-xl font-medium leading-tight text-forest-900 md:text-[1.5rem]">
              {active.title}
            </h3>
            <p className="text-sm leading-relaxed text-forest-500">
              {active.subtitle}
            </p>
            <ul className="space-y-2 border-t hairline pt-4 text-sm text-forest-700">
              {active.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span
                    className={cn(
                      "mt-1.5 h-1 w-1 flex-shrink-0 rounded-full",
                      TONE_DOT[active.tone],
                    )}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-[0.7rem] italic leading-relaxed text-forest-400">
              Reconstructed reference design. Live OS surfaces are operating-internal.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Rail */}
      <div className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-2 md:mx-0 md:px-0">
        {OS_SCREENS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActiveIdx(i)}
            className={cn(
              "group flex w-[12rem] flex-shrink-0 flex-col gap-2 rounded-xl border px-4 py-4 text-left transition-all md:w-auto md:flex-1",
              i === activeIdx
                ? "border-forest/50 bg-cream-50 card-soft"
                : "border-forest/10 bg-cream-50/50 hover:border-forest/30",
            )}
          >
            <span
              className={cn(
                "inline-flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-eyebrow",
                TONE_ACCENT[s.tone].split(" ").find((c) => c.startsWith("text-")) ?? "text-forest-500",
              )}
            >
              <span
                className={cn("h-1.5 w-1.5 rounded-full", TONE_DOT[s.tone])}
              />
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-sm font-medium leading-tight text-forest-900 md:text-base">
              {s.title}
            </span>
            <span className="line-clamp-2 text-[0.7rem] leading-snug text-forest-500">
              {s.subtitle}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductFrame({ screen }: { screen: (typeof OS_SCREENS)[number] }) {
  return (
    <div className="overflow-hidden rounded-2xl border hairline-strong bg-char-900 card-raised">
      {/* Window chrome */}
      <div className="flex items-center justify-between border-b border-char-800 bg-char-900 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-terracotta-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-forest-300/60" />
        </div>
        <span className="font-mono text-[0.6rem] uppercase tracking-eyebrow text-cream-100/70">
          Miojo OS · {screen.title}
        </span>
        <span className="flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-eyebrow text-cream-100/50">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-300 animate-soft-pulse" />
          live
        </span>
      </div>

      {/* Body — minimal stylized OS surface */}
      <div className="grid min-h-[320px] grid-cols-1 bg-char-900 p-6 text-cream-50 md:grid-cols-[1fr_1.4fr] md:gap-6">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[0.6rem] uppercase tracking-eyebrow text-cream-100/60">
            Operating context
          </span>
          <h4 className="font-display text-lg font-medium md:text-xl">
            {screen.subtitle}
          </h4>
          <ul className="space-y-2 text-sm text-cream-100/80">
            {screen.bullets.slice(0, 3).map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold-300" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column — stylized data tiles */}
        <div className="mt-4 grid grid-cols-2 gap-3 md:mt-0">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex flex-col gap-2 rounded-lg border border-char-800 bg-char-800/50 p-3"
            >
              <span className="font-mono text-[0.55rem] uppercase tracking-eyebrow text-cream-100/55">
                Signal {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-2xl text-cream-50">
                {[78, 132, 24, 410][i]}
                <span className="text-sm text-cream-100/60">
                  {["%", "K", "h", "ct"][i]}
                </span>
              </span>
              <span className="text-[0.65rem] leading-tight text-cream-100/60">
                {[
                  "Member retention vs. baseline",
                  "Audience reachable through founder + partner",
                  "Avg founder hours saved this week",
                  "Active sponsor activations across pillars",
                ][i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
