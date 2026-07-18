import { World } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'dkim-dns-generator',
  title: 'DKIM DNS Generator',
  description: 'Generate DKIM DNS TXT record',
  keywords: ['dkim','dns'],
  component: () => import('./dkim-dns-generator.vue'),
  icon: World,
  category: 'Network',
};
