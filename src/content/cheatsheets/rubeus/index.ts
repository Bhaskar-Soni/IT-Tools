import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'rubeus',
  title: 'Rubeus',
  description: 'A collection of rubeus resources and tools',
  keywords: ['rubeus'],
  category: 'Windows AD Attacks',
  component: () => import('./rubeus.vue'),
  icon: FileText,
};

