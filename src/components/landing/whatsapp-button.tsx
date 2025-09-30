import Link from 'next/link';
import type { SVGProps } from 'react';

// Ícone do WhatsApp como um componente SVG para melhor personalização
function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.69-1.06-5.14-2.9-6.98zM12.04 20.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.06-.39-2.03-1.25c-.75-.67-1.25-1.5-1.4-1.75c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.42c.08-.17.04-.31-.02-.43c-.06-.12-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.42h-.5c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18c-.07-.12-.23-.19-.48-.31z"
      />
    </svg>
  );
}

export function WhatsAppButton() {
  // Substitua 'SEUNUMERO' pelo seu número de WhatsApp com código do país. Ex: 5511999999999
  const whatsappNumber = '5562996105483';
  const whatsappMessage = encodeURIComponent(
    'Olá! Tenho interesse no método Hackeando a Redação do ENEM.'
  );

  return (
    <Link
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:brightness-105"
      aria-label="Fale conosco no WhatsApp"
    >
      <WhatsAppIcon />
    </Link>
  );
}
