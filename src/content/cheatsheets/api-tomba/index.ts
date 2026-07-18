import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-tomba',
  title: 'API Tomba',
  description: 'A collection of api tomba resources and tools',
  keywords: ['api-tomba'],
  category: 'API',
  component: () => import('./api-tomba.vue'),
  icon: FileText,
};


