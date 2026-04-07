import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { OrganizationJsonLd, WebsiteJsonLd } from '@/components/json-ld'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aeroworksdynamics.se'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Aeroworks Dynamics | Aerospace Hardware & Software Solutions',
    template: '%s | Aeroworks Dynamics',
  },
  description:
    'Aeroworks Dynamics AB is a Swedish aerospace company specializing in simulation software and hardware solutions. MatRocket takes your aerospace concepts from simulation to flight in minimum time.',
  keywords: [
    'aerospace engineering',
    'flight simulation software',
    'aerospace hardware',
    'MatRocket',
    'rocket simulation',
    'Sweden aerospace',
    'aerospace development',
    'flight testing',
    'control systems',
    'hardware-in-the-loop',
  ],
  authors: [{ name: 'Aeroworks Dynamics AB' }],
  creator: 'Aeroworks Dynamics AB',
  publisher: 'Aeroworks Dynamics AB',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Aeroworks Dynamics',
    title: 'Aeroworks Dynamics | Aerospace Hardware & Software Solutions',
    description:
      'Swedish aerospace company specializing in simulation software and hardware solutions. From simulation to flight, we accelerate your aerospace development.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Matrocket_Visual_2.png-vs7HyXRCslg8nEtxrn5jHa5wEAlz9W.jpeg',
        width: 1200,
        height: 630,
        alt: 'Aeroworks Dynamics - Aerospace simulation and hardware solutions featuring MatRocket software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aeroworks Dynamics | Aerospace Hardware & Software Solutions',
    description:
      'Swedish aerospace company specializing in simulation software and hardware solutions.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Matrocket_Visual_2.png-vs7HyXRCslg8nEtxrn5jHa5wEAlz9W.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#141414',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <OrganizationJsonLd />
        <WebsiteJsonLd />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
