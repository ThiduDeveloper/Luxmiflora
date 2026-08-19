import { defineField, defineType } from 'sanity';

export const founder = defineType({
  name: 'founder',
  title: 'Founder & Leadership Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Founder Full Name',
      type: 'string',
      initialValue: 'Tharun Sharma',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Official Role / Title',
      type: 'string',
      initialValue: 'Founder & CEO',
    }),
    defineField({
      name: 'subtitle',
      title: 'Designation Subtitle',
      type: 'string',
      initialValue: 'CEO & Principal Floral Architect',
    }),
    defineField({
      name: 'quote',
      title: 'Featured Vision Quote',
      type: 'text',
      initialValue: 'Floral engineering is not merely arranging petals; it is the art of sculpting grand architectural environments that evoke timeless royal emotion.',
    }),
    defineField({
      name: 'bio',
      title: 'Founder Biography / Narrative',
      type: 'text',
      initialValue: 'Under Tharun’s visionary leadership, Luxmi Flora has redefined luxury wedding decor across India. Combining structural floral engineering with authentic Indian heritage aesthetics, Tharun personally oversees high-society palace weddings, royal mandap architectures, and gala receptions.',
    }),
    defineField({
      name: 'image',
      title: 'Founder Portrait Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'phone',
      title: 'Direct Mobile / Phone Number',
      type: 'string',
      initialValue: '0759695057',
    }),
    defineField({
      name: 'email',
      title: 'Direct Email Address',
      type: 'string',
      initialValue: 'Tharunsharma2@iCloud.com',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'Direct WhatsApp Number',
      type: 'string',
      initialValue: '0759695057',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Founder Instagram Profile URL',
      type: 'url',
      initialValue: 'https://www.instagram.com/tharunsharma_vengadasalam?igsi=MTVsdnk1ZWZvcTZyNg==',
    }),
    defineField({
      name: 'instagramHandle',
      title: 'Founder Instagram Handle',
      type: 'string',
      initialValue: '@tharunsharma_vengadasalam',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Founder Facebook Profile URL',
      type: 'url',
      initialValue: 'https://www.facebook.com/share/1CyGFVqqdr/?mibextid=wwXIfr',
    }),
    defineField({
      name: 'facebookName',
      title: 'Founder Facebook Display Name',
      type: 'string',
      initialValue: 'Tharun Sharma',
    }),
    defineField({
      name: 'weddingsExecuted',
      title: 'Weddings Executed Stat (e.g. 350+)',
      type: 'string',
      initialValue: '350+',
    }),
    defineField({
      name: 'artisanTeam',
      title: 'Artisan Team Count Stat (e.g. 30+)',
      type: 'string',
      initialValue: '30+',
    }),
  ],
});
