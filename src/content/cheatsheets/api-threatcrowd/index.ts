import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-threatcrowd',
  title: 'API Threatcrowd',
  description: 'A collection of api threatcrowd resources and tools',
  keywords: ['api-threatcrowd'],
  category: 'API',
  component: () => import('./api-threatcrowd.vue'),
  icon: FileText,
};


