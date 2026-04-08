import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Aerospace Hardware Solutions - Coming Soon',
  description:
    'Aeroworks Dynamics is developing professional aerospace hardware solutions including processing units, test equipment, and communication systems designed to integrate with MatRocket simulation software.',
  openGraph: {
    title: 'Hardware Solutions | Aeroworks Dynamics',
    description:
      'Aerospace hardware solutions under development - designed to work seamlessly with MatRocket for complete end-to-end aerospace validation.',
  },
}

export default function HardwarePage() {
  return (
    <article className="pt-16">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-background" aria-labelledby="hardware-hero-heading">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/50 blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              In Development
            </div>

            <h1 id="hardware-hero-heading" className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Aerospace Hardware Solutions
            </h1>

            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              Our hardware division is <span className="text-primary">actively</span> developing physical systems
              designed to work seamlessly with MatRocket. Contact us to learn more about our hardware roadmap or to discuss
              potential collaboration opportunities.
            </p>

            <div className="mt-10 flex flex-row flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border/60 text-foreground hover:bg-secondary"
              >
                <Link href="/software">Explore Software</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border/60 text-foreground hover:bg-secondary"
              >
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
