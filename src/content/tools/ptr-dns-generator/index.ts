import { World } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ptr-dns-generator',
  title: 'PTR DNS Generator',
  description: 'Generate DNS PTR records',
  keywords: ['ptr','arpa','ip','dns','generator'],
  component: () => import('./ptr-dns-generator.vue'),
  icon: World,
  category: 'Network',
};
