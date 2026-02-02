"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type ProjectCardProps = {
  slug: string;
  title: string;
  date: string;
  category: string;
  problem: string;
  impact: string;
  tech: string[];
};

export default function ProjectCard({
  slug,
  title,
  date,
  category,
  problem,
  impact,
  tech,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={cn(
        "group relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6",
        "transition hover:border-white/30 hover:bg-white/10"
      )}
    >
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
        <span>{category}</span>
        <span>{date}</span>
      </div>
      <div className="mt-6 space-y-4">
        <h3 className="text-2xl font-semibold leading-tight text-white">
          {title}
        </h3>
        <p className="text-sm text-white/70">{problem}</p>
      </div>
      <div className="mt-6 space-y-4">
        <p className="text-sm text-white/60">Impact: {impact}</p>
        <div className="flex flex-wrap gap-2">
          {tech.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <Link
        href={`/work/${slug}`}
        className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/70 transition hover:text-white"
      >
        View case study
      </Link>
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition group-hover:border-white/30" />
    </motion.article>
  );
}
