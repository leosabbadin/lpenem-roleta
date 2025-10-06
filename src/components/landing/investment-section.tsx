'use client';

import { CircleDollarSign, Flame } from 'lucide-react';
import { CtaButton } from './cta-button';
import { Highlight } from './highlight';
import { SectionTitle } from './section-title';
import { useState } from 'react';
import { RoulettePopup } from './roulette-popup';

export function InvestmentSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section id="investimento" className="section relative isolate">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0b2e] to-[#1a1338]" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-b from-primary/10 to-purple-500/10 p-10 text-center shadow-[0_20px_80px_rgba(0,0,0,.45)]">
          <SectionTitle>
            <div className="flex items-center justify-center gap-3">
              <CircleDollarSign className="size-8 text-primary" /> Investimento
            </div>
          </SectionTitle>
          <p className="mt-2 text-center text-white/80 md:text-lg">
            Você poderia pagar caro em cursinhos presenciais e não teria metade
            disso.
            <br />
            Mas hoje, você garante o próximo passo da sua aprovação por:
          </p>

          <p className="mt-8 text-xl text-white/70">
            De{' '}
            <span className="font-bold text-red-400 line-through">
              R$ 109,90
            </span>{' '}
            por
          </p>

          <div
            className="font-headline text-[56px] font-extrabold tracking-tight sm:text-[72px] md:text-[88px]"
            style={{ textShadow: '0 10px 30px rgba(255,230,105,.25)' }}
          >
            <Highlight>R$ 24,99</Highlight>
          </div>
          <div className="-mt-2 text-white/80">
            à vista no pix ou cartão
          </div>
          <div className="mt-4 inline-block rounded-full bg-pink-600/85 px-4 py-1.5 text-sm font-bold shadow-lg">
            OFERTA DE LANÇAMENTO
          </div>

          <div className="mt-8 flex justify-center">
            <CtaButton asButton onClick={() => setIsPopupOpen(true)}>
              <Flame /> Quero minha Redação Nota 1000 agora
            </CtaButton>
          </div>
        </div>
      </div>
      <RoulettePopup open={isPopupOpen} onOpenChange={setIsPopupOpen} />
    </section>
  );
}
