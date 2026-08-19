import { client } from './client';
import {
  siteConfigQuery,
  founderQuery,
  portfolioQuery,
  portfolioBySlugQuery,
  servicesQuery,
  packagesQuery,
  testimonialsQuery,
} from './queries';

// Fetch main site config & business contact details from Sanity
export async function getSanitySiteConfig() {
  try {
    const config = await client.fetch(siteConfigQuery, {}, { next: { revalidate: 0 } });
    return config || null;
  } catch (error) {
    console.error('Error fetching siteConfig from Sanity:', error);
    return null;
  }
}

// Fetch founder profile from Sanity
export async function getSanityFounder() {
  try {
    const founder = await client.fetch(founderQuery, {}, { next: { revalidate: 0 } });
    return founder || null;
  } catch (error) {
    console.error('Error fetching founder from Sanity:', error);
    return null;
  }
}

// Fetch all portfolio / real wedding items from Sanity
export async function getSanityPortfolio() {
  try {
    const portfolio = await client.fetch(portfolioQuery, {}, { next: { revalidate: 0 } });
    return portfolio || [];
  } catch (error) {
    console.error('Error fetching portfolio from Sanity:', error);
    return [];
  }
}

// Fetch a single portfolio item by slug from Sanity
export async function getSanityPortfolioBySlug(slug: string) {
  try {
    const item = await client.fetch(portfolioBySlugQuery, { slug }, { next: { revalidate: 0 } });
    return item || null;
  } catch (error) {
    console.error(`Error fetching portfolio item '${slug}' from Sanity:`, error);
    return null;
  }
}

// Fetch floral services from Sanity
export async function getSanityServices() {
  try {
    const services = await client.fetch(servicesQuery, {}, { next: { revalidate: 0 } });
    return services || [];
  } catch (error) {
    console.error('Error fetching services from Sanity:', error);
    return [];
  }
}

// Fetch investment packages from Sanity
export async function getSanityPackages() {
  try {
    const packages = await client.fetch(packagesQuery, {}, { next: { revalidate: 0 } });
    return packages || [];
  } catch (error) {
    console.error('Error fetching packages from Sanity:', error);
    return [];
  }
}

// Fetch client testimonials from Sanity
export async function getSanityTestimonials() {
  try {
    const testimonials = await client.fetch(testimonialsQuery, {}, { next: { revalidate: 0 } });
    return testimonials || [];
  } catch (error) {
    console.error('Error fetching testimonials from Sanity:', error);
    return [];
  }
}
