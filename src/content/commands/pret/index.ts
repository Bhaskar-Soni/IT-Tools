import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'pret',
  title: 'Pret',
  description: 'A collection of pret resources and tools',
  keywords: ['pret'],
  category: 'Linux Commands',
  component: () => import('./pret.vue'),
  icon: Terminal,
};

