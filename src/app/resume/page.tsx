import { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/content";

export const metadata: Metadata = {
  title: "Resume of Manobhi Ram",
};

export default function ResumePage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 pb-24 pt-20">
      <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
        <p className="text-xs uppercase tracking-[0.5em] text-white/50">
          Resume
        </p>
        <h1 className="text-3xl font-semibold text-white md:text-4xl">
          Resume available on request.
        </h1>
        <p className="text-white/70">
          For the most up-to-date resume, email {site.email} or connect on
          LinkedIn. A downloadable PDF can be added here when ready.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={`mailto:${site.email}`}
            className="rounded-full border border-white/10 px-6 py-3 text-sm uppercase tracking-[0.2em] text-white/70 hover:border-white/30"
          >
            Email
          </Link>
          <Link
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 px-6 py-3 text-sm uppercase tracking-[0.2em] text-white/70 hover:border-white/30"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}
