import { Section } from "@/components/primitives/Section";
import { SectionIntro } from "@/components/primitives/SectionIntro";
import { MiojoInterlockMap } from "@/components/modules/MiojoInterlockMap";

export function InterlockMapSection() {
  return (
    <Section id="interlock" tone="raised" className="wash-warm">
      <SectionIntro
        eyebrow="03 / Interlock map"
        tone="gold"
        headline={
          <>
            Miojo: one engine.
            <br />
            <span className="italic text-gold-500">Multiple expressions.</span>
          </>
        }
        lede="A signature object: the Miojo platform mapped as one founder-led engine and four commercial expressions. Hover or tap a pillar to see how it routes audience, taste, and operating leverage."
      />
      <div className="mt-16">
        <MiojoInterlockMap />
      </div>
    </Section>
  );
}
