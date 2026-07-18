import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-leakix',
  title: 'API Leakix',
  description: 'A collection of api leakix resources and tools',
  keywords: ['api-leakix'],
  category: 'API',
  component: () => import('./api-leakix.vue'),
  icon: FileText,
};


