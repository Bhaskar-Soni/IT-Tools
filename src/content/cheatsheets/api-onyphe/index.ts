import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-onyphe',
  title: 'API Onyphe',
  description: 'A collection of api onyphe resources and tools',
  keywords: ['api-onyphe'],
  category: 'API',
  component: () => import('./api-onyphe.vue'),
  icon: FileText,
};


