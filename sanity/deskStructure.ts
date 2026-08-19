import type { StructureResolver } from 'sanity/structure';

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('Luxmi Flora CMS Dashboard')
    .items([
      // 1. Business & Contact Information (Singleton)
      S.listItem()
        .title('🏢 Business & Contact Details')
        .child(
          S.document()
            .schemaType('siteConfig')
            .documentId('siteConfig')
            .title('Business & Contact Details')
        ),

      // 2. Founder & Leadership Profile (Singleton)
      S.listItem()
        .title('👑 Founder & CEO Profile')
        .child(
          S.document()
            .schemaType('founder')
            .documentId('founder')
            .title('Tharun Sharma - Founder Profile')
        ),

      S.divider(),

      // 3. Services & Offerings
      S.listItem()
        .title('💐 Services & Floral Offerings')
        .schemaType('service')
        .child(S.documentTypeList('service').title('Floral Services')),

      // 4. Real Weddings & Portfolio
      S.listItem()
        .title('📸 Real Weddings & Portfolio')
        .schemaType('portfolio')
        .child(S.documentTypeList('portfolio').title('Wedding Portfolios')),

      // 5. Investment Packages
      S.listItem()
        .title('💎 Investment Packages')
        .schemaType('packageItem')
        .child(S.documentTypeList('packageItem').title('Wedding Packages')),

      // 6. Testimonials
      S.listItem()
        .title('⭐ Client Testimonials')
        .schemaType('testimonial')
        .child(S.documentTypeList('testimonial').title('Client Reviews')),
    ]);
