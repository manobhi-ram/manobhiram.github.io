"use client";

import { useMemo, useState } from "react";
import { projectFilters, projects } from "@/content/content";
import ProjectCard from "@/components/ProjectCard";
import { cn } from "@/lib/utils";

export default function ProjectsGrid() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {projectFilters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] transition",
              filter === item
                ? "border-white/60 bg-white/10 text-white"
                : "border-white/10 text-white/60 hover:border-white/40"
            )}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </div>
  );
}
