import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'jq',
  title: 'jq Cheatsheet',
  description: 'jq JSON query language reference and examples',
  keywords: ['jq', 'json', 'query', 'parsing'],
  category: 'Development',
  component: () => import('./jq.vue'),
  icon: Braces,
};


