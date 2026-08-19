import { defineField, defineType } from 'sanity';

export const packageItem = defineType({
  name: 'packageItem',
  title: 'Investment Packages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Package Title (e.g. Royal Imperial Mandap & Gala)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tier',
      title: 'Tier Name (e.g. Bespoke Grandeur, Signature Splendor, Intimate Elegance)',
      type: 'string',
    }),
    defineField({
      name: 'badge',
      title: 'Special Badge (e.g. MOST POPULAR / ROYAL FLAGSHIP)',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Short Tagline / Summary',
      type: 'string',
    }),
    defineField({
      name: 'priceStarting',
      title: 'Starting Price (e.g. Starting from LKR 850,000 / ₹4.5 Lakhs)',
      type: 'string',
    }),
    defineField({
      name: 'features',
      title: 'Included Scope / Features List',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'idealFor',
      title: 'Ideal For (e.g. 500+ Guest Palace Weddings)',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Display Order (1, 2, 3...)',
      type: 'number',
      initialValue: 1,
    }),
  ],
});
