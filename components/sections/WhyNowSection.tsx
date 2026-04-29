import { Section } from "@/components/primitives/Section";
import { SectionIntro } from "@/components/primitives/SectionIntro";
import { Stagger } from "@/components/motion/Stagger";
import { WHY_NOW } from "@/content/copy";

export function WhyNowSection() {
  return (
    <Section id="why-now" tone="default">
      <SectionIntro
        eyebrow={WHY_NOW.eyebrow}
        tone="terracotta"
        headline={
          <>
            The convergence Miojo was built for{" "}
            <span className="italic text-terracotta-500">is already here.</span>
          </>
        }
        lede={WHY_NOW.lede}
      />
      <Stagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2" step={120}>
        {WHY_NOW.signals.map((s, i) => (
          <article
            key={s.label}
            className="rounded-2xl border hairline bg-cream-50 p-7 card-soft"
          >
            <span className="font-mono text-[0.66rem] uppercase tracking-eyebrow text-terracotta-600">
              Signal {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 font-display text-lg font-medium leading-tight text-forest-900 md:text-xl">
              {s.label}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-forest-500 md:text-[0.95rem]">
              {s.detail}
            </p>
          </article>
        ))}
      </Stagger>
    </Section>
  );
}
