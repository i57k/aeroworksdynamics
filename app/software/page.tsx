import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { SoftwareProductJsonLd } from '@/components/json-ld'
import { ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'MatRocket - Aerospace Simulation Software',
  description:
    'MatRocket is a professional aerospace simulation tool built to take your idea from simulation to air in minimum time. Test vehicle models, control systems, and algorithms against integrated flight scenarios with hardware-in-the-loop support.',
  openGraph: {
    title: 'MatRocket - Aerospace Simulation Software | Aeroworks Dynamics',
    description:
      'Professional aerospace simulation platform for rapid validation. Test models, control systems, and algorithms against integrated flight scenarios.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Matrocket_SW1.png-ddZmmIUXzVT6rZTlFfb1Z9HYt7DvMO.jpeg',
        width: 1200,
        height: 630,
        alt: 'MatRocket software interface showing 3D rocket geometry modeling',
      },
    ],
  },
}



export default function SoftwarePage() {
  return (
    <article className="pt-16">
      <SoftwareProductJsonLd />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-14 lg:py-20">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">

            <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              MatRocket
            </h1>
            <p className="mt-2 font-[family-name:var(--font-space-grotesk)] text-xl text-primary">
              Aerospace Simulation Platform
            </p>

            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              Your complete simulation platform for aerospace development.
              Take your idea from simulation to air in minimum time with professional-grade tools
              trusted by aerospace engineers.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact">
                  Request a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview with Real Screenshot */}
      <section className="border-t border-border/40 bg-card py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Content */}
            <div>
              <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium uppercase tracking-widest text-primary">
                Product Overview
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                From Simulation to Flight in Minimum Time
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                MatRocket is built for aerospace engineers who need to validate
                ideas quickly and reliably. Our simulation platform provides the
                comprehensive tools and accurate data you need to move from concept to reality with confidence.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Test your vehicle models, control systems, and guidance algorithms against
                integrated flight scenarios, with full support for hardware and
                software peripherals. MatRocket bridges the gap between CAD design
                and real-world deployment.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  'Rapid prototyping and validation workflows',
                  'Physics-based flight simulation with real terrain',
                  'Hardware-in-the-loop testing capability',
                  'Comprehensive analytics and mission reporting',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Real Screenshot - Geometry Interface */}
            <figure className="relative flex items-center justify-center">
              <div className="relative w-full overflow-hidden rounded-lg border border-border/60 bg-background shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Matrocket_SW1.png-ddZmmIUXzVT6rZTlFfb1Z9HYt7DvMO.jpeg"
                  alt="MatRocket geometry interface showing 3D rocket model visualization with component tree hierarchy and parameter editing panel"
                  width={800}
                  height={600}
                  className="w-full"
                  priority
                />
                <figcaption className="sr-only">
                  MatRocket software interface displaying the geometry modeling tab with a 3D visualization of a sounding rocket,
                  component assembly tree, and detailed parameter configuration panel for aerospace vehicle design.
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Trajectory Visualization Section */}
      <section className="border-t border-border/40 bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Screenshot First on Desktop */}
            <figure className="relative flex items-center justify-center lg:order-1">
              <div className="relative w-full overflow-hidden rounded-lg border border-border/60 bg-background shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Matrocket_SW2.png-2M3dEcEBLYFUaHTN7oRjPi2YXHTWGy.jpeg"
                  alt="MatRocket trajectory visualization showing rocket flight path on satellite terrain map with geoplot coordinates"
                  width={800}
                  height={600}
                  className="w-full"
                />
                <figcaption className="sr-only">
                  MatRocket results interface showing a geoplot visualization of a rocket trajectory overlaid on satellite imagery,
                  displaying the complete flight path with longitude and latitude coordinates.
                </figcaption>
              </div>
            </figure>

            {/* Content */}
            <div className="lg:order-2">
              <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium uppercase tracking-widest text-primary">
                Flight Visualization
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Integrated Flight Scenario Visualization
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Visualize your complete flight scenarios with integrated geoplot capabilities.
                MatRocket renders your trajectory data over real satellite terrain imagery,
                giving you accurate geographic context for mission planning and analysis.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Switch between 2D geoplots, standard trajectory plots, and immersive 3D views
                to analyze your mission from every angle. Export visualizations for reports
                and presentations with publication-quality output.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  'Real satellite terrain integration',
                  'Multiple visualization modes (Geoplot, Plot, 3D)',
                  'Coordinate display with precision',
                  'Mission configuration import/export',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Trajectory Section */}
      <section className="border-t border-border/40 bg-card py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Content */}
            <div>
              <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium uppercase tracking-widest text-primary">
                3D Analysis
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Immersive 3D Flight Path Rendering
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Experience your flight simulations in full 3D with photorealistic terrain rendering.
                Our advanced visualization engine combines high-resolution elevation data with
                satellite imagery to create an immersive analysis environment.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Analyze trajectory characteristics, identify potential issues, and validate
                flight corridors with geographic precision. Perfect for safety analysis,
                range coordination, and mission briefings.
              </p>

              <div className="mt-8">
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href="/contact">
                    See It in Action
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* 3D Screenshot */}
            <figure className="relative flex items-center justify-center">
              <div className="relative w-full overflow-hidden rounded-lg border border-border/60 bg-background shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Matrocket_SW3.png-fIhn7XcYHoSsyCkWayKJpieIwbHsKT.jpeg"
                  alt="MatRocket 3D trajectory visualization showing rocket flight path arc over Scandinavian landscape with coastline"
                  width={600}
                  height={800}
                  className="w-full"
                />
                <figcaption className="sr-only">
                  MatRocket 3D visualization showing a complete sounding rocket trajectory arc rendered over photorealistic
                  Scandinavian terrain, demonstrating the ascent and descent phases of a suborbital flight.
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </section>



      {/* MatRocket Branding Section */}
      <section className="border-t border-border/40 bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                <span className="text-balance">Ready to Accelerate Your Aerospace Development?</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Join aerospace engineers who trust MatRocket to validate their concepts
                and bring their ideas to flight. Contact us to learn how MatRocket can
                transform your development workflow.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href="/contact">
                    Request a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-border/60 text-foreground hover:bg-secondary"
                >
                  <Link href="/team">Meet Our Team</Link>
                </Button>
              </div>
            </div>

            <figure className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Matrocket_Visual_4.png-opDkImixzx83d5mdQZlBy3t2gavLi7.jpeg"
                alt="MatRocket mascot - astronaut character with rocket symbolizing the journey from simulation to flight"
                fill
                className="object-contain"
              />
              <figcaption className="sr-only">
                MatRocket branding illustration featuring an astronaut mascot character alongside a rocket,
                representing the software&apos;s mission to help engineers go from simulation to actual flight.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </article>
  )
}
