import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team, timeline, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Nayepankh Foundation's mission, vision, values, journey, and team."
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="About Nayepankh"
              title="Working with communities to turn care into opportunity."
              text="Nayepankh Foundation is a non-profit organization focused on education, empowerment, social welfare, and community development. We partner with volunteers and local stakeholders to build programs that are practical, inclusive, and accountable."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Image
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=900&q=80"
              alt="Volunteers joining hands"
              width={900}
              height={650}
              priority
              className="h-96 w-full rounded-lg object-cover shadow-soft"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-shell grid gap-6 py-16 md:grid-cols-2">
        <Reveal>
          <article className="h-full rounded-lg border border-slate-100 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-ink">Vision</h2>
            <p className="mt-4 leading-7 text-slate-600">A society where every child, woman, and family can access education, dignity, and pathways to a better future.</p>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <article className="h-full rounded-lg border border-slate-100 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-ink">Mission</h2>
            <p className="mt-4 leading-7 text-slate-600">To uplift underserved communities through learning support, skill development, health awareness, and social welfare initiatives.</p>
          </article>
        </Reveal>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="section-shell">
          <SectionHeading center eyebrow="Core Values" title="Principles that guide our work" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value} delay={index * 0.06}>
                <div className="h-full rounded-lg bg-white p-6 shadow-sm">
                  <CheckCircle2 className="text-secondary" size={24} aria-hidden="true" />
                  <p className="mt-4 font-bold text-ink">{value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading center eyebrow="Journey" title="Our organization timeline" text="A growing story of volunteers, partners, and community-first programs." />
        <div className="relative mx-auto mt-12 max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-blue-100 md:left-1/2" aria-hidden="true" />
          <div className="grid gap-8">
            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.08}>
                <div className={`relative grid gap-4 md:grid-cols-2 ${index % 2 === 0 ? "" : "md:[&>article]:col-start-2"}`}>
                  <span className="absolute left-1 top-6 h-7 w-7 rounded-full border-4 border-white bg-primary shadow md:left-[calc(50%-0.875rem)]" />
                  <article className="ml-12 rounded-lg border border-slate-100 bg-white p-6 shadow-sm md:ml-0">
                    <p className="text-sm font-extrabold text-accent">{item.year}</p>
                    <h3 className="mt-2 text-xl font-bold text-ink">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                  </article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-emerald-50 py-16">
        <div className="section-shell">
          <SectionHeading center eyebrow="Team" title="People powering the mission" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {team.map((person, index) => (
              <Reveal key={person.role} delay={index * 0.08}>
                <article className="overflow-hidden rounded-lg border border-slate-100 bg-white shadow-sm">
                  <Image src={person.image} alt={person.role} width={600} height={420} className="h-72 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-ink">{person.name}</h3>
                    <p className="mt-1 font-semibold text-primary">{person.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
