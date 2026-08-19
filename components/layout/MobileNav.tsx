'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';
import { useSiteConfig } from '@/components/providers/SiteConfigProvider';
import { Button } from '@/components/ui/Button';
import { X, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { TikTokIcon } from '@/components/ui/TikTokIcon';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/Logo';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const siteConfig = useSiteConfig();
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-onyx-900/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-maroon-900 border-l border-gold-400/20 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-maroon-800">
            <Logo onClick={onClose} size="sm" />
            <button
              onClick={onClose}
              className="p-2 text-ivory-300 hover:text-gold-400 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <div className="py-8 flex flex-col gap-5">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    'text-sm font-medium tracking-[0.2em] uppercase transition-colors py-2 border-b border-maroon-800/50 flex items-center justify-between',
                    isActive ? 'text-gold-400 font-semibold' : 'text-ivory-200 hover:text-gold-400'
                  )}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Footer Contact Info & CTA */}
        <div className="pt-6 border-t border-maroon-800 space-y-4">
          <Button href="/inquiry" variant="gold" className="w-full" onClick={onClose}>
            Book Consultation
          </Button>

          <div className="space-y-2 text-xs text-ivory-300 pt-2">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-gold-400">
              <Phone className="w-4 h-4 text-gold-400" />
              <span>{siteConfig.phone}</span>
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-gold-400">
              <Mail className="w-4 h-4 text-gold-400" />
              <span>{siteConfig.email}</span>
            </a>
            <div className="flex items-center gap-4 pt-3 border-t border-maroon-800/60">
              <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="text-gold-400 hover:text-ivory-100 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={siteConfig.facebookUrl} target="_blank" rel="noreferrer" className="text-gold-400 hover:text-ivory-100 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={siteConfig.tiktokUrl} target="_blank" rel="noreferrer" className="text-gold-400 hover:text-ivory-100 transition-colors" aria-label="TikTok">
                <TikTokIcon size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
