import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-urlscan',
  title: 'API Urlscan',
  description: 'A collection of api urlscan resources and tools',
  keywords: ['api-urlscan'],
  category: 'API',
  component: () => import('./api-urlscan.vue'),
  icon: FileText,
};


