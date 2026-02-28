import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'set-winuserlanguagelist',
  title: 'Set Winuserlanguagelist',
  description: 'A collection of set winuserlanguagelist resources and tools',
  keywords: ['set-winuserlanguagelist'],
  category: 'Windows Commands',
  component: () => import('./set-winuserlanguagelist.vue'),
  icon: Terminal,
};

