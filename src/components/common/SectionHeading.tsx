import React from 'react';
import { TechnicalLabel } from '../ui/TechnicalLabel';
import { Reveal } from '../motion/Reveal';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  align = 'left',
  className = ''
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  return (
    <div className={`flex flex-col mb-10 md:mb-14 ${alignClasses[align]} max-w-3xl ${className}`}>
      {label && (
        <Reveal delay={0.05} className="mb-3">
          <TechnicalLabel text={label} variant="accent" />
        </Reveal>
      )}

      <Reveal delay={0.1}>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground font-bold tracking-wide uppercase leading-none">
          {title}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal delay={0.15}>
          <p className="mt-4 text-base sm:text-lg text-foreground-muted leading-relaxed font-sans font-normal">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
};
