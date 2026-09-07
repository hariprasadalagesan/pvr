import { useState, useEffect, useCallback } from 'react';

export type Theme = 'dark' | 'light';

export const THEME_STORAGE_KEY = 'logicmm-theme';

export const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // 1. Check localStorage first
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY) || localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
    } catch {
      // Storage access disabled or error
    }

    // 2. Fall back to system preference ONLY when no user preference has been stored
    if (typeof window !== 'undefined' && window.matchMedia) {
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      if (prefersLight) return 'light';
    }

    // 3. Dark theme is the default
    return 'dark';
  });

  const applyTheme = useCallback((newTheme: Theme) => {
    const root = document.documentElement;
    if (newTheme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
      root.setAttribute('data-theme', 'light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    }

    // Synchronize meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', newTheme === 'light' ? '#F8F9FA' : '#08090A');
    }
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  // Listen for system preference changes ONLY when no user preference is stored
  useEffect(() => {
    try {
      if (localStorage.getItem(THEME_STORAGE_KEY) || localStorage.getItem('theme')) {
        return; // User has explicit preference, do not override
      }
    } catch {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const handleChange = (e: MediaQueryListEvent) => {
      try {
        if (!localStorage.getItem(THEME_STORAGE_KEY) && !localStorage.getItem('theme')) {
          const sysTheme: Theme = e.matches ? 'light' : 'dark';
          setThemeState(sysTheme);
        }
      } catch {
        // ignore
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch {
      // ignore
    }
    setThemeState(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  return { theme, toggleTheme, setTheme };
};
