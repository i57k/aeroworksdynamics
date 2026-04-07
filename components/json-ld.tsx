export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aeroworks Dynamics AB',
    alternateName: 'Aeroworks Dynamics',
    url: 'https://aeroworksdynamics.se',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AWD_Logo-4WhjdTPP2cKvu8MtSqBA4cG2J5c0ti.jpeg',
    description:
      'Swedish aerospace technology company specializing in simulation software and hardware solutions for aerospace development.',
    foundingDate: '2024',
    founders: [
      {
        '@type': 'Person',
        name: 'Adnan Mohammed',
        jobTitle: 'Chief Executive Officer',
      },
      {
        '@type': 'Person',
        name: 'Vilgot Lötberg',
        jobTitle: 'Chief Technology Officer',
      },
      {
        '@type': 'Person',
        name: 'Samuel Hedin',
        jobTitle: 'Chief Operating Officer',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+46-76-181-79-79',
      email: 'adnan@aeroworksdynamics.se',
      contactType: 'sales',
    },
    sameAs: [
      'https://www.linkedin.com/company/aeroworks-dynamics',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function SoftwareProductJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'MatRocket',
    applicationCategory: 'EngineeringApplication',
    operatingSystem: 'Windows',
    description:
      'Professional aerospace simulation platform for rapid validation of vehicle models, control systems, and algorithms against integrated flight scenarios.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
    },
    author: {
      '@type': 'Organization',
      name: 'Aeroworks Dynamics AB',
    },
    featureList: [
      'Rapid validation workflow',
      'Integrated flight scenarios',
      'Geometry configuration',
      'Control system testing',
      'Algorithm validation',
      'Hardware-in-the-loop support',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function WebsiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Aeroworks Dynamics',
    url: 'https://aeroworksdynamics.se',
    description:
      'Swedish aerospace technology company specializing in simulation software and hardware solutions.',
    publisher: {
      '@type': 'Organization',
      name: 'Aeroworks Dynamics AB',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
