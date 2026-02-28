import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-hunter',
  title: 'API Hunter',
  description: 'A collection of api hunter resources and tools',
  keywords: ['api-hunter'],
  category: 'API',
  component: () => import('./api-hunter.vue'),
  icon: FileText,
};


