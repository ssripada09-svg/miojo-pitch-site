"use client";

import { useState } from "react";
import { VENTURES, type Venture } from "@/content/ventures";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";

const TONE_BG: Record<Venture["tone"], string> = {
  forest: "bg-forest text-cream-50",
  gold: "bg-gold-500 text-cream-50",
  terracotta: "bg-terracotta-500 text-cream-50",
  olive: "bg-olive-500 text-cream-50",
};

const TONE_GLOW: Record<Venture["tone"], string> = {
  forest: "shadow-[0_0_40px_-8px_rgba(45,58,45,0.45)]",
  gold: "shadow-[0_0_40px_-8px_rgba(196,164,95,0.55)]",
  terracotta: "shadow-[0_0_40px_-8px_rgba(193,90,59,0.55)]",
  olive: "shadow-[0_0_40px_-8px_rgba(107,107,61,0.5)]",
};

const TONE_FOREGROUND: Record<Venture["tone"], string> = {
  forest: "text-forest",
  gold: "text-gold-600",
  terracotta: "text-terracotta-600",
  olive: "text-olive-500",
};

export function MiojoInterlockMap() {
  const [active, setActive] = useState<string | null>(null);
  const activeVenture = VENTURES.find((v) => v.id === active);

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_22rem] md:gap-14">
      {/* Diagram */}
      <Reveal>
        <div className="relative mx-auto aspect-square w-full max-w-[520px]">
          {/* Outer ring connectors */}
          <svg
            viewBox="0 0 400 400"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            <defs>
              <radialGradient id="audience-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(196,164,95,0.18)" />
                <stop offset="60%" stopColor="rgba(196,164,95,0.05)" />
                <stop offset="100%" stopColor="rgba(196,164,95,0)" />
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="180" fill="url(#audience-glow)" />
            <circle
              cx="200"
              cy="200"
              r="135"
              fill="none"
              stroke="rgba(45,58,45,0.12)"
              strokeDasharray="2 6"
            />
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="none"
              stroke="rgba(45,58,45,0.08)"
              strokeDasharray="2 6"
            />
            {VENTURES.map((v, i) => {
              const angle = (i / VENTURES.length) * Math.PI * 2 - Math.PI / 2;
              const x = 200 + 135 * Math.cos(angle);
              const y = 200 + 135 * Math.sin(angle);
              const isActive = active === v.id;
              return (
                <line
                  key={v.id}
                  x1="200"
                  y1="200"
                  x2={x}
                  y2={y}
                  stroke={isActive ? "rgba(196,164,95,0.65)" : "rgba(45,58,45,0.18)"}
                  strokeWidth={isActive ? 1.6 : 1}
                  style={{ transition: "stroke 240ms ease, stroke-width 240ms" }}
                />
              );
            })}
          </svg>

          {/* Center: Ciarra / Miojo */}
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-forest text-cream-50 shadow-[0_8px_30px_-8px_rgba(45,58,45,0.5)] transition-transform hover:scale-[1.03]"
            style={{ width: "30%", height: "30%" }}
          >
            <span className="flex h-full w-full flex-col items-center justify-center gap-1 px-2 text-center">
              <span className="font-mono text-[0.58rem] uppercase tracking-eyebrow text-gold-200">
                Engine
              </span>
              <span className="font-display text-base leading-tight md:text-lg">
                Ciarra<br />Miojo
              </span>
            </span>
          </button>

          {/* Outer pillars */}
          {VENTURES.map((v, i) => {
            const angle = (i / VENTURES.length) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + 38 * Math.cos(angle);
            const y = 50 + 38 * Math.sin(angle);
            const isActive = active === v.id;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setActive(isActive ? null : v.id)}
                onMouseEnter={() => setActive(v.id)}
                className={cn(
                  "absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl border px-4 py-3 text-left transition-all duration-300",
                  isActive
                    ? cn(TONE_BG[v.tone], TONE_GLOW[v.tone], "scale-[1.05] border-transparent")
                    : "border-forest/15 bg-cream-50 text-forest hover:border-forest/35",
                )}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  width: "30%",
                  minHeight: "20%",
                }}
              >
                <span
                  className={cn(
                    "block font-mono text-[0.58rem] uppercase tracking-eyebrow",
                    isActive ? "text-cream-50/80" : "text-forest-500",
                  )}
                >
                  {v.eyebrow}
                </span>
                <span className="mt-1 block font-display text-base font-medium leading-tight md:text-[1.1rem]">
                  {v.name}
                </span>
                <span
                  className={cn(
                    "mt-1 block text-[0.66rem] leading-snug",
                    isActive ? "text-cream-50/80" : "text-forest-500",
                  )}
                >
                  {v.role}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Side panel: active venture detail */}
      <Reveal delay={120}>
        <div className="sticky top-24 flex flex-col gap-5 rounded-2xl border hairline bg-cream-50 p-7 card-soft">
          {activeVenture ? (
            <>
              <span
                className={cn(
                  "font-mono text-[0.66rem] uppercase tracking-eyebrow",
                  TONE_FOREGROUND[activeVenture.tone],
                )}
              >
                {activeVenture.eyebrow}
              </span>
              <h3 className="font-display text-2xl font-medium leading-tight text-forest-900 md:text-[1.7rem]">
                {activeVenture.name}
              </h3>
              <p className="text-sm leading-relaxed text-forest-500 md:text-base">
                {activeVenture.pitch}
              </p>
              <p className="border-t hairline pt-4 text-sm italic leading-relaxed text-forest-700">
                {activeVenture.proof}
              </p>
              <dl className="grid grid-cols-1 gap-3 border-t hairline pt-4 text-xs">
                <Detail label="Audience" value={activeVenture.audience} />
                <Detail
                  label="Channels"
                  value={activeVenture.channels.join(" · ")}
                />
                <Detail
                  label="Monetization"
                  value={activeVenture.monetization.join(" · ")}
                />
              </dl>
            </>
          ) : (
            <>
              <span className="font-mono text-[0.66rem] uppercase tracking-eyebrow text-forest-500">
                Hover or tap a pillar
              </span>
              <h3 className="font-display text-2xl font-medium leading-tight text-forest-900 md:text-[1.7rem]">
                One engine.
                <br />
                <span className="italic text-gold-500">Multiple expressions.</span>
              </h3>
              <p className="text-sm leading-relaxed text-forest-500 md:text-base">
                Each surrounding venture is a separate commercial surface — but they share the same founder, the same audience, and the same operating layer. That is the platform.
              </p>
              <ul className="space-y-2 border-t hairline pt-4 text-sm text-forest-700">
                {[
                  "Founder taste sets the standard for every expression",
                  "Beauty Days converts attention into the audience the rest compounds against",
                  "Miojo OS holds the memory and signal across all four",
                  "Cross-venture LTV is the platform thesis — quantified",
                ].map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold-500" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </Reveal>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="font-mono text-[0.62rem] uppercase tracking-eyebrow text-forest-400">
        {label}
      </dt>
      <dd className="text-forest-700">{value}</dd>
    </div>
  );
}
