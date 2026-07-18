import { Binary } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'integers-to-ip',
  title: 'Integers to IPv4/IPv6',
  description: 'Convert integers to IP',
  keywords: ['integers','ip','ipv4','ipv6'],
  component: () => import('./integers-to-ip.vue'),
  icon: Binary,
  category: 'Network',
};
