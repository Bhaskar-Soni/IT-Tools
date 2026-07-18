import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-to-ts',
  title: 'JSON to TS',
  description: 'Parse and convert JSON to TS.',
  keywords: ['json','parse','typescript','convert','transform'],
  component: () => import('./json-to-ts.vue'),
  icon: Braces,
  category: 'JSON',
};
