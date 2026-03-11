import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export function GlowCard({ children, className }: GlowCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-[var(--radius-xl)] border border-border bg-bg-card/80 backdrop-blur-glass shadow-card',
        className,
      )}
    >
      {children}
    </div>
  );
}
