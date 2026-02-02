"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export default function ParallaxSection({
  children,
  className,
  intensity = 0.15,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120 * intensity]);

  return (
    <section ref={ref} className={cn("relative", className)}>
      <motion.div style={{ y }} className="relative">
        {children}
      </motion.div>
    </section>
  );
}
