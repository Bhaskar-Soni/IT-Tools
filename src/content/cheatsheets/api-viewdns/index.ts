import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-viewdns',
  title: 'API Viewdns',
  description: 'A collection of api viewdns resources and tools',
  keywords: ['api-viewdns'],
  category: 'API',
  component: () => import('./api-viewdns.vue'),
  icon: FileText,
};


