import { Binary } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ipv4-address-converter',
  title: 'IPv4 address converter',
  description: 'Convert an IP address into decimal, binary, hexadecimal, or even an IPv6 representation of it.',
  keywords: ['ipv4','address','converter','decimal','hexadecimal','binary','ipv6'],
  component: () => import('./ipv4-address-converter.vue'),
  icon: Binary,
  category: 'Network',
};
