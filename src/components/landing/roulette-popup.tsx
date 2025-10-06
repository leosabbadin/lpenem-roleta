
'use client';

import { useState, useRef } from 'react';
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
  { text: '10% OFF' },
  { text: 'Tente de Novo' },
  { text: '30% OFF' },
  { text: 'Mentoria' },
  { text: '50% OFF' },
  { text: '72% OFF' }, // Winning prize
  { text: '20% OFF' },
  { text: 'E-book Grátis' },
];

const WINNING_INDEX = 5; // Index of '72% OFF'

export function RoulettePopup({ open, onOpenChange }: RoulettePopupProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const checkoutUrl =
    'https://pay.kirvano.com/a321493b-b7f4-4bc1-aee7-76ddd61e2c85';

  const handleSpin = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
      setShowResult(true);
      if (audioRef.current) {
        audioRef.current.pause();
      }
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
      <DialogContent className="max-w-md border-primary/50 bg-[#1a1338] text-white">
        <DialogHeader>
          <DialogTitle className="text-center font-headline text-2xl text-amber-300">
            Gire a Roleta da Sorte!
          </DialogTitle>
          <DialogDescription className="text-center text-white/80">
            Você está a um giro de desbloquear um desconto exclusivo.
          </DialogDescription>
        </DialogHeader>

        <div className="relative my-8 flex items-center justify-center">
          {/* Pointer */}
          <div
            className="absolute -top-3 z-10 h-0 w-0"
            style={{
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderTop: '16px solid #ef4444',
            }}
          />

          <div
            className={cn(
              'relative h-56 w-56 rounded-full border-4 border-amber-300 transition-transform duration-[4000ms] ease-[cubic-bezier(.1,.6,.3,1)]',
              'shadow-[0_0_25px_rgba(255,193,77,0.5)]',
              isSpinning && 'animate-spin'
            )}
            style={{
              animationName: isSpinning ? 'spin' : 'none',
            }}
          >
            {prizes.map((prize, i) => {
              const angle = 360 / prizes.length;
              const rotation = angle * i;
              return (
                <div
                  key={i}
                  className="absolute left-1/2 top-0 h-1/2 w-1/2 origin-bottom-left"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <div
                    className={cn(
                      'flex h-full w-full items-start justify-center pt-3 text-center text-xs font-bold text-white',
                      i === WINNING_INDEX ? 'bg-green-500/80' : 'bg-purple-500/80',
                      i % 2 === 0 && 'bg-purple-700/80',
                      i === WINNING_INDEX && '!bg-green-500',
                      'skew-x-[45deg]'
                    )}
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 100%)', // Creates the triangle slice
                      transformOrigin: 'bottom left',
                      transform: 'skewX(-45deg) scale(1.01)',
                    }}
                  >
                    <span
                      className="block"
                      style={{ transform: `skewX(45deg) rotate(${angle/2}deg) translateY(-0.25rem)` }}
                    >
                      {prize.text}
                    </span>
                  </div>
                </div>
              );
            })}
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
                Parabéns! Você ganhou {prizes[WINNING_INDEX].text}!
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
        <audio
          ref={audioRef}
          src="https://firebasestorage.googleapis.com/v0/b/genkit-llm-hackathon.appspot.com/o/roulette-spin.mp3?alt=media&token=c41d6f51-2483-4a37-b952-054523e1c6d8"
          preload="auto"
        />
      </DialogContent>
    </Dialog>
  );
}
