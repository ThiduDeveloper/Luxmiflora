import { PortfolioItem } from '@/types';
import { getSanityPortfolio, getSanityPortfolioBySlug } from '@/sanity/lib/fetch';
import { urlForImage } from '@/sanity/lib/image';

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const sanityItems = await getSanityPortfolio();
  if (!sanityItems || sanityItems.length === 0) return PORTFOLIO_DATA;

  const mappedSanityItems: PortfolioItem[] = sanityItems.map((item: any) => ({
    id: item._id,
    slug: item.slug || item._id,
    title: item.title,
    couple: item.couple || 'Newlyweds',
    category: item.category || 'mandap',
    categoryLabel: item.category ? item.category.toUpperCase() : 'Special Event',
    location: item.location || 'Sri Lanka',
    venue: item.venue || 'Luxury Venue',
    seasonYear: item.seasonYear || '2025',
    coverImage: item.mainImage
      ? urlForImage(item.mainImage).url()
      : 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    galleryImages: item.galleryImages && item.galleryImages.length > 0
      ? item.galleryImages.map((img: any) => urlForImage(img).url())
      : ['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'],
    story: item.story || '',
    palette: ['#5C121E', '#D4AF37', '#FAF8F5'],
    keyHighlights: item.keyHighlights || [],
    clientQuote: item.clientQuote,
    featured: true,
  }));

  return [...mappedSanityItems, ...PORTFOLIO_DATA];
}

