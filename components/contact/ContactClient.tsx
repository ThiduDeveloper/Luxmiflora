'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { useSiteConfig } from '@/components/providers/SiteConfigProvider';
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { TikTokIcon } from '@/components/ui/TikTokIcon';

export const ContactClient: React.FC = () => {
  const siteConfig = useSiteConfig();

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hello Luxmi Flora Wedding & Events, I would like to inquire about event decoration.'
  )}`;

  return (
    <div className="pb-24 bg-ivory-100 relative overflow-hidden">
      {/* Header Banner */}
      <section className="bg-maroon-950 text-ivory-100 pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-gold-400/20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-400/10 via-transparent to-transparent pointer-events-none" />
        <Container className="relative z-10 max-w-4xl">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-medium font-sans block mb-3">
            — ROYAL ATELIER CONCIERGE —
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-ivory-100 mb-6 leading-tight">
            Connect With Our <span className="italic text-gold-400">Floral Atelier</span>
          </h1>
          <p className="text-base sm:text-lg text-ivory-200 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Whether planning a magnificent palace wedding, grand mandap architecture, or luxury reception, our master floral designers are available to craft your bespoke celebration.
          </p>
        </Container>
      </section>

      {/* Main Section: 2-Column Luxury Layout */}
      <section className="py-16 sm:py-20 relative z-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start max-w-6xl mx-auto">
            {/* Left Column: Form Card */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-[32px] border border-ivory-300 shadow-[0_10px_35px_rgba(0,0,0,0.05)] relative">
              <div className="mb-8">
                <h2 className="font-serif text-3xl sm:text-4xl text-maroon-900 font-normal mb-2">
                  Send Us a Message
                </h2>
                <p className="text-xs sm:text-sm text-onyx-600 font-sans font-light">
                  Please fill in your details below & we will respond to you shortly.
                </p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[11px] font-sans font-medium text-onyx-800 block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-ivory-100/40 border border-maroon-900/20 focus:border-maroon-900 focus:bg-white text-xs text-onyx-900 outline-none transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-sans font-medium text-onyx-800 block mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-ivory-100/40 border border-maroon-900/20 focus:border-maroon-900 focus:bg-white text-xs text-onyx-900 outline-none transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[11px] font-sans font-medium text-onyx-800 block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-ivory-100/40 border border-maroon-900/20 focus:border-maroon-900 focus:bg-white text-xs text-onyx-900 outline-none transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-sans font-medium text-onyx-800 block mb-1.5">
                      Event Type
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-ivory-100/40 border border-maroon-900/20 focus:border-maroon-900 focus:bg-white text-xs text-onyx-900 outline-none transition-all cursor-pointer font-sans"
                    >
                      <option value="wedding">Wedding Decoration & Mandap</option>
                      <option value="reception">Gala Reception</option>
                      <option value="engagement">Engagement Celebration</option>
                      <option value="haldi">Haldi & Mehendi Lounge</option>
                      <option value="other">Destination Wedding / Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-sans font-medium text-onyx-800 block mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your message or event details here..."
                    className="w-full px-4 py-3 rounded-xl bg-ivory-100/40 border border-maroon-900/20 focus:border-maroon-900 focus:bg-white text-xs text-onyx-900 outline-none transition-all font-sans resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-maroon-900 hover:bg-maroon-950 text-ivory-100 py-3.5 px-6 rounded-xl font-sans font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 border border-gold-400/40 cursor-pointer active:scale-95"
                  >
                    <Send className="w-4 h-4 text-gold-400" />
                    <span>SEND MESSAGE</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Direct Info Card & WhatsApp Card */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Contact Information Card */}
              <div className="bg-white p-8 sm:p-10 rounded-[32px] border border-ivory-300 shadow-[0_10px_35px_rgba(0,0,0,0.05)] space-y-6 relative">
                <h3 className="font-serif text-2xl text-maroon-900 font-normal border-b border-ivory-200 pb-4">
                  Direct Contact Information
                </h3>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-maroon-950 text-gold-400 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-onyx-500 block">ADDRESS</span>
                      <p className="text-xs text-onyx-900 font-sans font-medium mt-1 leading-relaxed">{siteConfig.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-maroon-950 text-gold-400 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-onyx-500 block">PHONE</span>
                      <a href={`tel:${siteConfig.phone}`} className="text-xs text-onyx-900 font-sans font-semibold hover:text-gold-600 mt-1 block">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-maroon-950 text-gold-400 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-onyx-500 block">EMAIL</span>
                      <a href={`mailto:${siteConfig.email}`} className="text-xs text-onyx-900 font-sans font-semibold hover:text-gold-600 mt-1 block">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-maroon-950 text-gold-400 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-onyx-500 block">WORKING HOURS</span>
                      <p className="text-xs text-onyx-900 font-sans font-medium mt-1">{siteConfig.workingHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Chat Card */}
              <div className="bg-white p-8 sm:p-10 rounded-[32px] border border-ivory-300 shadow-[0_10px_35px_rgba(0,0,0,0.05)] space-y-4 relative">
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl text-maroon-900 font-normal">
                    Quick WhatsApp Chat
                  </h3>
                  <p className="text-xs text-onyx-600 font-sans font-light leading-relaxed">
                    Have a quick question or need faster pricing details? Send us a message on WhatsApp.
                  </p>

                  <div className="pt-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6e] text-white px-7 py-3.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 w-full"
                    >
                      <WhatsAppIcon size={18} />
                      <span>CHAT ON WHATSAPP</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels Bar */}
              <div className="bg-white p-6 rounded-[24px] border border-ivory-300 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs font-sans font-semibold text-maroon-900 uppercase tracking-wider">Follow Our Work:</span>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-ivory-200 text-xs text-maroon-900 font-sans font-medium hover:bg-maroon-900 hover:text-ivory-100 transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-gold-600" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={siteConfig.facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-ivory-200 text-xs text-maroon-900 font-sans font-medium hover:bg-maroon-900 hover:text-ivory-100 transition-colors"
                  >
                    <Facebook className="w-3.5 h-3.5 text-gold-600" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href={siteConfig.tiktokUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-ivory-200 text-xs text-maroon-900 font-sans font-medium hover:bg-maroon-900 hover:text-ivory-100 transition-colors"
                  >
                    <TikTokIcon size={14} className="text-gold-600" />
                    <span>TikTok</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
