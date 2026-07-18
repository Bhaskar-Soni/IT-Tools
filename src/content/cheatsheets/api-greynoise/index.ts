import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-greynoise',
  title: 'API Greynoise',
  description: 'A collection of api greynoise resources and tools',
  keywords: ['api-greynoise'],
  category: 'API',
  component: () => import('./api-greynoise.vue'),
  icon: FileText,
};


