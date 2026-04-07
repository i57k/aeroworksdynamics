import type { Metadata } from 'next'
import { Mail, Phone, User, Linkedin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description:
    'Contact Aeroworks Dynamics AB for MatRocket demos, partnership opportunities, or aerospace development inquiries. Email: adnan@aeroworksdynamics.se | Phone: +46 76 181 79 79',
  openGraph: {
    title: 'Contact Aeroworks Dynamics | Aerospace Solutions',
    description:
      'Get in touch with our team to discuss MatRocket simulation software, aerospace hardware solutions, or partnership opportunities.',
  },
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-24 lg:py-32">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
          <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute -left-20 bottom-1/4 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium uppercase tracking-widest text-primary">
              Contact Us
            </span>
            <h1 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Let&apos;s Talk Aerospace
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              Whether you&apos;re interested in our simulation tools, exploring a
              partnership, or just want to discuss aerospace innovation - we&apos;d
              love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-border/40 bg-card py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            {/* Contact Info */}
            <div>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-foreground sm:text-3xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We welcome inquiries about MatRocket, partnership opportunities,
                and discussions about how we can help accelerate your aerospace
                development.
              </p>

              <div className="mt-10 space-y-6">
                {/* Contact Person */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                    <User className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Contact Person
                    </p>
                    <p className="mt-1 font-[family-name:var(--font-space-grotesk)] text-lg font-medium text-foreground">
                      Adnan Mohammed
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                    <Mail className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:adnan@aeroworksdynamics.se"
                      className="mt-1 block font-[family-name:var(--font-space-grotesk)] text-lg font-medium text-foreground transition-colors hover:text-primary"
                    >
                      adnan@aeroworksdynamics.se
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                    <Phone className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a
                      href="tel:+46761817979"
                      className="mt-1 block font-[family-name:var(--font-space-grotesk)] text-lg font-medium text-foreground transition-colors hover:text-primary"
                    >
                      +46 76 181 79 79
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                    <Linkedin className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/company/aeroworks-dynamics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 flex items-center gap-2 font-[family-name:var(--font-space-grotesk)] text-lg font-medium text-[#0a66c2] transition-colors hover:opacity-80"
                    >
                      <Linkedin className="h-5 w-5" />
                      Aeroworks Dynamics
                    </a>
                  </div>
                </div>
              </div>

              {/* Additional info */}
              <div className="mt-12 rounded-lg border border-border/60 bg-background p-6">
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
                  Aeroworks Dynamics AB
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  We are a Swedish aerospace technology company focused on
                  developing innovative simulation software and hardware
                  solutions. We are open to partnerships, collaborations, and
                  discussions with aerospace professionals worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
