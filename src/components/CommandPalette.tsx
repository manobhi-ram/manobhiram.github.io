"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { navigation } from "@/content/content";

const quickLinks = [
  { label: "Hero", href: "/#hero" },
  { label: "Systems", href: "/#systems" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#timeline" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export default function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const combined = [...navigation, ...quickLinks];
    if (!query) return combined;
    return combined.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur"
      style={{ backgroundColor: "color-mix(in srgb, var(--bg) 78%, black 22%)" }}
    >
      <div
        role="dialog"
        aria-modal
        className="w-full max-w-xl rounded-3xl p-6 shadow-2xl"
        style={{
          backgroundColor: "var(--bg-elev)",
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow)",
        }}
      >
        <div className="flex items-center justify-between">
          <p
            className="text-xs uppercase tracking-[0.4em]"
            style={{ color: "var(--muted-soft)" }}
          >
            Command Palette
          </p>
          <button
            onClick={onClose}
            className="rounded-full px-3 py-1 text-xs"
            style={{
              color: "var(--muted-soft)",
              border: "1px solid var(--border)",
              backgroundColor: "var(--bg-soft)",
            }}
          >
            Esc
          </button>
        </div>
        <input
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Jump to..."
          className="mt-4 w-full rounded-2xl px-4 py-3 text-sm outline-none placeholder:text-[color:var(--muted-soft)]"
          style={{
            color: "var(--text)",
            border: "1px solid var(--border)",
            backgroundColor: "var(--bg-soft)",
          }}
        />
        <div className="mt-4 max-h-64 space-y-2 overflow-y-auto">
          {results.map((item) => (
            <button
              key={item.href}
              onClick={() => {
                router.push(item.href);
                onClose();
              }}
              className="flex w-full items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-left text-sm transition hover:bg-white/5"
              style={{ color: "var(--muted)" }}
            >
              <span>{item.label}</span>
              <span
                className="text-xs uppercase tracking-[0.2em]"
                style={{ color: "var(--muted-faint)" }}
              >
                {item.href}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
