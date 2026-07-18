import { Binary } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ip-range-to-cidr',
  title: 'IPv4/6 Range to CIDR(s) Calculator',
  description: 'Calculate CIDR(s) from an IP Range (IPv4/6)',
  keywords: ['ip','range','to','cidr'],
  component: () => import('./ip-range-to-cidr.vue'),
  icon: Binary,
  category: 'Network',
};
