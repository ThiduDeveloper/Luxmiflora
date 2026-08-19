import { ServiceItem, ProcessStep, InvestmentPackage } from '@/types';
import { getSanityServices, getSanityPackages } from '@/sanity/lib/fetch';
import { urlForImage } from '@/sanity/lib/image';

export async function getServices(): Promise<ServiceItem[]> {
  const sanityServices = await getSanityServices();
  if (!sanityServices || sanityServices.length === 0) return SERVICES_DATA;

  return sanityServices.map((item: any) => ({
    id: item._id,
    title: item.title,
    subtitle: item.subtitle || 'Bespoke Floral Decor',
    shortDescription: item.description,
    fullDescription: item.description,
    iconName: 'Sparkles',
    features: item.features && item.features.length > 0 ? item.features : ['Custom Concept Design', 'Fresh Floral Blooms', 'Full Setup & Dismantle'],
    image: item.image
      ? urlForImage(item.image).url()
      : 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    startingPrice: item.priceStarting || 'Starting from LKR 150,000',
  }));
}

export async function getPackages(): Promise<InvestmentPackage[]> {
  const sanityPackages = await getSanityPackages();
  if (!sanityPackages || sanityPackages.length === 0) return INVESTMENT_PACKAGES;

  return sanityPackages.map((pkg: any) => ({
    id: pkg._id,
    name: pkg.title,
    tagline: pkg.tagline || (pkg.tier ? `${pkg.tier} package for luxury wedding celebrations` : 'Custom tailored wedding package'),
    priceRange: pkg.priceStarting || 'Price on Consultation',
    isPopular: pkg.badge ? pkg.badge.toLowerCase().includes('popular') : false,
    idealFor: pkg.idealFor || 'Luxury Venues & Ballrooms',
    features: pkg.features && pkg.features.length > 0 ? pkg.features : [
      'Bespoke Floral Stage & Entrance Setup',
      'Fresh Luxury Roses & Orchids',
      'Ambient Lighting & Custom Styling',
      'Dedicated On-Site Lead Designer'
    ],
  }));
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'grand-mandaps',
    title: 'Grand Royal Mandaps',
    subtitle: 'Architectural Floral Sanctuaries & Sacred Altars',
    shortDescription: 'Monumental floral installations with cascading orchids, velvet marigolds, and hand-woven lotus chandeliers designed to take center stage for sacred rituals.',
    fullDescription: 'Our signature Grand Mandaps are engineered as breathtaking architectural masterpieces. Combining handcrafted wooden carvings, metallic accents, and thousands of fresh luxury blooms, we transform your sacred vows into an immersive sensory paradise.',
    iconName: 'Crown',
    features: [
      '360-degree immersive floral dome design',
      'Fresh Dutch roses, imported orchids & seasonal blooms',
      'Customized seating podiums & sacred fire pit styling',
      'Integrated LED & spotlighting for ceremony photography',
      'Dedicated on-site floral maintenance team throughout rituals'
    ],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    startingPrice: '₹3.5 Lakhs'
  },
  {
    id: 'ethereal-entryways',
    title: 'Grand Tunnel Entryways',
    subtitle: 'First Impressions That Wow Every Guest',
    shortDescription: 'Enchanting floral tunnels, arched avenues, and candlelit pathways welcoming your guests into a world of unadulterated luxury and botanical majesty.',
    fullDescription: 'Step through an ethereal corridor of fragrant blooms and shimmering crystal sconces. Our entryway designs set the tone for your wedding celebration, creating an instant Instagram-worthy moment from the very first step.',
    iconName: 'Sparkles',
    features: [
      'Custom floral archway installations (up to 100 ft length)',
      'Suspended floral chandeliers & ambient festoon lighting',
      'Monogrammed entrance gates & floral welcome boards',
      'Aisle runner runner designs with scattered rose petals'
    ],
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    startingPrice: '₹2.0 Lakhs'
  },
  {
    id: 'reception-stages',
    title: 'Royal Reception Stages',
    subtitle: 'Opulent Backdrop Installations & Throne Lounges',
    shortDescription: 'Cinematic backdrop walls featuring layered flower cascading walls, mirrored accents, neon signatures, and grand plush seating arrangements.',
    fullDescription: 'Celebrate your evening reception in regal luxury. We create custom stage environments tailored to your color theme, combining lush greenery backdrop walls with cascading floral waterfalls and bespoke furniture design.',
    iconName: 'Sparkle',
    features: [
      '3D multi-layered floral backdrop walls (12ft - 24ft height)',
      'Customized velvet sofa thrones & royal accent chairs',
      'Architectural pedestal urns & cascading floral runners',
      'Stage edge floral skirts & light-up stage borders'
    ],
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
    startingPrice: '₹4.0 Lakhs'
  },
  {
    id: 'tablescapes-centerpieces',
    title: 'High-Society Tablescapes',
    subtitle: 'Gourmet Dining Floral Art & Candelabras',
    shortDescription: 'Exquisite banquet table decor featuring tall crystal floral towers, flickering brass candelabras, monogrammed napery, and floating blossom bowls.',
    fullDescription: 'Elevate your gala dinner or reception banquet with intimate tablescape styling. Each dining table is treated as a canvas, featuring layered textures, fragrant garden roses, customized place settings, and flickering pillar candles.',
    iconName: 'Utensils',
    features: [
      'Elevated floral arrangements & tall crystal vase towers',
      'Custom gold / brass multi-tier candelabras',
      'Matching luxury napkins, charger plates & menu card florals',
      'Continuous floral table runners for long royal tables'
    ],
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
    startingPrice: '₹1.5 Lakhs'
  },
  {
    id: 'haldi-mehendi',
    title: 'Vibrant Haldi & Mehendi',
    subtitle: 'Playful Yellow Marigold Havens & Boho Lounges',
    shortDescription: 'Sun-drenched marigold curtains, brass urli bowls, boho swing installations, and colorful canopy drapes for your vibrant pre-wedding festivities.',
    fullDescription: 'Infuse your pre-wedding rituals with pure joy. We design traditional yet contemporary Haldi and Mehendi setups with fragrant marigolds, genda phool jhoolas, custom photo booths, and shaded cabana lounges.',
    iconName: 'Sun',
    features: [
      'Marigold & rajnigandha hanging curtains & background walls',
      'Decorated floral swings (Jhoolas) & flower urli seating',
      'Custom guest bangle bars, dupatta counters & floral jewelry',
      'Canopy draping in vibrant turmeric yellow, pink & mint green'
    ],
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    startingPrice: '₹1.8 Lakhs'
  },
  {
    id: 'destination-weddings',
    title: 'Destination Floral Production',
    subtitle: 'Palaces, Beach Resorts & International Venues',
    shortDescription: 'Turnkey floral logistics and design for destination weddings across Udaipur, Jaipur, Goa, Bali, Thailand, and Dubai.',
    fullDescription: 'Whether marrying in a heritage Rajasthani fort or on a cliffside beach resort in Bali, our dedicated destination production team manages cold-chain flower sourcing, structural rigging, and seamless multi-day setup execution.',
    iconName: 'Globe',
    features: [
      'Complete end-to-end floral logistics & cold-storage transport',
      'Multi-day event styling (Sangeet, Haldi, Wedding, Reception)',
      'Local & imported flower curation suited to climate',
      'On-site design director & 20+ artisan florist execution crew'
    ],
    image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80',
    startingPrice: '₹8.0 Lakhs'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Discovery Consultation',
    subtitle: 'Understanding Your Vision',
    description: 'We meet over champagne or virtual call to understand your wedding aesthetic, venue dimensions, color preferences, and budget expectations.',
    icon: 'MessageSquare',
    deliverables: ['Initial Design Brief', 'Concept Moodboard', 'Budget Roadmap']
  },
  {
    stepNumber: '02',
    title: '3D Spatial Concepting',
    subtitle: 'Architectural Visualizations',
    description: 'Our floral architects draft detailed 3D renders and spatial layouts of your mandap, entrance, and stage to visualize bloom density and lighting.',
    icon: 'Compass',
    deliverables: ['3D Renderings', 'Floral Palette Samples', 'Itemized Proposal']
  },
  {
    stepNumber: '03',
    title: 'Botanical Curation',
    subtitle: 'Sourcing Premier Blooms',
    description: 'We reserve premium Grade-A blooms directly from growers in Holland, Ecuador, Bangalore, and Thailand to ensure peak freshness for your dates.',
    icon: 'Flower2',
    deliverables: ['Flower Sourcing Roster', 'Custom Structure Rigging Plan']
  },
  {
    stepNumber: '04',
    title: 'Mockup & Sample Preview',
    subtitle: 'Tangible Design Review',
    description: 'Experience a live tabletop or arch sample in our studio. Smell the roses, feel the velvet linens, and refine details with our master florists.',
    icon: 'Eye',
    deliverables: ['Live Centerpiece Sample', 'Final Color Approval']
  },
  {
    stepNumber: '05',
    title: 'Precision On-Site Execution',
    subtitle: 'Overnight Transformation',
    description: 'Our 30+ member installation team works meticulously overnight to erect structures, hydrate blooms, and detail every micro-element.',
    icon: 'Wrench',
    deliverables: ['On-Site Lead Florist', 'Thermal Bloom Care', 'Clean Rigging']
  },
  {
    stepNumber: '06',
    title: 'Ceremony Care & Strike',
    subtitle: 'Flawless Touchpoints',
    description: 'We maintain dedicated florists during rituals to ensure petals remain crisp and flowers remain vibrant, followed by eco-conscious post-event recycling.',
    icon: 'HeartHandshake',
    deliverables: ['Ritual Floral Refresh', 'Post-Event Clean Breakdown', 'Sustainable Recycling']
  }
];

