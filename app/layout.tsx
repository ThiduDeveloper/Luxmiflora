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

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="bg-ivory-100 text-onyx-900 min-h-screen flex flex-col antialiased selection:bg-maroon-800 selection:text-gold-400"
      >
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
