import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Linkedin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Team - Meet the Aerospace Engineers',
  description:
    'Meet the founding team of Aeroworks Dynamics AB - Adnan Mohammed (CEO), Vilgot Lötberg (CTO), and Samuel Hedin (COO). Dedicated Swedish engineers with expertise in aerospace simulation and hardware development.',
  openGraph: {
    title: 'Our Team | Aeroworks Dynamics',
    description:
      'Meet the founding engineers behind Aeroworks Dynamics - Swedish aerospace innovators building the future of flight simulation.',
  },
}

const team = [
  {
    name: 'Adnan Mohammed',
    role: 'Chief Executive Officer',
    initials: 'AM',
    linkedin: 'https://www.linkedin.com/in/adnan-mohammed-885143338/',
    description:
      'Leading Aeroworks Dynamics with a vision to transform aerospace development through innovative software and hardware solutions.',
  },
  {
    name: 'Vilgot Lötberg',
    role: 'Chief Technology Officer',
    initials: 'VL',
    linkedin: 'https://www.linkedin.com/in/vilgot-l%C3%B6tberg-7b4902294/',
    description:
      'Driving technical innovation and leading the development of MatRocket and our core technology stack.',
  },
  {
    name: 'Samuel Hedin',
    role: 'Chief Operating Officer',
    initials: 'SH',
    linkedin: 'https://www.linkedin.com/in/samuel-hedin-6bb87115b/',
    description:
      'Ensuring operational excellence and building the infrastructure to scale our aerospace solutions.',
  },
]

export default function TeamPage() {
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
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium uppercase tracking-widest text-primary">
              Our Team
            </span>
            <h1 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              The Engineers Behind Aeroworks
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              A team of dedicated engineers with a shared passion for advancing
              aerospace technology and pushing the boundaries of flight.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="border-t border-border/40 bg-card py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="group relative flex h-full flex-col rounded-lg border border-border/60 bg-background p-8 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Avatar */}
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-secondary/80">
                  <span className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-primary">
                    {member.initials}
                  </span>
                </div>

                <h2 className="mt-6 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-foreground">
                  {member.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-primary">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {member.description}
                </p>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-medium text-[#0a66c2] transition-colors hover:opacity-80"
                >
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t border-border/40 bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium uppercase tracking-widest text-primary">
              Our Values
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Drives Us
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Technical Excellence',
                description:
                  'We hold ourselves to the highest engineering standards. Every solution we build is designed with precision and care.',
              },
              {
                title: 'Innovation First',
                description:
                  'We push boundaries and challenge conventions. Our goal is to create tools that redefine what&apos;s possible in aerospace.',
              },
              {
                title: 'Collaboration',
                description:
                  'We believe in the power of working together - with our team, our customers, and the broader aerospace community.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-lg border border-border/60 bg-card p-6"
              >
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="border-t border-border/40 bg-card py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              <span className="text-balance">Join Our Mission</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We&apos;re always looking for talented engineers who share our passion
              for aerospace innovation. If you&apos;re interested in shaping the
              future of flight, we&apos;d love to hear from you.
            </p>

            <div className="mt-10">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
