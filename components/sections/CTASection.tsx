import { ArrowRight, Heart } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Motion";

export function CTASection() {
  return (
    <section className="section-shell py-16">
      <Reveal>
        <div className="overflow-hidden rounded-lg bg-gradient-to-r from-primary via-blue-600 to-secondary p-8 text-white shadow-soft sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
            <div>
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-md bg-white/15">
                <Heart size={24} aria-hidden="true" />
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl">Be part of a community that opens doors.</h2>
              <p className="mt-4 max-w-2xl leading-7 text-blue-50">
                Your time, support, and partnership can help children learn, women lead, and communities move forward.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href="/contact" variant="ghost" className="bg-white">
                Donate Now <ArrowRight className="ml-2" size={16} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/volunteer" variant="secondary">Join Us</ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
