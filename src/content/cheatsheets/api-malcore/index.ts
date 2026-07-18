import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-malcore',
  title: 'API Malcore',
  description: 'A collection of api malcore resources and tools',
  keywords: ['api-malcore'],
  category: 'API',
  component: () => import('./api-malcore.vue'),
  icon: FileText,
};


