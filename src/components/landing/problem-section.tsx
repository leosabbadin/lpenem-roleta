import { BookOpen, MoveRight, Target } from 'lucide-react';
import { CtaButton } from './cta-button';
import { Pill } from './pill';
import { SectionTitle } from './section-title';

export function ProblemSection() {
  const problems = [
    '😰 Travando na hora de começar a redação.',
    '🔁 Repetindo conectores fracos como “além disso”.',
    '❌ Errando em conclusões vagas.',
    '🎯 Fugindo do tema por falta de repertório.',
  ];

  return (
    <section id="problema" className="section mx-auto max-w-7xl px-6 py-16">
      <SectionTitle>
        <div className="flex items-center gap-3">
          <BookOpen className="size-8 text-primary" /> O Problema
        </div>
      </SectionTitle>
      <p className="mt-2 text-white/80">
        A cada ano, milhões de estudantes fazem o ENEM, mas:
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {problems.map((problem) => (
          <Pill key={problem} className="p-6">
            {problem}
          </Pill>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 rounded-2xl bg-red-600/90 px-6 py-4 text-center font-bold text-white shadow-lg">
        <MoveRight className="h-5 w-5" />
        Resultado: notas medianas que destroem o sonho da aprovação.
      </div>

      <div className="mt-10 flex justify-center">
        <CtaButton href="#investimento">
          <Target /> Quero parar de errar na redação hoje!
        </CtaButton>
      </div>
    </section>
  );
}
