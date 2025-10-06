'use client';

import { useState, useTransition } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Loader2, TicketPercent, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CtaButton } from './cta-button';

type RoulettePopupProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const prizes = [
  '10% OFF',
  'Tente de Novo',
  '30% OFF',
  'Mentoria',
  '50% OFF',
  '72% OFF',
  '20% OFF',
  'E-book Grátis',
];

const WINNING_INDEX = 5; // Index of '72% OFF'

export function RoulettePopup({ open, onOpenChange }: RoulettePopupProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const checkoutUrl =
    'https://pay.kirvano.com/a321493b-b7f4-4bc1-aee7-76ddd61e2c85';

  const handleSpin = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
      setShowResult(true);
    }, 4000); // Duration of the spin animation
  };

  const resetState = (newOpenState: boolean) => {
    onOpenChange(newOpenState);
    if (!newOpenState) {
      setTimeout(() => {
        setIsSpinning(false);
        setShowResult(false);
      }, 300); // wait for dialog close animation
    }
  };

  return (
    <Dialog open={open} onOpenChange={resetState}>
      <DialogContent className="max-w-md bg-[#1a1338] border-primary/50 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline text-center text-amber-300">
            Gire a Roleta da Sorte!
          </DialogTitle>
          <DialogDescription className="text-center text-white/80">
            Você está a um giro de desbloquear um desconto exclusivo.
          </DialogDescription>
        </DialogHeader>

        <div className="relative my-8 flex items-center justify-center">
          <div
            className={cn(
              'absolute top-1/2 -translate-y-1/2 -right-2 z-10 h-0 w-0 border-y-8 border-y-transparent border-l-[16px] border-l-red-500',
              '[transform-origin:0_50%]'
            )}
            style={{ transform: 'translateY(-50%)' }}
          ></div>
          <div
            className={cn(
              'relative h-64 w-64 rounded-full border-4 border-amber-300 transition-transform duration-[4000ms] ease-[cubic-bezier(.1,.6,.3,1)]',
              isSpinning && 'animate-spin'
            )}
            style={{
              animationName: isSpinning ? 'spin' : 'none',
            }}
          >
            {prizes.map((prize, i) => {
              const angle = (360 / prizes.length) * i;
              return (
                <div
                  key={i}
                  className="absolute left-0 top-0 h-full w-full"
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  <div
                    className={cn(
                      'absolute left-1/2 top-0 h-1/2 w-1/2 -ml-1/2 origin-bottom-left border-r-2 border-dashed border-primary/30',
                      '[clip-path:polygon(50%_0%,100%_100%,0%_100%)]'
                    )}
                    style={{ transform: `rotate(${360 / prizes.length / 2}deg)` }}
                  >
                    <div
                      className="absolute left-1/2 top-0 h-full w-full origin-bottom-left p-2 text-center"
                      style={{
                        transform: `translateX(-50%) rotate(${
                          360 / prizes.length
                        }deg)`,
                      }}
                    >
                      <span
                        className="block -rotate-45 text-xs font-bold"
                        style={{
                          transform: `translateY(1.5rem) rotate(-${
                            360 / prizes.length / 2 + 90
                          }deg)`,
                        }}
                      >
                        {prize}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="absolute flex h-16 w-16 items-center justify-center rounded-full border-4 border-amber-400 bg-[#1a1338] text-sm font-bold">
            GIRAR
          </div>
        </div>

        <div className="text-center">
          {!showResult ? (
            <>
              <p className="font-bold">
                Preço Original:{' '}
                <span className="line-through">R$ 109,90</span>
              </p>
              <Button
                onClick={handleSpin}
                disabled={isSpinning}
                className="mt-4 bg-green-500 text-lg font-bold text-white hover:bg-green-600"
              >
                {isSpinning && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Girar para ganhar!
              </Button>
            </>
          ) : (
            <div className="animate-in fade-in-50 duration-500">
              <TicketPercent className="mx-auto mb-2 h-12 w-12 text-green-400" />
              <h3 className="text-2xl font-bold text-green-400">
                Parabéns! Você ganhou 72% OFF!
              </h3>
              <p className="mt-2 text-lg">
                De <span className="line-through">R$ 109,90</span> por apenas
              </p>
              <p className="font-headline text-5xl font-extrabold text-amber-300">
                R$ 24,99
              </p>
              <CtaButton href={checkoutUrl} className="mt-6">
                Garantir meu Desconto
                <ArrowRight />
              </CtaButton>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
