"use client";

import { useState } from "react";
import { REVENUE_LAYERS } from "@/content/economics";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { cn } from "@/lib/cn";

const TONE_BAR: Record<string, string> = {
  forest: "bg-gradient-to-r from-forest-700 to-forest",
  gold: "bg-gradient-to-r from-gold-500 to-gold-300",
  terracotta: "bg-gradient-to-r from-terracotta-600 to-terracotta-400",
  olive: "bg-gradient-to-r from-olive-600 to-olive-400",
};

const TONE_TEXT: Record<string, string> = {
  forest: "text-forest",
  gold: "text-gold-600",
  terracotta: "text-terracotta-600",
  olive: "text-olive-500",
};

/**
 * 4-layer revenue architecture. Layers stack vertically, each with a
 * proportional bar showing illustrative contribution share. Click to deepen.
 */
export function RevenueArchitectureMatrix() {
  const [activeId, setActiveId] = useState<string>(REVENUE_LAYERS[0].id);
  const active = REVENUE_LAYERS.find((l) => l.id === activeId)!;

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1.4fr)_22rem]">
      {/* Layers */}
      <Stagger className="flex flex-col gap-3" step={90}>
        {REVENUE_LAYERS.map((layer) => {
          const isActive = layer.id === activeId;
          return (
            <button
              key={layer.id}
              type="button"
              onClick={() => setActiveId(layer.id)}
              className={cn(
                "group relative grid grid-cols-[3.5rem_minmax(0,1fr)_5rem] items-center gap-4 rounded-xl border px-4 py-5 text-left transition-all md:grid-cols-[3.5rem_minmax(0,1fr)_8rem_5rem]",
                isActive
                  ? "border-forest/40 bg-cream-50 card-raised"
                  : "border-forest/10 bg-cream-50/60 hover:border-forest/25",
              )}
            >
              <span
                className={cn(
                  "font-mono text-[0.7rem] uppercase tracking-eyebrow",
                  TONE_TEXT[layer.tone],
                )}
              >
                {layer.layer}
              </span>
              <span className="flex flex-col gap-1">
                <span className="font-display text-base font-medium leading-tight text-forest-900 md:text-[1.1rem]">
                  {layer.label}
                </span>
                <span className="text-xs leading-snug text-forest-500">
                  {layer.driver}
                </span>
              </span>
              <span className="hidden h-2 overflow-hidden rounded-full bg-cream-300/60 md:block">
                <span
                  className={cn(
                    "block h-full origin-left rounded-full transition-transform duration-1000",
                    TONE_BAR[layer.tone],
                  )}
                  style={{
                    width: `${layer.contribution}%`,
                    transitionDelay: `${REVENUE_LAYERS.indexOf(layer) * 80}ms`,
                  }}
                />
              </span>
              <span
                className={cn(
                  "text-right font-display text-base font-medium leading-none md:text-lg",
                  TONE_TEXT[layer.tone],
                )}
              >
                {layer.contribution}%
              </span>
            </button>
          );
        })}
      </Stagger>

      {/* Detail */}
      <Reveal delay={120}>
        <aside className="sticky top-24 rounded-2xl border hairline bg-cream-50 p-7 card-soft">
          <span
            className={cn(
              "font-mono text-[0.66rem] uppercase tracking-eyebrow",
              TONE_TEXT[active.tone],
            )}
          >
            Layer {active.layer}
          </span>
          <h3 className="mt-3 font-display text-2xl font-medium leading-tight text-forest-900 md:text-[1.6rem]">
            {active.label}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-forest-700 md:text-base">
            {active.detail}
          </p>
          <p className="mt-4 border-t hairline pt-4 text-xs italic text-forest-500">
            Illustrative contribution. Layers are designed to compound, not silo — sponsor packages span tickets, programming, and hospitality at the same time.
          </p>
        </aside>
      </Reveal>
    </div>
  );
}
