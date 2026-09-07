import type { Variants, Transition } from 'framer-motion';

/**
 * Standardized Industrial Motion Timing Tokens (in seconds)
 * - FAST: ~150–200ms (instant UI feedback, tooltips, micro-states)
 * - INTERACTION: ~200–300ms (buttons, cards, hover transitions)
 * - REVEAL: ~400–600ms (section entries, content reveals)
 * - TECHNICAL SIGNAL: ~1000–2500ms (schematic traces, data packets, telemetry)
 * - STAGGER: ~50–100ms between children
 */
export const timing = {
  fast: 0.18,
  interaction: 0.25,
  snappy: 0.35,
  reveal: 0.45,
  signal: 2.2,
  stagger: 0.08,
  delayChildren: 0.04
} as const;

/**
 * Industrial Easing Curves
 * Smooth, controlled, instrumentation-grade easing without cartoon bounce.
 */
export const easing = {
  industrial: [0.16, 1, 0.3, 1] as const,
  telemetry: 'easeInOut' as const,
  linear: 'linear' as const
} as const;

/**
 * Standard Transitions
 */
export const fastTransition: Transition = {
  duration: timing.fast,
  ease: easing.industrial
};

export const interactionTransition: Transition = {
  duration: timing.interaction,
  ease: easing.industrial
};

export const revealTransition: Transition = {
  duration: timing.reveal,
  ease: easing.industrial
};

export const defaultTransition: Transition = revealTransition;

export const snappyTransition: Transition = {
  duration: timing.snappy,
  ease: easing.industrial
};

export const slowTransition: Transition = {
  duration: 0.85,
  ease: easing.industrial
};

export const technicalSignalTransition: Transition = {
  duration: timing.signal,
  ease: easing.telemetry
};

/**
 * Core Structural Motion Variants
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: revealTransition
  }
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: revealTransition
  }
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: revealTransition
  }
};

export const slideIn: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: revealTransition
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: revealTransition
  }
};

export const staggerChildren = (
  staggerDelay: number = timing.stagger,
  delayChildren: number = timing.delayChildren
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren
    }
  }
});

/**
 * Standardized Section & Item Reveal Helpers (Reduced-Motion Aware)
 * Centralizes entry animations across all portfolio sections.
 */
export const getSectionVariants = (reduced: boolean | null = false): Variants => {
  const isReduced = Boolean(reduced);
  return {
    hidden: { opacity: isReduced ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: isReduced
        ? { duration: 0 }
        : {
            staggerChildren: timing.stagger,
            delayChildren: timing.delayChildren
          }
    }
  };
};

export const getItemVariants = (reduced: boolean | null = false): Variants => {
  const isReduced = Boolean(reduced);
  return {
    hidden: {
      opacity: isReduced ? 1 : 0,
      y: isReduced ? 0 : 16
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: isReduced
        ? { duration: 0 }
        : revealTransition
    }
  };
};

/**
 * Interactive Element Variants
 */
export const cardHoverVariants: Variants = {
  initial: { y: 0 },
  hover: {
    y: -2,
    transition: interactionTransition
  }
};

/**
 * Specialized Technical & Hardware Motion Variants
 */
export const signalFlow: Variants = {
  idle: {
    opacity: 0.4,
    scaleX: 1
  },
  pulse: {
    opacity: [0.4, 1, 0.4],
    scaleX: [0.98, 1.02, 0.98],
    transition: {
      duration: timing.signal,
      repeat: Infinity,
      ease: easing.telemetry
    }
  }
};

export const nodeActive: Variants = {
  inactive: {
    scale: 1,
    opacity: 0.7
  },
  active: {
    scale: [1, 1.12, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: timing.signal,
      repeat: Infinity,
      ease: easing.telemetry
    }
  }
};

export const lineDraw: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easing.industrial
    }
  }
};
