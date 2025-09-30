import type { ReactNode } from 'react';

export function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="animated-text-gradient font-bold">
      {children}
    </span>
  );
}
