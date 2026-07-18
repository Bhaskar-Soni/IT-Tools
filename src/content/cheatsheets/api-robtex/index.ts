import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-robtex',
  title: 'API Robtex',
  description: 'A collection of api robtex resources and tools',
  keywords: ['api-robtex'],
  category: 'API',
  component: () => import('./api-robtex.vue'),
  icon: FileText,
};


