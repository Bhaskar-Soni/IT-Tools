import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'powermad',
  title: 'Powermad',
  description: 'A collection of powermad resources and tools',
  keywords: ['powermad'],
  category: 'Windows AD Attacks',
  component: () => import('./powermad.vue'),
  icon: FileText,
};

