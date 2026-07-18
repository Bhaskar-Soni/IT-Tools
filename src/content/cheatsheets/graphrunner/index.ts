import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'graphrunner',
  title: 'Graphrunner',
  description: 'A collection of graphrunner resources and tools',
  keywords: ['graphrunner'],
  category: 'Cloud Identity',
  component: () => import('./graphrunner.vue'),
  icon: FileText,
};

