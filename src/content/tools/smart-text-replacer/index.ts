import { Search } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'smart-text-replacer',
  title: 'Smart Text Replacer and Linebreaker',
  description: 'Search and replace a word on single or multiple occurrences just like windows notepad search and replace. Also allows to manage linebreaking and text splitting',
  keywords: ['smart','text-replacer','linebreak','remove','add','split','search','replace'],
  component: () => import('./smart-text-replacer.vue'),
  icon: Search,
  category: 'Text',
};
