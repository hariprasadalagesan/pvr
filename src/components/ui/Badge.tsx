import React from 'react';

export type BadgeVariant = 'neutral' | 'accent' | 'hardware' | 'protocol';
export type BadgeSize = 'sm' | 'md';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  className = ''
}) => {
  const variantClasses: Record<BadgeVariant, string> = {
    neutral: 'bg-surface border-border text-foreground-muted hover:border-border-strong',
    accent: 'bg-accent-subtle border-accent/30 text-accent',
    hardware: 'bg-[var(--color-badge-hw-bg)] border-[var(--color-badge-hw-border)] text-[var(--color-badge-hw-text)] hover:border-accent/60',
    protocol: 'bg-[var(--color-badge-proto-bg)] border-[var(--color-badge-proto-border)] text-[var(--color-badge-proto-text)] hover:border-accent/60'
  };

  const sizeClasses: Record<BadgeSize, string> = {
    sm: 'text-[11px] px-2 py-0.5 font-mono',
    md: 'text-xs px-2.5 py-1 font-mono'
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded border font-medium transition-colors select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
