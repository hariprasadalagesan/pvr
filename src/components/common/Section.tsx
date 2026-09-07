import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  className?: string;
  spacing?: 'compact' | 'normal' | 'spacious';
  as?: 'section' | 'div' | 'article';
}

const spacingClasses = {
  compact: 'py-12 md:py-16',
  normal: 'py-16 md:py-24',
  spacious: 'py-20 md:py-32'
};

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  spacing = 'normal',
  as: Component = 'section',
  ...rest
}) => {
  return (
    <Component
      id={id}
      className={`relative w-full overflow-hidden ${spacingClasses[spacing]} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
};
