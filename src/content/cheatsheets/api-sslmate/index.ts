import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-sslmate',
  title: 'API Sslmate',
  description: 'A collection of api sslmate resources and tools',
  keywords: ['api-sslmate'],
  category: 'API',
  component: () => import('./api-sslmate.vue'),
  icon: FileText,
};


