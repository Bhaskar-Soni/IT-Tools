import { AlignJustified } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'yaml-flatten-nestify',
  title: 'YAML Flattener/Unflattener',
  description: 'Flatten or nestify/unflatten YAML content (ie, a.b: 1 vs a: b: 1)',
  keywords: ['yaml','flatten','nestify','unflatten'],
  component: () => import('./yaml-flatten-nestify.vue'),
  icon: AlignJustified,
  category: 'YAML',
};
