import { Braces } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'javascript-to-json',
  title: 'JS to JSON converter',
  description: 'Simply convert Javascript object to JSON with this live online converter.',
  keywords: ['javascript','json'],
  component: () => import('./javascript-to-json.vue'),
  icon: Braces,
  category: 'Java & JavaScript',
};
