import React from 'react';
import { ContactClient } from '@/components/contact/ContactClient';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Contact Luxmi Flora | Wedding Decorator in Bandarawela, Sri Lanka',
  description: 'Contact Luxmi Flora Wedding & Events in Bandarawela, Sri Lanka. Call +94 76 549 5489, WhatsApp, email, or visit our studio. Free consultation for wedding decoration.',
  path: '/contact',
});

export default function ContactPage() {
  return <ContactClient />;
}
