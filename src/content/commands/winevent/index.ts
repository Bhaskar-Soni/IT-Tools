import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'winevent',
  title: 'Winevent',
  description: 'A collection of winevent resources and tools',
  keywords: ['winevent'],
  category: 'Windows Commands',
  component: () => import('./winevent.vue'),
  icon: Terminal,
};

