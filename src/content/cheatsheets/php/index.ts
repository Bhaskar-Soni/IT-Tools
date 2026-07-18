import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'php',
  title: 'Php',
  description: 'A collection of php resources and tools',
  keywords: ['php'],
  category: 'Programming Data',
  component: () => import('./php.vue'),
  icon: FileText,
};

