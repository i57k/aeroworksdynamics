import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-background">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Orange glow */}
        <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -left-20 bottom-1/4 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 py-24 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-8">
        {/* Content */}
        <div className="max-w-2xl text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Swedish Aerospace Engineering
          </div>

          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-balance">Engineering the</span>
            <br />
            <span className="text-primary">Future of Flight</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Aeroworks Dynamics AB develops advanced aerospace hardware and
            software solutions. Our flagship product, MatRocket, takes your concepts from
            simulation to air in minimum time.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/software">
                Explore MatRocket
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border/60 text-foreground hover:bg-secondary"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-12 lg:mt-0">
          <div className="relative">
            <div className="relative h-[300px] w-[350px] sm:h-[400px] sm:w-[500px] lg:h-[450px] lg:w-[600px]">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl" />
              
              {/* Main image */}
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Matrocket_Visual_2.png-vs7HyXRCslg8nEtxrn5jHa5wEAlz9W.jpeg"
                alt="MatRocket aerospace simulation platform - from concept design through hardware testing to real rocket launches"
                fill
                className="relative rounded-lg object-contain"
                priority
                sizes="(max-width: 640px) 350px, (max-width: 1024px) 500px, 600px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Scroll
          </span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-border to-transparent" />
        </div>
      </div>
    </section>
  )
}
