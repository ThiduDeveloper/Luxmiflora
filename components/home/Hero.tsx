'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-onyx-900 text-ivory-100 overflow-hidden pt-20 w-full">
      {/* Background Image with 100% Uncompressed Crystal Clear Quality */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/Gemini_Generated_Image_3ik2l83ik2l83ik2.jpg"
          alt="Luxmi Flora Bespoke Luxury Wedding Stage Decoration"
          fill
          priority
          unoptimized
          quality={100}
          className="object-cover object-center opacity-75"
        />
        {/* Soft Vignette & Dark Overlay for Text Readability & Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-onyx-950/70 via-onyx-900/30 to-onyx-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx-950/60 via-transparent to-onyx-950/60" />
      </div>

      {/* Vertical Left Badge Banner */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center z-10 opacity-70">
        <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-gold-400 [writing-mode:vertical-lr] rotate-180">
          — LUXMI FLORA WEDDING & EVENTS —
        </span>
      </div>

      {/* Main Content */}
      <Container className="relative z-10 text-center py-16">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-10 bg-gold-400/80" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-sans font-semibold">
              WEDDINGS · FLORAL · EVENTS
            </span>
            <span className="h-[1px] w-10 bg-gold-400/80" />
          </div>

          {/* Heading */}
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal text-ivory-100 leading-[1.05] tracking-tight drop-shadow-lg">
            Where Every<br />
            Celebration<br />
            <span className="text-gold-400 font-serif italic">Blooms.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-base text-ivory-200 font-sans font-light max-w-xl mx-auto leading-relaxed pt-2 drop-shadow">
            Transforming weddings and special occasions into unforgettable celebrations with elegant floral designs and beautifully crafted event décor.
          </p>

          {/* Scroll Cue */}
          <div className="pt-12 flex flex-col items-center gap-2 opacity-80">
            <span className="text-[9px] uppercase tracking-[0.25em] text-ivory-300 font-sans font-light">
              SCROLL TO EXPLORE
            </span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-gold-400 to-transparent animate-pulse" />
          </div>
        </div>
      </Container>
    </section>
  );
};
