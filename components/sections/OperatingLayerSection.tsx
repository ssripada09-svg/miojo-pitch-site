import { Section } from "@/components/primitives/Section";
import { SectionIntro } from "@/components/primitives/SectionIntro";
import { FounderBottleneckTransition } from "@/components/modules/FounderBottleneckTransition";

export function OperatingLayerSection() {
  return (
    <Section id="operating-layer" tone="raised">
      <SectionIntro
        eyebrow="05 / Operating layer"
        tone="forest"
        align="center"
        headline={
          <>
            AI does not replace the founder.
            <br />
            <span className="italic text-gold-500">It scales the standard.</span>
          </>
        }
        lede="Today, every decision in the platform routes through Ciarra. That is the magic and the bottleneck. The operating layer absorbs coordination, intelligence, and repetition — so Ciarra stays in judgment, relationships, and taste."
      />
      <div className="mt-16">
        <FounderBottleneckTransition />
      </div>
    </Section>
  );
}
