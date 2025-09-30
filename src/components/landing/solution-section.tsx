
'use client';

import { Rocket, Target, PlayCircle } from 'lucide-react';
import { CtaButton } from './cta-button';
import { Pill } from './pill';
import { SectionTitle } from './section-title';
import { useState } from 'react';
import Image from 'next/image';

export function SolutionSection() {
  const [showVideo, setShowVideo] = useState(false);
  const solutions = [
    '🤖 <b>Correção imediata com IA personalizada</b> → aprende com o seu estilo e corrige cada vez melhor.',
    '📐 <b>Estrutura nota 1000 pronta</b> → introdução, desenvolvimento e conclusão adaptáveis a qualquer tema.',
    '🏛️ <b>Repertório de peso</b> → frases de filósofos, sociólogos e autores para aplicar em qualquer contexto.',
    '🔗 <b>Banco de conectores e variações linguísticas</b> → texto mais sofisticado e fluido.',
    '✅ <b>Checklist de revisão rápida</b> → revisão final em 5 minutos antes de entregar.',
  ];
  const videoCoverUrl = 'https://raw.githubusercontent.com/leosabbadin/imagem/541e63ddd522ef921529cb43dc4a2eec80f6655b/Sem%20nome%20(1080%20x%201920%20px)%20(4)%20(1)_11zon.webp';

  return (
    <section
      id="solucao"
      className="section mx-auto max-w-7xl rounded-[2rem] bg-white/5 px-6 py-16"
    >
      <SectionTitle>
        <div className="flex items-center gap-3">
          <Rocket className="size-8 text-primary" /> A Solução – O Método
          Aristocrata
        </div>
      </SectionTitle>

      <p className="mt-8 text-white/85">
        Com o Hackeando a Redação do ENEM, você terá:
      </p>

      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        <div className="grid flex-1 gap-4 order-2 lg:order-1">
          {solutions.map((solution, index) => (
            <Pill key={index} className="p-6 shine-effect">
              <span dangerouslySetInnerHTML={{ __html: solution }} />
            </Pill>
          ))}
        </div>

        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-white/10 ring-1 ring-inset ring-white/10 order-1 lg:order-2">
          <div className="aspect-[9/16] relative">
            {!showVideo && (
              <div
                className="absolute inset-0 cursor-pointer"
                onClick={() => setShowVideo(true)}
              >
                <Image
                  src={videoCoverUrl}
                  alt="Capa do vídeo de apresentação"
                  fill
                  style={{ objectFit: 'cover' }}
                  data-ai-hint="video cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <PlayCircle className="size-20 text-white/80" />
                </div>
              </div>
            )}
            {showVideo && (
              <video
                className="h-full w-full"
                src="https://github.com/leosabbadin/imagem/raw/e5113b9b29b236656e1808e0cbadab56860b46c6/lplp.mp4"
                autoPlay
                controls
                loop
                muted
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
            )}
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <CtaButton href="https://pay.kirvano.com/a321493b-b7f4-4bc1-aee7-76ddd61e2c85">
          <Target /> Quero minha Redação Nota 1000 agora
        </CtaButton>
      </div>
    </section>
  );
}

