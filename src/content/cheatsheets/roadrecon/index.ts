import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'roadrecon',
  title: 'Roadrecon',
  description: 'A collection of roadrecon resources and tools',
  keywords: ['roadrecon'],
  category: 'Windows AD Attacks',
  component: () => import('./roadrecon.vue'),
  icon: FileText,
};

