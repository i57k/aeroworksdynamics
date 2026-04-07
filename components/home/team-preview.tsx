import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Linkedin } from 'lucide-react'

const team = [
  {
    name: 'Adnan Mohammed',
    role: 'Chief Executive Officer',
    initials: 'AM',
    linkedin: 'https://www.linkedin.com/in/adnan-mohammed-885143338/',
  },
  {
    name: 'Vilgot Lötberg',
    role: 'Chief Technology Officer',
    initials: 'VL',
    linkedin: 'https://www.linkedin.com/in/vilgot-l%C3%B6tberg-7b4902294/',
  },
  {
    name: 'Samuel Hedin',
    role: 'Chief Operating Officer',
    initials: 'SH',
    linkedin: 'https://www.linkedin.com/in/samuel-hedin-6bb87115b/',
  },
]

export function TeamPreview() {
  return (
    <section className="border-t border-border/40 bg-background py-24 lg:py-32" aria-labelledby="team-preview-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <header>
            <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium uppercase tracking-widest text-primary">
              Our Founding Team
            </span>
            <h2 id="team-preview-heading" className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              <span className="text-balance">The Engineers Behind Aeroworks Dynamics</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              A team of dedicated Swedish engineers with a shared passion for advancing
              aerospace technology and bringing innovative simulation solutions to market.
            </p>
          </header>

          <Button
            asChild
            variant="outline"
            className="border-border/60 text-foreground hover:bg-secondary"
          >
            <Link href="/team">
              Meet the Full Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative flex h-full flex-col rounded-lg border border-border/60 bg-card p-6 transition-all hover:border-primary/40"
            >
              {/* Avatar */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
                <span className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-primary">
                  {member.initials}
                </span>
              </div>

              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-4 inline-flex items-center gap-2 text-sm font-medium text-[#0a66c2] transition-colors hover:opacity-80"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
