import type { Program } from "@/types";
import { ProgramCard } from "@/components/sections/ProgramCard";

export function ProgramsGrid({ programs }: { programs: Program[] }) {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {programs.map((program, index) => (
        <ProgramCard key={program.title} program={program} delay={index * 0.06} />
      ))}
    </div>
  );
}
