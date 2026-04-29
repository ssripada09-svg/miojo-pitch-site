import { Section } from "@/components/primitives/Section";
import { SectionIntro } from "@/components/primitives/SectionIntro";
import { OrgArchitectureExplorer } from "@/components/modules/OrgArchitectureExplorer";

export function OrgArchitectureSection() {
  return (
    <Section id="org" tone="default">
      <SectionIntro
        eyebrow="12 / Org architecture"
        tone="forest"
        headline={
          <>
            Human-led.
            <br />
            <span className="italic text-gold-500">OS-supported.</span>
          </>
        }
        lede="The organization in three layers: founder, platform crews, operating support. Click into any role to see exactly what it owns. The shape is a strategic architecture, not a wiring diagram."
      />
      <div className="mt-14">
        <OrgArchitectureExplorer />
      </div>
    </Section>
  );
}
