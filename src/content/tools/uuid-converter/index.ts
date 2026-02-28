import { Replace } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'uuid-converter',
  title: 'UUID converter',
  description: 'Converts a UUID with and without a hyphen to other common SQL notations and back.',
  keywords: ['uuid','converter','guid','sql'],
  component: () => import('./uuid-converter.vue'),
  icon: Replace,
  category: 'Generators',
};
