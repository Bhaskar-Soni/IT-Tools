import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-censys',
  title: 'API Censys',
  description: 'A collection of api censys resources and tools',
  keywords: ['api-censys'],
  category: 'API',
  component: () => import('./api-censys.vue'),
  icon: FileText,
};


