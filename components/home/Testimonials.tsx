'use client';

import React, { useEffect, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Star } from 'lucide-react';
import { getTestimonials } from '@/data/testimonials';

const DEFAULT_REVIEWS = [
  {
    stars: 5,
    quote: "Luxmi Flora exceeded every expectation. Our wedding stage was absolutely breathtaking — the florals, the draping, the lighting. Every guest was amazed. We couldn't have imagined a more beautiful day.",
    name: 'Dilanka & Nishani',
    details: 'Wedding Ceremony · Colombo',
    tag: 'LUXURY & GRAND',
    highlight: true,
  },
  {
    stars: 5,
    quote: "From the initial consultation to the day itself, the team was professional, warm, and incredibly attentive. The engagement setup felt truly personal and special. Highly recommend.",
    name: 'Priyantha Fernando',
    details: 'Engagement Celebration · Kandy',
    tag: 'ELEGANT & CLASSIC',
    highlight: false,
  },
  {
    stars: 5,
    quote: "The reception décor was beyond stunning. The table settings, the floral centrepieces, the entrance arch — every detail was perfect. Luxmi Flora understood our vision completely.",
    name: 'Kavya & Suresh',
    details: 'Reception & Dinner · Galle',
    tag: 'GARDEN ROMANCE',
    highlight: false,
  },
];

export const Testimonials: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<any[]>(DEFAULT_REVIEWS);

  useEffect(() => {
    getTestimonials().then((items) => {
      if (items && items.length > 0) {
        const mapped = items.map((t: any) => ({
          stars: t.rating || 5,
          quote: t.reviewText,
          name: t.clientName,
          details: t.role || t.weddingLocation || 'Wedding Celebration',
          tag: 'REAL WEDDING',
          highlight: false,
        }));
        setReviewsList(mapped);
      }
    });
  }, []);

  return (
    <section className="py-24 bg-ivory-100 text-onyx-900 relative">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-sans font-semibold block mb-2">
            TESTIMONIALS
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-maroon-900">
            Loved by Our Couples
          </h2>
          <div className="w-12 h-[2px] bg-gold-400 mx-auto my-4" />
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {reviewsList.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-ivory-300 hover:border-gold-500 shadow-sm hover:shadow-xl p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Top Quote Content Area */}
              <div className="flex-1 flex flex-col justify-between space-y-4 mb-6">
                {/* 5 Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                <p className="font-serif text-sm italic text-onyx-700 leading-relaxed flex-1 flex items-center">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Bottom Author Details (Aligned at identical baseline) */}
              <div className="pt-5 border-t border-ivory-200 mt-auto">
                <h3 className="font-serif text-base font-semibold text-maroon-900">
                  {rev.name}
                </h3>
                <span className="text-[10px] text-onyx-500 font-sans block mt-0.5">
                  {rev.details}
                </span>
                <span className="text-[9px] font-sans font-bold text-gold-600 tracking-wider uppercase block mt-1.5">
                  {rev.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
