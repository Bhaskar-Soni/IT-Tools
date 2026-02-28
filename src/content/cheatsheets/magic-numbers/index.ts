import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'magic-numbers',
  title: 'Magic Numbers',
  description: 'A collection of magic numbers resources and tools',
  keywords: ['magic-numbers'],
  category: 'Programming Data',
  component: () => import('./magic-numbers.vue'),
  icon: FileText,
};

