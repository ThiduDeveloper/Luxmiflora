import React from 'react';
import Image from 'next/image';
import { getServices } from '@/data/services';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { InvestmentPackages } from '@/components/home/InvestmentPackages';
import { constructMetadata } from '@/lib/metadata';
import { Check } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Wedding Decoration Services & Packages | Luxmi Flora Sri Lanka',
  description: 'Explore our wedding decoration services in Sri Lanka — stage decoration, floral arrangements, reception styling, engagement décor, and custom event packages. Serving Bandarawela, Colombo, Kandy & all Sri Lanka.',
  path: '/services',
});

export default async function ServicesPage() {
  const servicesData = await getServices();

  return (
    <div className="pb-20 bg-ivory-100">
      {/* Header Banner */}
      <section className="bg-maroon-950 text-ivory-100 pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-gold-400/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-400/10 via-transparent to-transparent pointer-events-none" />
        <Container className="relative z-10 text-center max-w-4xl">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-medium font-sans block mb-3">
            — Bespoke Floral Disciplines —
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-ivory-100 mb-6">
            Services & <span className="italic text-gold-400">Investment Roadmap</span>
          </h1>
          <p className="text-base sm:text-lg text-ivory-200 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Comprehensive architectural floral design tailored for grand mandaps, gala dinners, and multi-day destination weddings.
          </p>
        </Container>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-20">
        <Container>
          <div className="space-y-16">
            {servicesData.map((service, idx) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-10 rounded-3xl border border-ivory-300 shadow-card-hover ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:col-span-6 relative h-72 sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-luxury border border-gold-400/20">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  {service.startingPrice && (
                    <div className="absolute top-4 left-4 bg-maroon-900/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-gold-400 text-gold-400 text-xs font-semibold uppercase tracking-wider">
                      {service.startingPrice}
                    </div>
                  )}
                </div>

                <div className="lg:col-span-6 space-y-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-gold-600 font-semibold block">
                    {service.subtitle}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-maroon-900 font-normal">
                    {service.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-onyx-700 font-light leading-relaxed">
                    {service.fullDescription}
                  </p>

                  <div className="pt-2 border-t border-ivory-300 space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-maroon-900 block">
                      Included Design Elements:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="text-xs text-onyx-700 flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button href={`/inquiry?service=${service.id}`} variant="gold" size="sm">
                      Inquire For This Service
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Investment Packages Section */}
      <InvestmentPackages />
    </div>
  );
}
