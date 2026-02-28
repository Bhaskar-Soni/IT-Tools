import { Binary } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ip-cidr-to-range',
  title: 'Ipv4/6 CIDR to IP Range Calculator',
  description: 'Calculate IP Range from a CIDR (IPv4/6)',
  keywords: ['ipv4','ipv6','cidr'],
  component: () => import('./ip-cidr-to-range.vue'),
  icon: Binary,
  category: 'Network',
};
