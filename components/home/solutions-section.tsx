import Link from 'next/link'
import { ArrowRight, Code2, Cpu } from 'lucide-react'

export function SolutionsSection() {
  return (
    <section className="border-t border-border/40 bg-card py-24 lg:py-32" aria-labelledby="solutions-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium uppercase tracking-widest text-primary">
            Our Solutions
          </span>
          <h2 id="solutions-heading" className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">Aerospace Hardware & Software Solutions</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive simulation software and hardware solutions designed for advanced aerospace development,
            testing, and validation workflows.
          </p>
        </header>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Software Card */}
          <Link
            href="/software"
            className="group relative overflow-hidden rounded-lg border border-border/60 bg-background p-8 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 lg:p-10"
          >
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                <Code2 className="h-7 w-7 text-primary" />
              </div>

              <h3 className="mt-6 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-foreground">
                Software Solutions
              </h3>


              <p className="mt-4 text-muted-foreground">
                Our flagship product MatRocket delivers rapid simulation and
                validation capabilities for aerospace engineers. Test models,
                control systems, and algorithms against integrated flight
                scenarios.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                Explore MatRocket
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Hardware Card */}
          <Link
            href="/hardware"
            className="group relative overflow-hidden rounded-lg border border-border/60 bg-background p-8 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 lg:p-10"
          >
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-secondary/50 transition-transform group-hover:scale-150" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-secondary">
                <Cpu className="h-7 w-7 text-muted-foreground" />
              </div>

              <h3 className="mt-6 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-foreground">
                Hardware Solutions
              </h3>

              <div className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground">
                Coming Soon
              </div>

              <p className="mt-4 text-muted-foreground">
                Our hardware division is under active development. We are
                building physical systems designed to work seamlessly with our
                software solutions for complete end-to-end aerospace validation.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
