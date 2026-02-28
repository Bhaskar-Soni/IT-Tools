import { Books } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'online-wiktionary',
  title: 'Online Dictionary',
  description: 'Search words in Wiktionary',
  keywords: ['online','dictionary','wiktionary'],
  component: () => import('./online-wiktionary.vue'),
  icon: Books,
  category: 'Data',
};
