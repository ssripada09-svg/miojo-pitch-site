import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";
import { RuleDraw } from "@/components/motion/RuleDraw";

type SectionIntroProps = {
  eyebrow: string;
  headline: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  tone?: "forest" | "gold" | "terracotta" | "olive" | "ink";
  inverted?: boolean;
  className?: string;
  headlineDelay?: number;
};

const eyebrowToneMap: Record<NonNullable<SectionIntroProps["tone"]>, string> = {
  forest: "text-forest-700",
  gold: "text-gold-600",
  terracotta: "text-terracotta-600",
  olive: "text-olive-500",
  ink: "text-forest-900",
};

export function SectionIntro({
  eyebrow,
  headline,
  lede,
  align = "left",
  tone = "forest",
  inverted = false,
  className,
  headlineDelay = 140,
}: SectionIntroProps) {
  const eyebrowColor = inverted ? "text-gold-300" : eyebrowToneMap[tone];

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        <RuleDraw tone={tone === "ink" ? "ink" : tone} width="w-10" delay={0} />
        <Reveal delay={100}>
          <span
            className={cn(
              "font-mono text-eyebrow uppercase tracking-eyebrow",
              eyebrowColor,
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
      </div>
      <Reveal delay={headlineDelay}>
        <h2
          className={cn(
            "max-w-[24ch] text-balance font-display text-3xl font-medium leading-[1.06] tracking-tight md:text-[2.4rem] lg:text-[2.8rem]",
            inverted ? "text-cream-50" : "text-forest-900",
            align === "center" && "max-w-[26ch]",
          )}
        >
          {headline}
        </h2>
      </Reveal>
      {lede && (
        <Reveal delay={headlineDelay + 120}>
          <p
            className={cn(
              "max-w-prose text-base leading-relaxed md:text-[1.05rem]",
              inverted ? "text-cream-100/85" : "text-forest-500",
            )}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
