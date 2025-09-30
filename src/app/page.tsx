
'use client';

import { Header } from '@/components/landing/header';
import { ProblemSection } from '@/components/landing/problem-section';
import { SolutionSection } from '@/components/landing/solution-section';
import { ContentSection } from '@/components/landing/content-section';
import { BonusSection } from '@/components/landing/bonus-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { InvestmentSection } from '@/components/landing/investment-section';
import { GuaranteeSection } from '@/components/landing/guarantee-section';
import { FinalCtaSection } from '@/components/landing/final-cta-section';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <ProblemSection />
        <SolutionSection />
        <ContentSection />
        <BonusSection />
        <TestimonialsSection />
        <InvestmentSection />
        <GuaranteeSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
