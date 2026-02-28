import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-hudsonrock',
  title: 'API Hudsonrock',
  description: 'A collection of api hudsonrock resources and tools',
  keywords: ['api-hudsonrock'],
  category: 'API',
  component: () => import('./api-hudsonrock.vue'),
  icon: FileText,
};


