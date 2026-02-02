import { site } from "@/content/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-sm text-white/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
        <p>
          {site.name} · {site.role}
        </p>
        <p>{site.location}</p>
      </div>
    </footer>
  );
}
