"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const MotionLink = motion(Link);

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  href?: string;
  external?: boolean;
};

export default function MagneticButton({
  children,
  className,
  onClick,
  type = "button",
  href,
  external,
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 16 });
  const springY = useSpring(y, { stiffness: 220, damping: 16 });

  const sharedProps = {
    onMouseMove: (event: React.MouseEvent<HTMLElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const offsetX = event.clientX - rect.left - rect.width / 2;
      const offsetY = event.clientY - rect.top - rect.height / 2;
      x.set(offsetX * 0.25);
      y.set(offsetY * 0.25);
    },
    onMouseLeave: () => {
      x.set(0);
      y.set(0);
    },
    style: { x: springX, y: springY },
    className: cn(
      "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white transition",
      "hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
      className
    ),
  };

  if (href) {
    return (
      <MotionLink
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        {...sharedProps}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--accent-1)]/20 via-transparent to-[var(--accent-2)]/20 opacity-0 transition group-hover:opacity-100" />
      </MotionLink>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} {...sharedProps}>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--accent-1)]/20 via-transparent to-[var(--accent-2)]/20 opacity-0 transition group-hover:opacity-100" />
    </motion.button>
  );
}
