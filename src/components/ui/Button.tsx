import React from 'react';
import { Link } from 'react-router-dom';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
    to?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
    to?: undefined;
  };

type ButtonAsRouterLink = ButtonBaseProps & {
  to: string;
  href?: undefined;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsRouterLink;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  className = '',
  disabled = false,
  ...props
}) => {
  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      'bg-accent hover:bg-accent-hover text-white border border-transparent shadow-[0_1px_2px_rgba(0,0,0,0.3)] hover:shadow-[0_0_16px_rgba(94,103,230,0.3)] active:scale-[0.98]',
    secondary:
      'bg-surface hover:bg-surface-hover text-foreground border border-border hover:border-border-strong active:scale-[0.98]',
    ghost:
      'bg-transparent hover:bg-surface text-foreground-muted hover:text-foreground border border-transparent hover:border-border active:scale-[0.98]',
    text:
      'bg-transparent hover:bg-transparent text-foreground-muted hover:text-foreground border-none p-0 active:opacity-75'
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'px-3.5 py-1.5 text-xs font-sans font-medium gap-1.5 rounded-full',
    md: 'px-5 py-2 text-xs sm:text-sm font-sans font-medium gap-2 rounded-full',
    lg: 'px-7 py-2.5 text-sm sm:text-base font-sans font-semibold gap-2.5 rounded-full'
  };

  const textVariantSize = variant === 'text' ? 'text-xs sm:text-sm font-medium gap-1.5' : sizeStyles[size];

  const baseClasses = `group inline-flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none select-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${textVariantSize} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {iconLeft && (
        <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">
          {iconLeft}
        </span>
      )}
      <span>{children}</span>
      {iconRight && (
        <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
          {iconRight}
        </span>
      )}
    </>
  );

  if ('to' in props && props.to) {
    const { to, ...rest } = props;
    return (
      <Link to={to} className={baseClasses} {...rest}>
        {content}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    const { href, ...rest } = props;
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    return (
      <a
        href={href}
        className={baseClasses}
        target={isExternal && !href.startsWith('mailto:') && !href.startsWith('tel:') ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      className={baseClasses}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
};
