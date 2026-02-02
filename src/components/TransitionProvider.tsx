"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { pageTransition } from "@/lib/motion";

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={reduceMotion ? { opacity: 0 } : pageTransition.initial}
        animate={reduceMotion ? { opacity: 1 } : pageTransition.animate}
        exit={reduceMotion ? { opacity: 0 } : pageTransition.exit}
        transition={{ duration: reduceMotion ? 0.1 : 0.6 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
