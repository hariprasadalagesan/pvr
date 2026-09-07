import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  as?: React.ElementType;
}

const sizeClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full'
};

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'xl',
  className = '',
  as: Component = 'div',
  ...rest
}) => {
  return (
    <Component
      className={`mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
};
