import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'list',
  slug: 'private-ip-ranges-reference',
  title: 'Private Ip Ranges Reference',
  description: 'A collection of private ip ranges reference resources and tools',
  keywords: ['private-ip-ranges-reference'],
  category: 'Uncategorized',
  component: () => import('./private-ip-ranges-reference.vue'),
  icon: FileText,
};

