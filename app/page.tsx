import HeroSection from '@/components/HeroSection'
import BenefitsSection from '@/components/BenefitsSection'
import DiseasePrevention from '@/components/DiseasePrevention'
import UsageGuide from '@/components/UsageGuide'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <DiseasePrevention />
      <UsageGuide />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
