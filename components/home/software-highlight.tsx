import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function SoftwareHighlight() {
  return (
    <section className="relative overflow-hidden border-t border-border/40 bg-background py-24 lg:py-32" aria-labelledby="software-heading">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Content */}
          <div>
            <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium uppercase tracking-widest text-primary">
              Featured Product
            </span>
            <h2 id="software-heading" className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              MatRocket
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              MatRocket is your complete simulation platform for aerospace
              development. Designed to take your idea from simulation to air in
              minimum time, MatRocket provides the accurate data you need to validate
              concepts quickly and reliably.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Test your vehicle models, control systems, and guidance algorithms against
              integrated flight scenarios, with full support for hardware and
              software peripherals. MatRocket bridges the gap between CAD design and
              real-world deployment.
            </p>

            <div className="mt-8">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/software">
                  Learn More About MatRocket
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Real Screenshot */}
          <figure className="relative flex items-center justify-center">
            <div className="relative w-full overflow-hidden rounded-lg border border-border/60 bg-card shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Matrocket_SW1.png-ddZmmIUXzVT6rZTlFfb1Z9HYt7DvMO.jpeg"
                alt="MatRocket software interface showing 3D rocket model in the geometry tab with component hierarchy and parameter editing"
                width={800}
                height={600}
                className="w-full"
              />
              <figcaption className="sr-only">
                MatRocket aerospace simulation software displaying a 3D visualization of a sounding rocket with component tree navigation and detailed parameter configuration panel.
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
