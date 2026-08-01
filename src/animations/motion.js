import { easeOut } from "framer-motion";

/* ===========================
      Fade Up
=========================== */

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 80,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

/* ===========================
      Fade Left
=========================== */

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -80,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

/* ===========================
      Fade Right
=========================== */

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: 80,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

/* ===========================
      Zoom In
=========================== */

export const zoomIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};

/* ===========================
      Rotate In
=========================== */

export const rotateIn = {
  hidden: {
    opacity: 0,
    rotate: -15,
    scale: 0.8,
  },

  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,

    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

/* ===========================
      Stagger Container
=========================== */

export const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* ===========================
      Project Card
=========================== */

export const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.92,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

/* ===========================
      Floating Animation
=========================== */

export const floating = {
  animate: {
    y: [0, -12, 0],

    transition: {
      repeat: Infinity,
      duration: 4,
      ease: "easeInOut",
    },
  },
};

/* ===========================
      Button Hover
=========================== */

export const buttonHover = {
  whileHover: {
    scale: 1.05,
    y: -4,
    boxShadow: "0 0 25px rgba(217,70,239,.4)",
  },

  whileTap: {
    scale: 0.96,
  },
};

/* ===========================
      Card Hover
=========================== */

export const cardHover = {
  whileHover: {
    y: -12,
    scale: 1.02,
  },

  transition: {
    duration: 0.3,
  },
};

/* ===========================
      Icon Hover
=========================== */

export const iconHover = {
  whileHover: {
    rotate: 10,
    scale: 1.15,
  },
};

/* ===========================
      Tech Badge Hover
=========================== */

export const badgeHover = {
  whileHover: {
    y: -4,
    scale: 1.08,
  },
};

/* ===========================
      Title Animation
=========================== */

export const titleAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};