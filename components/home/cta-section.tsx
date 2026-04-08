import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-border/40 bg-card py-24 lg:py-32" aria-labelledby="cta-heading">
      {/* Background accents */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="cta-heading" className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Ready to Accelerate Your Aerospace Development?</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Whether you&apos;re looking to validate a new aerospace concept with MatRocket, integrate our
            simulation tools into your workflow, or explore a partnership opportunity, we&apos;d love to hear from
            you. Contact our team to discuss how Aeroworks Dynamics can support your mission.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border/60 text-foreground hover:bg-secondary"
            >
              <Link href="/software">Explore MatRocket</Link>
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Contact us at{' '}
            <a
              href="mailto:contact@aeroworksdynamics.se"
              className="text-primary hover:underline"
            >
              contact@aeroworksdynamics.se
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
