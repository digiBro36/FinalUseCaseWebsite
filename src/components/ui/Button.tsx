import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'pill';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-accent-primary to-accent-secondary text-black shadow-[0_10px_30px_rgba(245,166,35,0.35)] hover:shadow-[0_0_25px_rgba(108,99,255,0.45)]',
  secondary:
    'bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.12)] text-text-primary hover:border-accent-primary hover:bg-[rgba(108,99,255,0.16)]',
  ghost:
    'bg-transparent text-text-primary hover:text-white hover:bg-[rgba(255,255,255,0.08)]',
  pill:
    'bg-gradient-to-r from-accent-primary to-accent-secondary text-black shadow-[0_10px_30px_rgba(245,166,35,0.35)] hover:shadow-[0_0_25px_rgba(108,99,255,0.45)]',
};

const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
