import Link from "next/link";
import { Metadata } from "next";
import {
  experience,
  hero,
  projects,
  site,
  systems,
} from "@/content/content";
import AnimatedLink from "@/components/AnimatedLink";
import MagneticButton from "@/components/MagneticButton";
import ParallaxSection from "@/components/ParallaxSection";
import ProjectCard from "@/components/ProjectCard";
import RevealText from "@/components/RevealText";
import StatusBar from "@/components/StatusBar";
import Timeline from "@/components/Timeline";
import SkillsSection from "@/components/SkillsSection";

export const metadata: Metadata = {
  title: "Manobhi Ram Pabbathi | Portfolio",
};

export default function HomePage() {
  return (
    <div className="noise-overlay">
      <section
        id="hero"
        className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-20 md:pt-28"
      >
        <ParallaxSection className="grid gap-10">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.5em] text-white/50">
              {site.role}
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
              <RevealText text={hero.headline} />
            </h1>
            <p className="max-w-2xl text-lg text-white/70">
              {hero.subhead}
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/50">
              {hero.highlights.map((item) => (
                <span key={item} className="rounded-full border border-white/10 px-4 py-2">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton href="/resume">{site.resumeLabel}</MagneticButton>
              <AnimatedLink href="/work">View work</AnimatedLink>
            </div>
            <div className="pt-2">
              <StatusBar />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8">
            <div className="grid-overlay absolute inset-0 opacity-40" />
            <div className="relative space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                System Health
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Latency: 120ms",
                  "Model workflow: healthy",
                  "Deployments: 4 this month",
                  "Incidents: 0 critical",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-[var(--accent-1)]/20 via-transparent to-[var(--accent-2)]/20 p-4">
                <p className="text-sm text-white/80">
                  Currently optimizing distributed systems for data-heavy platforms.
                </p>
              </div>
            </div>
          </div>
        </ParallaxSection>
      </section>

      <section
        id="systems"
        className="mx-auto w-full max-w-6xl px-6 py-20"
      >
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-white/50">
              Signature Systems
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Project-led skills across ML, UX research, and analytics.
            </h2>
            <p className="text-white/70">
              This section reflects hands-on strengths from coursework and projects:
              applied ML, usability testing, data storytelling, and cloud-backed
              engineering fundamentals.
            </p>
            <AnimatedLink href="/about">About the craft</AnimatedLink>
          </div>
          <div className="space-y-4">
            {systems.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-white/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto w-full max-w-6xl px-6 py-20"
      >
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-white/50">
              Featured Work
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Case studies with measurable outcomes.
            </h2>
          </div>
          <AnimatedLink href="/work">Explore all</AnimatedLink>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </section>

      <section
        id="timeline"
        className="mx-auto w-full max-w-6xl px-6 py-20"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs uppercase tracking-[0.5em] text-white/50">
              Experience
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Shipping systems with accountability.
            </h2>
            <p className="text-white/70">
              From data pipelines to customer-facing platforms, the focus stays on
              reliability, measurable performance, and clear documentation.
            </p>
            <AnimatedLink href="/experience">Full timeline</AnimatedLink>
          </div>
          <Timeline items={experience} />
        </div>
      </section>

      <section
        id="skills"
        className="mx-auto w-full max-w-6xl px-6 py-20"
      >
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.5em] text-white/50">
            Skill Matrix
          </p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Technical breadth with systems depth.
          </h2>
          <SkillsSection />
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10"
      >
        <div className="rounded-[40px] border border-white/10 bg-white/5 p-10 md:p-14">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.5em] text-white/50">
                Let&apos;s build
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Ready to design systems that scale with your product.
              </h2>
              <p className="text-white/70">
                Reach out for collaboration, full-time roles, or advisory work.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <MagneticButton href="/resume">Resume</MagneticButton>
              <Link
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-6 py-3 text-center text-sm uppercase tracking-[0.2em] text-white/70 hover:border-white/30"
              >
                LinkedIn
              </Link>
              <Link
                href={`mailto:${site.email}`}
                className="rounded-full border border-white/10 px-6 py-3 text-center text-sm uppercase tracking-[0.2em] text-white/70 hover:border-white/30"
              >
                Email
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
