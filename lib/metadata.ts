import { Metadata } from 'next';
import { SITE_CONFIG } from './constants';

export function constructMetadata({
  title = SITE_CONFIG.name + ' | ' + SITE_CONFIG.tagline,
  description = SITE_CONFIG.description,
  image = '/Logo/Luxmi Flora Logo.jpeg',
  path = '',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const baseUrl = 'https://www.luxmiflora.com';
  const canonicalUrl = path === '/' ? baseUrl : path ? `${baseUrl}${path}` : baseUrl;

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords: [
      'Luxmi Flora',
      'Luxmi Flora Wedding',
      'Luxmi Flora Bandarawela',
      'Wedding Decoration Sri Lanka',
      'Wedding Florist Sri Lanka',
      'Wedding Stage Decoration Bandarawela',
      'Event Decoration Sri Lanka',
      'Bridal Flower Decoration Sri Lanka',
      'Wedding Reception Decoration Sri Lanka',
      'Floral Arrangements Sri Lanka',
      'Wedding Planner Bandarawela',
      'Engagement Decoration Sri Lanka',
      'Luxury Wedding Decor Sri Lanka',
      'Destination Wedding Florist Sri Lanka',
      'Cultural Wedding Decoration',
      'Wedding Venue Styling',
    ],
    authors: [{ name: 'Luxmi Flora Wedding & Events' }],
    creator: 'Luxmi Flora Wedding & Events',
    publisher: 'Luxmi Flora Wedding & Events',
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large' as const,
            'max-snippet': -1,
          },
        },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: 'Luxmi Flora Wedding & Events - Premier Wedding Decoration Studio in Sri Lanka',
        },
      ],
      type: 'website',
      siteName: SITE_CONFIG.name,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    icons: {
      icon: '/Logo/Luxmi Flora Logo Emblem.png',
      apple: '/Logo/Luxmi Flora Logo Emblem.png',
    },
    verification: {
      // Add your Google Search Console verification code here
      // google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    },
    category: 'Wedding & Events',
  };
}
