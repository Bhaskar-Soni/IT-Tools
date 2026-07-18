import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-shodan',
  title: 'API Shodan',
  description: 'A collection of api shodan resources and tools',
  keywords: ['api-shodan'],
  category: 'API',
  component: () => import('./api-shodan.vue'),
  icon: FileText,
};


