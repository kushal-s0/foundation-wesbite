import type { Metadata } from "next";
import { UsersRound } from "lucide-react";
import { VolunteerForm } from "@/components/forms/VolunteerForm";
import { Reveal } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Volunteer",
  description: "Register as a volunteer with Nayepankh Foundation and support education, empowerment, and community welfare programs."
};

export default function VolunteerPage() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-16">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal>
          <div className="sticky top-24">
            <div className="grid h-14 w-14 place-items-center rounded-md bg-primary text-white">
              <UsersRound size={28} aria-hidden="true" />
            </div>
            <SectionHeading
              eyebrow="Volunteer"
              title="Give your time where it can create real change."
              text="Tell us about your skills, city, and motivation. Our coordinators will match you with suitable programs and community drives."
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <VolunteerForm />
        </Reveal>
      </div>
    </section>
  );
}
