import { WeddingStyleOption } from '@/types';

export const WEDDING_STYLES: WeddingStyleOption[] = [
  {
    id: 'royal-heritage',
    name: 'Royal Heritage & Crimson Velvet',
    tagline: 'Deep Maroon, Champagne Gold & Antique Brass',
    description: 'Immense grandeur inspired by Rajasthani palaces. Deep red velvet fabrics, gold leaf mandap columns, cascades of red Dutch roses, and flickering brass diyas.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    colorPalette: ['#5C121E', '#4A0E17', '#D4AF37', '#FAF8F5'],
    recommendedFlowers: ['Red Dutch Roses', 'Crimson Dahlias', 'Gold Spray Carnations', 'Deep Red Chrysanthemums'],
    decorVibe: 'Opulent, Regal, Timeless Indian Royalty'
  },
  {
    id: 'ethereal-pastels',
    name: 'Ethereal Garden & Blush Romance',
    tagline: 'Dusty Rose, Cream Ivory & Sage Greenery',
    description: 'Soft, whimsical, romantic botanical atmosphere with floating garden roses, pale pink peonies, weeping eucalyptus foliage, and crystal chandeliers.',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
    colorPalette: ['#E7A1A7', '#F5F0EB', '#BF9E84', '#FFFFFF'],
    recommendedFlowers: ['Avalanche Roses', 'Pink Peonies', 'Hydrangeas', 'Italian Ruscus', 'Dusty Miller'],
    decorVibe: 'Fairy-tale, Soft Romantic, English Garden Dream'
  },
  {
    id: 'modern-glam',
    name: 'Contemporary Onyx & Monochromatic White',
    tagline: 'Pure White Orchids, Mirrored Glass & Warm Gold',
    description: 'Sleek, high-fashion aesthetic featuring cascading white dendrobium orchids, geometric mirrored pedestals, warm candlelight, and architectural foliage.',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80',
    colorPalette: ['#FFFFFF', '#D4AF37', '#1A1818', '#FAF8F5'],
    recommendedFlowers: ['Dendrobium Orchids', 'White Calla Lilies', 'White Anthuriums', 'Monstera Leaves'],
    decorVibe: 'High-Society Gala, Runway Glamour, Minimalist Luxury'
  },
  {
    id: 'marigold-festive',
    name: 'Festive Marigold & Sunburst Turmeric',
    tagline: 'Vibrant Yellow, Tangerine & Rajnigandha',
    description: 'Vibrant celebration of joy designed for Haldi and Mehendi functions with lush marigold curtains, jhoolas, brass urli bowls, and colorful drapes.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    colorPalette: ['#F3E5AB', '#D4AF37', '#BD404F', '#5C121E'],
    recommendedFlowers: ['Yellow Genda Phool', 'Orange Marigolds', 'Fragrant Rajnigandha', 'Mogra Strands'],
    decorVibe: 'Joyful, Traditional, High-Energy Festivity'
  }
];
