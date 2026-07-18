import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'bloodhound',
  title: 'Bloodhound',
  description: 'A collection of bloodhound resources and tools',
  keywords: ['bloodhound'],
  category: 'Windows AD Attacks',
  component: () => import('./bloodhound.vue'),
  icon: FileText,
};

