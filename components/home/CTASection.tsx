'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { useSiteConfig } from '@/components/providers/SiteConfigProvider';

export const CTASection: React.FC = () => {
  const siteConfig = useSiteConfig();

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hello Luxmi Flora, I would like to inquire about event decoration.'
  )}`;

  return (
    <section className="relative py-28 bg-onyx-900 text-ivory-100 overflow-hidden">
      {/* Background Image with Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
          alt="Luxmi Flora Celebration Backdrop"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx-900 via-onyx-900/80 to-onyx-900/60" />
      </div>

      <Container className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 bg-gold-400/60" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-sans font-medium">
              LET&apos;S BEGIN
            </span>
            <span className="h-[1px] w-8 bg-gold-400/60" />
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-ivory-100 leading-tight">
            Let&apos;s Make Your<br />
            <span className="text-gold-400 font-serif italic">Celebration</span><br />
            Beautiful
          </h2>

          <p className="text-xs sm:text-sm text-ivory-200 font-sans font-light max-w-lg mx-auto leading-relaxed">
            Planning a wedding, engagement, reception, or special function? Tell us what you have in mind and let&apos;s create something beautiful together.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6e] text-white font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full flex items-center justify-center gap-2.5 shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20"
            >
              <WhatsAppIcon size={16} className="text-white" />
              <span>CHAT WITH US ON WHATSAPP →</span>
            </a>

            <a
              href={`tel:${siteConfig.phone}`}
              className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-ivory-100 border border-ivory-300/40 font-sans font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>CALL LUXMI FLORA</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
