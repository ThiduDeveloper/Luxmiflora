import { Metadata } from 'next';
import { SITE_CONFIG } from './constants';

export function constructMetadata({
  title = SITE_CONFIG.name + ' | ' + SITE_CONFIG.tagline,
  description = SITE_CONFIG.description,
  image = '/og-image.jpg',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    metadataBase: new URL('https://luxmiflora.com'),
    title,
    description,
    keywords: [
      'Luxmi Flora',
      'Luxury Wedding Florist',
      'Wedding Mandap Flowers',
      'Luxury Indian Wedding Decor',
      'Bespoke Floral Architecture',
      'High End Wedding Florist Delhi',
      'Destination Wedding Florist',
      'Reception Stage Florals'
    ],
    authors: [{ name: 'Luxmi Flora Design Studio' }],
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
      type: 'website',
      siteName: SITE_CONFIG.name,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
