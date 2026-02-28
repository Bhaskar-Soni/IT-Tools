import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-openai',
  title: 'API Openai',
  description: 'A collection of api openai resources and tools',
  keywords: ['api-openai'],
  category: 'API',
  component: () => import('./api-openai.vue'),
  icon: FileText,
};


