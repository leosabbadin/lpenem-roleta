
import Link from 'next/link';
import type { SVGProps } from 'react';

// Ícone do WhatsApp como um componente SVG para melhor personalização
function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm40 135.59a16 16 0 0 1-10.31 15.41l-1.39.69a56.23 56.23 0 0 1-28.95 7.31h-.05a56.84 56.84 0 0 1-29.23-8.87l-32.32 9.23a8 8 0 0 1-10-10l9.23-32.32a56.84 56.84 0 0 1-8.87-29.23v-.05a56.23 56.23 0 0 1 7.31-28.95l.69-1.39a16 16 0 0 1 15.41-10.31h18.42a16 16 0 0 1 15.41 10.31l.69 1.39a56.23 56.23 0 0 1 7.31 28.95v.05a56.84 56.84 0 0 1-8.87 29.23l9.23 32.32a8 8 0 0 1-2.24 9.19ZM156.41 135.8a8 8 0 0 1-8.49 6.84h-4.3a21.41 21.41 0 0 1-13-4.52a41.87 41.87 0 0 1-12.83-16.21a8 8 0 0 1 7.42-10.41l16.64-4.75a8 8 0 0 1 9.53 4.52l4.89 10.65a8 8 0 0 1-2 9.87Z"
      />
    </svg>
  );
}

export function WhatsAppButton() {
  // Substitua 'SEUNUMERO' pelo seu número de WhatsApp com código do país. Ex: 5511999999999
  const whatsappNumber = '5511999999999';
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
