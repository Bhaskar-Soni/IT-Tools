import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'whisker',
  title: 'Whisker',
  description: 'A collection of whisker resources and tools',
  keywords: ['whisker'],
  category: 'Windows AD Attacks',
  component: () => import('./whisker.vue'),
  icon: FileText,
};

