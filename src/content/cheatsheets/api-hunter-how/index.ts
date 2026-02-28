import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-hunter-how',
  title: 'API Hunter How',
  description: 'A collection of api hunter how resources and tools',
  keywords: ['api-hunter-how'],
  category: 'API',
  component: () => import('./api-hunter-how.vue'),
  icon: FileText,
};


