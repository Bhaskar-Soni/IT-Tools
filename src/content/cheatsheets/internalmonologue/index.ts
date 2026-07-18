import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'internalmonologue',
  title: 'Internalmonologue',
  description: 'A collection of internalmonologue resources and tools',
  keywords: ['internalmonologue'],
  category: 'Windows AD Attacks',
  component: () => import('./internalmonologue.vue'),
  icon: FileText,
};

