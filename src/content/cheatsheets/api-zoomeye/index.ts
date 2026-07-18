import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-zoomeye',
  title: 'API Zoomeye',
  description: 'A collection of api zoomeye resources and tools',
  keywords: ['api-zoomeye'],
  category: 'API',
  component: () => import('./api-zoomeye.vue'),
  icon: FileText,
};


