import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { ReactNode } from 'react';

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function CtaButton({ href, children, className }: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'cta-pulse',
        'inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#ff8a34] to-[#ffc14d] px-8 py-4 text-center text-lg font-bold text-[#1b0b00] ring-1 ring-inset ring-white/35 transition-all hover:-translate-y-px hover:brightness-105',
        'shadow-[0_12px_30px_rgba(255,140,50,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className
      )}
    >
      {children}
    </Link>
  );
}
