"use client";

import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

type RuleDrawProps = {
  tone?: "forest" | "gold" | "terracotta" | "olive" | "ink";
  width?: string;
  className?: string;
  delay?: number;
};

const toneMap: Record<NonNullable<RuleDrawProps["tone"]>, string> = {
  forest:
    "bg-gradient-to-r from-forest/80 via-forest/25 to-transparent",
  gold:
    "bg-gradient-to-r from-gold-500/85 via-gold-500/25 to-transparent",
  terracotta:
    "bg-gradient-to-r from-terracotta-500/80 via-terracotta-500/25 to-transparent",
  olive:
    "bg-gradient-to-r from-olive-500/80 via-olive-500/25 to-transparent",
  ink:
    "bg-gradient-to-r from-forest-900/60 via-forest-900/15 to-transparent",
};

export function RuleDraw({
  tone = "forest",
  width = "w-10",
  className,
  delay = 0,
}: RuleDrawProps) {
  return (
    <Reveal
      kind="scaleX"
      delay={delay}
      className={cn("h-[1px] origin-left", width, toneMap[tone], className)}
    >
      <span className="sr-only">—</span>
    </Reveal>
  );
}
