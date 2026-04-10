import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: "bg-[var(--color-primary)] text-black hover:bg-[var(--color-primary-hover)] border border-transparent",
      secondary: "bg-[var(--color-surface-hover)] text-white hover:bg-[#2a2a2a] border border-transparent",
      outline: "bg-transparent text-white border border-[var(--color-border)] hover:bg-[var(--color-surface-hover)]",
      ghost: "bg-transparent text-[var(--color-text-muted)] hover:text-white hover:bg-[var(--color-surface-hover)] border border-transparent",
      danger: "bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-transparent",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4 py-2 text-sm",
      lg: "h-12 px-6 text-base",
      icon: "h-10 w-10 flex items-center justify-center",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-[var(--color-background)] disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
