import { World } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'spf-dns-generator',
  title: 'SPF DNS generator',
  description: 'Generate SPF DNS TXT record',
  keywords: ['spf','dns'],
  component: () => import('./spf-dns-generator.vue'),
  icon: World,
  category: 'Network',
};
