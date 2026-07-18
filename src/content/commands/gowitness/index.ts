import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'gowitness',
  title: 'Gowitness',
  description: 'A collection of gowitness resources and tools',
  keywords: ['gowitness'],
  category: 'Linux Commands',
  component: () => import('./gowitness.vue'),
  icon: Terminal,
};

