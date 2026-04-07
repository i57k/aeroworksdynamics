import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/software', label: 'Software' },
  { href: '/hardware', label: 'Hardware' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2" aria-label="Aeroworks Dynamics - Home">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AWD_Logo-4WhjdTPP2cKvu8MtSqBA4cG2J5c0ti.jpeg"
                alt="Aeroworks Dynamics logo"
                width={36}
                height={36}
                className="h-9 w-9 rounded object-contain"
              />
              <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold tracking-tight text-foreground">
                Aeroworks Dynamics
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Aeroworks Dynamics AB specializes in aerospace hardware and
              software solutions. From simulation to flight, we accelerate
              your aerospace development.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:adnan@aeroworksdynamics.se"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  adnan@aeroworksdynamics.se
                </a>
              </li>
              <li>
                <a
                  href="tel:+46761817979"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  +46 76 181 79 79
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Aeroworks Dynamics AB. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/contact"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
