import { BuildingFactory } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ipv6-ula-generator',
  title: 'IPv6 ULA generator',
  description: 'Generate your own local, non-routable IP addresses for your network according to RFC4193.',
  keywords: ['ipv6','ula','generator','rfc4193','network','private'],
  component: () => import('./ipv6-ula-generator.vue'),
  icon: BuildingFactory,
  category: 'Network',
};
