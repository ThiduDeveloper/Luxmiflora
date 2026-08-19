export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  image: string;
  startingPrice: string;
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  couple: string;
  category: 'mandap' | 'reception' | 'entryway' | 'haldi' | 'table-centerpiece' | 'destination';
  categoryLabel: string;
  location: string;
  venue: string;
  seasonYear: string;
  coverImage: string;
  galleryImages: string[];
  story: string;
  palette: string[];
  keyHighlights: string[];
  clientQuote?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string; // e.g. "Bride & Groom" or "Wedding Planner"
  weddingLocation: string;
  rating: number;
  reviewText: string;
  avatar: string;
  date: string;
}

export interface WeddingStyleOption {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  colorPalette: string[];
  recommendedFlowers: string[];
  decorVibe: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export interface InvestmentPackage {
  id: string;
  name: string;
  tagline: string;
  priceRange: string;
  idealFor: string;
  isPopular?: boolean;
  features: string[];
}
