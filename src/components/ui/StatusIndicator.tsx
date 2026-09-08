import React from 'react';

interface StatusIndicatorProps {
  label?: string;
  isLive?: boolean;
  className?: string;
  size?: 'sm' | 'md';
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  label = 'ACTIVE',
  isLive = true,
  className = '',
  size = 'md'
}) => {
  const dotSizes = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2'
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface/90 border border-border text-foreground text-xs font-mono font-medium tracking-wide uppercase select-none ${className}`}
      role="status"
    >
      <span className="relative flex items-center justify-center" aria-hidden="true">
        {isLive && (
          <span
            className={`absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping ${dotSizes[size]}`}
          />
        )}
        <span
          className={`relative inline-flex rounded-full bg-success shadow-[0_0_6px_#0BDE66] ${dotSizes[size]}`}
        />
      </span>
      <span className="text-foreground-muted tracking-wider">{label}</span>
    </div>
  );
};
