import React from 'react';
import { ContactClient } from '@/components/contact/ContactClient';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Contact Luxmi Flora Wedding & Events | Luxmi Flora',
  description: 'Get in touch with Luxmi Flora Wedding & Events. Direct phone, WhatsApp concierge, email, and location details.',
});

export default function ContactPage() {
  return <ContactClient />;
}
