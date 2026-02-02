"use client";

import { motion } from "framer-motion";

export type TimelineItem = {
  role: string;
  company: string;
  location: string;
  timeframe: string;
  bullets: string[];
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="space-y-10">
      {items.map((item, index) => (
        <motion.div
          key={`${item.company}-${item.role}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
          className="relative grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-[160px_1fr]"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              {item.timeframe}
            </p>
            <p className="mt-2 text-lg font-semibold text-white">{item.role}</p>
            <p className="text-sm text-white/70">
              {item.company} · {item.location}
            </p>
          </div>
          <ul className="space-y-3 text-sm text-white/70">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-1)]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
