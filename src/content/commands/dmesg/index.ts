import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'dmesg',
  title: 'Dmesg',
  description: 'A collection of dmesg resources and tools',
  keywords: ['dmesg'],
  category: 'Linux Commands',
  component: () => import('./dmesg.vue'),
  icon: Terminal,
};

