'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PortfolioItem } from '@/types';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ImageLightbox } from '@/components/portfolio/ImageLightbox';
import { MapPin, Calendar, CheckCircle2, ArrowLeft, Quote, Sparkles } from 'lucide-react';

interface PortfolioDetailClientProps {
  item: PortfolioItem;
}

export const PortfolioDetailClient: React.FC<PortfolioDetailClientProps> = ({ item }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="pb-20 bg-ivory-100">
      {/* Header Banner */}
      <section className="bg-maroon-950 text-ivory-100 pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-gold-400/20 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="mb-6">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-400 hover:text-ivory-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Real Weddings Gallery</span>
            </Link>
          </div>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{item.categoryLabel}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-normal text-ivory-100 leading-tight">
              {item.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs text-ivory-300 font-sans pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span>{item.venue}, {item.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gold-400" />
                <span>{item.seasonYear}</span>
              </div>
              <div className="flex items-center gap-2 text-gold-400 font-semibold uppercase">
                <span>Couple: {item.couple}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content & Gallery */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Story & Details */}
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-ivory-300 shadow-sm space-y-4">
                <h2 className="font-serif text-2xl text-maroon-900 font-semibold">
                  The Design Narrative
                </h2>
                <p className="text-sm text-onyx-700 font-sans font-light leading-relaxed">
                  {item.story}
                </p>
              </div>

              {/* Highlights */}
              <div className="bg-white p-8 rounded-3xl border border-ivory-300 shadow-sm space-y-4">
                <h3 className="font-serif text-xl text-maroon-900 font-semibold">
                  Architectural & Floral Highlights
                </h3>
                <div className="space-y-3">
                  {item.keyHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-onyx-800">
                      <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Quote */}
              {item.clientQuote && (
                <div className="bg-maroon-900 text-ivory-100 p-8 rounded-3xl border border-gold-400/30 shadow-2xl relative">
                  <Quote className="absolute top-4 right-6 w-12 h-12 text-gold-400/10 pointer-events-none" />
                  <p className="font-serif text-lg italic leading-relaxed text-ivory-100 mb-4">
                    &ldquo;{item.clientQuote}&rdquo;
                  </p>
                  <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold block">
                    — {item.couple}
                  </span>
                </div>
              )}
            </div>

            {/* Sidebar Photo Gallery Grid */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-serif text-2xl text-maroon-900 font-normal">
                Gallery Photos (Click to Enlarge)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {item.galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => openLightbox(idx)}
                    className="relative h-48 rounded-2xl overflow-hidden border border-ivory-300 cursor-pointer group shadow-sm"
                  >
                    <Image
                      src={img}
                      alt={`Gallery Photo ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-onyx-900/20 group-hover:bg-transparent transition-colors" />
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button href="/inquiry" variant="gold" size="lg" className="w-full">
                  Recreate This Vibe For My Wedding
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Lightbox Modal */}
      <ImageLightbox
        images={item.galleryImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev === 0 ? item.galleryImages.length - 1 : prev - 1))}
        onNext={() => setLightboxIndex((prev) => (prev === item.galleryImages.length - 1 ? 0 : prev + 1))}
      />
    </div>
  );
};
