import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'sharpsccm',
  title: 'Sharpsccm',
  description: 'A collection of sharpsccm resources and tools',
  keywords: ['sharpsccm'],
  category: 'Windows AD Attacks',
  component: () => import('./sharpsccm.vue'),
  icon: FileText,
};

