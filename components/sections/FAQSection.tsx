"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/data";
import { Reveal } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-slate-50 py-16">
      <div className="section-shell">
        <SectionHeading center eyebrow="FAQ" title="Common Questions" text="Simple answers for volunteers, donors, and community partners." />
        <Reveal className="mx-auto mt-10 max-w-3xl">
          <div className="divide-y divide-slate-100 rounded-lg border border-slate-100 bg-white shadow-sm">
            {faqs.map((item, index) => {
              const open = active === index;
              return (
                <div key={item.question}>
                  <button
                    type="button"
                    className="focus-ring flex w-full items-center justify-between gap-4 rounded-md px-5 py-4 text-left font-bold text-ink"
                    aria-expanded={open}
                    onClick={() => setActive(open ? -1 : index)}
                  >
                    {item.question}
                    <ChevronDown className={`shrink-0 transition ${open ? "rotate-180" : ""}`} size={20} aria-hidden="true" />
                  </button>
                  <div className={`${open ? "block" : "hidden"} px-5 pb-5 leading-7 text-slate-600`}>
                    {item.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
