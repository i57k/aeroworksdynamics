import { Rocket, Zap, Layers, FlaskConical } from 'lucide-react'

const reasons = [
  {
    icon: Rocket,
    title: 'Aerospace-Focused Engineering',
    description:
      'Every solution we build is designed specifically for aerospace applications. No compromises, no generic tools.',
  },
  {
    icon: Zap,
    title: 'Fast Validation Workflows',
    description:
      'Get from concept to validated prototype faster. Our tools are built for speed without sacrificing accuracy.',
  },
  {
    icon: Layers,
    title: 'Hardware & Software Integration',
    description:
      'Seamless integration between simulation software and physical hardware for complete system validation.',
  },
  {
    icon: FlaskConical,
    title: 'Advanced Experimentation',
    description:
      'Built for engineers who push boundaries. Our platform supports complex, multi-variable testing scenarios.',
  },
]

export function WhyAeroworksSection() {
  return (
    <section className="border-t border-border/40 bg-card py-24 lg:py-32" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium uppercase tracking-widest text-primary">
            Why Choose Aeroworks Dynamics
          </span>
          <h2 id="why-heading" className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">Built for Aerospace Innovation</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We understand the unique challenges of aerospace development. Our
            simulation and hardware solutions are designed by experienced engineers, for engineers
            who demand precision and reliability.
          </p>
        </header>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group relative rounded-lg border border-border/60 bg-background p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Number */}
              <span className="absolute right-4 top-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-border/60">
                0{index + 1}
              </span>

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-primary/10">
                  <reason.icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>

                <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
                  {reason.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
