import { getSanitySiteConfig } from '@/sanity/lib/fetch';

export interface SiteConfigType {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  address: string;
  googleMapsUrl?: string;
  instagramUrl: string;
  facebookUrl: string;
  tiktokUrl: string;
  workingHours: string;
  establishedYear: string;
}

export const DEFAULT_SITE_CONFIG: SiteConfigType = {
  name: 'Luxmi Flora Wedding & Events',
  tagline: 'Weddings · Floral · Events',
  description: 'Transforming weddings and special occasions into unforgettable celebrations with elegant floral designs and beautifully crafted event décor.',
  phone: '0765495489',
  whatsappNumber: '0765495489',
  email: 'luxmiflora@gmail.com',
  address: 'Luxmi Flora Wedding & Events, No.45/8, Badulla road, Bandarawela, Sri Lanka',
  googleMapsUrl: '',
  instagramUrl: 'https://www.instagram.com/luxmi_flora_wedding_and__event?igsi=bmNnZ3cwMnoxeTJr',
  facebookUrl: 'https://www.facebook.com/share/18VsinLxD5/?mibextid=wwXIfr',
  tiktokUrl: 'https://www.tiktok.com/@luxmi_floraweddingevent?_r=1&_t=ZS-990vR65MV61',
  workingHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
  establishedYear: '2019',
};

export const SITE_CONFIG = DEFAULT_SITE_CONFIG;

export async function getSiteConfig(): Promise<SiteConfigType> {
  const sanityConfig = await getSanitySiteConfig();
  if (!sanityConfig) return DEFAULT_SITE_CONFIG;

  return {
    ...DEFAULT_SITE_CONFIG,
    ...(sanityConfig.name && { name: sanityConfig.name }),
    ...(sanityConfig.tagline && { tagline: sanityConfig.tagline }),
    ...(sanityConfig.description && { description: sanityConfig.description }),
    ...(sanityConfig.phone && { phone: sanityConfig.phone }),
    ...(sanityConfig.whatsappNumber && { whatsappNumber: sanityConfig.whatsappNumber }),
    ...(sanityConfig.email && { email: sanityConfig.email }),
    ...(sanityConfig.address && { address: sanityConfig.address }),
    ...(sanityConfig.googleMapsUrl && { googleMapsUrl: sanityConfig.googleMapsUrl }),
    ...(sanityConfig.instagramUrl && { instagramUrl: sanityConfig.instagramUrl }),
    ...(sanityConfig.facebookUrl && { facebookUrl: sanityConfig.facebookUrl }),
    ...(sanityConfig.tiktokUrl && { tiktokUrl: sanityConfig.tiktokUrl }),
    ...(sanityConfig.workingHours && { workingHours: sanityConfig.workingHours }),
  };
}

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/portfolio' },
  { name: 'Packages', href: '/packages' },
  { name: 'Contact', href: '/contact' },
];
