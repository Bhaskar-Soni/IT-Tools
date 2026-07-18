import { ChevronDown } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ipv4-range-expander',
  title: 'IPv4 range expander',
  description: 'Given a start and an end IPv4 address, this tool calculates a valid IPv4 subnet along with its CIDR notation.',
  keywords: ['ipv4','range','expander','subnet','creator','cidr'],
  component: () => import('./ipv4-range-expander.vue'),
  icon: ChevronDown,
  category: 'Network',
};
