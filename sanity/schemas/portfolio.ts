import { defineField, defineType } from 'sanity';

export const portfolio = defineType({
  name: 'portfolio',
  title: 'Real Weddings & Portfolio',
  type: 'document',
  groups: [
    { name: 'basics', title: '💍 Wedding Details', default: true },
    { name: 'media', title: '📷 Photography & Gallery' },
    { name: 'story', title: '📖 Narrative & Highlights' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Wedding / Event Title',
      type: 'string',
      group: 'basics',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'basics',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'couple',
      title: 'Couple Names (e.g. Ananya & Vikram)',
      type: 'string',
      group: 'basics',
    }),
    defineField({
      name: 'category',
      title: 'Gallery Filter Category',
      type: 'string',
      group: 'basics',
      options: {
        list: [
          { title: 'Weddings / Mandap', value: 'mandap' },
          { title: 'Receptions & Galas', value: 'reception' },
          { title: 'Engagements & Destination', value: 'destination' },
          { title: 'Floral Decor & Arches', value: 'floral' },
          { title: 'Outdoor & Beachfront Events', value: 'outdoor' },
          { title: 'Cultural & Traditional Functions', value: 'functions' },
        ],
      },
      initialValue: 'mandap',
    }),
    defineField({
      name: 'venue',
      title: 'Venue Name',
      type: 'string',
      group: 'basics',
    }),
    defineField({
      name: 'location',
      title: 'Location / City (e.g. Colombo, Sri Lanka / Udaipur)',
      type: 'string',
      group: 'basics',
    }),
    defineField({
      name: 'seasonYear',
      title: 'Season / Year (e.g. Winter 2025)',
      type: 'string',
      group: 'basics',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Cover Photo',
      type: 'image',
      group: 'media',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'galleryImages',
      title: 'Additional Gallery Photos',
      type: 'array',
      group: 'media',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'story',
      title: 'Design Narrative / Story',
      type: 'text',
      group: 'story',
    }),
    defineField({
      name: 'keyHighlights',
      title: 'Key Architectural & Floral Highlights',
      type: 'array',
      group: 'story',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'clientQuote',
      title: 'Couple Review / Quote',
      type: 'text',
      group: 'story',
    }),
  ],
});
