'use client';

import React from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';
import { useSiteConfig } from '@/components/providers/SiteConfigProvider';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { TikTokIcon } from '@/components/ui/TikTokIcon';

export const Footer: React.FC = () => {
  const siteConfig = useSiteConfig();

  return (
    <footer className="bg-maroon-950 text-ivory-200 border-t border-gold-400/20 pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-maroon-800/80">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-xs text-ivory-300 leading-relaxed font-light">
              Crafting breathtaking wedding floral environments, grand mandaps, and luxury tablescapes across Sri Lanka and top destination venues worldwide.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-maroon-900 border border-gold-400/30 flex items-center justify-center text-gold-400 hover:bg-gold-400 hover:text-maroon-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-maroon-900 border border-gold-400/30 flex items-center justify-center text-gold-400 hover:bg-gold-400 hover:text-maroon-900 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.tiktokUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-maroon-900 border border-gold-400/30 flex items-center justify-center text-gold-400 hover:bg-gold-400 hover:text-maroon-900 transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-ivory-100 tracking-wider mb-4 border-b border-gold-400/20 pb-2 inline-block">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Floral Services */}
          <div>
            <h4 className="font-serif text-lg text-ivory-100 tracking-wider mb-4 border-b border-gold-400/20 pb-2 inline-block">
              Floral Expertise
            </h4>
            <ul className="space-y-2 text-xs text-ivory-300 font-light">
              <li className="hover:text-gold-400 transition-colors">Grand Royal Mandaps</li>
              <li className="hover:text-gold-400 transition-colors">Ethereal Entryway Tunnels</li>
              <li className="hover:text-gold-400 transition-colors">Opulent Reception Stages</li>
              <li className="hover:text-gold-400 transition-colors">High-Society Tablescapes</li>
              <li className="hover:text-gold-400 transition-colors">Marigold Haldi & Mehendi Lounges</li>
              <li className="hover:text-gold-400 transition-colors">Destination Wedding Production</li>
            </ul>
          </div>

          {/* Column 4: Luxmi Flora Wedding & Events Contact */}
          <div>
            <h4 className="font-serif text-lg text-ivory-100 tracking-wider mb-4 border-b border-gold-400/20 pb-2 inline-block">
              {siteConfig.name}
            </h4>
            <ul className="space-y-3 text-xs text-ivory-300 font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-gold-400">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-400">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 pt-1 text-[11px] text-gold-400">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>{siteConfig.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-[11px] text-ivory-400/80">
          <p suppressHydrationWarning>© {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
