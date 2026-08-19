import React from 'react';
import { InquiryForm } from '@/components/inquiry/InquiryForm';
import { Container } from '@/components/ui/Container';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Bespoke Inquiry & Quote Request | Luxmi Flora Wedding & Events',
  description: 'Request a consultation and customized floral proposal for your upcoming royal wedding celebration.',
});

export default function InquiryPage() {
  return (
    <div className="pb-20 bg-ivory-100">
      {/* Header Banner */}
      <section className="bg-maroon-950 text-ivory-100 pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-gold-400/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-400/10 via-transparent to-transparent pointer-events-none" />
        <Container className="relative z-10 text-center max-w-4xl">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-medium font-sans block mb-3">
            — Begin Your Journey —
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-ivory-100 mb-6">
            Request Bespoke <span className="italic text-gold-400">Floral Consultation</span>
          </h1>
          <p className="text-base sm:text-lg text-ivory-200 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            We accept a limited roster of high-society weddings each season. Please fill out your event details below.
          </p>
        </Container>
      </section>

      {/* Main Inquiry Form Section */}
      <section className="py-16">
        <Container className="max-w-4xl">
          <InquiryForm />
        </Container>
      </section>
    </div>
  );
}
