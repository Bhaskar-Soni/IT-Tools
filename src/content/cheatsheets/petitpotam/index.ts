import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'petitpotam',
  title: 'Petitpotam',
  description: 'A collection of petitpotam resources and tools',
  keywords: ['petitpotam'],
  category: 'Windows AD Attacks',
  component: () => import('./petitpotam.vue'),
  icon: FileText,
};

