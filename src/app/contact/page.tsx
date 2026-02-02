import { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/content";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Contact | Manobhi Ram",
};

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-24 pt-20">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.5em] text-white/50">
          Contact
        </p>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          Let&apos;s build dependable systems together.
        </h1>
        <p className="max-w-2xl text-white/70">
          Reach out to discuss backend platforms, data pipelines, or ML-driven
          products that need crisp execution.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">
            Direct
          </p>
          <p className="text-lg text-white">{site.email}</p>
          <p className="text-sm text-white/70">{site.phone}</p>
          <Link
            href={`mailto:${site.email}`}
            className="text-sm uppercase tracking-[0.3em] text-white/60 hover:text-white"
          >
            Send email
          </Link>
        </div>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">
            Social
          </p>
          <div className="flex flex-col gap-4">
            <Link
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="block text-lg text-white hover:text-[var(--accent-1)]"
            >
              LinkedIn
            </Link>
            <Link
              href={site.research}
              target="_blank"
              rel="noreferrer"
              className="block text-sm uppercase tracking-[0.3em] text-white/60 hover:text-white"
            >
              Research papers
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-4">
        <MagneticButton href="/resume">Resume</MagneticButton>
        <MagneticButton href={site.linkedin} external>
          LinkedIn
        </MagneticButton>
      </div>
    </section>
  );
}
