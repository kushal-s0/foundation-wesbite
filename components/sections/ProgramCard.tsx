import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Program } from "@/types";
import { Reveal } from "@/components/ui/Motion";

export function ProgramCard({ program, delay = 0 }: { program: Program; delay?: number }) {
  const Icon = program.icon;

  return (
    <Reveal delay={delay}>
      <article className="group h-full rounded-lg border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-soft">
        <div className="grid h-12 w-12 place-items-center rounded-md bg-blue-50 text-primary transition group-hover:bg-primary group-hover:text-white">
          <Icon size={24} aria-hidden="true" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-ink">{program.title}</h3>
        <p className="mt-3 leading-7 text-slate-600">{program.description}</p>
        <Link href="/programs" className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md text-sm font-bold text-primary">
          Learn More <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </article>
    </Reveal>
  );
}
