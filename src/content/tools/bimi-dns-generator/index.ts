import { World } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'bimi-dns-generator',
  title: 'BIMI DNS Generator',
  description: 'Generate BIMI DNS TXT record',
  keywords: ['bimi','dns','txt'],
  component: () => import('./bimi-dns-generator.vue'),
  icon: World,
  category: 'Network',
};
