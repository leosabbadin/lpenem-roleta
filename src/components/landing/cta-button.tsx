import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

type CtaButtonProps = {
  children: ReactNode;
  className?: string;
} & (
  | { asButton?: false; href: string }
  | { asButton: true; href?: never; onClick: () => void }
);

export function CtaButton({ children, className, ...props }: CtaButtonProps) {
  const commonClasses = cn(
    'cta-pulse',
    'inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#ff8a34] to-[#ffc14d] px-8 py-4 text-center text-lg font-bold text-[#1b0b00] ring-1 ring-inset ring-white/35 transition-all hover:-translate-y-px hover:brightness-105',
    'shadow-[0_12px_30px_rgba(255,140,50,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    className
  );

  if (props.asButton) {
    return (
      <button onClick={props.onClick} className={commonClasses}>
        {children}
      </button>
    );
  }

  return (
    <Link href={props.href} className={commonClasses}>
      {children}
    </Link>
  );
}
