'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

const STEPS = [
  {
    num: '01',
    stageLabel: 'STAGE 01',
    title: 'Consultation',
    shortTitle: 'CONSULTATION',
    desc: 'We meet to understand your vision, preferences, budget, and event details. Every great wedding starts with a real conversation.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
  },
  {
    num: '02',
    stageLabel: 'STAGE 02',
    title: 'Concept & Moodboard',
    shortTitle: 'CONCEPT',
    desc: 'Our design atelier curates custom moodboards, color palettes, spatial layouts, and 3D floral visual concepts for your review.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80',
  },
  {
    num: '03',
    stageLabel: 'STAGE 03',
    title: 'Floral Design Curation',
    shortTitle: 'FLORAL DESIGN',
    desc: 'Selecting premium imported blooms, structural mandap architecture, entrance arches, and table centerpiece details.',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=80',
  },
  {
    num: '04',
    stageLabel: 'STAGE 04',
    title: 'Décor & Rigging Planning',
    shortTitle: 'DÉCOR PLANNING',
    desc: 'Engineering structural rigging, ambient warm lighting, candle placements, and logistical timelines with your venue.',
    image: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042?auto=format&fit=crop&w=1000&q=80',
  },
  {
    num: '05',
    stageLabel: 'STAGE 05',
    title: 'Overnight Installation',
    shortTitle: 'INSTALLATION',
    desc: 'Our team of master florists and riggers transforms the venue overnight, ensuring fresh bloom integrity for your ceremony.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
  },
  {
    num: '06',
    stageLabel: 'STAGE 06',
    title: 'Your Royal Celebration',
    shortTitle: 'YOUR CELEBRATION',
    desc: 'On-site floral directors maintain fresh misting, ritual touchups, and effortless elegance so you can celebrate worry-free.',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=80',
  },
];

export const WeddingJourney: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section className="py-24 bg-ivory-100 text-onyx-900 relative">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-sans font-semibold block mb-2">
            YOUR WEDDING JOURNEY
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-maroon-900">
            You Dream It. We Decorate It.
          </h2>
          <div className="w-12 h-[2px] bg-gold-400 mx-auto my-4" />
          <p className="text-xs sm:text-sm text-onyx-600 font-sans font-light">
            Click any stage to learn more about our process.
          </p>
        </div>

        {/* 6 Step Buttons with Connecting Gold Line */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-6 left-12 right-12 h-[1px] border-t border-dashed border-gold-400/70 z-0" />

          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 relative z-10">
            {STEPS.map((step, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-3 sm:p-4 rounded-sm border transition-all text-center flex flex-col items-center gap-2 ${
                    isActive
                      ? 'bg-white text-maroon-900 border-gold-400 border-t-2 shadow-md translate-y-[-2px]'
                      : 'bg-white/70 text-onyx-600 border-ivory-300 hover:border-gold-400'
                  }`}
                >
                  <div
                    className={`w-8 h-8 flex items-center justify-center font-serif text-xs font-bold rounded-xs ${
                      isActive
                        ? 'bg-maroon-900 text-ivory-100'
                        : 'border border-ivory-300 text-onyx-500'
                    }`}
                  >
                    {step.num}
                  </div>
                  <span className={`text-[10px] uppercase font-sans tracking-wider leading-tight ${isActive ? 'font-bold text-maroon-900' : 'font-medium text-onyx-600'}`}>
                    {step.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Detail Card - Styled matching Image 2 */}
          <div className="mt-10 bg-[#FAF7F2] rounded-sm border-t-2 border-gold-400 border-x border-b border-ivory-300/80 shadow-lg p-6 sm:p-10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Stage Info & CTA */}
              <div className="lg:col-span-6 space-y-4">
                <span className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-sans font-bold block">
                  {STEPS[activeIdx].stageLabel}
                </span>
                
                <h3 className="font-serif text-3xl sm:text-4xl text-maroon-900 font-normal leading-tight">
                  {STEPS[activeIdx].title}
                </h3>
                
                <div className="w-10 h-[2px] bg-gold-400/80 my-3" />
                
                <p className="text-xs sm:text-sm text-onyx-700 font-sans font-light leading-relaxed max-w-lg">
                  {STEPS[activeIdx].desc}
                </p>
                
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 bg-maroon-900 hover:bg-maroon-800 text-ivory-100 px-6 py-3.5 rounded-sm text-xs font-sans font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                  >
                    <WhatsAppIcon size={14} className="text-gold-400" />
                    <span>START THIS JOURNEY →</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Stage Image */}
              <div className="lg:col-span-6 relative h-64 sm:h-80 w-full rounded-sm overflow-hidden shadow-md border border-ivory-300">
                <Image
                  src={STEPS[activeIdx].image}
                  alt={STEPS[activeIdx].title}
                  fill
                  className="object-cover transition-all duration-500"
                />
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
