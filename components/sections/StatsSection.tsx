"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { stats } from "@/lib/data";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${Math.round(latest).toLocaleString()}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.8, ease: "easeOut" });
    return controls.stop;
  }, [count, inView, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function StatsSection() {
  return (
    <section className="section-shell py-14" aria-label="Impact statistics">
      <div className="grid gap-4 rounded-lg border border-slate-100 bg-white p-4 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-md bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-6 text-center">
            <p className="text-3xl font-extrabold text-primary sm:text-4xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
