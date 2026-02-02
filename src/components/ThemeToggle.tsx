"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.96 }}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.3em] text-white/70 hover:border-white/30"
      aria-label="Toggle theme"
    >
      <span className="h-2 w-2 rounded-full bg-[var(--accent-2)]" />
      <span suppressHydrationWarning>{theme === "dark" ? "Dark" : "Light"}</span>
    </motion.button>
  );
}
