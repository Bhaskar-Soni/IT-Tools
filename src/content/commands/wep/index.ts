import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'wep',
  title: 'Wep',
  description: 'A collection of wep resources and tools',
  keywords: ['wep'],
  category: 'Linux Commands',
  component: () => import('./wep.vue'),
  icon: Terminal,
};

