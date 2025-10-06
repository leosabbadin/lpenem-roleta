
'use client';

import { useState, useRef, useEffect } from 'react';
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
import ReactConfetti from 'react-confetti';

type RoulettePopupProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const prizes = [
  { color: 'bg-purple-700' },
  { color: 'bg-purple-800' },
  { color: 'bg-purple-700' },
  { color: 'bg-purple-800' },
  { color: 'bg-purple-700' },
  { color: 'bg-purple-800' },
  { color: 'bg-purple-700' },
  { color: 'bg-purple-800' },
];

const WINNING_INDEX = 5; // Index of '72% OFF'
const COUNTDOWN_SECONDS = 5 * 60; // 5 minutes

export function RoulettePopup({ open, onOpenChange }: RoulettePopupProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(COUNTDOWN_SECONDS);
  const audioRef = useRef<HTMLAudioElement>(null);
  const checkoutUrl =
    'https://pay.kirvano.com/a321493b-b7f4-4bc1-aee7-76ddd61e2c85';

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const dialogContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && dialogContentRef.current) {
      const { width, height } =
        dialogContentRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, [open, showResult]); // Rerun when result shows to get dimensions

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showResult && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Optional: Handle countdown completion, e.g., close popup or show message
    }

    return () => clearInterval(timer);
  }, [showResult, timeLeft]);

  const handleSpin = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
      setShowResult(true);
      setTimeLeft(COUNTDOWN_SECONDS); // Reset timer on new spin result
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

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <Dialog open={open} onOpenChange={resetState}>
      <DialogContent
        ref={dialogContentRef}
        className="max-w-md border-primary/50 bg-[#1a1338] text-white"
      >
        {showResult && dimensions.width > 0 && (
          <ReactConfetti
            width={dimensions.width}
            height={dimensions.height}
            recycle={false}
            numberOfPieces={200}
            className='!z-50'
          />
        )}
        <DialogHeader>
          <DialogTitle className="text-center font-headline text-2xl text-amber-300">
            {showResult ? 'Desconto Desbloqueado!' : 'Sua Chance é Agora!'}
          </DialogTitle>
          <DialogDescription className="text-center text-white/80">
            {showResult
              ? 'A sorte estava do seu lado! Veja o que você ganhou:'
              : 'Clique no botão para travar seu desconto final.'}
          </DialogDescription>
        </DialogHeader>

        <div className="relative my-4 flex h-64 items-center justify-center sm:my-8">
          {!showResult ? (
            <>
              {/* Pointer */}
              <div
                className="absolute -top-4 z-10 h-0 w-0"
                style={{
                  borderLeft: '12px solid transparent',
                  borderRight: '12px solid transparent',
                  borderTop: '20px solid #ef4444',
                }}
              />
              <div
                className={cn(
                  'relative h-64 w-64 rounded-full border-4 border-amber-400 overflow-hidden',
                  isSpinning
                    ? 'animate-[spin_4s_cubic-bezier(.1,.6,.3,1)_forwards]'
                    : '',
                  'shadow-[0_0_30px_rgba(252,211,77,0.6)]'
                )}
                style={
                  isSpinning
                    ? ({
                        '--final-rotation': `${
                          360 * 10 -
                          (360 / prizes.length) * WINNING_INDEX -
                          360 / prizes.length / 2
                        }deg`,
                      } as React.CSSProperties)
                    : {}
                }
              >
                {prizes.map((prize, i) => {
                  const angle = 360 / prizes.length;
                  const rotation = angle * i;

                  return (
                    <div
                      key={i}
                      className="absolute left-0 top-0 h-full w-full"
                      style={{ transform: `rotate(${rotation}deg)` }}
                    >
                      <div
                        className={cn(
                          'absolute left-1/2 top-0 flex h-1/2 w-1/2 origin-bottom-left items-start justify-center pt-2 text-center text-xs font-bold text-white',
                          prize.color,
                          'border-r border-amber-400/50'
                        )}
                        style={{
                          clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
                          transform: 'translateX(-50%)',
                        }}
                      ></div>
                    </div>
                  );
                })}
                <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full border-4 border-amber-400 bg-[#1a1338] shadow-inner" />
              </div>
            </>
          ) : (
            <div className="relative h-64 w-64 rounded-full border-4 border-green-400 bg-green-900/20 flex flex-col items-center justify-center p-4 text-center shadow-[0_0_30px_rgba(74,222,128,0.6)]">
              <TicketPercent className="mx-auto h-12 w-12 text-green-400" />
              <p className="mt-2 text-sm font-bold text-white">
                🏆 Uau, que sorte! Você conseguiu um desconto espetacular de
                72%!
              </p>
            </div>
          )}
        </div>

        <div className="text-center">
          {!showResult ? (
            <>
              <p className="font-bold">
                Preço Original:{' '}
                <span className="line-through">R$ 89,90</span>
              </p>
              <Button
                onClick={handleSpin}
                disabled={isSpinning}
                className="cta-pulse mt-4 bg-green-500 text-lg font-bold text-white hover:bg-green-600"
              >
                {isSpinning && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Girar para ganhar!
              </Button>
            </>
          ) : (
            <div className="animate-in fade-in-50 duration-500 text-center">
              <div className="mb-2 rounded-md border border-red-500/50 bg-red-500/20 px-2 py-1 text-center font-semibold text-white">
                Sua oferta expira em:{' '}
                <span className="font-mono tracking-widest">
                  {String(minutes).padStart(2, '0')}:
                  {String(seconds).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-2 text-sm">
                De <span className="line-through">R$ 89,90</span> por apenas
              </p>
              <p className="font-headline text-3xl font-extrabold text-amber-300 sm:text-4xl">
                R$ 24,99
              </p>
              <CtaButton
                href={checkoutUrl}
                className="mt-4 px-6 py-3 text-base"
              >
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
