import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-to-object',
  title: 'JSON to object',
  description: 'Parse and convert JSON to object.',
  keywords: ['json','parse','object','convert','transform'],
  component: () => import('./json-to-object.vue'),
  icon: Braces,
  category: 'JSON',
};
