import type { Metadata } from "next";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Nayepankh Foundation for volunteering, donations, partnerships, and community support."
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-16">
        <div className="section-shell">
          <Reveal>
            <SectionHeading center eyebrow="Contact" title="Connect with Nayepankh Foundation" text="Reach out for volunteering, donations, partnerships, or community support." />
          </Reveal>
        </div>
      </section>

      <section className="section-shell grid gap-8 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <ContactForm />
        </Reveal>
        <Reveal delay={0.1}>
          <aside className="grid gap-5">
            <div className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-ink">Address</h2>
              <div className="mt-5 grid gap-4 text-slate-600">
                <p className="flex gap-3"><MapPin className="mt-1 text-primary" size={20} aria-hidden="true" /> Community Development Office, India</p>
                <a href="mailto:contact@nayepankh.org" className="focus-ring flex rounded-md gap-3 hover:text-primary"><Mail className="text-primary" size={20} aria-hidden="true" /> contact@nayepankh.org</a>
                <a href="tel:+919999999999" className="focus-ring flex rounded-md gap-3 hover:text-primary"><Phone className="text-primary" size={20} aria-hidden="true" /> +91 99999 99999</a>
              </div>
              <div className="mt-6 flex gap-3">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                  <a key={index} href="#" aria-label="Social media profile" className="focus-ring grid h-10 w-10 place-items-center rounded-md bg-blue-50 text-primary transition hover:bg-primary hover:text-white">
                    <Icon size={18} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="grid h-80 place-items-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-center">
              <div>
                <MapPin className="mx-auto text-accent" size={34} aria-hidden="true" />
                <p className="mt-3 font-bold text-ink">Google Maps Embed Placeholder</p>
                <p className="mt-1 text-sm text-slate-500">Replace with your official map embed URL.</p>
              </div>
            </div>
          </aside>
        </Reveal>
      </section>
    </>
  );
}
