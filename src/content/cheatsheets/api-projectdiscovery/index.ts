import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-projectdiscovery',
  title: 'API Projectdiscovery',
  description: 'A collection of api projectdiscovery resources and tools',
  keywords: ['api-projectdiscovery'],
  category: 'API',
  component: () => import('./api-projectdiscovery.vue'),
  icon: FileText,
};


