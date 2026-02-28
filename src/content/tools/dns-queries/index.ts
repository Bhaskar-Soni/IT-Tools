import { World } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'dns-queries',
  title: 'DNS Queries',
  description: 'Perform DNS Queries (over HTTPS)',
  keywords: ['dns','nslookup','queries'],
  component: () => import('./dns-queries.vue'),
  icon: World,
  category: 'Network',
};
