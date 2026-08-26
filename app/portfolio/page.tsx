import React from 'react';
import { FeaturedWeddings } from '@/components/home/FeaturedWeddings';
import { Container } from '@/components/ui/Container';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Wedding Decoration Gallery & Portfolio | Luxmi Flora Sri Lanka',
  description: 'Browse our real wedding decoration portfolio — stunning stage designs, floral arrangements, reception décor, and venue transformations across Sri Lanka by Luxmi Flora.',
  path: '/portfolio',
});

export default function PortfolioPage() {
  return (
    <div className="pb-20 bg-ivory-100">
      {/* Header Banner */}
      <section className="bg-maroon-950 text-ivory-100 pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-gold-400/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-400/10 via-transparent to-transparent pointer-events-none" />
        <Container className="relative z-10 text-center max-w-4xl">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-medium font-sans block mb-3">
            — Real Wedding Archives —
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-ivory-100 mb-6">
            Celebrated Wedding <span className="italic text-gold-400">Masterpieces</span>
          </h1>
          <p className="text-base sm:text-lg text-ivory-200 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Step inside our archive of palace mandaps, seaside altars, and gala dinner transformations created for our beloved couples.
          </p>
        </Container>
      </section>

      {/* Filterable Portfolio Grid Component */}
      <FeaturedWeddings isHomePage={false} />
    </div>
  );
}
