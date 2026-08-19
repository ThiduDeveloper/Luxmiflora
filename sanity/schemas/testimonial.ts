import { defineField, defineType } from 'sanity';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Client Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'couple',
      title: 'Couple / Client Name (e.g. Radhika & Rohan)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type & Venue (e.g. Grand Reception · Taj Mahal Hotel)',
      type: 'string',
    }),
    defineField({
      name: 'quote',
      title: 'Testimonial Review Quote',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1 - 5 Stars)',
      type: 'number',
      initialValue: 5,
    }),
    defineField({
      name: 'avatar',
      title: 'Couple Photo / Avatar (Optional)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Sequence Order (1, 2, 3...)',
      type: 'number',
      initialValue: 1,
    }),
  ],
});
