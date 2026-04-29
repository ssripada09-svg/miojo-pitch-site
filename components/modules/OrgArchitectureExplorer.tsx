"use client";

import { useState } from "react";
import { ORG_LAYERS } from "@/content/org";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { cn } from "@/lib/cn";

const TONE_BG: Record<string, string> = {
  forest: "bg-forest text-cream-50",
  gold: "bg-gold-500 text-cream-50",
  terracotta: "bg-terracotta-500 text-cream-50",
  olive: "bg-olive-500 text-cream-50",
  char: "bg-char-900 text-cream-50",
};

const TONE_BORDER: Record<string, string> = {
  forest: "border-forest/40",
  gold: "border-gold-500/45",
  terracotta: "border-terracotta-500/45",
  olive: "border-olive-500/45",
  char: "border-char-800",
};

const TONE_TEXT: Record<string, string> = {
  forest: "text-forest",
  gold: "text-gold-600",
  terracotta: "text-terracotta-600",
  olive: "text-olive-500",
  char: "text-char-900",
};

/**
 * Layered org architecture: founder → platform crews → operating support.
 * Click a role to expand detail. Each layer renders as a horizontal band.
 */
export function OrgArchitectureExplorer() {
  const [activeRoleId, setActiveRoleId] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-4">
      {ORG_LAYERS.map((layer, li) => (
        <Reveal key={layer.id} delay={li * 90}>
          <div
            className={cn(
              "rounded-2xl border bg-cream-50 px-6 py-6 md:px-8",
              TONE_BORDER[layer.tone],
            )}
          >
            <div className="mb-4 flex items-baseline justify-between gap-4">
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "rounded-full px-3 py-1 font-mono text-[0.66rem] uppercase tracking-eyebrow",
                    TONE_BG[layer.tone],
                  )}
                >
                  Layer {String(li + 1).padStart(2, "0")}
                </span>
                <h3
                  className={cn(
                    "font-display text-lg font-medium leading-tight md:text-xl",
                    TONE_TEXT[layer.tone],
                  )}
                >
                  {layer.label}
                </h3>
              </div>
              <span className="hidden max-w-[36ch] text-right text-xs italic leading-snug text-forest-500 md:block">
                {layer.caption}
              </span>
            </div>

            <Stagger
              className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4"
              step={70}
            >
              {layer.roles.map((role) => {
                const isActive = role.id === activeRoleId;
                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() =>
                      setActiveRoleId(isActive ? null : role.id)
                    }
                    className={cn(
                      "flex h-full flex-col gap-2 rounded-xl border px-4 py-4 text-left transition-all",
                      isActive
                        ? cn(TONE_BG[layer.tone], "border-transparent shadow-md")
                        : "border-forest/10 bg-cream-100 hover:border-forest/30",
                    )}
                  >
                    <span
                      className={cn(
                        "font-display text-sm font-medium leading-tight md:text-[0.95rem]",
                        isActive ? "text-cream-50" : "text-forest-900",
                      )}
                    >
                      {role.title}
                    </span>
                    <span
                      className={cn(
                        "text-xs leading-relaxed transition-all",
                        isActive
                          ? "max-h-[10rem] text-cream-100/85 opacity-100"
                          : "max-h-[3.5rem] overflow-hidden text-forest-500 opacity-90",
                      )}
                    >
                      {role.detail}
                    </span>
                  </button>
                );
              })}
            </Stagger>

            {/* Mobile caption */}
            <p className="mt-4 text-xs italic leading-snug text-forest-500 md:hidden">
              {layer.caption}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
