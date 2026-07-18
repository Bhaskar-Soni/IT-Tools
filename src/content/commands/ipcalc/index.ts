import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'ipcalc',
  title: 'Ipcalc',
  description: 'A collection of ipcalc resources and tools',
  keywords: ['ipcalc'],
  category: 'Linux Commands',
  component: () => import('./ipcalc.vue'),
  icon: Terminal,
};

