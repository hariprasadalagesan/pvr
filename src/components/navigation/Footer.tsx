import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { LinkedInIcon } from '../ui/LinkedInIcon';
import { Container } from '../common/Container';
import { navigationItems } from '../../data/navigation';
import { fadeUp, defaultTransition } from '../motion/motionVariants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  // Verified engineering positioning statement
  const positioningStatement =
    'I build industrial automation systems across PLCs, HMI, industrial communication, motion control and software.';

  return (
    <footer
      className="w-full bg-background border-t border-border mt-20 transition-colors duration-200"
      role="contentinfo"
    >
      <Container size="xl">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-20px' }}
          variants={fadeUp}
          transition={defaultTransition}
          className="pt-12 sm:pt-16 pb-12"
        >
          {/* TOP TIER: LOGICMM Brand + Short Engineering Positioning */}
          <div className="pb-10 border-b border-border">
            <div className="max-w-2xl space-y-3 sm:space-y-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 group focus-visible:outline-2 focus-visible:outline-accent rounded select-none"
                aria-label="LogicMM Home"
              >
                <span className="font-logo text-2xl sm:text-3xl font-black tracking-wider text-foreground group-hover:text-accent transition-colors">
                  LOGICMM
                </span>
                <span className="px-1.5 py-0.5 rounded border border-border bg-surface font-mono text-[10px] text-foreground-muted tracking-widest uppercase font-semibold">
                  PVR
                </span>
              </Link>
              <p className="font-sans text-sm sm:text-base text-foreground-muted leading-relaxed">
                {positioningStatement}
              </p>
            </div>
          </div>

          {/* MIDDLE TIER: Navigation & Verified External Links */}
          <div className="py-8 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-6">
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3">
                {navigationItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <li key={item.id}>
                      <Link
                        to={item.path}
                        className={`group relative inline-flex items-center py-1 text-xs font-mono uppercase tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-accent rounded ${
                          isActive
                            ? 'text-accent font-semibold'
                            : 'text-foreground-muted hover:text-foreground'
                        }`}
                      >
                        <span className="relative">
                          {item.label}
                          <span
                            className={`absolute -bottom-0.5 left-0 h-[1px] bg-accent transition-all duration-200 ${
                              isActive
                                ? 'w-full opacity-100'
                                : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                            }`}
                            aria-hidden="true"
                          />
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Verified Social Link (LinkedIn Only) */}
            <div className="flex items-center">
              <a
                href="https://www.linkedin.com/in/logicmm"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 py-1 text-xs font-mono uppercase tracking-wider text-foreground-muted hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent rounded"
                aria-label="LogicMM on LinkedIn (opens in new tab)"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-accent transition-transform duration-200 group-hover:scale-110" />
                <span className="relative">
                  LinkedIn
                  <span
                    className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-accent opacity-0 transition-all duration-200 group-hover:w-full group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </span>
                <ArrowUpRight
                  className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* BOTTOM TIER: Technical Metadata & Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-foreground-muted">
            {/* Technical Detail: Minimal terminal-style metadata with status indicator */}
            <div className="flex items-center gap-2 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" aria-hidden="true" />
              <span className="tracking-wider text-foreground-muted">[SYS_NODE: BENGALURU, IN]</span>
              <span className="text-border-strong select-none" aria-hidden="true">/</span>
              <span className="tracking-wider text-foreground-muted/70">CTRL_BUS: NORMAL</span>
            </div>

            <p className="text-[11px] tracking-wider text-foreground-muted/80">
              © {currentYear} LOGICMM. ALL RIGHTS RESERVED.
            </p>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
};
