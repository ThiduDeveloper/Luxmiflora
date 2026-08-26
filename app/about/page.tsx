import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { constructMetadata } from '@/lib/metadata';
import { Crown, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { getSanityFounder } from '@/sanity/lib/fetch';
import { urlForImage } from '@/sanity/lib/image';

export const metadata = constructMetadata({
  title: 'About Luxmi Flora | Wedding & Event Decoration Studio in Bandarawela, Sri Lanka',
  description: 'Meet Luxmi Flora Wedding & Events — a premier wedding decoration studio in Bandarawela, Sri Lanka. Founded by Tharun Sharma, we create bespoke floral designs and elegant event décor for weddings across Sri Lanka.',
  path: '/about',
});

export default async function AboutPage() {
  const founderData = await getSanityFounder();

  const founder = {
    name: founderData?.name || 'Tharun Sharma',
    role: founderData?.role || 'FOUNDER & CHIEF CREATIVE OFFICER',
    subtitle: founderData?.subtitle || 'CEO & Principal Floral Architect',
    quote: founderData?.quote || 'Floral engineering is not merely arranging petals; it is the art of sculpting grand architectural environments that evoke timeless royal emotion.',
    bio: founderData?.bio || 'Under Tharun’s visionary leadership, Luxmi Flora has redefined luxury wedding decor across India and Sri Lanka. Combining structural floral engineering with authentic heritage aesthetics, Tharun personally oversees high-society palace weddings, royal mandap architectures, and gala receptions.',
    image: founderData?.image ? urlForImage(founderData.image).url() : '/images/Tharun Image.jpeg',
    phone: founderData?.phone || '0759695057',
    email: founderData?.email || 'Tharunsharma2@iCloud.com',
    whatsappNumber: founderData?.whatsappNumber || '0759695057',
    instagramUrl: founderData?.instagramUrl || 'https://www.instagram.com/tharunsharma_vengadasalam?igsi=MTVsdnk1ZWZvcTZyNg==',
    instagramHandle: founderData?.instagramHandle || '@tharunsharma_vengadasalam',
    facebookUrl: founderData?.facebookUrl || 'https://www.facebook.com/share/1CyGFVqqdr/?mibextid=wwXIfr',
    facebookName: founderData?.facebookName || 'Tharun Sharma',
    weddingsExecuted: founderData?.weddingsExecuted || '350+',
    artisanTeam: founderData?.artisanTeam || '30+',
  };

  return (
    <div className="pb-20 bg-ivory-100">
      {/* Hero Header */}
      <section className="bg-maroon-950 text-ivory-100 pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-gold-400/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-400/10 via-transparent to-transparent pointer-events-none" />
        <Container className="relative z-10 text-center max-w-4xl">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-medium font-sans block mb-3">
            — The Heritage & Craftsmanship —
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-ivory-100 mb-6">
            Sculpting Royal Memories Through <span className="italic text-gold-400">Botanical Mastery</span>
          </h1>
          <p className="text-base sm:text-lg text-ivory-200 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            At Luxmi Flora, we bridge traditional heritage aesthetics with modern high-fashion floral engineering to build immersive ceremony environments.
          </p>
        </Container>
      </section>

      {/* Main Studio Narrative */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
                  alt="Luxmi Flora Studio Masterpiece"
                  width={800}
                  height={1000}
                  className="object-cover w-full h-[500px]"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Our Story & Origins"
                title="A Decade of Royal Transformations"
                subtitle="From an intimate floral studio to producing high-society palace weddings and gala celebrations."
                centered={false}
              />

              <p className="text-sm sm:text-base text-onyx-700 leading-relaxed font-sans font-light">
                Luxmi Flora was founded with a single uncompromising mission: to elevate wedding floristry from mere decoration into monumental architectural art. Every mandap, entryway tunnel, and dinner tablescape is designed as a living sensory masterpiece.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-ivory-300 shadow-sm">
                  <span className="font-serif text-3xl text-gold-600 font-semibold block">{founder.weddingsExecuted}</span>
                  <span className="text-xs text-onyx-600">Weddings Executed Flawlessly</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-ivory-300 shadow-sm">
                  <span className="font-serif text-3xl text-gold-600 font-semibold block">{founder.artisanTeam}</span>
                  <span className="text-xs text-onyx-600">Artisan Florists & Riggers</span>
                </div>
              </div>
            </div>
          </div>

          {/* CEO & Founder Spotlight Section */}
          <div className="bg-gradient-to-br from-maroon-950 via-maroon-900 to-onyx-950 text-ivory-100 rounded-3xl p-8 sm:p-12 lg:p-14 border border-gold-400/30 shadow-2xl relative overflow-hidden">
            {/* Background Radial Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-maroon-800/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* CEO Portrait Image Column */}
              <div className="lg:col-span-5 relative mx-auto lg:mx-0 max-w-sm sm:max-w-md lg:max-w-none w-full">
                <div className="relative rounded-2xl overflow-hidden border-2 border-gold-400/40 shadow-[0_10px_40px_rgba(0,0,0,0.6)] group">
                  <div className="relative h-[420px] sm:h-[480px] w-full">
                    <Image
                      src={founder.image}
                      alt={`${founder.name} - Founder & CEO of Luxmi Flora`}
                      fill
                      unoptimized
                      priority
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/90 via-transparent to-transparent" />
                  
                  {/* Badge floating over image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-maroon-950/90 backdrop-blur-md p-4 rounded-xl border border-gold-400/40 text-center">
                    <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-gold-400 font-semibold block mb-0.5">
                      {founder.role}
                    </span>
                    <h3 className="font-serif text-2xl text-ivory-100 font-normal">
                      {founder.name}
                    </h3>
                  </div>
                </div>

                {/* Decorative Frame Elements */}
                <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-gold-400/60 rounded-tr-2xl pointer-events-none" />
                <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-gold-400/60 rounded-bl-2xl pointer-events-none" />
              </div>

              {/* CEO Bio & Contact Details Column */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Crown className="w-4 h-4 text-gold-400" />
                    <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold font-sans">
                      MEET OUR VISIONARY
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-5xl font-normal text-ivory-100 leading-tight">
                    {founder.name}
                  </h2>
                  <p className="text-xs uppercase tracking-widest text-gold-300 font-sans font-medium mt-1">
                    {founder.subtitle}
                  </p>
                </div>

                <blockquote className="border-l-2 border-gold-400/60 pl-4 py-1 italic font-serif text-base sm:text-lg text-ivory-200 leading-relaxed bg-maroon-950/40 rounded-r-xl">
                  &ldquo;{founder.quote}&rdquo;
                </blockquote>

                <p className="text-xs sm:text-sm text-ivory-300 font-sans font-light leading-relaxed">
                  {founder.bio}
                </p>

                {/* Contact Information & Social Badges Grid */}
                <div className="pt-2">
                  <h4 className="text-xs uppercase tracking-widest text-gold-400 font-semibold font-sans mb-3">
                    DIRECT CONTACT & SOCIALS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Phone */}
                    <a
                      href={`tel:${founder.phone}`}
                      className="flex items-center gap-3 bg-maroon-950/70 hover:bg-maroon-800/80 p-3 rounded-xl border border-gold-400/20 hover:border-gold-400/50 transition-all duration-300 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <span className="text-[10px] text-ivory-400 uppercase tracking-wider block font-sans">Mobile / Phone</span>
                        <span className="text-xs font-sans text-ivory-100 font-medium tracking-wide truncate block">{founder.phone}</span>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${founder.email}`}
                      className="flex items-center gap-3 bg-maroon-950/70 hover:bg-maroon-800/80 p-3 rounded-xl border border-gold-400/20 hover:border-gold-400/50 transition-all duration-300 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <span className="text-[10px] text-ivory-400 uppercase tracking-wider block font-sans">Email Address</span>
                        <span className="text-xs font-sans text-ivory-100 font-medium tracking-wide truncate block">{founder.email}</span>
                      </div>
                    </a>

                    {/* Instagram */}
                    <a
                      href={founder.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-maroon-950/70 hover:bg-maroon-800/80 p-3 rounded-xl border border-gold-400/20 hover:border-gold-400/50 transition-all duration-300 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
                        <Instagram className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <span className="text-[10px] text-ivory-400 uppercase tracking-wider block font-sans">Instagram</span>
                        <span className="text-xs font-sans text-ivory-100 font-medium tracking-wide truncate block">{founder.instagramHandle}</span>
                      </div>
                    </a>

                    {/* Facebook */}
                    <a
                      href={founder.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-maroon-950/70 hover:bg-maroon-800/80 p-3 rounded-xl border border-gold-400/20 hover:border-gold-400/50 transition-all duration-300 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
                        <Facebook className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <span className="text-[10px] text-ivory-400 uppercase tracking-wider block font-sans">Facebook</span>
                        <span className="text-xs font-sans text-ivory-100 font-medium tracking-wide truncate block">{founder.facebookName}</span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Direct Consultation Button */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Button href="/inquiry" variant="gold" size="md">
                    Schedule Private Consultation
                  </Button>
                  <a
                    href={`https://wa.me/${founder.whatsappNumber}?text=${encodeURIComponent('Hello Tharun, I would like to discuss a wedding floral design.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-xs font-sans font-bold uppercase tracking-wider hover:scale-[1.03] active:scale-95 transition-all shadow-md"
                  >
                    <WhatsAppIcon size={16} />
                    <span>WhatsApp Tharun</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
