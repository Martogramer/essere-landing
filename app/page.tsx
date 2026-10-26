import { SiteHeader } from '@/components/site-header';
import { HeroSection } from '@/components/hero-section';
import { PropuestaSection } from '@/components/propuesta-section';
import { DisciplinasSection } from '@/components/disciplinas-section';
import { CtaSection } from '@/components/cta-section';
import { SiteFooter } from '@/components/site-footer';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <PropuestaSection />
        <DisciplinasSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
