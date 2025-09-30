import { Target, Trophy } from 'lucide-react';
import { CtaButton } from './cta-button';
import { SectionTitle } from './section-title';

export function ContentSection() {
  const chapters = [
    {
      title: 'Capítulo 1 – Fundamentos da Redação Nota 1000',
      description:
        'Domine as bases essenciais para construir uma redação impecável, desde a estrutura até o repertório.',
      gradient: 'from-[#7a35ff] to-[#b056ff]',
    },
    {
      title: 'Capítulo 2 – Filosofia e História como Arsenal',
      description:
        'Aprenda a usar repertório de filosofia e história para dar peso e autoridade aos seus argumentos.',
      gradient: 'from-[#1160ff] to-[#1a8cff]',
    },
    {
      title: 'Capítulo 3 – Estrutura de Argumentos Irresistíveis',
      description:
        'Construa parágrafos que são verdadeiras máquinas de pontuação, seguindo uma fórmula clara e eficaz.',
      gradient: 'from-[#0ea667] to-[#0f7f54]',
    },
    {
      title: 'Capítulo 4 – Temas Prováveis do ENEM 2025',
      description:
        'Antecipe os temas mais quentes para o ENEM 2025 e saiba como adaptar seu repertório para qualquer desafio.',
      gradient: 'from-[#e12c2c] to-[#c71f26]',
    },
    {
      title: 'Capítulo 5 – Treino Intensivo de Conclusões',
      description:
        'Aprenda a fórmula para criar propostas de intervenção perfeitas e garanta a nota máxima na Competência 5.',
      gradient: 'from-[#ff9a1f] to-[#ff6f00]',
    },
    {
      title: 'Capítulo 6 – Treino Intensivo com Temas Simulados',
      description:
        'Teste suas habilidades com temas simulados no estilo do ENEM e prepare-se para o dia da prova.',
      gradient: 'from-[#ff5f8a] to-[#ff3d6b]',
    },
    {
      title: 'Capítulo 7 – Redações Comentadas: do Ruim ao Nota 1000',
      description:
        'Analise exemplos de redações, da nota zero à nota máxima, e entenda na prática o que fazer e o que não fazer.',
      gradient: 'from-[#8b5cf6] to-[#6d28d9]',
    },
    {
      title: 'Capítulo 8 – Estratégias de Tempo e Revisão',
      description:
        'Aprenda a gerenciar seu tempo de prova e a fazer uma revisão final que garante pontos preciosos.',
      gradient: 'from-[#00a3a3] to-[#008a8a]',
    },
    {
      title: 'Capítulo 9 – Banco Aristocrata de Conectores',
      description:
        'Domine a arte da coesão com um arsenal de conectores e variações linguísticas para enriquecer seu texto.',
      gradient: 'from-[#ff3d6b] to-[#e62a53]',
    },
  ];

  return (
    <section id="conteudo" className="section mx-auto max-w-7xl px-6 py-16">
      <SectionTitle>
        <div className="flex items-center gap-3">
          <Trophy className="size-8 text-primary" />
          <h2>
            O que você vai receber{' '}
            <span className="text-base text-white/70 md:text-lg">
              (Conteúdo Principal)
            </span>
          </h2>
        </div>
      </SectionTitle>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {chapters.map((chapter) => (
          <div
            key={chapter.title}
            className={`shine-effect flex flex-col rounded-2xl bg-gradient-to-b p-6 text-white shadow-lg ${chapter.gradient}`}
          >
            <h3 className="font-bold">{chapter.title}</h3>
            <p className="mt-2 flex-1 text-white/90">{chapter.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <CtaButton href="https://pay.kirvano.com/a321493b-b7f4-4bc1-aee7-76ddd61e2c85">
          <Target /> Desbloquear todo o conteúdo já!
        </CtaButton>
      </div>
    </section>
  );
}
