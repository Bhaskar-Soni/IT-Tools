import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'list',
  slug: 'http-request-methods-reference',
  title: 'Http Request Methods Reference',
  description: 'A collection of http request methods reference resources and tools',
  keywords: ['http-request-methods-reference'],
  category: 'Web',
  component: () => import('./http-request-methods-reference.vue'),
  icon: FileText,
};

