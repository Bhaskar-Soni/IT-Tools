import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-intelx',
  title: 'API Intelx',
  description: 'A collection of api intelx resources and tools',
  keywords: ['api-intelx'],
  category: 'API',
  component: () => import('./api-intelx.vue'),
  icon: FileText,
};


