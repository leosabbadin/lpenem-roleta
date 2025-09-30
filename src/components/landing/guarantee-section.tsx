import { Shield } from 'lucide-react';
import { SectionTitle } from './section-title';

export function GuaranteeSection() {
  return (
    <section id="garantia" className="section mx-auto max-w-7xl px-6 py-16">
      <SectionTitle>
        <div className="flex items-center gap-3">
          <Shield className="size-8 text-primary" /> Garantia Incondicional
        </div>
      </SectionTitle>
      <div className="mt-8 flex flex-col items-center gap-6 rounded-3xl bg-white/5 p-8 text-center md:flex-row md:p-12 md:text-left">
        <Shield
          strokeWidth={1.5}
          className="size-24 flex-shrink-0 text-green-400 md:size-32"
        />
        <div>
          <h3 className="font-headline text-2xl font-bold md:text-3xl">
            Risco Zero para você.
          </h3>
          <p className="mt-2 text-lg text-white/85">
            Você tem 7 dias de garantia incondicional. Se por qualquer motivo
            você não gostar do conteúdo ou achar que não é para você, basta
            pedir o reembolso e devolvemos 100% do seu investimento. Sem
            perguntas, sem burocracia.
          </p>
        </div>
      </div>
    </section>
  );
}
