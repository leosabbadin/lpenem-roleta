import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type PillProps = {
  children: ReactNode;
  className?: string;
};

export function Pill({ children, className }: PillProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-5 text-white shadow-[0_10px_30px_rgba(17,17,17,.08)]',
        'bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.1)] [backdrop-filter:blur(6px)]',
        className
      )}
    >
      {children}
    </div>
  );
}
