import { Metadata } from "next";
import Link from "next/link";
import { certifications, education, site, skills } from "@/content/content";

export const metadata: Metadata = {
  title: "About | Manobhi Ram",
};

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-20">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.5em] text-white/50">
            About
          </p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            Product-minded systems engineer with a data and ML backbone.
          </h1>
          <p className="text-white/70">
            {site.name} builds reliable systems that feel effortless to use. The
            focus is on resilient backend services, performance-aware data
            pipelines, and ML delivery that stays maintainable in production.
          </p>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              Research
            </p>
            <Link
              href={site.research}
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-white/70 hover:text-white"
            >
              {site.research}
            </Link>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              Certifications
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {certifications.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent-2)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              Key Skills
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {Object.values(skills)
                .flat()
                .slice(0, 14)
                .map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 space-y-6">
        <p className="text-xs uppercase tracking-[0.5em] text-white/50">
          Education
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.degree}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                {item.timeframe}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-white">
                {item.degree} · {item.school}
              </h2>
              <p className="text-sm text-white/70">GPA {item.gpa}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
