import { SiteHeader } from '@/components/landing/site-header'
import { Hero } from '@/components/landing/hero'
import { ProblemSection } from '@/components/landing/problem-section'
import { OriginSection } from '@/components/landing/origin-section'
import { ManagementSection } from '@/components/landing/management-section'
import { AutomationSection } from '@/components/landing/automation-section'
import { AdaptabilitySection } from '@/components/landing/adaptability-section'
import { CompleteSolutionSection } from '@/components/landing/complete-solution-section'
import { SupportSection } from '@/components/landing/support-section'
import { ScalabilitySection } from '@/components/landing/scalability-section'
import { DifferenceSection } from '@/components/landing/difference-section'
import { HowToStartSection } from '@/components/landing/how-to-start-section'
import { UseCasesSection } from '@/components/landing/use-cases-section'
import { TrustSection } from '@/components/landing/trust-section'
import { ContactSection } from '@/components/landing/contact-section'
import { SiteFooter } from '@/components/landing/site-footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TuApp',
  description: 'Software de gestión, automatización, equipamiento, instalación y soporte técnico para negocios.',
  areaServed: 'AR',
}

export default function Page() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-white"
      >
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <ProblemSection />
        <OriginSection />
        <ManagementSection />
        <AutomationSection />
        <AdaptabilitySection />
        <CompleteSolutionSection />
        <SupportSection />
        <ScalabilitySection />
        <DifferenceSection />
        <HowToStartSection />
        <UseCasesSection />
        <TrustSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
