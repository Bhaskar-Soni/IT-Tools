import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-flatten-nestify',
  title: 'JSON Flattener/Unflattener',
  description: 'Flatten or nestify/unflatten JSON content',
  keywords: ['json','flatten','nestify','unflatten'],
  component: () => import('./json-flatten-nestify.vue'),
  icon: Braces,
  category: 'JSON',
};
