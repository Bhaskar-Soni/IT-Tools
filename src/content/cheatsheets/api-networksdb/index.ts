import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-networksdb',
  title: 'API Networksdb',
  description: 'A collection of api networksdb resources and tools',
  keywords: ['api-networksdb'],
  category: 'API',
  component: () => import('./api-networksdb.vue'),
  icon: FileText,
};


