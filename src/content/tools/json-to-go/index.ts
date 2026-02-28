import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-to-go',
  title: 'JSON to Go',
  description: 'Convert JSON to Go struct',
  keywords: ['json','parse','go','convert','transform'],
  component: () => import('./json-to-go.vue'),
  icon: Braces,
  category: 'JSON',
};
