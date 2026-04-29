import { Section } from "@/components/primitives/Section";
import { SectionIntro } from "@/components/primitives/SectionIntro";
import { MiojoOSMockupRail } from "@/components/modules/MiojoOSMockupRail";

export function MiojoOSProofSection() {
  return (
    <Section id="os-proof" tone="default">
      <SectionIntro
        eyebrow="06 / Operating proof"
        tone="forest"
        headline={
          <>
            Miojo OS, in the surfaces{" "}
            <span className="italic text-gold-500">the founder actually uses.</span>
          </>
        }
        lede="Five operating surfaces — restraint, not a dashboard wall. Each one is a place where founder taste, audience, and platform memory meet."
      />
      <div className="mt-14">
        <MiojoOSMockupRail />
      </div>
    </Section>
  );
}
