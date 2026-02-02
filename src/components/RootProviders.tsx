"use client";

import { MotionConfig } from "framer-motion";
import { easings, motionTimings } from "@/lib/motion";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <MotionConfig
        reducedMotion="user"
        transition={{ duration: motionTimings.base, ease: easings.swift }}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </MotionConfig>
    </ThemeProvider>
  );
}
