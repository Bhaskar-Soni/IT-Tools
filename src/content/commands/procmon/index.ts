import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'procmon',
  title: 'Procmon',
  description: 'A collection of procmon resources and tools',
  keywords: ['procmon'],
  category: 'Windows Commands',
  component: () => import('./procmon.vue'),
  icon: Terminal,
};

