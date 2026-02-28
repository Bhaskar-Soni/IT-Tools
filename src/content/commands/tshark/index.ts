import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'tshark',
  title: 'Tshark',
  description: 'A collection of tshark resources and tools',
  keywords: ['tshark'],
  category: 'Linux Commands',
  component: () => import('./tshark.vue'),
  icon: Terminal,
};

