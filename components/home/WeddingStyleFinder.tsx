'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';

const STYLES = [
  {
    title: 'Elegant & Classic',
    desc: 'Timeless white drapery, grand floral arches, and opulent gold details for a sophisticated ceremony.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Garden Romance',
    desc: 'Dreamy outdoor setups under the canopy of trees, trailing jasmines, and warm romantic fairylights.',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Luxury & Grand',
    desc: 'Opulent ballroom settings, cascading floral chandeliers, and majestic stages for a royal wedding affair.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Minimal & Modern',
    desc: 'Sleek geometric installations, clean tablescapes, and contemporary botanical art for the modern couple.',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Tropical',
    desc: 'Exotic palm leaves, bright orchids, and lush beachfront arrangements celebrating natural paradise.',
    image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Traditional',
    desc: 'Authentic marigold strings, jasmine draping, and cultural altars honoring heritage and sacred rituals.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
  },
];

export const WeddingStyleFinder: React.FC = () => {
  return (
    <section className="py-24 bg-ivory-100 text-onyx-900 relative">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 pb-8 border-b border-ivory-300/80">
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <span className="h-[1px] w-6 bg-gold-400/60" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-600 font-sans font-bold block">
              DISCOVER YOUR STYLE
            </span>
            <span className="h-[1px] w-6 bg-gold-400/60" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-maroon-900 leading-tight">
            What Kind of Wedding Are You <span className="italic text-gold-500 font-serif font-normal">Dreaming Of?</span>
          </h2>
          <p className="text-xs sm:text-sm text-onyx-600 font-sans font-light mt-4">
            Choose a style and we&apos;ll show you how Luxmi Flora can bring it to life.
          </p>
        </div>

        {/* 6 Style Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {STYLES.map((style, idx) => (
            <div
              key={idx}
              className="bg-white rounded-sm overflow-hidden shadow-md border border-ivory-300 flex flex-col hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                <Image
                  src={style.image}
                  alt={style.title}
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
                    {style.title}
                  </h3>
                  <p className="text-xs text-onyx-600 font-sans font-light leading-relaxed line-clamp-3">
                    {style.desc}
                  </p>
                </div>
                <div className="pt-5 mt-auto">
                  <Link
                    href={`/inquiry?style=${encodeURIComponent(style.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-maroon-800 font-sans font-bold hover:text-gold-600 transition-colors"
                  >
                    <span>REQUEST QUOTE</span>
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
