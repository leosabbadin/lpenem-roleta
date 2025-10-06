
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
    <section id="investimento" className="section relative isolate">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-[#1a1338]" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-[#6c46ff]/80 via-[#a25aff]/80 to-[#ff70b7]/80 p-6 text-center shadow-[0_20px_80px_rgba(150,80,255,.35)] md:p-10">
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

          <p className="mt-8 text-xl text-white/70">
            De{' '}
            <span className="font-bold text-red-400 line-through">
              R$ 89,90
            </span>{' '}
            por
          </p>

          <div
            className="font-headline text-[56px] font-extrabold tracking-tight sm:text-[72px] md:text-[88px]"
            style={{ textShadow: '0 10px 30px rgba(252, 211, 77, 0.4)' }}
          >
            <Highlight>R$ ??,??</Highlight>
          </div>
          <div className="-mt-2 text-white/80">
            (Clique abaixo para revelar seu preço)
          </div>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-pink-600/85 px-4 py-1.5 text-sm font-bold shadow-lg">
            <Flame className="size-4" /> OFERTA DE LANÇAMENTO
          </div>

          <div className="mt-8 flex justify-center">
            <CtaButton asButton onClick={() => setIsPopupOpen(true)}>
              🎰 GIRAR E REVELAR MEU DESCONTO
            </CtaButton>
          </div>
        </div>
      </div>
      <RoulettePopup open={isPopupOpen} onOpenChange={setIsPopupOpen} />
    </section>
  );
}
