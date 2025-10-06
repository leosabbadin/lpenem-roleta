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
  { text: '10% OFF', color: 'bg-amber-400' },
  { text: 'Tente de Novo', color: 'bg-purple-500' },
  { text: '30% OFF', color: 'bg-amber-400' },
  { text: 'Mentoria', color: 'bg-purple-500' },
  { text: '50% OFF', color: 'bg-amber-400' },
  { text: '72% OFF', color: 'bg-green-500' }, // Winning prize
  { text: '20% OFF', color: 'bg-amber-400' },
  { text: 'E-book Grátis', color: 'bg-purple-500' },
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
      <DialogContent className="max-w-md bg-[#1a1338] border-primary/50 text-white overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline text-center text-amber-300">
            Gire a Roleta da Sorte!
          </DialogTitle>
          <DialogDescription className="text-center text-white/80">
            Você está a um giro de desbloquear um desconto exclusivo.
          </DialogDescription>
        </DialogHeader>

        <div className="relative my-8 flex items-center justify-center">
          {/* Pointer */}
          <div
            className="absolute -top-4 z-20 h-0 w-0"
            style={{
              borderLeft: '12px solid transparent',
              borderRight: '12px solid transparent',
              borderTop: '20px solid #ef4444',
            }}
          />

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
              const angle = 360 / prizes.length;
              const rotation = angle * i;
              return (
                <div
                  key={i}
                  className={cn(
                    'absolute left-0 top-0 h-full w-full origin-center',
                    '[clip-path:polygon(50%_50%,100%_0,100%_100%)]'
                  )}
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <div
                    className={cn(
                      'absolute flex h-full w-full items-center justify-center',
                      prize.color
                    )}
                    style={{ transform: `rotate(${angle / 2}deg)` }}
                  >
                    <span
                      className="block -rotate-90 text-center text-xs font-bold text-white"
                      style={{ transform: `translateY(-4.5rem) rotate(${-(angle / 2)-90}deg)`}}
                    >
                      {prize.text}
                    </span>
                  </div>
                </div>
              );
            })}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center rounded-full border-4 border-amber-400 bg-[#1a1338] text-sm font-bold shadow-inner">
               GIRAR
             </div>
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
