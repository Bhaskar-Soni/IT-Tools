import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'malsccm',
  title: 'Malsccm',
  description: 'A collection of malsccm resources and tools',
  keywords: ['malsccm'],
  category: 'Windows AD Attacks',
  component: () => import('./malsccm.vue'),
  icon: FileText,
};

