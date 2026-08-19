'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { Phone, Mail, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { useSiteConfig } from '@/components/providers/SiteConfigProvider';
import { useSearchParams } from 'next/navigation';

const InquiryFormInner: React.FC = () => {
  const siteConfig = useSiteConfig();
  const searchParams = useSearchParams();
  const styleParam = searchParams.get('style') || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    weddingDate: '',
    venueLocation: '',
    weddingStyle: styleParam,
    estimatedGuests: '',
    budgetRange: '',
    servicesRequired: '',
    visionNotes: '',
  });

  useEffect(() => {
    if (styleParam) {
      setFormData((prev) => ({ ...prev, weddingStyle: styleParam }));
    }
  }, [styleParam]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hello Luxmi Flora, I would like to inquire about event decoration.'
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-sans font-semibold block mb-2">
          GET IN TOUCH
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl font-normal text-maroon-900">
          Tell Us About Your Wedding
        </h2>
        <div className="w-12 h-[2px] bg-gold-400 mx-auto my-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
        {/* Left Column 3 Clickable Floral Division Cards */}
        <div className="lg:col-span-4 space-y-4">
          {/* WhatsApp Floral Division Card */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block bg-maroon-900 text-ivory-100 p-6 rounded-sm space-y-3 shadow-md border border-maroon-800 hover:border-gold-400 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
          >
            {/* Top Gold Line Effect on Hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

            <div className="w-9 h-9 bg-[#25D366] rounded-sm flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <WhatsAppIcon size={20} className="text-white" />
            </div>

            <div>
              <h3 className="font-serif text-lg font-normal text-ivory-100 group-hover:text-gold-400 transition-colors">
                CHAT WITH US
              </h3>
              <p className="text-[11px] text-ivory-300 font-sans font-light mt-1 leading-relaxed">
                The fastest way to reach us. Send a message and we&apos;ll respond promptly.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-ivory-300/10">
              <span className="text-[10px] uppercase tracking-widest text-gold-400 font-sans font-semibold group-hover:text-ivory-100 transition-colors">
                OPEN WHATSAPP →
              </span>
              <span className="text-xs text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity">
                ❀
              </span>
            </div>
          </a>

          {/* Call Us Floral Division Card */}
          <a
            href={`tel:${siteConfig.phone}`}
            className="group relative block bg-ivory-200 text-onyx-900 p-6 rounded-sm space-y-3 border border-ivory-300 hover:border-gold-400 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
          >
            {/* Top Gold Line Effect on Hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

            <div className="w-9 h-9 bg-maroon-900 rounded-sm flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <Phone className="w-4 h-4" />
            </div>

            <div>
              <h3 className="font-serif text-lg font-normal text-maroon-900 group-hover:text-gold-600 transition-colors">
                CALL US
              </h3>
              <span className="text-xs text-onyx-700 font-sans font-semibold block mt-1">
                {siteConfig.phone}
              </span>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-ivory-300/60">
              <span className="text-[10px] uppercase tracking-widest text-maroon-900 font-sans font-semibold group-hover:text-gold-600 transition-colors">
                TAP TO CALL →
              </span>
              <span className="text-xs text-gold-600 opacity-0 group-hover:opacity-100 transition-opacity">
                ❀
              </span>
            </div>
          </a>

          {/* Email Us Floral Division Card */}
          <a
            href={`mailto:${siteConfig.email}`}
            className="group relative block bg-ivory-200 text-onyx-900 p-6 rounded-sm space-y-3 border border-ivory-300 hover:border-gold-400 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
          >
            {/* Top Gold Line Effect on Hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

            <div className="w-9 h-9 bg-maroon-900 rounded-sm flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <Mail className="w-4 h-4" />
            </div>

            <div>
              <h3 className="font-serif text-lg font-normal text-maroon-900 group-hover:text-gold-600 transition-colors">
                EMAIL US
              </h3>
              <span className="text-xs text-onyx-700 font-sans font-semibold block mt-1">
                {siteConfig.email}
              </span>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-ivory-300/60">
              <span className="text-[10px] uppercase tracking-widest text-maroon-900 font-sans font-semibold group-hover:text-gold-600 transition-colors">
                EMAIL US →
              </span>
              <span className="text-xs text-gold-600 opacity-0 group-hover:opacity-100 transition-opacity">
                ❀
              </span>
            </div>
          </a>
        </div>

        {/* Right Column: Request a Bespoke Quote Form */}
        <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-sm border border-ivory-300 shadow-md">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-gold-600 mx-auto" />
              <h3 className="font-serif text-3xl text-maroon-900 font-normal">Inquiry Received</h3>
              <p className="text-xs text-onyx-700 font-sans max-w-md mx-auto">
                Thank you {formData.name}. We will review your event details and respond within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-sans uppercase tracking-widest text-maroon-900 font-semibold underline pt-2"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="font-serif text-2xl text-maroon-900 font-normal mb-4">
                Request a Bespoke Quote
              </h3>

              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-onyx-700 mb-1">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-ivory-100 border border-ivory-300 text-xs focus:outline-none focus:border-maroon-900"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-onyx-700 mb-1">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+94 77 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-ivory-100 border border-ivory-300 text-xs focus:outline-none focus:border-maroon-900"
                  />
                </div>
              </div>

              {/* Row 2: Date & Venue */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-onyx-700 mb-1">
                    WEDDING / EVENT DATE
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.weddingDate}
                    onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-ivory-100 border border-ivory-300 text-xs focus:outline-none focus:border-maroon-900"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-onyx-700 mb-1">
                    VENUE / LOCATION
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Venue name or city"
                    value={formData.venueLocation}
                    onChange={(e) => setFormData({ ...formData, venueLocation: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-ivory-100 border border-ivory-300 text-xs focus:outline-none focus:border-maroon-900"
                  />
                </div>
              </div>

              {/* Row 3: Style & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-onyx-700 mb-1">
                    WEDDING STYLE
                  </label>
                  <select
                    value={formData.weddingStyle}
                    onChange={(e) => setFormData({ ...formData, weddingStyle: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-ivory-100 border border-ivory-300 text-xs focus:outline-none focus:border-maroon-900"
                  >
                    <option value="">Select style...</option>
                    <option value="Elegant & Classic">Elegant & Classic</option>
                    <option value="Garden Romance">Garden Romance</option>
                    <option value="Luxury & Grand">Luxury & Grand</option>
                    <option value="Minimal & Modern">Minimal & Modern</option>
                    <option value="Tropical">Tropical</option>
                    <option value="Traditional">Traditional</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-onyx-700 mb-1">
                    ESTIMATED GUESTS
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 150"
                    value={formData.estimatedGuests}
                    onChange={(e) => setFormData({ ...formData, estimatedGuests: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-ivory-100 border border-ivory-300 text-xs focus:outline-none focus:border-maroon-900"
                  />
                </div>
              </div>

              {/* Row 4: Budget & Services */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-onyx-700 mb-1">
                    BUDGET RANGE
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-ivory-100 border border-ivory-300 text-xs focus:outline-none focus:border-maroon-900"
                  >
                    <option value="">Select budget...</option>
                    <option value="LKR 75k - 150k">LKR 75,000 - 150,000</option>
                    <option value="LKR 175k - 300k">LKR 175,000 - 300,000</option>
                    <option value="LKR 350k+">LKR 350,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-onyx-700 mb-1">
                    SERVICES REQUIRED
                  </label>
                  <select
                    value={formData.servicesRequired}
                    onChange={(e) => setFormData({ ...formData, servicesRequired: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-ivory-100 border border-ivory-300 text-xs focus:outline-none focus:border-maroon-900"
                  >
                    <option value="">Select service...</option>
                    <option value="Wedding Decoration">Wedding Decoration</option>
                    <option value="Reception Decoration">Reception Decoration</option>
                    <option value="Engagement Decoration">Engagement Decoration</option>
                    <option value="Full Package">Full Package</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-onyx-700 mb-1">
                  TELL US ABOUT YOUR VISION
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details about your theme, preferred flowers, or vision..."
                  value={formData.visionNotes}
                  onChange={(e) => setFormData({ ...formData, visionNotes: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-ivory-100 border border-ivory-300 text-xs focus:outline-none focus:border-maroon-900"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-maroon-900 hover:bg-maroon-800 text-ivory-100 font-sans font-bold text-xs uppercase tracking-widest py-3.5 rounded-sm transition-colors shadow-md"
              >
                REQUEST A BESPOKE QUOTE →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export const InquiryForm: React.FC = () => {
  return (
    <Suspense fallback={
      <div className="text-center py-20 bg-white rounded-sm border border-ivory-300 shadow-md">
        <p className="text-sm text-onyx-600 font-sans font-light">Loading Inquiry Form...</p>
      </div>
    }>
      <InquiryFormInner />
    </Suspense>
  );
};
