import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'list',
  slug: 'http-status-codes-reference',
  title: 'Http Status Codes Reference',
  description: 'A collection of http status codes reference resources and tools',
  keywords: ['http-status-codes-reference'],
  category: 'Uncategorized',
  component: () => import('./http-status-codes-reference.vue'),
  icon: FileText,
};

