import { Section } from "@/components/primitives/Section";
import { SectionIntro } from "@/components/primitives/SectionIntro";
import { Stagger } from "@/components/motion/Stagger";
import { PLATFORM_THESIS } from "@/content/copy";

export function PlatformThesisSection() {
  return (
    <Section id="platform-thesis" tone="default">
      <SectionIntro
        eyebrow={PLATFORM_THESIS.eyebrow}
        tone="forest"
        headline={
          <>
            Not four ideas.
            <br />
            <span className="italic text-gold-500">One operating engine.</span>
          </>
        }
        lede={PLATFORM_THESIS.lede}
      />

      <Stagger
        className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border hairline bg-cream-200/40 md:grid-cols-2 lg:grid-cols-4"
        step={110}
      >
        {PLATFORM_THESIS.shared.map((s, i) => (
          <article
            key={s.id}
            className="flex flex-col gap-3 bg-cream-50 p-7"
          >
            <span className="font-mono text-[0.66rem] uppercase tracking-eyebrow text-gold-600">
              {String(i + 1).padStart(2, "0")} / shared
            </span>
            <h3 className="font-display text-lg font-medium leading-tight text-forest-900 md:text-xl">
              {s.label}
            </h3>
            <p className="text-sm leading-relaxed text-forest-500">
              {s.detail}
            </p>
          </article>
        ))}
      </Stagger>
    </Section>
  );
}
