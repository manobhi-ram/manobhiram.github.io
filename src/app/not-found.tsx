import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 pb-24 pt-20">
      <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
        <p className="text-xs uppercase tracking-[0.5em] text-white/50">404</p>
        <h1 className="text-3xl font-semibold text-white">
          The page you&apos;re looking for doesn&apos;t exist.
        </h1>
        <p className="text-white/70">Return to the home page or explore work.</p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/"
            className="rounded-full border border-white/10 px-6 py-3 text-sm uppercase tracking-[0.2em] text-white/70 hover:border-white/30"
          >
            Home
          </Link>
          <Link
            href="/work"
            className="rounded-full border border-white/10 px-6 py-3 text-sm uppercase tracking-[0.2em] text-white/70 hover:border-white/30"
          >
            Work
          </Link>
        </div>
      </div>
    </section>
  );
}
