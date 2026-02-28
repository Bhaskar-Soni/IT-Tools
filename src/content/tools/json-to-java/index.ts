import { ArrowsShuffle } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-to-java',
  title: 'JSON to Java Entity',
  description: 'Convert JSON into Java entities',
  keywords: ['json','to','java'],
  component: () => import('./json-to-java.vue'),
  icon: ArrowsShuffle,
  category: 'Java & JavaScript',
};
