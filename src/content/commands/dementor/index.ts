import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'dementor',
  title: 'Dementor',
  description: 'A collection of dementor resources and tools',
  keywords: ['dementor'],
  category: 'MISC Commands',
  component: () => import('./dementor.vue'),
  icon: Terminal,
};