export async function getPortfolioItemBySlug(slug: string): Promise<PortfolioItem | undefined> {
  const sanityItem = await getSanityPortfolioBySlug(slug);
  if (sanityItem) {
    return {
      id: sanityItem._id,
      slug: sanityItem.slug || sanityItem._id,
      title: sanityItem.title,
      couple: sanityItem.couple || 'Newlyweds',
      category: sanityItem.category || 'mandap',
      categoryLabel: sanityItem.category ? sanityItem.category.toUpperCase() : 'Special Event',
      location: sanityItem.location || 'Sri Lanka',
      venue: sanityItem.venue || 'Luxury Venue',
      seasonYear: sanityItem.seasonYear || '2025',
      coverImage: sanityItem.mainImage
        ? urlForImage(sanityItem.mainImage).url()
        : 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      galleryImages: sanityItem.galleryImages && sanityItem.galleryImages.length > 0
        ? sanityItem.galleryImages.map((img: any) => urlForImage(img).url())
        : ['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'],
      story: sanityItem.story || '',
      palette: ['#5C121E', '#D4AF37', '#FAF8F5'],
      keyHighlights: sanityItem.keyHighlights || [],
      clientQuote: sanityItem.clientQuote,
      featured: true,
    };
  }

  return PORTFOLIO_DATA.find((p) => p.slug === slug || p.id === slug);
}

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'ananya-vikram-udaipur',
    slug: 'ananya-vikram-udaipur-palace',
    title: 'The Crimson & Gold Palace Mandap',
    couple: 'Ananya & Vikram',
    category: 'mandap',
    categoryLabel: 'Royal Mandap',
    location: 'Udaipur, Rajasthan',
    venue: 'The Leela Palace Udaipur',
    seasonYear: 'Winter 2025',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Overlooking the tranquil waters of Lake Pichola, Ananya and Vikram envisioned a regal mandap rooted in Mewari royal heritage. We constructed an octagonal crimson velvet dome adorned with over 25,000 deep red Dutch roses, gold leaf pillars, and suspended crystal chandeliers that shimmered against the sunset.',
    palette: ['#5C121E', '#D4AF37', '#FAF8F5', '#861E2E'],
    keyHighlights: [
      'Octagonal dome with 25,000+ red Dutch roses',
      'Custom gold leaf mandap pillars',
      'Floating lotus floral arrangement surrounding Lake Pichola view',
      'Handcrafted jasmine & rose varmalas with gold wire threading'
    ],
    clientQuote: 'Luxmi Flora created magic on the lake. Walking down the aisle felt like stepping into an ancient royal fairytale. Every bloom was immaculate!',
    featured: true
  },
  {
    id: 'radhika-rohan-delhi',
    slug: 'radhika-rohan-ethereal-white-reception',
    title: 'Ethereal White & Champagne Reception',
    couple: 'Radhika & Rohan',
    category: 'reception',
    categoryLabel: 'Gala Reception',
    location: 'New Delhi',
    venue: 'The Taj Mahal Hotel',
    seasonYear: 'Spring 2025',
    coverImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'For Radhika and Rohan’s grand reception in New Delhi, we curated an ethereal palette of ivory hydrangeas, white orchids, and champagne roses. The centerpiece was a 24-foot cascading floral wall flanked by mirrored pillars and floating candle urns.',
    palette: ['#FFFFFF', '#F5F0EB', '#D4AF37', '#1A1818'],
    keyHighlights: [
      '24ft wide white hydrangea & avalanche rose backdrop wall',
      'Tall crystal centerpiece urns with weeping white orchids',
      'Mirrored aisle runner reflecting ambient candelabra light',
      'Custom champagne velvet stage sofa with gold trims'
    ],
    clientQuote: 'The sheer grandeur left our 700 guests speechless. The floral scent as you walked into the ballroom was intoxicatingly divine.',
    featured: true
  },
  {
    id: 'kiara-kabir-goa',
    slug: 'kiara-kabir-sunset-beach-mandap',
    title: 'Sunset Beachfront Floral Arch',
    couple: 'Kiara & Kabir',
    category: 'destination',
    categoryLabel: 'Destination Wedding',
    location: 'Goa',
    venue: 'Alila Diwa Goa',
    seasonYear: 'Autumn 2024',
    coverImage: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Framed against the Arabian Sea at golden hour, Kiara and Kabir wanted an organic, bohemian-chic mandap. We blended pampas grass, blush garden roses, and wild eucalyptus to craft a breezy open-air canopy that swayed with the ocean breeze.',
    palette: ['#EBE2D7', '#DFBD6F', '#E7A1A7', '#5C121E'],
    keyHighlights: [
      'Organic driftwood & pampas grass mandap frame',
      'Blush garden roses & wild eucalyptus accents',
      'Candlelit wooden lanterns lining the sandy aisle',
      'Tropical coconut hydration station with rose petals'
    ],
    clientQuote: 'Luxmi Flora executed a beach mandap that survived sea breezes effortlessly while looking like an art installation!',
    featured: true
  },
  {
    id: 'priya-siddharth-jaipur',
    slug: 'priya-siddharth-marigold-haldi',
    title: 'Sunburst Marigold & Brass Haldi',
    couple: 'Priya & Siddharth',
    category: 'haldi',
    categoryLabel: 'Haldi Celebration',
    location: 'Jaipur, Rajasthan',
    venue: 'Rambagh Palace',
    seasonYear: 'Winter 2024',
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'An explosion of joyous yellow and orange marigolds filled the courtyard of Rambagh Palace. Featuring a massive brass urli seating vessel surrounded by 50,000 marigold flower strands, custom jhoolas, and traditional dhol accents.',
    palette: ['#F3E5AB', '#D4AF37', '#BD404F', '#FAF8F5'],
    keyHighlights: [
      '50,000+ yellow & orange marigold flower garlands',
      'Giant 6ft antique brass urli with rose petal bath',
      'Floral swing canopy with hand-woven genda phool tassels',
      'Bespoke floral bangles & headbands for 150 guests'
    ],
    clientQuote: 'It was the most cheerful, vibrant event of our entire wedding week! The smell of fresh marigolds was heavenly.',
    featured: false
  },
  {
    id: 'meera-arjun-mumbai',
    slug: 'meera-arjun-royal-tablescapes',
    title: 'The Candlelit Botanical Banquet',
    couple: 'Meera & Arjun',
    category: 'table-centerpiece',
    categoryLabel: 'Tablescape Design',
    location: 'Mumbai',
    venue: 'The St. Regis Mumbai',
    seasonYear: 'Winter 2024',
    coverImage: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'A royal gala dinner styled with 80-foot continuous velvet runners, 5-tier gold candelabras, maroon dahlias, crimson carnations, and gold foil place settings.',
    palette: ['#5C121E', '#D4AF37', '#FAF8F5', '#1A1818'],
    keyHighlights: [
      '80ft continuous floral table runner with velvet base',
      'Multi-tier gold candelabras with 200+ taper candles',
      'Gold foil menu cards framed in fresh orchid blossoms',
      'Monogrammed linen napkins with velvet ribbon ties'
    ],
    clientQuote: 'Dining under those floating chandeliers and candlelit tables made our guests feel like royalty!',
    featured: false
  },
  {
    id: 'tanya-dev-bengaluru',
    slug: 'tanya-dev-enchanted-tunnel-entryway',
    title: 'The Enchanted Orchid Tunnel Entry',
    couple: 'Tanya & Dev',
    category: 'entryway',
    categoryLabel: 'Grand Entryway',
    location: 'Bengaluru',
    venue: 'The Leela Palace Bengaluru',
    seasonYear: 'Spring 2024',
    coverImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'A 100-foot archway tunnel wrapped in weeping white dendrobium orchids, fairy lights, and crystal drop beads leading guests into a fairytale sangeet night.',
    palette: ['#FFFFFF', '#D4AF37', '#5C121E', '#F5F0EB'],
    keyHighlights: [
      '100ft continuous floral archway tunnel',
      '15,000+ imported white dendrobium orchids',
      'Integrated soft-glow micro fairy lights & glass lanterns',
      'Custom royal monogrammed entry gates'
    ],
    clientQuote: 'Walking through that floral tunnel felt like entering a magical secret garden. Unforgettable!',
    featured: true
  },
  {
    id: 'aanya-samarth-jodhpur',
    slug: 'aanya-samarth-royal-umaid-bhawan-gala',
    title: 'Royal Umaid Bhawan Lotus Canopy',
    couple: 'Aanya & Samarth',
    category: 'mandap',
    categoryLabel: 'Royal Mandap',
    location: 'Jodhpur, Rajasthan',
    venue: 'Umaid Bhawan Palace',
    seasonYear: 'Winter 2024',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Designed under the grand dome of Umaid Bhawan Palace, featuring a 360-degree floating lotus petal mandap with antique brass bells and cascading pink carnations.',
    palette: ['#5C121E', '#D4AF37', '#FAF8F5'],
    keyHighlights: [
      '360-degree lotus mandap design',
      'Handcrafted antique temple brass bells',
      'Pink lotus & crimson rose floral canopy'
    ],
    clientQuote: 'The team at Luxmi Flora turned our royal palace wedding dream into a breathtaking reality.',
    featured: true
  },
  {
    id: 'sanya-kabir-kerala',
    slug: 'sanya-kabir-backwater-botanical-arch',
    title: 'Backwater Floral Altar & Floating Lanterns',
    couple: 'Sanya & Kabir',
    category: 'destination',
    categoryLabel: 'Destination Wedding',
    location: 'Kumarakom, Kerala',
    venue: 'Zuri Kumarakom',
    seasonYear: 'Autumn 2024',
    coverImage: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Set along Kerala’s tranquil backwaters, an organic floral arch adorned with white lilies, jasmine buds, and floating lotus lanterns across the water reflection pool.',
    palette: ['#FAF8F5', '#D4AF37', '#1A1818'],
    keyHighlights: [
      'Organic water-facing jasmine & lily arch',
      'Floating lotus lanterns across water body',
      'Traditional brass urli centerpieces'
    ],
    clientQuote: 'Serene, romantic, and beyond beautiful!',
    featured: false
  },
  {
    id: 'divya-varun-srinagar',
    slug: 'divya-varun-dal-lake-paradise',
    title: 'Dal Lake Lotus & Shikara Decor',
    couple: 'Divya & Varun',
    category: 'destination',
    categoryLabel: 'Destination Wedding',
    location: 'Srinagar, Kashmir',
    venue: 'Khyber Himalayan Resort',
    seasonYear: 'Summer 2024',
    coverImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Decorated shikaras with saffron marigolds, Kashmiri chinar leaves, and fresh roses floating on Dal Lake for an unforgettable mehendi ceremony.',
    palette: ['#BD404F', '#D4AF37', '#F3E5AB'],
    keyHighlights: [
      'Custom floral shikara boat fleet',
      'Chinar leaf & marigold entrance gates',
      'Handwoven floral rugs and floor cushions'
    ],
    clientQuote: 'Our guests will talk about the shikara floral entry for years!',
    featured: true
  },
  {
    id: 'natasha-rohit-udaipur',
    slug: 'natasha-rohit-jagmandir-gala',
    title: 'Jagmandir Island Gala Tablescapes',
    couple: 'Natasha & Rohit',
    category: 'reception',
    categoryLabel: 'Gala Reception',
    location: 'Udaipur, Rajasthan',
    venue: 'Jagmandir Island Palace',
    seasonYear: 'Winter 2024',
    coverImage: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Illuminated island tablescapes with 10-foot floral bridges, floating crystal globes, and deep burgundy garden roses.',
    palette: ['#5C121E', '#D4AF37', '#1A1818'],
    keyHighlights: [
      'Continuous 10ft elevated floral table bridges',
      'Submerged crystal glass candles',
      'Custom gold leaf charger plates'
    ],
    clientQuote: 'Absolute perfection on Lake Pichola!',
    featured: false
  }
];
