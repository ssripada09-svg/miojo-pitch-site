import { Section } from "@/components/primitives/Section";
import { SectionIntro } from "@/components/primitives/SectionIntro";
import { FinancialProjectionStoryModule } from "@/components/modules/FinancialProjectionStoryModule";

export function FinancialProjectionSection() {
  return (
    <Section id="financials" tone="raised" className="wash-warm">
      <SectionIntro
        eyebrow="11 / Financial story"
        tone="gold"
        headline={
          <>
            Path to platform breakeven —{" "}
            <span className="italic text-gold-500">told in drivers, not spreadsheets.</span>
          </>
        }
        lede="Year-by-year revenue trajectory expressed by what is actually being built and who is paying for it. Sources are tagged internally; what you see here are directional drivers, not audited financials."
      />
      <div className="mt-14">
        <FinancialProjectionStoryModule />
      </div>
    </Section>
  );
}
