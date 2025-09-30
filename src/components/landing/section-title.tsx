import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
};

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        'font-headline text-3xl font-bold md:text-4xl',
        className
      )}
    >
      {children}
    </h2>
  );
}
