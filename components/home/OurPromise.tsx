import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';

const PROMISES = [
  {
    title: 'Designed Around You',
    desc: 'Every event is styled according to your vision, theme, and personal preferences — nothing off-the-shelf.',
  },
  {
    title: 'Elegant & Creative',
    desc: 'Modern design sensibilities combined with timeless floral and decorative artistry.',
  },
  {
    title: 'Attention to Detail',
    desc: 'Every element is carefully planned to create a cohesive, immersive atmosphere for your celebration.',
  },
  {
    title: 'Quality You Can Trust',
    desc: 'High-quality décor materials and carefully curated floral elements that look stunning for longer.',
  },
  {
    title: 'Professional Service',
    desc: 'Clear communication, reliable coordination, and seamless execution from planning to event day.',
  },
];

export const OurPromise: React.FC = () => {
  return (
    <section className="py-24 bg-maroon-950 text-ivory-100 relative overflow-hidden w-full border-t border-b border-gold-400/20">
      {/* Background Decoration Image with Vignette Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
          alt="Pastel Pink Luxury Wedding Stage Decoration"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/90 to-maroon-950/85" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Heading Column */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-sans font-semibold block">
              OUR PROMISE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-ivory-100 leading-tight">
              Why Choose<br />Luxmi Flora?
            </h2>
            <div className="w-12 h-[2px] bg-gold-400 my-4" />
            <p className="text-xs sm:text-sm text-ivory-200 font-sans font-light leading-relaxed">
              We combine creativity, craftsmanship, and genuine care to create experiences that exceed expectations.
            </p>
          </div>

          {/* Right Bullet Points */}
          <div className="lg:col-span-7 space-y-6">
            {PROMISES.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="text-gold-400 text-sm mt-0.5">◆</div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-normal text-ivory-100">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ivory-300 font-sans font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
