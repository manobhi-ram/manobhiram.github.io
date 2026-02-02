"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const MotionLink = motion(Link);

type AnimatedLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

export default function AnimatedLink({
  href,
  children,
  className,
  ariaLabel,
}: AnimatedLinkProps) {
  return (
    <MotionLink
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "group inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em]",
        className
      )}
      whileHover={{ x: 4 }}
      whileFocus={{ x: 4 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <span>{children}</span>
    </MotionLink>
  );
}
