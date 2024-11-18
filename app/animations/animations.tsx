export const imageAnimation = {
  initial: { opacity: 0, y: 50, scale: 0.8 },
  animate: {
    opacity: 1,
    y: `0em`,
    scale: 1,
    transition: {
      delay: 5, // Reduced from 6.5
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export const bodyAnimation = {
  initial: { opacity: 0, y: `1em` },
  animate: {
    opacity: 1,
    y: `0em`,
    scale: 1,
    transition: {
      delay: 4.5, // Reduced from 4.5
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export const riseWithFade = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 7,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

export const staggerChildren = {
  animate: {
    transition: {
      durationChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export const wordAnimation = {
  initial: { opacity: 0, y: 150 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5, // Reduced from 1
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export const wordAnimation2 = {
  initial: { opacity: 0, y: 150 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};
