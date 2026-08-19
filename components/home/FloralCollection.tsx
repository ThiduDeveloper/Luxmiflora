import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';

const FLORAL_CATEGORIES = [
  {
    title: 'BRIDAL BOUQUETS',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'CEREMONY FLOWERS',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'FLORAL ARCHES',
    image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'TABLE ARRANGEMENTS',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'CENTREPIECES',
    image: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'RECEPTION FLOWERS',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'HANGING INSTALLATIONS',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
  },
];

export const FloralCollection: React.FC = () => {
  return (
    <section className="py-24 bg-ivory-100 text-onyx-900 relative">
      <Container>
        {/* Header */}
        {/* Centered Dominant Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 pb-8 border-b border-ivory-300/80">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-gold-400/60" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-600 font-sans font-bold block">
              FLORAL COLLECTION
            </span>
            <span className="h-[1px] w-8 bg-gold-400/60" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-maroon-900 leading-tight">
            Every Flower, <span className="italic text-gold-500 font-serif font-normal">Thoughtfully Chosen</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold-400/80 mx-auto mt-6" />
        </div>

        {/* 7 Vertical Tall Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {FLORAL_CATEGORIES.map((cat, idx) => (
            <Link
              key={idx}
              href="/contact"
              className="relative h-80 rounded-sm overflow-hidden group shadow-md border border-ivory-300 flex flex-col justify-end p-4 hover:scale-[1.06] hover:-translate-y-2 hover:z-20 hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer block"
            >
              {/* Top Gold Line Effect on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx-900/90 via-onyx-900/30 to-transparent" />
              
              <div className="relative z-10 space-y-1">
                <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-ivory-100 block">
                  {cat.title}
                </span>
                <span className="inline-block text-[9px] uppercase tracking-wider text-gold-400 font-sans font-medium group-hover:text-ivory-100 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-1">
                  Enquire →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