export const INVESTMENT_PACKAGES: InvestmentPackage[] = [
  {
    id: 'essential-romance',
    name: 'The Intimate Royale',
    tagline: 'Ideal for refined boutique weddings & intimate gatherings (100 - 200 guests)',
    priceRange: '₹3.5L - ₹6L',
    idealFor: 'Boutique Resorts & Intimate Hotels',
    features: [
      'Bespoke 4-Pillar Floral Mandap with Fresh Roses & Hydrangeas',
      'Statement Entrance Archway with Ambient Candle Lanterns',
      'Bride & Groom Varmala Set (Imported Ecuadorian Roses)',
      'Aisle Runner Styling with Floral Petal Borders',
      'Stage Accent Backdrop & Premium Velvet Sofa',
      'Dedicated On-Site Lead Florist'
    ]
  },
  {
    id: 'signature-grandeur',
    name: 'The Signature Heritage',
    tagline: 'Our most requested comprehensive package for luxury weddings (300 - 600 guests)',
    priceRange: '₹8L - ₹15L',
    isPopular: true,
    idealFor: 'Palace Grounds & Luxury 5-Star Ballrooms',
    features: [
      'Grand 360-Degree Royal Mandap Dome with Suspended Chandelier',
      'Grand 60ft Tunnel Entrance Corridor with Hanging Blooms',
      'High-Society Reception Stage Wall with Layered Floral Skirting',
      '15 Custom Banquet Table Centerpieces & Brass Candelabras',
      'Vibrant Haldi / Mehendi Floral Backdrop & Jhoola Setup',
      'Full Bridal Party Floral Suite (Bouquets, Boutonnieres, Varmalas)',
      '3D Visualizations & Studio Sample Mockup Session'
    ]
  },
  {
    id: 'palace-sovereign',
    name: 'The Royal Sovereign',
    tagline: 'Unrestricted floral luxury & architectural production for multi-day celebrations (700+ guests)',
    priceRange: '₹20L - ₹45L+',
    idealFor: 'Grand Palaces, Heritage Forts & International Destination Venues',
    features: [
      'Turnkey Floral Decor for 4 Multi-Day Functions (Haldi, Mehendi, Sangeet, Wedding & Gala)',
      'Monumental Floral Architecture & Custom Rigging Structures',
      'Direct Imports of Rare Dutch, Ecuadorian & South American Botanicals',
      'Interactive Floral Photobooths & Custom Champagne Bar Installations',
      'Full Banquet Tablescapes for up to 50 Royal Dining Tables',
      '24/7 Dedicated Concierge & Master Florist Production Crew (35+ Staff)',
      'Full Sustainability & Post-Wedding Flower Donation Coordination'
    ]
  }
];
