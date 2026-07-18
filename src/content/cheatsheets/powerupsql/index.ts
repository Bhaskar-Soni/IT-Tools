import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'powerupsql',
  title: 'Powerupsql',
  description: 'A collection of powerupsql resources and tools',
  keywords: ['powerupsql'],
  category: 'Windows AD Attacks',
  component: () => import('./powerupsql.vue'),
  icon: FileText,
};

