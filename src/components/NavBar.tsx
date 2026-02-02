"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { navigation, site } from "@/content/content";
import AnimatedLink from "@/components/AnimatedLink";
import ThemeToggle from "@/components/ThemeToggle";

export default function NavBar({ onCommand }: { onCommand: () => void }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled ? "var(--nav-scrolled-bg)" : "transparent",
        boxShadow: scrolled ? "var(--nav-scrolled-shadow)" : "none",
        backdropFilter: scrolled ? "blur(18px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 w-full border-b border-transparent"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm uppercase tracking-[0.4em] text-white">
          {site.name}
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <AnimatedLink key={item.href} href={item.href}>
              {item.label}
            </AnimatedLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={onCommand}
            className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.3em] text-white/70 hover:border-white/30 md:inline-flex"
            aria-label="Open command palette"
          >
            Cmd + K
          </button>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
