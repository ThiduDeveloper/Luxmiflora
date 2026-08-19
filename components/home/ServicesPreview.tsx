'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { getServices } from '@/data/services';
import { ServiceItem } from '@/types';

const DEFAULT_SERVICES = [
  {
    num: '01',
    title: 'Wedding Decoration',
    desc: 'Elegant stage, entrance, floral, aisle, and venue decoration crafted for your perfect day.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '02',
    title: 'Reception Decoration',
    desc: 'Beautiful reception stages, table décor, ambient lighting, and sophisticated venue styling.',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '03',
    title: 'Engagement Decoration',
    desc: 'Sophisticated and intimate setups designed for your engagement celebration.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '04',
    title: 'Floral Decoration',
    desc: 'Fresh and artistic floral arrangements, centerpieces, arches, and large-scale installations.',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '05',
    title: 'Outdoor Events',
    desc: 'Outdoor wedding and event setups with elegant lighting, draping, and natural décor.',
    image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '06',
    title: 'Cultural & Traditional Functions',
    desc: 'Décor thoughtfully customized for traditional Sri Lankan and cultural celebrations.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
  },
];

export const ServicesPreview: React.FC = () => {
  const [servicesList, setServicesList] = useState<any[]>(DEFAULT_SERVICES);

  useEffect(() => {
    getServices().then((items) => {
      if (items && items.length > 0) {
        const mapped = items.map((srv: ServiceItem, idx: number) => ({
          num: String(idx + 1).padStart(2, '0'),
          title: srv.title,
          desc: srv.shortDescription || srv.fullDescription || '',
          image: srv.image,
        }));
        setServicesList(mapped);
      }
    });
  }, []);

  return (
    <section className="py-24 bg-ivory-100 text-onyx-900 relative">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 pb-8 border-b border-ivory-300/80">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-gold-400/60" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-600 font-sans font-bold block">
              OUR SERVICES
            </span>
            <span className="h-[1px] w-8 bg-gold-400/60" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-maroon-900 leading-tight">
            What We <span className="italic text-gold-500 font-serif font-normal">Create</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold-400/80 mx-auto mt-6" />
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {servicesList.map((srv, idx) => (
            <div
              key={idx}
              className="bg-white rounded-sm overflow-hidden shadow-md border border-ivory-300 flex flex-col hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                <Image
                  src={srv.image}
                  alt={srv.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="w-8 h-[2px] bg-gold-400 mb-3" />
                  <h3 className="font-serif text-xl text-maroon-900 font-normal mb-2 leading-tight">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-onyx-600 font-sans font-light leading-relaxed line-clamp-3">
                    {srv.desc}
                  </p>
                </div>
                <div className="pt-5 mt-auto">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-maroon-800 font-sans font-bold hover:text-gold-600 transition-colors"
                  >
                    <span>ENQUIRE NOW</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
