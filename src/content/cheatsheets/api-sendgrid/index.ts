import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-sendgrid',
  title: 'API Sendgrid',
  description: 'A collection of api sendgrid resources and tools',
  keywords: ['api-sendgrid'],
  category: 'API',
  component: () => import('./api-sendgrid.vue'),
  icon: FileText,
};


