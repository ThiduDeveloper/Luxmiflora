'use client';

import React from 'react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { useSiteConfig } from '@/components/providers/SiteConfigProvider';

export const FloatingWhatsApp: React.FC = () => {
  const siteConfig = useSiteConfig();

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hello Luxmi Flora, I would like to inquire about event decoration.'
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 group flex items-center gap-2.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 border border-white/20"
      aria-label="WhatsApp Concierge"
    >
      <div className="relative flex items-center justify-center">
        <WhatsAppIcon size={24} className="text-white" />
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>
      </div>
      <span className="hidden sm:inline text-xs font-sans font-bold uppercase tracking-widest pr-1">
        WHATSAPP
      </span>
    </a>
  );
};
