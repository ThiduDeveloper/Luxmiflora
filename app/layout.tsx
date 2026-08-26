import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { SiteConfigProvider } from '@/components/providers/SiteConfigProvider';
import { getSiteConfig } from '@/lib/constants';
import { constructMetadata } from '@/lib/metadata';
import './globals.css';

export const metadata = constructMetadata({ path: '/' });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteConfig = await getSiteConfig();

  // Local Business structured data (more specific than generic Florist)
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'EventPlanner',
    '@id': 'https://www.luxmiflora.com/#business',
    name: siteConfig.name,
    alternateName: 'Luxmi Flora',
    description: siteConfig.description,
    url: 'https://www.luxmiflora.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.luxmiflora.com/Logo/Luxmi%20Flora%20Logo.png',
      width: 512,
      height: 512,
    },
    image: 'https://www.luxmiflora.com/Logo/Luxmi%20Flora%20Logo.png',
    telephone: `+94${siteConfig.phone.replace(/^0/, '')}`,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No.45/8, Badulla road',
      addressLocality: 'Bandarawela',
      addressRegion: 'Uva Province',
      postalCode: '90100',
      addressCountry: 'LK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 6.8304,
      longitude: 80.9879,
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'Sri Lanka',
      },
      {
        '@type': 'City',
        name: 'Bandarawela',
      },
      {
        '@type': 'City',
        name: 'Colombo',
      },
      {
        '@type': 'City',
        name: 'Kandy',
      },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: 'LKR',
    currenciesAccepted: 'LKR',
    paymentAccepted: 'Cash, Bank Transfer',
    sameAs: [
      siteConfig.instagramUrl,
      siteConfig.facebookUrl,
      siteConfig.tiktokUrl,
    ].filter(Boolean),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Wedding & Event Decoration Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Wedding Stage Decoration',
            description: 'Elegant stage, entrance, floral, aisle, and venue decoration crafted for your perfect day.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reception Decoration',
            description: 'Beautiful reception stages, table décor, ambient lighting, and sophisticated venue styling.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Floral Arrangements',
            description: 'Fresh and artistic floral arrangements, centerpieces, arches, and large-scale installations.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Engagement Decoration',
            description: 'Sophisticated and intimate setups designed for your engagement celebration.',
          },
        },
      ],
    },
  };

  // Website structured data for sitelinks search box
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.luxmiflora.com/#website',
    name: siteConfig.name,
    alternateName: 'Luxmi Flora',
    url: 'https://www.luxmiflora.com',
    publisher: {
      '@id': 'https://www.luxmiflora.com/#business',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.luxmiflora.com/portfolio?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  // Organization schema for brand recognition
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.luxmiflora.com/#organization',
    name: siteConfig.name,
    alternateName: 'Luxmi Flora',
    url: 'https://www.luxmiflora.com',
    logo: 'https://www.luxmiflora.com/Logo/Luxmi%20Flora%20Logo.png',
    foundingDate: '2019',
    foundingLocation: {
      '@type': 'Place',
      name: 'Bandarawela, Sri Lanka',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+94${siteConfig.phone.replace(/^0/, '')}`,
      contactType: 'customer service',
      email: siteConfig.email,
      availableLanguage: ['English', 'Sinhala', 'Tamil'],
    },
    sameAs: [
      siteConfig.instagramUrl,
      siteConfig.facebookUrl,
      siteConfig.tiktokUrl,
    ].filter(Boolean),
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.sanity.io" />
      </head>
      <body
        suppressHydrationWarning
        className="bg-ivory-100 text-onyx-900 min-h-screen flex flex-col antialiased selection:bg-maroon-800 selection:text-gold-400"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SiteConfigProvider initialConfig={siteConfig}>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </SiteConfigProvider>
      </body>
    </html>
  );
}
