'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/software', label: 'Software' },
  { href: '/hardware', label: 'Hardware' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Aeroworks Dynamics - Home">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AWD_Logo-4WhjdTPP2cKvu8MtSqBA4cG2J5c0ti.jpeg"
            alt="Aeroworks Dynamics logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded object-contain"
            priority
          />
          <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold tracking-tight text-foreground">
            Aeroworks Dynamics
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'px-4 py-2 text-sm font-medium transition-colors',
                pathname === item.href
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <div className="flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'py-3 text-base font-medium transition-colors',
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
