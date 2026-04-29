"use client";

import { Reveal } from "@/components/motion/Reveal";
import { TextReveal, MaskReveal } from "@/components/motion/TextReveal";
import { CTAButton } from "@/components/primitives/CTAButtons";
import { ProofChip } from "@/components/primitives/ProofChip";
import { HERO } from "@/content/copy";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream-100 pt-32 md:pt-40">
      <div className="beam-layer" />
      <div className="grid-faint absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-shell px-6 pb-24 md:px-10 md:pb-28">
        <Reveal>
          <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-gold-600">
            {HERO.eyebrow}
          </span>
        </Reveal>

        <h1 className="mt-10 max-w-[18ch] text-balance font-display text-[2.4rem] font-medium leading-[1.04] tracking-tight text-forest-900 md:text-[4.4rem] lg:text-[5.6rem]">
          <TextReveal as="span" delay={120}>
            {HERO.headline.line1}
          </TextReveal>
          <br />
          <TextReveal as="span" delay={400}>
            {HERO.headline.line2}
          </TextReveal>
          <br />
          <MaskReveal delay={800} className="font-display italic text-gold-500">
            {HERO.headline.line3Italic}
          </MaskReveal>{" "}
          <TextReveal as="span" delay={1100}>
            {HERO.headline.line4}
          </TextReveal>
        </h1>

        <Reveal delay={1500}>
          <p className="mt-8 max-w-[44rem] text-base leading-relaxed text-forest-500 md:text-[1.12rem]">
            {HERO.lede}
          </p>
        </Reveal>

        <Reveal delay={1700}>
          <div className="mt-10 flex flex-wrap gap-3">
            <CTAButton tone="gold" href="#ask">
              {HERO.ctaPrimary}
            </CTAButton>
            <CTAButton tone="ghost" href="#platform-thesis">
              {HERO.ctaSecondary}
            </CTAButton>
          </div>
        </Reveal>

        <Reveal delay={1900}>
          <div className="mt-14 flex flex-wrap items-center gap-2 border-t hairline pt-6">
            <span className="mr-2 font-mono text-[0.66rem] uppercase tracking-eyebrow text-forest-400">
              The platform ·
            </span>
            {HERO.proofChips.map((chip, i) => (
              <ProofChip
                key={chip}
                tone={
                  ["gold", "forest", "terracotta", "olive"][
                    i % 4
                  ] as "gold" | "forest" | "terracotta" | "olive"
                }
              >
                {chip}
              </ProofChip>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
