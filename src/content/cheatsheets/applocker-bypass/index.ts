import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'applocker-bypass',
  title: 'Applocker Bypass',
  description: 'A collection of applocker bypass resources and tools',
  keywords: ['applocker-bypass'],
  category: 'Windows Defense',
  component: () => import('./applocker-bypass.vue'),
  icon: FileText,
};

