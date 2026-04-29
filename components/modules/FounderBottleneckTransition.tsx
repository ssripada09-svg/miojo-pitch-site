"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { FOUNDER_BOTTLENECK } from "@/content/operating";
import { cn } from "@/lib/cn";

/**
 * Two-state diagram: TODAY (founder bottleneck) vs WITH MIOJO OS (distributed).
 * Toggle interaction; on mobile renders as stacked sequence.
 */
export function FounderBottleneckTransition() {
  const [state, setState] = useState<"today" | "with">("today");

  return (
    <div className="relative">
      {/* Toggle */}
      <Reveal>
        <div
          role="tablist"
          aria-label="Operating model"
          className="mx-auto mb-10 inline-flex items-center gap-1 rounded-full border hairline bg-cream-50 p-1 font-mono text-[0.7rem] uppercase tracking-eyebrow shadow-sm"
        >
          <button
            role="tab"
            aria-selected={state === "today"}
            onClick={() => setState("today")}
            className={cn(
              "rounded-full px-4 py-2 transition-all",
              state === "today"
                ? "bg-forest text-cream-50 shadow-sm"
                : "text-forest-500 hover:text-forest-900",
            )}
          >
            {FOUNDER_BOTTLENECK.todayLabel}
          </button>
          <button
            role="tab"
            aria-selected={state === "with"}
            onClick={() => setState("with")}
            className={cn(
              "rounded-full px-4 py-2 transition-all",
              state === "with"
                ? "bg-gold-500 text-cream-50 shadow-sm"
                : "text-forest-500 hover:text-forest-900",
            )}
          >
            {FOUNDER_BOTTLENECK.withMiojoLabel}
          </button>
        </div>
      </Reveal>

      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* TODAY: bottleneck */}
        <div
          aria-hidden={state !== "today"}
          className={cn(
            "transition-all duration-700",
            state === "today" ? "opacity-100" : "opacity-25 md:opacity-30",
          )}
        >
          <BottleneckDiagram active={state === "today"} />
          <p className="mt-6 max-w-prose text-sm leading-relaxed text-forest-500 md:text-base">
            {FOUNDER_BOTTLENECK.todayCaption}
          </p>
        </div>

        {/* WITH MIOJO OS: layered */}
        <div
          aria-hidden={state !== "with"}
          className={cn(
            "transition-all duration-700",
            state === "with" ? "opacity-100" : "opacity-25 md:opacity-30",
          )}
        >
          <DistributedDiagram active={state === "with"} />
          <p className="mt-6 max-w-prose text-sm leading-relaxed text-forest-500 md:text-base">
            {FOUNDER_BOTTLENECK.withMiojoCaption}
          </p>
        </div>
      </div>
    </div>
  );
}

function BottleneckDiagram({ active }: { active: boolean }) {
  const nodes = FOUNDER_BOTTLENECK.todayNodes;
  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full rounded-2xl border hairline bg-cream-50 p-6 transition-shadow duration-500",
        active ? "card-raised" : "card-soft",
      )}
    >
      <svg
        viewBox="0 0 400 320"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        {nodes.map((_, i) => {
          const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
          const cx = 200;
          const cy = 160;
          const r = 110;
          const x = cx + r * Math.cos(angle);
          const y = cy + r * Math.sin(angle);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke={active ? "rgba(193,90,59,0.55)" : "rgba(45,58,45,0.25)"}
              strokeWidth={1.5}
              strokeDasharray="0"
              style={{
                transition: "stroke 600ms ease, stroke-dasharray 600ms",
              }}
            />
          );
        })}
        <circle
          cx="200"
          cy="160"
          r="34"
          fill={active ? "var(--terracotta-500)" : "var(--forest-500)"}
          opacity={active ? 0.92 : 0.6}
          style={{ transition: "fill 600ms ease, opacity 600ms ease" }}
        />
        <text
          x="200"
          y="165"
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="#FAF7F0"
          letterSpacing="0.16em"
          style={{ textTransform: "uppercase" }}
        >
          CIARRA
        </text>
      </svg>
      {nodes.map((node, i) => {
        const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const xPct = 50 + 38 * Math.cos(angle);
        const yPct = 50 + 38 * Math.sin(angle);
        return (
          <span
            key={node.id}
            className={cn(
              "absolute -translate-x-1/2 -translate-y-1/2 rounded-full border hairline bg-cream-50 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-eyebrow shadow-sm transition-all duration-500",
              active ? "text-forest-900" : "text-forest-400",
            )}
            style={{
              left: `${xPct}%`,
              top: `${yPct}%`,
              transitionDelay: active ? `${i * 60}ms` : "0ms",
            }}
          >
            {node.label}
          </span>
        );
      })}
    </div>
  );
}

function DistributedDiagram({ active }: { active: boolean }) {
  const layers = FOUNDER_BOTTLENECK.withMiojoLayers;
  const toneToBg: Record<string, string> = {
    forest: "bg-forest text-cream-50 border-forest-700",
    gold: "bg-gold-500 text-cream-50 border-gold-600",
    terracotta: "bg-terracotta-500 text-cream-50 border-terracotta-600",
  };
  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full rounded-2xl border hairline bg-cream-50 p-6 transition-shadow duration-500",
        active ? "card-raised" : "card-soft",
      )}
    >
      <div className="flex h-full flex-col justify-between gap-3">
        {layers.map((layer, i) => (
          <div
            key={layer.id}
            className={cn(
              "flex items-center justify-between gap-4 rounded-xl border px-4 py-4 transition-all",
              toneToBg[layer.tone] ?? "bg-forest text-cream-50",
              active ? "opacity-100" : "opacity-50",
            )}
            style={{
              transitionDelay: active ? `${i * 120}ms` : "0ms",
              transform: active ? "translateY(0)" : "translateY(8px)",
              transitionDuration: "600ms",
            }}
          >
            <div className="flex flex-col">
              <span className="font-mono text-[0.66rem] uppercase tracking-eyebrow opacity-80">
                Layer {i + 1}
              </span>
              <span className="mt-1 text-base font-medium md:text-lg">
                {layer.label}
              </span>
            </div>
            <span className="hidden max-w-[20ch] text-right text-xs leading-snug opacity-90 md:block">
              {layer.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
