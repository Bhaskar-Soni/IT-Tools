import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'powerextract',
  title: 'Powerextract',
  description: 'A collection of powerextract resources and tools',
  keywords: ['powerextract'],
  category: 'Tool Commands',
  component: () => import('./powerextract.vue'),
  icon: Terminal,
};

