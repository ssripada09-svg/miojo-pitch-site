"use client";

import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { CTAButton } from "@/components/primitives/CTAButtons";
import { CLOSING } from "@/content/copy";

export function ClosingSection() {
  return (
    <section
      id="closing"
      className="relative overflow-hidden bg-char-900 text-cream-50"
    >
      <span
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-10%,rgba(196,164,95,0.18),transparent_60%)]"
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_120%,rgba(193,90,59,0.20),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-shell px-6 py-32 text-center md:px-10 md:py-40">
        <Reveal>
          <span className="font-mono text-[0.7rem] uppercase tracking-eyebrow text-gold-300">
            {CLOSING.eyebrow}
          </span>
        </Reveal>

        <h2 className="mx-auto mt-10 max-w-[26ch] text-balance font-display text-3xl font-medium leading-[1.1] tracking-tight text-cream-50 md:text-[3.4rem] lg:text-[4rem]">
          <TextReveal
            as="span"
            delay={120}
            segments={CLOSING.headlineSegments}
          />
        </h2>

        <Reveal delay={1400}>
          <p className="mx-auto mt-10 max-w-[44rem] text-base leading-relaxed text-cream-100/85 md:text-[1.05rem]">
            {CLOSING.lede}
          </p>
        </Reveal>

        <Reveal delay={1600}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <CTAButton tone="gold" href="#ask">
              Request walkthrough
            </CTAButton>
            <CTAButton
              tone="ghost"
              href="#interlock"
              className="border-cream-50/30 text-cream-50 hover:!border-gold-300 hover:!text-gold-300"
            >
              Re-read the thesis
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
