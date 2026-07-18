import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-airbase',
  title: 'API Airbase',
  description: 'A collection of airbase resources and tools',
  keywords: ['airbase'],
  category: 'API',
  component: () => import('./api-airbase.vue'),
  icon: FileText,
};

