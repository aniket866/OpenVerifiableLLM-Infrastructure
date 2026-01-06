export const floatSlow = {
  animate: {
    y: [0, -12, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const pulse = {
  animate: {
    opacity: [0.3, 1, 0.3],
    scale: [0.98, 1, 0.98],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
  },
};

export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};
