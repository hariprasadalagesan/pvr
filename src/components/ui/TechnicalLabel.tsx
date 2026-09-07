import React from 'react';

export type TechnicalLabelVariant = 'default' | 'accent' | 'success' | 'muted';

interface TechnicalLabelProps {
  text: string;
  variant?: TechnicalLabelVariant;
  className?: string;
  prefix?: string;
}

export const TechnicalLabel: React.FC<TechnicalLabelProps> = ({
  text,
  variant = 'default',
  className = '',
  prefix = '//'
}) => {
  const variantStyles: Record<TechnicalLabelVariant, string> = {
    default: 'text-foreground-muted border-border bg-surface/80',
    accent: 'text-accent border-accent/30 bg-accent-subtle',
    success: 'text-success border-success/30 bg-success/10',
    muted: 'text-foreground-muted/70 border-border/60 bg-surface/40'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-tech-label border rounded font-mono transition-colors select-none ${variantStyles[variant]} ${className}`}
    >
      <span className="opacity-50 select-none" aria-hidden="true">{prefix}</span>
      <span className="tracking-wider">{text}</span>
    </span>
  );
};
