export const easings = {
  swift: [0.22, 1, 0.36, 1] as const,
  glide: [0.16, 1, 0.3, 1] as const,
  calm: [0.25, 0.1, 0.25, 1] as const,
};

export const motionTimings = {
  fast: 0.35,
  base: 0.6,
  slow: 0.9,
};

export const stagger = {
  list: 0.12,
  hero: 0.16,
};

export const pageTransition = {
  initial: { opacity: 0, y: 20, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -16, filter: "blur(6px)" },
};
