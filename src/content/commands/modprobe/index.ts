import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'modprobe',
  title: 'Modprobe',
  description: 'A collection of modprobe resources and tools',
  keywords: ['modprobe'],
  category: 'Linux Commands',
  component: () => import('./modprobe.vue'),
  icon: Terminal,
};

