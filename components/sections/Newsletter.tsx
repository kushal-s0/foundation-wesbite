"use client";

import { Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import { Reveal } from "@/components/ui/Motion";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section-shell py-14">
      <Reveal>
        <div className="grid gap-6 rounded-lg border border-slate-100 bg-white p-6 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="grid h-11 w-11 place-items-center rounded-md bg-emerald-50 text-secondary">
              <Mail size={22} aria-hidden="true" />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-ink">Stay connected with our work</h2>
            <p className="mt-2 leading-7 text-slate-600">Receive updates about programs, volunteer drives, and community impact.</p>
          </div>
          <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              className="focus-ring min-h-12 flex-1 rounded-md border border-slate-200 px-4"
            />
            <button type="submit" className="focus-ring min-h-12 rounded-md bg-primary px-5 font-bold text-white transition hover:bg-blue-700">
              Subscribe
            </button>
          </form>
          {submitted ? <p className="text-sm font-semibold text-secondary lg:col-start-2">Thank you for subscribing.</p> : null}
        </div>
      </Reveal>
    </section>
  );
}
