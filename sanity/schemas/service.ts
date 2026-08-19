import { defineField, defineType } from 'sanity';

export const service = defineType({
  name: 'service',
  title: 'Services & Floral Offerings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Name (e.g. Wedding Decoration, Reception Decoration)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Short Subtitle / Tagline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Summary Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Featured Service Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'features',
      title: 'Included Scope / Offerings',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'priceStarting',
      title: 'Starting Price (Optional)',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Display Sequence Order (1, 2, 3...)',
      type: 'number',
      initialValue: 1,
    }),
  ],
});
