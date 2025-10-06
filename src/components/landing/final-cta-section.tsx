import { Flame, Target, Check } from 'lucide-react';
import { CtaButton } from './cta-button';

export function FinalCtaSection() {
  const benefits = [
    'A redação vale 20% da sua nota final.',
    'Uma nota alta te coloca na frente de 95% dos concorrentes.',
    'O método é o caminho mais rápido para garantir seu 900+.',
  ];

  return (
    <section
      id="cta-final"
      className="section mx-auto max-w-7xl px-6 pb-20 pt-10"
    >
      <div className="rounded-3xl bg-gradient-to-br from-[#6c46ff] via-[#a25aff] to-[#ff70b7] p-6 text-center shadow-2xl shadow-primary/20 md:p-8">
        <Flame className="mx-auto size-10 text-white md:size-12" />
        <h2 className="mt-4 font-headline text-2xl font-extrabold text-white drop-shadow-lg md:text-5xl">
          Última Oportunidade!
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-white/90 md:text-lg">
          Sua vaga no método que vai hackear sua redação do ENEM está prestes a
          expirar. A hora de garantir seu 900+ é AGORA.
        </p>
        <ul className="mx-auto mt-4 flex max-w-xl flex-col items-center justify-center gap-2 text-left md:mt-6">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2">
              <Check className="mt-1 size-5 flex-shrink-0 text-white" />
              <span className="text-base text-white/90 md:text-lg">{benefit}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 md:mt-8">
          <CtaButton
            href="#investimento"
            className="px-8 py-4 text-lg md:px-10 md:py-5 md:text-xl shadow-[0_15px_40px_rgba(255,140,50,0.45)]"
          >
            <Target className="size-5 md:size-6" />
            GARANTIR MINHA VAGA
          </CtaButton>
        </div>
        <p className="mt-4 text-xs text-white/80 md:mt-6 md:text-sm">
          Acesso imediato | Risco zero | 7 dias de garantia
        </p>
      </div>
    </section>
  );
}
