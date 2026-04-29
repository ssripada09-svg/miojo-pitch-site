import { Section } from "@/components/primitives/Section";
import { SectionIntro } from "@/components/primitives/SectionIntro";
import { Stagger } from "@/components/motion/Stagger";
import { WHY_THIS_WINS } from "@/content/copy";

export function WhyThisWinsSection() {
  return (
    <Section id="why-wins" tone="raised">
      <SectionIntro
        eyebrow={WHY_THIS_WINS.eyebrow}
        tone="terracotta"
        headline={
          <>
            What Miojo is —{" "}
            <span className="italic text-terracotta-500">and what it refuses to be.</span>
          </>
        }
        lede={WHY_THIS_WINS.lede}
      />

      <Stagger
        className="mt-14 divide-y divide-forest/10 overflow-hidden rounded-2xl border hairline bg-cream-50"
        step={120}
      >
        {WHY_THIS_WINS.rows.map((r, i) => (
          <div
            key={r.what}
            className="grid grid-cols-1 gap-2 px-7 py-7 md:grid-cols-[14rem_minmax(0,1fr)] md:items-start md:gap-10"
          >
            <div className="flex items-start gap-3">
              <span className="font-mono text-[0.7rem] uppercase tracking-eyebrow text-forest-400">
                Mistake {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1.6fr] md:gap-8">
              <span className="font-display text-base font-medium text-forest-900 line-through decoration-terracotta-500/70 md:text-[1.1rem]">
                {r.what}
              </span>
              <p className="text-sm leading-relaxed text-forest-700 md:text-[0.98rem]">
                {r.whyNot}
              </p>
            </div>
          </div>
        ))}
      </Stagger>
    </Section>
  );
}
