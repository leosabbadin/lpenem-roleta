'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export default function MetaPixelEvents() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'PageView')
    }
  }, [pathname])

  return null
}
