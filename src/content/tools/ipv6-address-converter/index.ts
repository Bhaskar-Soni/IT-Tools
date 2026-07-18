import { Binary } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ipv6-address-converter',
  title: 'Ipv6 address converter',
  description: 'Convert an ip address into decimal, binary, hexadecimal and get infos',
  keywords: ['ipv6','address','converter','decimal','hexadecimal','binary','ipv4'],
  component: () => import('./ipv6-address-converter.vue'),
  icon: Binary,
  category: 'Network',
};
