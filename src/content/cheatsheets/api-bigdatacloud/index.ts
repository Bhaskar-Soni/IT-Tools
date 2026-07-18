import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-bigdatacloud',
  title: 'API Bigdatacloud',
  description: 'A collection of api bigdatacloud resources and tools',
  keywords: ['api-bigdatacloud'],
  category: 'API',
  component: () => import('./api-bigdatacloud.vue'),
  icon: FileText,
};


