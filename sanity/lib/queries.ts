import { groq } from 'next-sanity';

// GROQ Query to fetch Business Contacts & Site Configuration (handles singleton or any siteConfig document)
export const siteConfigQuery = groq`
  *[_type == "siteConfig" && _id == "siteConfig"][0] {
    _id,
    name,
    tagline,
    description,
    phone,
    whatsappNumber,
    email,
    address,
    googleMapsUrl,
    instagramUrl,
    facebookUrl,
    tiktokUrl,
    workingHours
  }
`;

// GROQ Query to fetch Founder & CEO Profile
export const founderQuery = groq`
  *[_type == "founder" && _id == "founder"][0] {
    _id,
    name,
    role,
    subtitle,
    quote,
    bio,
    image,
    phone,
    email,
    whatsappNumber,
    instagramUrl,
    instagramHandle,
    facebookUrl,
    facebookName,
    weddingsExecuted,
    artisanTeam
  }
`;

// GROQ Query to fetch all Real Weddings & Portfolio items
export const portfolioQuery = groq`
  *[_type == "portfolio"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    couple,
    category,
    venue,
    location,
    seasonYear,
    mainImage,
    galleryImages,
    story,
    keyHighlights,
    clientQuote
  }
`;

// GROQ Query to fetch a single Portfolio item by slug
export const portfolioBySlugQuery = groq`
  *[_type == "portfolio" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    couple,
    category,
    venue,
    location,
    seasonYear,
    mainImage,
    galleryImages,
    story,
    keyHighlights,
    clientQuote
  }
`;

// GROQ Query to fetch Services & Packages
export const servicesQuery = groq`
  *[_type == "service"] | order(order asc, _createdAt asc) {
    _id,
    title,
    subtitle,
    description,
    image,
    features,
    priceStarting,
    order
  }
`;

// GROQ Query to fetch Investment Packages
export const packagesQuery = groq`
  *[_type == "packageItem"] | order(order asc, _createdAt asc) {
    _id,
    title,
    tier,
    badge,
    tagline,
    priceStarting,
    features,
    idealFor,
    order
  }
`;

// GROQ Query to fetch Client Testimonials
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc, _createdAt desc) {
    _id,
    couple,
    eventType,
    quote,
    rating,
    avatar,
    order
  }
`;
