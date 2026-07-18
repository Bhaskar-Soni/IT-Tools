import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'list',
  slug: 'common-network-ports-reference',
  title: 'Common Network Ports Reference',
  description: 'A collection of common network ports reference resources and tools',
  keywords: ['common-network-ports-reference'],
  category: 'Uncategorized',
  component: () => import('./common-network-ports-reference.vue'),
  icon: FileText,
};

