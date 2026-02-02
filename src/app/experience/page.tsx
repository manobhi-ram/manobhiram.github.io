import { Metadata } from "next";
import { experience } from "@/content/content";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
  title: "Experience | Manobhi Ram",
};

export default function ExperiencePage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-20">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.5em] text-white/50">
          Experience
        </p>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          Building systems with clarity and resilience.
        </h1>
        <p className="max-w-2xl text-white/70">
          A timeline of engineering roles focused on backend services, data
          pipelines, and ML-driven product experiences.
        </p>
      </div>
      <div className="mt-10">
        <Timeline items={experience} />
      </div>
    </section>
  );
}
