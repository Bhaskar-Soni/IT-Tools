import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'powerup',
  title: 'Powerup',
  description: 'A collection of powerup resources and tools',
  keywords: ['powerup'],
  category: 'Windows AD Attacks',
  component: () => import('./powerup.vue'),
  icon: FileText,
};

