import { HeroSection } from '@/components/home/hero-section'
import { AboutSection } from '@/components/home/about-section'
import { SolutionsSection } from '@/components/home/solutions-section'
import { SoftwareHighlight } from '@/components/home/software-highlight'
import { TeamPreview } from '@/components/home/team-preview'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <div className="pt-16">
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <SoftwareHighlight />
      <TeamPreview />
      <CTASection />
    </div>
  )
}
