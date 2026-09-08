import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, FileDown } from 'lucide-react';
import { LinkedInIcon } from '../../components/ui/LinkedInIcon';
import { Container } from '../../components/common/Container';
import { TechnicalLabel } from '../../components/ui/TechnicalLabel';
import { profileData } from '../../data/profile';
import { getSectionVariants, getItemVariants } from '../../components/motion/motionVariants';

interface ContactSectionProps {
  isPagePrimary?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isPagePrimary = false }) => {
  const shouldReduceMotion = useReducedMotion();

  // Standardized industrial entrance animation variants
  const containerVariants: Variants = getSectionVariants(shouldReduceMotion);
  const itemVariants: Variants = getItemVariants(shouldReduceMotion);

  return (
    <section
      id="contact"
      aria-label="Contact and Engineering Inquiries"
      className="relative w-full py-20 sm:py-24 md:py-28 lg:py-32 bg-background border-t border-border/40 overflow-hidden"
    >
      {/* Background technical grid accent */}
      <div
        className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none select-none"
        aria-hidden="true"
      />

      <Container size="xl" className="relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.06 }}
          className="flex flex-col"
        >
          {/* Section Introduction */}
          <div className="flex flex-col mb-12 sm:mb-16 max-w-3xl">
            <motion.div variants={itemVariants} className="mb-3">
              <TechnicalLabel
                text="10 / CONTACT"
                variant="accent"
                prefix="//"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              {isPagePrimary ? (
                <h1 className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[0.95] select-none">
                  INITIATE A <span className="text-foreground/90">CONVERSATION</span>
                </h1>
              ) : (
                <h2 className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[0.95] select-none">
                  INITIATE A <span className="text-foreground/90">CONVERSATION</span>
                </h2>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="font-sans text-base sm:text-lg text-foreground-muted leading-relaxed font-normal mt-4">
                Have an engineering problem, automation project, or technical opportunity? Let's connect.
              </p>
            </motion.div>
          </div>

          {/* Engineering Contact Terminal Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Scope, Availability & Technical Orientation */}
            <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
              <div className="rounded-xl border border-border/80 bg-surface/50 p-6 sm:p-8 space-y-6">
                {/* Status Indicator */}
                <div className="flex items-center justify-between pb-5 border-b border-border/50">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-status-active animate-pulse" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-widest text-foreground">
                      DIRECT INQUIRY CHANNEL
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-subtle border border-border/60 text-foreground-subtle uppercase">
                    ACTIVE
                  </span>
                </div>

                {/* Identity Summary */}
                <div className="space-y-2">
                  <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold block">
                    ENGINEERING TERMINAL
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-foreground">
                    {profileData.name}
                  </h3>
                  <p className="font-mono text-xs text-foreground-muted uppercase tracking-wider">
                    {profileData.primaryTitle} // {profileData.secondaryTitle}
                  </p>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2.5 text-xs font-mono text-foreground-muted pt-1">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>{profileData.location}</span>
                </div>

                {/* Topic Consultation Areas */}
                <div className="pt-5 border-t border-border/50 space-y-3">
                  <span className="font-mono text-[10px] text-foreground-subtle uppercase tracking-widest block">
                    AREAS FOR DISCUSSION
                  </span>
                  <ul className="space-y-2 font-mono text-xs text-foreground-muted">
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">01 //</span>
                      <span>Industrial Automation &amp; Machine Control</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">02 //</span>
                      <span>Multi-Axis Motion &amp; Fieldbus Synchronization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">03 //</span>
                      <span>PLC Software Architecture &amp; HMI Screens</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">04 //</span>
                      <span>Technical Opportunities &amp; Collaboration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Verified Direct Communication Channels */}
            <motion.div variants={itemVariants} className="lg:col-span-7 space-y-4">
              {/* Primary Channel: LinkedIn */}
              <a
                href={profileData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Prasanna Venkat Ramana I on LinkedIn (opens in new tab)"
                className="group rounded-xl border border-border/80 bg-surface/50 hover:bg-surface/90 hover:border-accent/50 p-6 sm:p-7 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 block focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="p-3.5 rounded-lg bg-surface-subtle border border-border/60 text-accent group-hover:border-accent/40 group-hover:bg-accent/10 transition-colors flex-shrink-0">
                    <LinkedInIcon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-accent uppercase tracking-widest font-semibold">
                        PRIMARY NETWORK
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-surface border border-border/50 text-foreground-subtle">
                        VERIFIED
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground group-hover:text-accent transition-colors">
                      LINKEDIN
                    </h3>
                    <p className="font-mono text-xs text-foreground-muted">
                      linkedin.com/in/logicmm
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-subtle group-hover:bg-accent group-hover:text-white border border-border/60 group-hover:border-accent font-mono text-xs font-semibold text-foreground transition-all duration-150 self-start sm:self-auto">
                  <span>CONNECT ON LINKEDIN</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>

              {/* Direct Email Channel */}
              <a
                href={`mailto:${profileData.email}`}
                aria-label={`Send direct email to ${profileData.email}`}
                className="group rounded-xl border border-border/80 bg-surface/50 hover:bg-surface/90 hover:border-accent/50 p-6 sm:p-7 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 block focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="p-3.5 rounded-lg bg-surface-subtle border border-border/60 text-accent group-hover:border-accent/40 group-hover:bg-accent/10 transition-colors flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-accent uppercase tracking-widest font-semibold">
                        DIRECT COMMUNICATION
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-surface border border-border/50 text-foreground-subtle">
                        VERIFIED
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground group-hover:text-accent transition-colors">
                      DIRECT EMAIL
                    </h3>
                    <p className="font-mono text-xs text-foreground-muted">
                      {profileData.email}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-subtle group-hover:bg-accent group-hover:text-white border border-border/60 group-hover:border-accent font-mono text-xs font-semibold text-foreground transition-all duration-150 self-start sm:self-auto">
                  <span>SEND EMAIL</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>

              {/* Telephone Channel & Engineering CV Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Telephone */}
                <a
                  href={`tel:${profileData.phone}`}
                  aria-label={`Call direct at ${profileData.phone}`}
                  className="group rounded-xl border border-border/80 bg-surface/50 hover:bg-surface/90 hover:border-accent/50 p-5 transition-all duration-200 flex flex-col justify-between space-y-4 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-surface-subtle border border-border/60 text-accent group-hover:border-accent/40 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-foreground-subtle uppercase">
                      VOICE
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-accent uppercase tracking-widest block font-semibold">
                      DIRECT CALL
                    </span>
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-foreground group-hover:text-accent transition-colors">
                      {profileData.phone}
                    </h3>
                  </div>

                  <div className="pt-2 border-t border-border/50 flex items-center justify-between font-mono text-xs text-foreground-muted group-hover:text-foreground">
                    <span>CALL DIRECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-accent" />
                  </div>
                </a>

                {/* Engineering CV Download */}
                <a
                  href={profileData.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Engineering CV (PDF, opens in new tab)"
                  className="group rounded-xl border border-border/80 bg-surface/50 hover:bg-surface/90 hover:border-accent/50 p-5 transition-all duration-200 flex flex-col justify-between space-y-4 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-surface-subtle border border-border/60 text-accent group-hover:border-accent/40 transition-colors">
                      <FileDown className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-foreground-subtle uppercase">
                      DOCUMENT
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-accent uppercase tracking-widest block font-semibold">
                      VERIFIED CV
                    </span>
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-foreground group-hover:text-accent transition-colors">
                      ENGINEERING CV
                    </h3>
                  </div>

                  <div className="pt-2 border-t border-border/50 flex items-center justify-between font-mono text-xs text-foreground-muted group-hover:text-foreground">
                    <span>DOWNLOAD CV</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-accent" />
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
