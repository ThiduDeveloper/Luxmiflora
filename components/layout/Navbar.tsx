'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';
import { useSiteConfig } from '@/components/providers/SiteConfigProvider';
import { MobileNav } from './MobileNav';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { Logo } from '@/components/ui/Logo';

export const Navbar: React.FC = () => {
  const siteConfig = useSiteConfig();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hello Luxmi Flora, I would like to inquire about event decoration.'
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-onyx-900/95 backdrop-blur-md border-b border-white/10 py-3.5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Badge Emblem + Text */}
          <Logo />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-xs font-sans tracking-widest uppercase transition-colors text-ivory-200 hover:text-gold-400',
                    isActive && 'text-gold-400 font-semibold'
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Modernized Emerald WhatsApp Button */}
          <div className="hidden lg:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6e] text-white font-sans font-bold text-[11px] uppercase tracking-widest px-5 py-2.5 rounded-full flex items-center gap-2.5 shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.55)] transition-all duration-300 hover:scale-[1.03] active:scale-95 border border-white/20"
            >
              <WhatsAppIcon size={16} className="text-white" />
              <span>WHATSAPP US</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-ivory-100 hover:text-gold-400 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
