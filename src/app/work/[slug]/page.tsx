import { notFound } from "next/navigation";
import { Metadata } from "next";
import { readdir } from "node:fs/promises";
import path from "node:path";
import { projects } from "@/content/content";
import MagneticButton from "@/components/MagneticButton";
import AnimatedLink from "@/components/AnimatedLink";

const fileMatchRules: Record<string, string[]> = {
  "farmket-platform": ["farmket"],
  "employee-attrition-analytics": ["employee", "attrition", "attriti"],
  "airline-nlp-prediction": ["airline", "prediction", "nlp"],
  "photo-description-enhancement": ["photo", "description", "enhancement", "ui", "ux"],
};

async function listFilesRecursive(baseDir: string, currentDir = ""): Promise<string[]> {
  const absoluteDir = path.join(baseDir, currentDir);
  const entries = await readdir(absoluteDir, { withFileTypes: true });

  const files: string[] = [];
  for (const entry of entries) {
    const relativePath = path.join(currentDir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFilesRecursive(baseDir, relativePath)));
      continue;
    }
    if (entry.isFile()) {
      files.push(relativePath);
    }
  }

  return files;
}

async function getUploadedProjectFiles(slug: string) {
  const baseDir = path.join(process.cwd(), "public", "project-files");
  const keywords = fileMatchRules[slug] ?? [];

  try {
    const allFiles = await listFilesRecursive(baseDir);

    const matchingFiles =
      keywords.length > 0
        ? allFiles.filter((relativePath) => {
            const normalized = path.basename(relativePath).toLowerCase();
            return keywords.some((keyword) => normalized.includes(keyword));
          })
        : [];

    return matchingFiles
      .sort((a, b) => a.localeCompare(b))
      .map((relativePath) => {
        const fileName = path.basename(relativePath);
        return {
          label: fileName,
          href: `/project-files/${relativePath
            .split(path.sep)
            .map((segment) => encodeURIComponent(segment))
            .join("/")}`,
        };
      });
  } catch {
    return [];
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.title} | Manobhi Ram Pabbathi`,
    description: project.problem,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  const uploadedFiles = await getUploadedProjectFiles(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-24 pt-20">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.5em] text-white/50">
          Case Study · {project.category}
        </p>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          {project.title}
        </h1>
        <p className="max-w-2xl text-white/70">{project.problem}</p>
        <div className="flex flex-wrap gap-3">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Problem</h2>
          <p className="text-white/70">{project.problem}</p>
        </div>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Approach</h2>
          <p className="text-white/70">{project.approach}</p>
        </div>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Impact</h2>
          <p className="text-white/70">{project.impact}</p>
        </div>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Highlights</h2>
          <ul className="space-y-2 text-white/70">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--accent-1)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl font-semibold text-white">Project Files</h2>
        <p className="mt-2 text-sm text-white/60">
          Core artifacts used to define, build, and validate this case study.
        </p>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {project.files?.map((file) => (
            <li
              key={file}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70"
            >
              {file}
            </li>
          ))}
        </ul>
        {uploadedFiles.length > 0 ? (
          <>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Uploaded project documents
            </h3>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {uploadedFiles.map((file) => (
                <li key={file.href}>
                  <a
                    href={file.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-white/30 hover:text-white"
                  >
                    {file.label}
                  </a>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-4">
        <MagneticButton href="/contact">Start a project</MagneticButton>
        <AnimatedLink href="/work">Back to work</AnimatedLink>
      </div>
    </section>
  );
}
