import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'list',
  slug: 'cidr-prefix-reference-table',
  title: 'Cidr Prefix Reference Table',
  description: 'A collection of cidr prefix reference table resources and tools',
  keywords: ['cidr-prefix-reference-table'],
  category: 'Uncategorized',
  component: () => import('./cidr-prefix-reference-table.vue'),
  icon: FileText,
};

