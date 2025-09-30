import { TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SectionTitle } from './section-title';

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'Eu nunca passava de 600 pontos. Com o método, subi para 920. A IA me mostrou exatamente onde errava.',
      author: 'Maria Clara, 18 anos',
    },
    {
      quote:
        'Sempre travava na conclusão. O guia de intervenção me salvou. Hoje escrevo sem medo.',
      author: 'João Pedro, 17 anos',
    },
    {
      quote:
        'O banco de temas é ouro. Acertei no simulado e bati 980 na escola.',
      author: 'Ana Beatriz, 19 anos',
    },
  ];

  return (
    <section id="provas" className="section mx-auto max-w-7xl px-6 py-16">
      <SectionTitle>
        <div className="flex items-center gap-3">
          <TrendingUp className="size-8 text-primary" /> O que nossos alunos
          dizem após 15 dias
        </div>
      </SectionTitle>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <TestimonialPill as="blockquote" key={index} className="p-6">
            <p>🗣️ “{testimonial.quote}”</p>
            <footer className="mt-3 font-semibold">— {testimonial.author}</footer>
          </TestimonialPill>
        ))}
      </div>
    </section>
  );
}

// A modified Pill component to allow changing the root element
function TestimonialPill({
  children,
  className,
  as: Comp = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'blockquote';
}) {
  return (
    <Comp
      className={cn(
        'rounded-2xl p-5 text-[#101223] shadow-[0_10px_30px_rgba(17,17,17,.08)]',
        'bg-gradient-to-b from-[rgba(255,255,255,0.88)] to-[rgba(255,255,255,0.92)] [backdrop-filter:blur(6px)]',
        className
      )}
    >
      {children}
    </Comp>
  );
}
