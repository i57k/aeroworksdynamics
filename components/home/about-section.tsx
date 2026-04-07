export function AboutSection() {
  return (
    <section className="border-t border-border/40 bg-background py-24 lg:py-32" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium uppercase tracking-widest text-primary">
            About Aeroworks Dynamics
          </span>
          <h2 id="about-heading" className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Pioneering Swedish Aerospace Technology</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Aeroworks Dynamics AB is an early-stage aerospace technology company
            headquartered in Sweden. We specialize in developing professional-grade simulation
            software and hardware solutions that bridge the critical gap between concept
            design and actual flight testing.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our mission is to accelerate aerospace innovation by providing
            engineers, researchers, and aerospace companies with the advanced tools they need to validate their
            ideas quickly and reliably. Our team combines deep technical expertise in aerodynamics,
            control systems, and software engineering with a shared passion for advancing the boundaries of flight.
          </p>
        </div>

      </div>
    </section>
  )
}
