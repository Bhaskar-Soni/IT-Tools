import { Fingerprint } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'nanoid-generator',
  title: 'NanoIDs generator',
  description: 'Generate random, unique, and URL-friendly IDs for your applications.',
  keywords: ['nanoid','generator'],
  component: () => import('./nanoid-generator.vue'),
  icon: Fingerprint,
  category: 'Generators',
};
