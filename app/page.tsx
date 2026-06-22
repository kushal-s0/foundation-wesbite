import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Gallery } from "@/components/sections/Gallery";
import { Newsletter } from "@/components/sections/Newsletter";
import { ProgramsGrid } from "@/components/sections/ProgramsGrid";
import { StatsSection } from "@/components/sections/StatsSection";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { donationOptions, homePrograms, testimonials } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="section-shell grid min-h-[calc(100vh-4rem)] gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div>
              <p className="mb-4 inline-flex rounded-md bg-white px-3 py-2 text-sm font-bold text-primary shadow-sm">
                Education. Empowerment. Community.
              </p>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-normal text-ink sm:text-5xl lg:text-6xl">
                Empowering Lives, Creating Opportunities
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Nayepankh Foundation is dedicated to uplifting communities through education, skill development, and social initiatives.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">Donate Now</ButtonLink>
                <ButtonLink href="/volunteer" variant="secondary">Join Us</ButtonLink>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {donationOptions.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <Icon className="text-accent" size={18} aria-hidden="true" />
                      {item.label}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80"
                alt="Children learning during a community outreach program"
                width={1000}
                height={720}
                priority
                className="h-[28rem] w-full rounded-lg object-cover shadow-soft"
              />
              <div className="absolute -bottom-5 left-4 right-4 rounded-lg bg-white p-5 shadow-soft sm:left-auto sm:w-80">
                <p className="text-sm font-bold text-secondary">Community-led impact</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Programs designed with local voices, supported by volunteers, and measured through real outcomes.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <StatsSection />

      <section className="section-shell grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <Image
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80"
            alt="Volunteers preparing community support materials"
            width={900}
            height={650}
            className="h-96 w-full rounded-lg object-cover shadow-soft"
            loading="lazy"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="About Us"
            title="A foundation built around opportunity and dignity."
            text="We work alongside communities to make education accessible, skills practical, and support systems more responsive."
          />
          <div className="mt-6 grid gap-3">
            {["Education access for children", "Skill pathways for youth and women", "Community welfare and awareness drives"].map((item) => (
              <p key={item} className="flex items-center gap-3 font-semibold text-slate-700">
                <CheckCircle2 className="text-secondary" size={20} aria-hidden="true" />
                {item}
              </p>
            ))}
          </div>
          <ButtonLink href="/about" variant="ghost" className="mt-8">
            Learn About Us <ArrowRight className="ml-2" size={16} aria-hidden="true" />
          </ButtonLink>
        </Reveal>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="section-shell">
          <SectionHeading center eyebrow="Programs" title="Focused initiatives for lasting change" text="Our programs combine local insight, volunteer energy, and practical support." />
          <ProgramsGrid programs={homePrograms} />
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading center eyebrow="Testimonials" title="Voices from the community" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <article className="h-full rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
                <Quote className="text-accent" size={28} aria-hidden="true" />
                <p className="mt-4 leading-7 text-slate-600">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-5 font-bold text-ink">{item.name}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-blue-50 py-16">
        <div className="section-shell">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Gallery" title="Moments of action and care" text="A glimpse of learning spaces, volunteer drives, and community programs." />
            <ButtonLink href="/gallery" variant="ghost">View Gallery</ButtonLink>
          </div>
          <div className="mt-10">
            <Gallery preview />
          </div>
        </div>
      </section>

      <FAQSection />
      <Newsletter />
      <CTASection />
    </>
  );
}
