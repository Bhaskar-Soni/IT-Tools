import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-fullhunt',
  title: 'API Fullhunt',
  description: 'A collection of api fullhunt resources and tools',
  keywords: ['api-fullhunt'],
  category: 'API',
  component: () => import('./api-fullhunt.vue'),
  icon: FileText,
};


