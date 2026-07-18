import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'powerview',
  title: 'Powerview',
  description: 'A collection of powerview resources and tools',
  keywords: ['powerview'],
  category: 'Windows AD Attacks',
  component: () => import('./powerview.vue'),
  icon: FileText,
};

