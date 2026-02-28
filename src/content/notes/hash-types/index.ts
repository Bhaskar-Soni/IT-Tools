import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'hash-types',
  title: 'Hash Types',
  description: 'A collection of hash types resources and tools',
  keywords: ['hash-types'],
  category: 'Identity & AD',
  component: () => import('./hash-types.vue'),
  icon: FileText,
};

