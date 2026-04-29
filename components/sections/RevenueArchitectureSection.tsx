import { Section } from "@/components/primitives/Section";
import { SectionIntro } from "@/components/primitives/SectionIntro";
import { RevenueArchitectureMatrix } from "@/components/modules/RevenueArchitectureMatrix";

export function RevenueArchitectureSection() {
  return (
    <Section id="revenue" tone="raised" className="wash-warm">
      <SectionIntro
        eyebrow="07 / Platform economics"
        tone="gold"
        headline={
          <>
            Four monetization surfaces.
            <br />
            <span className="italic text-gold-500">One audience contract.</span>
          </>
        }
        lede="Membership, sponsors, experiences, and brand commerce. Layered — not siloed. Each surface earns the right to exist by feeding the next."
      />
      <div className="mt-14">
        <RevenueArchitectureMatrix />
      </div>
    </Section>
  );
}
