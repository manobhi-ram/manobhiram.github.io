import { site } from "@/content/content";

export default function StatusBar() {
  return (
    <div className="flex w-full flex-col gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs uppercase tracking-[0.3em] text-white/70 sm:flex-row sm:items-center sm:justify-between">
      <span className="flex items-center gap-2 whitespace-nowrap">
        <span className="h-2 w-2 rounded-full bg-[var(--accent-3)]" />
        {site.status}
      </span>
      <span className="hidden h-4 w-px bg-white/20 sm:block" />
      <span className="whitespace-nowrap sm:text-right">{site.timelineNote}</span>
    </div>
  );
}
