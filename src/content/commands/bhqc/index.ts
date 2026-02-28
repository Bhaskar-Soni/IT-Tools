import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'bhqc',
  title: 'Bhqc',
  description: 'A collection of bhqc resources and tools',
  keywords: ['bhqc'],
  category: 'Tool Commands',
  component: () => import('./bhqc.vue'),
  icon: Terminal,
};

