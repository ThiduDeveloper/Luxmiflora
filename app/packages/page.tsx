import React from 'react';
import { InvestmentPackages } from '@/components/home/InvestmentPackages';
import { Testimonials } from '@/components/home/Testimonials';
import { Container } from '@/components/ui/Container';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Wedding Decoration Packages & Pricing | Luxmi Flora Sri Lanka',
  description: 'View our wedding decoration packages — Essential, Signature, Luxury, and Custom Bespoke options. Affordable wedding décor packages in Sri Lanka by Luxmi Flora.',
  path: '/packages',
});

export default function PackagesPage() {
  return (
    <div className="pb-20 bg-ivory-100">
      {/* Header Banner */}
      <section className="bg-maroon-950 text-ivory-100 pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-gold-400/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-400/10 via-transparent to-transparent pointer-events-none" />
        <Container className="relative z-10 text-center max-w-4xl">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-medium font-sans block mb-3">
            — Investment Roadmap —
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-ivory-100 mb-6">
            Bespoke Decor <span className="italic text-gold-400">Packages</span>
          </h1>
          <p className="text-base sm:text-lg text-ivory-200 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Transparent investment tiers designed to bring your dream wedding, mandap architecture, and reception styling to life.
          </p>
        </Container>
      </section>

      {/* Main Investment Packages Grid */}
      <InvestmentPackages />

      {/* Loved by Our Couples Testimonials */}
      <Testimonials />
    </div>
  );
}
