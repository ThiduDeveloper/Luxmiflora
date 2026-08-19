import { type SchemaTypeDefinition } from 'sanity';
import { siteConfig } from './schemas/siteConfig';
import { founder } from './schemas/founder';
import { portfolio } from './schemas/portfolio';
import { service } from './schemas/service';
import { packageItem } from './schemas/package';
import { testimonial } from './schemas/testimonial';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteConfig, founder, portfolio, service, packageItem, testimonial],
};
