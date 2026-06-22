import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { ProgramsGrid } from "@/components/sections/ProgramsGrid";
import { Reveal } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { programs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore Nayepankh Foundation programs in education, scholarships, healthcare, environment, and community development."
};

export default function ProgramsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-16">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Programs"
              title="Practical initiatives that create momentum"
              text="Each program is designed to meet community needs while creating measurable, sustained impact."
            />
          </Reveal>
        </div>
      </section>
      <section className="section-shell py-16">
        <ProgramsGrid programs={programs} />
      </section>
      <CTASection />
    </>
  );
}
