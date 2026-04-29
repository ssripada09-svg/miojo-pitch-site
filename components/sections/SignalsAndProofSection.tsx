import { Section } from "@/components/primitives/Section";
import { SectionIntro } from "@/components/primitives/SectionIntro";
import { Stagger } from "@/components/motion/Stagger";
import { CountUp } from "@/components/motion/CountUp";
import { SIGNALS_PROOF } from "@/content/copy";

export function SignalsAndProofSection() {
  return (
    <Section id="signals" tone="default">
      <SectionIntro
        eyebrow={SIGNALS_PROOF.eyebrow}
        tone="olive"
        headline={
          <>
            Earned signal —{" "}
            <span className="italic text-olive-500">not invented metrics.</span>
          </>
        }
      />
      <Stagger
        className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border hairline bg-cream-200/40 md:grid-cols-4"
        step={140}
      >
        {SIGNALS_PROOF.signals.map((s, i) => (
          <article
            key={s.label}
            className="flex flex-col gap-3 bg-cream-50 p-7"
          >
            <span className="font-mono text-[0.66rem] uppercase tracking-eyebrow text-forest-400">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-4xl font-medium leading-none text-forest-900 md:text-[3.2rem]">
              <CountUp
                to={parseInt(s.stat, 10)}
                duration={1600}
                suffix={s.suffix}
              />
            </span>
            <span className="text-sm leading-snug text-forest-500">
              {s.label}
            </span>
          </article>
        ))}
      </Stagger>
      <p className="mt-6 max-w-prose text-[0.7rem] italic leading-relaxed text-forest-400">
        {SIGNALS_PROOF.notes}
      </p>
    </Section>
  );
}
