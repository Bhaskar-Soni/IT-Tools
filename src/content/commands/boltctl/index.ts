import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'boltctl',
  title: 'Boltctl',
  description: 'A collection of boltctl resources and tools',
  keywords: ['boltctl'],
  category: 'MISC Commands',
  component: () => import('./boltctl.vue'),
  icon: Terminal,
};

