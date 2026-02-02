import { Metadata } from "next";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Work | Manobhi Ram",
};

export default function WorkPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-20">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.5em] text-white/50">
          Work
        </p>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          Selected case studies and systems wins.
        </h1>
        <p className="max-w-2xl text-white/70">
          Every project focuses on problem framing, execution, and measurable
          results. Explore the case studies for technical details and outcomes.
        </p>
      </div>
      <div className="mt-10">
        <ProjectsGrid />
      </div>
    </section>
  );
}
