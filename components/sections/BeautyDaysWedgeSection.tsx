import { Section } from "@/components/primitives/Section";
import { SectionIntro } from "@/components/primitives/SectionIntro";
import { BeautyDaysJourneyModule } from "@/components/modules/BeautyDaysJourneyModule";

export function BeautyDaysWedgeSection() {
  return (
    <Section id="beauty-days" tone="warm">
      <SectionIntro
        eyebrow="04 / The wedge"
        tone="gold"
        headline={
          <>
            Beauty Days is the festival.
            <br />
            <span className="italic text-gold-500">The platform is the audience.</span>
          </>
        }
        lede="Beauty Days converts attention into a known, opt-in audience the rest of Miojo compounds against. Sponsors pay for access. Members renew because the community continues year-round. The festival is the wedge — not the whole business."
      />
      <div className="mt-14">
        <BeautyDaysJourneyModule />
      </div>
    </Section>
  );
}
