import { Router } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ipv4-subnet-calculator',
  title: 'IPv4 subnet calculator',
  description: 'Parse your IPv4 CIDR blocks and get all the info you need about your subnet.',
  keywords: ['ipv4','subnet','calculator','mask','network','cidr','netmask','bitmask','broadcast','address'],
  component: () => import('./ipv4-subnet-calculator.vue'),
  icon: Router,
  category: 'Network',
};
