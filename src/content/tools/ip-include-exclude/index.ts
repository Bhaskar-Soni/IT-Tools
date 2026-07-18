import { ChevronDown } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ip-include-exclude',
  title: 'IP Subnets Exclude Calculator',
  description: 'Substract a disallowed IP Ranges/Mask/CIDR list from an allowed IP Ranges/Mask/CIDR list',
  keywords: ['ip','allowed','disallowed','include','exclude','subnet','cidr'],
  component: () => import('./ip-include-exclude.vue'),
  icon: ChevronDown,
  category: 'Network',
};
