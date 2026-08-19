import { Testimonial } from '@/types';
import { getSanityTestimonials } from '@/sanity/lib/fetch';
import { urlForImage } from '@/sanity/lib/image';

export async function getTestimonials(): Promise<Testimonial[]> {
  const sanityTestimonials = await getSanityTestimonials();
  if (!sanityTestimonials || sanityTestimonials.length === 0) return TESTIMONIALS_DATA;

  return sanityTestimonials.map((t: any) => ({
    id: t._id,
    clientName: t.couple,
    role: t.eventType || 'Bride & Groom',
    weddingLocation: t.eventType || 'Wedding Celebration',
    rating: t.rating || 5,
    reviewText: t.quote,
    avatar: t.avatar
      ? urlForImage(t.avatar).url()
      : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    date: 'Recent Celebration',
  }));
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    clientName: 'Ananya & Vikram Singhania',
    role: 'Bride & Groom (Udaipur Palace Wedding)',
    weddingLocation: 'The Leela Palace, Udaipur',
    rating: 5,
    reviewText: 'Luxmi Flora transformed our Udaipur wedding into an absolute fairytale. The crimson rose mandap on the lake was breathtaking! Every single detail—from our custom varmalas to the candlelit tablescapes—exceeded our highest expectations. Their team handled everything with white-glove professionalism.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    date: 'January 2025'
  },
  {
    id: '2',
    clientName: 'Radhika & Rohan Kapur',
    role: 'Bride & Groom (Delhi Gala Reception)',
    weddingLocation: 'The Taj Mahal Hotel, New Delhi',
    rating: 5,
    reviewText: 'Working with the team at Luxmi Flora was the best decision we made for our wedding. The 24-foot cascading orchid wall was the centerpiece of our reception. Guests are still talking about the scent of fresh flowers that greeted them at the entrance. Pure royal elegance!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    date: 'March 2025'
  },
  {
    id: '3',
    clientName: 'Divya Malhotra',
    role: 'Celebrity Wedding Planner',
    weddingLocation: 'Multi-Destination Luxury Events',
    rating: 5,
    reviewText: 'As a luxury wedding planner, I need floral design partners who deliver 100% precision under tight timelines. Luxmi Flora is in a league of their own. Their 3D renders match the final setup flawlessly, and their flower quality is unmatched in the industry.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    date: 'November 2024'
  },
  {
    id: '4',
    clientName: 'Kiara & Kabir Mehta',
    role: 'Bride & Groom (Goa Beach Destination)',
    weddingLocation: 'Alila Diwa, Goa',
    rating: 5,
    reviewText: 'We wanted a breezy, bohemian yet royal mandap right on the beach. Luxmi Flora navigated sea winds and coastal humidity seamlessly. Our photos look straight out of Vogue Weddings!',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    date: 'October 2024'
  }
];
