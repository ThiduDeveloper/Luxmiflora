'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Star, ArrowRight, Sparkles, Award, Heart, ShieldCheck } from 'lucide-react';

export const AboutPreview: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of the section relative to the viewport
  // Offset "start end" means the progress starts when the top of the section enters the bottom of the viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Calculate subtle translation values for scroll-driven parallax depth
  const yMain = useTransform(scrollYProgress, [0, 1], [30, -50]);
  const yDetail = useTransform(scrollYProgress, [0, 1], [60, -90]);
  const yFrame = useTransform(scrollYProgress, [0, 1], [15, -25]);

  return (
    <section ref={sectionRef} className="py-28 bg-ivory-100 text-onyx-900 relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-maroon-900/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Tall Interactive Overlapping Image Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-[90%] sm:w-[85%] lg:w-[100%] max-w-[500px] mx-auto lg:mx-0">
              
              {/* Back Gold Border Accent Frame */}
              <motion.div 
                style={{ y: yFrame }}
                className="absolute top-5 -right-5 w-full h-full border border-gold-400/30 rounded-sm -z-10" 
              />

              {/* Main Tall Image Card */}
              <motion.div 
                style={{ y: yMain }}
                className="relative rounded-sm overflow-hidden shadow-2xl border border-ivory-300 bg-white group/main"
              >
                <div className="w-full h-[480px] sm:h-[580px] lg:h-[680px] overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
                    alt="Luxmi Flora Stage Decor"
                    width={800}
                    height={1000}
                    className="object-cover w-full h-full group-hover/main:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-onyx-900/10 group-hover/main:bg-onyx-900/0 transition-colors duration-300 pointer-events-none" />
                </div>
              </motion.div>

              {/* Secondary Overlapping Image Card (Tablescape/Detail shot) */}
              <motion.div 
                style={{ y: yDetail }}
                className="absolute -bottom-10 -left-6 w-[48%] h-52 sm:h-64 hidden sm:block z-20"
              >
                <div className="relative w-full h-full rounded-sm overflow-hidden shadow-2xl border border-gold-400/40 bg-white group/detail hover:scale-105 transition-transform duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80"
                    alt="Floral Centerpiece Detail"
                    fill
                    className="object-cover group-hover/detail:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-onyx-900/5 pointer-events-none" />
                </div>
              </motion.div>

            </div>
          </div>

          {/* Right Column: Premium Content & Interactive Cards */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-sans font-semibold block">
                ABOUT LUXMI FLORA
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-maroon-900 leading-[1.1] tracking-tight">
                We don&apos;t just<br />
                decorate spaces.<br />
                We create <span className="italic font-serif text-gold-500 font-normal">memories.</span>
              </h2>
              <div className="w-12 h-[2px] bg-gold-400 mt-4" />
            </div>

            <p className="text-xs sm:text-sm text-onyx-700 font-sans font-light leading-relaxed max-w-xl">
              Luxmi Flora is a premier wedding and event decoration studio based in Sri Lanka. We specialize in creating personalized floral and décor experiences for weddings, receptions, engagements, and cultural functions — bringing each client&apos;s unique vision to life with artistry, attention to detail, and genuine care.
            </p>

            {/* 4 Stat Counters (2x2 Grid of Cards) */}
            <div className="grid grid-cols-2 gap-4 max-w-xl pt-2">
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-sm border border-ivory-300 hover:border-gold-400/40 hover:bg-white hover:shadow-luxury transition-all duration-300 group/stat">
                <span className="font-serif text-3xl sm:text-4xl font-semibold text-maroon-900 block group-hover/stat:text-gold-600 transition-colors duration-300">
                  200+
                </span>
                <span className="text-[9px] uppercase tracking-widest text-onyx-600 font-sans font-bold block mt-1">
                  EVENTS STYLED
                </span>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-sm border border-ivory-300 hover:border-gold-400/40 hover:bg-white hover:shadow-luxury transition-all duration-300 group/stat">
                <div className="flex items-center gap-1">
                  <span className="font-serif text-3xl sm:text-4xl font-semibold text-maroon-900 block group-hover/stat:text-gold-600 transition-colors duration-300">
                    5
                  </span>
                  <Star className="w-4 h-4 fill-maroon-900 text-maroon-900 -mt-1 group-hover/stat:fill-gold-600 group-hover/stat:text-gold-600 transition-colors duration-300" />
                </div>
                <span className="text-[9px] uppercase tracking-widest text-onyx-600 font-sans font-bold block mt-1">
                  CLIENT RATING
                </span>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-sm border border-ivory-300 hover:border-gold-400/40 hover:bg-white hover:shadow-luxury transition-all duration-300 group/stat">
                <span className="font-serif text-3xl sm:text-4xl font-semibold text-maroon-900 block group-hover/stat:text-gold-600 transition-colors duration-300">
                  100%
                </span>
                <span className="text-[9px] uppercase tracking-widest text-onyx-600 font-sans font-bold block mt-1">
                  CUSTOM DESIGNS
                </span>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-sm border border-ivory-300 hover:border-gold-400/40 hover:bg-white hover:shadow-luxury transition-all duration-300 group/stat">
                <span className="font-serif text-3xl sm:text-4xl font-semibold text-maroon-900 block group-hover/stat:text-gold-600 transition-colors duration-300">
                  5 yrs
                </span>
                <span className="text-[9px] uppercase tracking-widest text-onyx-600 font-sans font-bold block mt-1">
                  EST. SRI LANKA
                </span>
              </div>
            </div>

            {/* Interactive Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              <div className="flex gap-3.5 items-start p-3 bg-white/40 hover:bg-white/90 rounded-sm border border-transparent hover:border-ivory-300 hover:shadow-sm transition-all duration-300 group/item">
                <div className="w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-600 group/item:bg-maroon-900 group-hover/item:text-gold-400 transition-all duration-300 mt-0.5 shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-sans text-[11px] font-bold uppercase tracking-widest text-maroon-900">
                    CREATIVE DESIGNS
                  </h4>
                  <p className="text-onyx-600 font-light text-[11px] mt-0.5 leading-relaxed">
                    Bespoke concepts for every celebration
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start p-3 bg-white/40 hover:bg-white/90 rounded-sm border border-transparent hover:border-ivory-300 hover:shadow-sm transition-all duration-300 group/item">
                <div className="w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-600 group-hover/item:bg-maroon-900 group-hover/item:text-gold-400 transition-all duration-300 mt-0.5 shrink-0">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-sans text-[11px] font-bold uppercase tracking-widest text-maroon-900">
                    QUALITY DÉCOR
                  </h4>
                  <p className="text-onyx-600 font-light text-[11px] mt-0.5 leading-relaxed">
                    Premium materials, meticulous execution
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start p-3 bg-white/40 hover:bg-white/90 rounded-sm border border-transparent hover:border-ivory-300 hover:shadow-sm transition-all duration-300 group/item">
                <div className="w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-600 group-hover/item:bg-maroon-900 group-hover/item:text-gold-400 transition-all duration-300 mt-0.5 shrink-0">
                  <Heart className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-sans text-[11px] font-bold uppercase tracking-widest text-maroon-900">
                    PERSONALIZED SERVICE
                  </h4>
                  <p className="text-onyx-600 font-light text-[11px] mt-0.5 leading-relaxed">
                    Your vision, our expertise
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start p-3 bg-white/40 hover:bg-white/90 rounded-sm border border-transparent hover:border-ivory-300 hover:shadow-sm transition-all duration-300 group/item">
                <div className="w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-600 group-hover/item:bg-maroon-900 group-hover/item:text-gold-400 transition-all duration-300 mt-0.5 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-sans text-[11px] font-bold uppercase tracking-widest text-maroon-900">
                    RELIABLE EXECUTION
                  </h4>
                  <p className="text-onyx-600 font-light text-[11px] mt-0.5 leading-relaxed">
                    Seamless setup, every time
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-maroon-900 hover:bg-maroon-800 text-ivory-100 px-8 py-4 rounded-sm text-xs uppercase tracking-widest font-sans font-bold transition-all hover:translate-x-1 duration-300 shadow-md hover:shadow-lg active:scale-98"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
