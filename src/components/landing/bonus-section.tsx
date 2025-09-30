import { Gift, Target } from 'lucide-react';
import { CtaButton } from './cta-button';
import { Pill } from './pill';
import { SectionTitle } from './section-title';

export function BonusSection() {
  const bonuses = [
    '📚 Banco Aristocrata de Temas (100 prováveis para 2025)',
    '🧠 50 Frases de Filosofia e Sociologia',
    '🛠️ Guia de Propostas de Intervenção',
    '🗺️ Mapa Mental Estrutura Nota 1000',
    '📘 E-book: Erros que Zeram a Redação',
    '🔗 Banco de Conectores e Variações Linguísticas',
    '✅ Checklist de Revisão Rápida',
    '📝 Simulado Aristocrata 2025 (3 propostas inéditas)',
    '⚡ Mini-Aula Motivacional Pré-Prova',
  ];

  return (
    <section
      id="bonus"
      className="section mx-auto max-w-7xl rounded-[2rem] bg-white/5 px-6 py-16"
    >
      <SectionTitle>
        <div className="flex items-center gap-3">
          <Gift className="size-8 text-primary" />
          <h2>Bônus Exclusivos</h2>
        </div>
      </SectionTitle>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {bonuses.map((bonus, index) => (
          <li key={index}>
            <Pill className="h-full shine-effect">{bonus}</Pill>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-white/85">
        👉 Esses bônus multiplicam sua preparação e aceleram sua evolução.
      </p>
      <div className="mt-10 flex justify-center">
        <CtaButton href="https://pay.kirvano.com/a321493b-b7f4-4bc1-aee7-76ddd61e2c85">
          <Target /> Garantir meus bônus exclusivos AGORA!
        </CtaButton>
      </div>
    </section>
  );
}
