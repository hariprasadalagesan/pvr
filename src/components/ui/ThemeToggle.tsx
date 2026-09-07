import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      className={`relative p-2 rounded-lg bg-surface border border-border text-foreground-muted hover:text-foreground hover:border-accent/60 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 select-none cursor-pointer group ${className}`}
    >
      <motion.div
        key={theme}
        initial={shouldReduceMotion ? false : { rotate: isDark ? -45 : 45, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center w-4 h-4 sm:w-4.5 sm:h-4.5"
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-foreground-muted group-hover:text-accent transition-colors duration-150" />
        ) : (
          <Sun className="w-4 h-4 text-foreground-muted group-hover:text-accent transition-colors duration-150" />
        )}
      </motion.div>
    </button>
  );
};
