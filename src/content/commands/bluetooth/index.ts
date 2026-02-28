import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'bluetooth',
  title: 'Bluetooth',
  description: 'A collection of bluetooth resources and tools',
  keywords: ['bluetooth'],
  category: 'MISC Commands',
  component: () => import('./bluetooth.vue'),
  icon: Terminal,
};

