import type { Metadata } from "next";
import { Gallery } from "@/components/sections/Gallery";
import { Reveal } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View Nayepankh Foundation community outreach, education, and volunteer program moments."
};

export default function GalleryPage() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-16">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Gallery"
            title="Community moments in motion"
            text="A responsive gallery of outreach, education, empowerment, and welfare initiatives."
          />
        </Reveal>
        <div className="mt-12">
          <Gallery />
        </div>
      </div>
    </section>
  );
}
