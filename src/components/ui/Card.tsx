import React from 'react';

export type CardVariant = 'default' | 'elevated' | 'interactive' | 'accent';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: CardVariant;
  className?: string;
  as?: React.ElementType;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  as: Component = 'div',
  ...rest
}) => {
  const variantStyles: Record<CardVariant, string> = {
    default:
      'bg-surface border-border text-foreground',
    elevated:
      'bg-surface-elevated border-border-strong text-foreground shadow-[0_4px_20px_rgba(0,0,0,0.35)]',
    interactive:
      'bg-surface border-border hover:border-border-strong hover:bg-surface-hover text-foreground transition-colors duration-200 cursor-pointer',
    accent:
      'bg-surface border-accent/25 hover:border-accent/45 text-foreground transition-colors duration-200'
  };

  return (
    <Component
      className={`relative rounded-xl border p-6 md:p-7 overflow-hidden ${variantStyles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
};
