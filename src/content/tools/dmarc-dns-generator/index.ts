import { World } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'dmarc-dns-generator',
  title: 'DMARC DNS Generator',
  description: 'Generate DMARC DNS TXT record',
  keywords: ['dmarc','dns'],
  component: () => import('./dmarc-dns-generator.vue'),
  icon: World,
  category: 'Network',
};
