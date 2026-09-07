import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navigationItems } from '../../data/navigation';
import { profileData } from '../../data/profile';
import { StatusIndicator } from '../ui/StatusIndicator';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const location = useLocation();

  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const navPanelRef = React.useRef<HTMLDivElement>(null);
  const prevMenuOpenRef = React.useRef(isMobileMenuOpen);

  const isScrolled = scrollY > 40;

  // Close mobile menu on route change
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }

  // Focus management & keyboard trap for mobile modal
  useEffect(() => {
    if (isMobileMenuOpen) {
      const timer = setTimeout(() => {
        const firstFocusable = navPanelRef.current?.querySelector<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        firstFocusable?.focus();
      }, 50);

      const handleKeyNavigation = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsMobileMenuOpen(false);
          triggerRef.current?.focus();
          return;
        }

        if (e.key === 'Tab' && navPanelRef.current) {
          const focusables = navPanelRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );
          if (focusables.length === 0) return;
          const first = focusables[0];
          const last = focusables[focusables.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === first) {
              e.preventDefault();
              last.focus();
            }
          } else {
            if (document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyNavigation);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('keydown', handleKeyNavigation);
      };
    } else {
      if (prevMenuOpenRef.current) {
        triggerRef.current?.focus();
      }
    }
    prevMenuOpenRef.current = isMobileMenuOpen;
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background-elevated/85 backdrop-blur-md border-b border-border shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Brand Monogram & Logotype (Open Sauce One Black font ONLY for LOGICMM) */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded select-none"
            aria-label="LogicMM Home"
          >
            <div className="flex items-center gap-2">
              <span className="font-logo text-2xl sm:text-3xl font-black tracking-wider text-foreground group-hover:text-accent transition-colors">
                LOGICMM
              </span>
              <span className="px-1.5 py-0.5 rounded border border-border bg-surface font-mono text-[10px] text-foreground-muted tracking-widest uppercase font-semibold">
                PVR
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Desktop Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-1.5"
          >
            {navigationItems.map((item) => {
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path);

              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-3.5 py-1.5 rounded text-xs font-mono font-medium tracking-wider uppercase transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                    isActive
                      ? 'text-foreground font-semibold'
                      : 'text-foreground-muted hover:text-foreground hover:bg-surface/60'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop Right Telemetry & Actions */}
          <div className="hidden md:flex items-center gap-2.5 lg:gap-3">
            <StatusIndicator
              size="sm"
              label={profileData.availability.statusLabel}
              className="hidden xl:inline-flex"
            />

            <ThemeToggle />

            <Button
              to="/contact"
              variant="primary"
              size="sm"
              iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
              className="tracking-wider uppercase font-mono text-xs"
            >
              Initiate
            </Button>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            <button
              ref={triggerRef}
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-surface border border-border text-foreground-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 transition-colors cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-panel"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={navPanelRef}
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-16 sm:top-20 z-40 bg-background/98 backdrop-blur-xl border-t border-border flex flex-col justify-between px-6 py-8 md:hidden overflow-y-auto"
          >
            {/* Nav Links Staggered */}
            <div className="space-y-6">
              <div className="pb-4 border-b border-border flex items-center justify-between">
                <StatusIndicator
                  size="sm"
                  label={profileData.availability.statusLabel}
                />
                <span className="font-mono text-[11px] text-foreground-muted">
                  [NODE: {profileData.availability.location}]
                </span>
              </div>

              <nav className="flex flex-col space-y-2">
                {navigationItems.map((item, index) => {
                  const isActive =
                    item.path === '/'
                      ? location.pathname === '/'
                      : location.pathname.startsWith(item.path);

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.04 + 0.05,
                        duration: 0.2,
                        ease: 'easeOut'
                      }}
                    >
                      <NavLink
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-current={isActive ? 'page' : undefined}
                        className={`flex items-center justify-between p-3 rounded-lg font-display text-2xl uppercase tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                          isActive
                            ? 'text-accent bg-surface border border-border-strong font-bold'
                            : 'text-foreground hover:text-accent hover:bg-surface/50'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="font-mono text-xs text-accent tracking-widest font-normal">
                            [ACTIVE]
                          </span>
                        )}
                      </NavLink>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Footer Telemetry & Direct Contact */}
            <div className="pt-6 mt-6 border-t border-border space-y-4">
              <div className="font-mono text-xs text-foreground-muted space-y-1">
                <p className="text-foreground font-semibold uppercase">Prasanna Venkat Ramana I</p>
                <p>{profileData.primaryTitle} &amp; {profileData.secondaryTitle}</p>
                <p className="text-accent">{profileData.email}</p>
              </div>

              <Button
                to="/contact"
                variant="primary"
                size="md"
                className="w-full font-mono uppercase tracking-wider text-xs"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Initiate Project Transmission
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
