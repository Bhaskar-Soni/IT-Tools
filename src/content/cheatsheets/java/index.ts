import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'java',
  title: 'Java',
  description: 'A collection of java resources and tools',
  keywords: ['java'],
  category: 'Programming Data',
  component: () => import('./java.vue'),
  icon: FileText,
};

