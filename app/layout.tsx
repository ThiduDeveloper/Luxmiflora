import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { SiteConfigProvider } from '@/components/providers/SiteConfigProvider';
import { getSiteConfig } from '@/lib/constants';
import { constructMetadata } from '@/lib/metadata';
import './globals.css';

export const metadata = constructMetadata();

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteConfig = await getSiteConfig();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Florist',
    '@id': 'https://www.luxmiflora.com/#florist',
    name: siteConfig.name,
    description: siteConfig.description,
    url: 'https://www.luxmiflora.com',
    logo: 'https://www.luxmiflora.com/Logo/Luxmi%20Flora%20Logo.png',
    image: 'https://www.luxmiflora.com/Logo/Luxmi%20Flora%20Logo.png',
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No.45/8, Badulla road',
      addressLocality: 'Bandarawela',
      addressCountry: 'LK',
    },
    priceRange: '$$$',
    sameAs: [
      siteConfig.instagramUrl,
      siteConfig.facebookUrl,
      siteConfig.tiktokUrl,
    ].filter(Boolean),
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="bg-ivory-100 text-onyx-900 min-h-screen flex flex-col antialiased selection:bg-maroon-800 selection:text-gold-400"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
