import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'smap',
  title: 'Smap',
  description: 'A collection of smap resources and tools',
  keywords: ['smap'],
  category: 'Linux Commands',
  component: () => import('./smap.vue'),
  icon: Terminal,
};

