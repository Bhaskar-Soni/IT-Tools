import { Router } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ipv6-subnet-calculator',
  title: 'Ipv6 subnet calculator',
  description: 'Parse your IPv6 CIDR blocks and get all the info you need about your sub network.',
  keywords: ['ipv6','subnet','calculator','mask','network','cidr','netmask','bitmask','broadcast','address'],
  component: () => import('./ipv6-subnet-calculator.vue'),
  icon: Router,
  category: 'Network',
};
