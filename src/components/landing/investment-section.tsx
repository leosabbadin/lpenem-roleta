
'use client';

import { CircleDollarSign, Flame, Gift, TicketPercent } from 'lucide-react';
import { CtaButton } from './cta-button';
import { Highlight } from './highlight';
import { SectionTitle } from './section-title';
import { useState } from 'react';
import { RoulettePopup } from './roulette-popup';

export function InvestmentSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section
      id="investimento"
      className="section relative isolate overflow-hidden bg-background py-16"
    >
      <div
        className="absolute inset-x-0 -z-10 top-1/2 -translate-y-1/2 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a855f7] to-[#ff80b5] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] md:w-[48.125rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-[#2c1d62]/80 to-[#1a1338]/80 p-6 text-center shadow-[0_20px_80px_rgba(150,80,255,.35)] ring-1 ring-inset ring-white/10 backdrop-blur-md md:p-10">
        <SectionTitle>
          <div className="flex items-center justify-center gap-3">
            <CircleDollarSign className="size-8 text-primary" /> Investimento
          </div>
        </SectionTitle>
        <div className="mt-8 flex flex-col items-center gap-2 rounded-2xl border border-amber-400/50 bg-amber-400/10 p-4">
          <div className="flex items-center gap-2 font-bold text-amber-300">
            <Gift className="size-5" />
            <span>Presente Especial</span>
          </div>
          <p className="text-center text-white/90">
            Gire a roleta e ganhe até 72% de desconto no valor abaixo. A sorte
            está lançada!
          </p>
        </div>

        <p className="mt-6 text-xl text-white/70">
          De{' '}
          <span className="font-bold text-red-400 line-through">R$ 89,90</span>{' '}
          por
        </p>

        <div
          className="font-headline text-[56px] font-extrabold tracking-tight sm:text-[72px] md:text-[88px]"
          style={{ textShadow: '0 10px 30px rgba(252, 211, 77, 0.4)' }}
        >
          <Highlight>R$ ??,??</Highlight>
        </div>
        <div className="-mt-3 text-white/80">
          (Clique abaixo para revelar seu preço)
        </div>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-pink-600/85 px-4 py-1.5 text-sm font-bold shadow-lg">
          <Flame className="size-4" /> OFERTA DE LANÇAMENTO
        </div>

        <div className="mt-8 flex justify-center">
          <CtaButton asButton onClick={() => setIsPopupOpen(true)}>
            🎰 GIRAR E REVELAR MEU DESCONTO
          </CtaButton>
        </div>
      </div>
      <RoulettePopup open={isPopupOpen} onOpenChange={setIsPopupOpen} />
    </section>
  );
}
