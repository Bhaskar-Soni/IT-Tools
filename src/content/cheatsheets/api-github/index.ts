import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-github',
  title: 'API Github',
  description: 'A collection of api github resources and tools',
  keywords: ['api-github'],
  category: 'API',
  component: () => import('./api-github.vue'),
  icon: FileText,
};


