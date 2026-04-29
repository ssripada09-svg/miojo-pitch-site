import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ProofChipProps = {
  children: ReactNode;
  tone?: "forest" | "gold" | "terracotta" | "olive";
  className?: string;
};

const toneMap: Record<NonNullable<ProofChipProps["tone"]>, string> = {
  forest: "border-forest/30 text-forest bg-forest/5",
  gold: "border-gold-500/40 text-gold-600 bg-gold-50",
  terracotta: "border-terracotta-500/40 text-terracotta-600 bg-terracotta-500/5",
  olive: "border-olive-500/40 text-olive-600 bg-olive-500/5",
};

export function ProofChip({ children, tone = "forest", className }: ProofChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[0.68rem] uppercase tracking-eyebrow",
        toneMap[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
