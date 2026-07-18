import { ListSearch } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'duplicate-line-finder',
  title: 'Duplicate Lines Finder',
  description: 'Find and list duplicated lines',
  keywords: ['duplicate','line','finder'],
  component: () => import('./duplicate-line-finder.vue'),
  icon: ListSearch,
  category: 'Text',
};
