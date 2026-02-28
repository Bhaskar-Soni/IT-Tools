import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'conhost',
  title: 'Conhost',
  description: 'A collection of conhost resources and tools',
  keywords: ['conhost'],
  category: 'Windows Commands',
  component: () => import('./conhost.vue'),
  icon: Terminal,
};

