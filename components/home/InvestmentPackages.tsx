'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { getPackages } from '@/data/services';

const DEFAULT_PACKAGES = [
  {
    name: 'Essential',
    price: 'From LKR 75,000',
    features: [
      'Ceremony stage decoration',
      'Basic floral arrangements',
      'Entrance décor',
      'Table centrepieces (up to 10)',
      'Coordination on event day',
    ],
    buttonText: 'GET STARTED →',
    isPopular: false,
  },
  {
    name: 'Signature',
    price: 'From LKR 175,000',
    features: [
      'Full venue styling',
      'Premium floral design',
      'Entrance arch + aisle',
      'Table centrepieces (up to 25)',
      'Lighting coordination',
      'Dedicated stylist',
      '2 revisions included',
    ],
    buttonText: 'GET STARTED →',
    isPopular: true,
  },
  {
    name: 'Luxury',
    price: 'From LKR 350,000',
    features: [
      'Complete event transformation',
      'Custom floral installations',
      'Reception + ceremony décor',
      'Unlimited table settings',
      'Chandelier & draping',
      'Day-of coordination team',
      'Moodboard & planning sessions',
    ],
    buttonText: 'GET STARTED →',
    isPopular: false,
  },
  {
    name: 'Custom',
    price: 'Bespoke quote',
    features: [
      'Fully custom design',
      'Multi-day events',
      'International florals',
      'Complete venue takeover',
      'Film / photography support',
      'Personal stylist assigned',
    ],
    buttonText: 'REQUEST A QUOTE →',
    isPopular: false,
  },
];

export const InvestmentPackages: React.FC = () => {
  const [packagesList, setPackagesList] = useState<any[]>(DEFAULT_PACKAGES);

  useEffect(() => {
    getPackages().then((items) => {
      if (items && items.length > 0) {
        const mapped = items.map((pkg: any) => ({
          name: pkg.name,
          price: pkg.priceRange,
          features: pkg.features,
          buttonText: 'GET STARTED →',
          isPopular: pkg.isPopular,
        }));
        setPackagesList(mapped);
      }
    });
  }, []);

  return (
    <section id="packages" className="py-24 bg-ivory-100 text-onyx-900 relative">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-sans font-semibold block mb-2">
            INVESTMENT
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-maroon-900">
            Choose Your Experience
          </h2>
          <div className="w-12 h-[2px] bg-gold-400 mx-auto my-4" />
          <p className="text-xs sm:text-sm text-onyx-600 font-sans font-light">
            Every package is a starting point. We tailor everything to your vision, venue, and requirements.
          </p>
        </div>

        {/* 4 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch">
          {packagesList.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-sm p-8 flex flex-col justify-between transition-all duration-300 relative border ${
                pkg.isPopular
                  ? 'bg-maroon-900 text-ivory-100 border-maroon-900 shadow-2xl lg:-translate-y-2'
                  : 'bg-white text-onyx-900 border-ivory-300 shadow-sm'
              }`}
            >
              {pkg.isPopular && (
                <div className="text-[9px] uppercase tracking-[0.25em] text-gold-400 font-sans font-bold block mb-2">
                  MOST POPULAR
                </div>
              )}

              <div>
                <h3 className="font-serif text-2xl font-normal mb-1">{pkg.name}</h3>
                <span className={`text-xs font-sans font-semibold block mb-6 ${pkg.isPopular ? 'text-gold-400' : 'text-maroon-900'}`}>
                  {pkg.price}
                </span>

                <ul className="space-y-3 pt-4 border-t border-ivory-300/40 text-xs font-sans font-light">
                  {pkg.features.map((feat: string, fIdx: number) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="text-gold-400">♦</span>
                      <span className={pkg.isPopular ? 'text-ivory-200' : 'text-onyx-700'}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  href="/inquiry"
                  className={`w-full py-3 px-4 text-[10px] font-sans font-bold uppercase tracking-widest block text-center rounded-sm transition-colors border ${
                    pkg.isPopular
                      ? 'bg-gold-500 hover:bg-gold-400 text-onyx-900 border-gold-500'
                      : 'bg-white hover:bg-maroon-900 hover:text-ivory-100 text-maroon-900 border-maroon-900'
                  }`}
                >
                  {pkg.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
