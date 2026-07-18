import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'createshortcut',
  title: 'Createshortcut',
  description: 'A collection of createshortcut resources and tools',
  keywords: ['createshortcut'],
  category: 'Windows Commands',
  component: () => import('./createshortcut.vue'),
  icon: Terminal,
};

