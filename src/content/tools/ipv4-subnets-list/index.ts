import { Router } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ipv4-subnets-list',
  title: 'IPv4 Subnets Lister',
  description: 'List all possible subnets of a given CIDR',
  keywords: ['ipv4','subnet','bitmask'],
  component: () => import('./ipv4-subnets-list.vue'),
  icon: Router,
  category: 'Network',
};
