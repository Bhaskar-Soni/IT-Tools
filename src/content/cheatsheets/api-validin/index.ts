import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-validin',
  title: 'API Validin',
  description: 'A collection of api validin resources and tools',
  keywords: ['api-validin'],
  category: 'API',
  component: () => import('./api-validin.vue'),
  icon: FileText,
};


