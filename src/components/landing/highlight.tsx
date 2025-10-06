import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Highlight({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const isInvestmentHighlight =
    typeof children === 'string' && children.includes('R$');

  return (
    <span
      className={cn(
        'font-bold',
        isInvestmentHighlight
          ? 'animated-investment-text-gradient'
          : 'animated-text-gradient',
        className
      )}
    >
      {children}
    </span>
  );
}
