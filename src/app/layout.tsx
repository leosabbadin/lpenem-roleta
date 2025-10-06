import Script from 'next/script';
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { WhatsAppButton } from '@/components/landing/whatsapp-button';

export const metadata: Metadata = {
  title: 'Hackeando a Redação do ENEM',
  description:
    'Transforme sua redação do ENEM em uma máquina de nota 900+ em apenas 7 dias.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Space+Grotesk:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <WhatsAppButton />
        <Toaster />

        {/* Script da Utmify adicionado */}
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          strategy="afterInteractive"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
        />
      </body>
    </html>
  );
}
