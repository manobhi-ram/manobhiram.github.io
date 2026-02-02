"use client";

import { useMemo, useState } from "react";
import { skillFilters, skills } from "@/content/content";
import { cn } from "@/lib/utils";

const allSkills = Object.values(skills).flat();

export default function SkillsSection() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return allSkills;
    const filter = skillFilters.find((item) => item.label === active);
    if (!filter) return allSkills;
    return allSkills.filter((skill) =>
      filter.matches.some((match) => skill.includes(match))
    );
  }, [active]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {["All", ...skillFilters.map((item) => item.label)].map((label) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] transition",
              active === label
                ? "border-white/60 bg-white/10 text-white"
                : "border-white/10 text-white/60 hover:border-white/40"
            )}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {filtered.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
