import { Section } from "@/components/primitives/Section";
import { SectionIntro } from "@/components/primitives/SectionIntro";
import { ExpansionPathTimeline } from "@/components/modules/ExpansionPathTimeline";

export function ExpansionPathSection() {
  return (
    <Section id="expansion" tone="default">
      <SectionIntro
        eyebrow="08 / Expansion path"
        tone="forest"
        headline={
          <>
            From wedge to platform.
            <br />
            <span className="italic text-gold-500">Staged. Not chaotic.</span>
          </>
        }
        lede="Four phases — each one earns the next. Year-by-year build logic that an investor can pressure-test against milestones, not aspirations."
      />
      <div className="mt-14">
        <ExpansionPathTimeline />
      </div>
    </Section>
  );
}
