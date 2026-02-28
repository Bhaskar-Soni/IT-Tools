import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-to-javascript',
  title: 'JSON to JS converter',
  description: 'Simply convert JSON to Javascript object with this live online converter.',
  keywords: ['json','to','javascript'],
  component: () => import('./json-to-javascript.vue'),
  icon: Braces,
  category: 'Java & JavaScript',
};
