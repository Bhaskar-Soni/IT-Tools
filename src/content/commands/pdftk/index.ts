import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'pdftk',
  title: 'Pdftk',
  description: 'A collection of pdftk resources and tools',
  keywords: ['pdftk'],
  category: 'Linux Commands',
  component: () => import('./pdftk.vue'),
  icon: Terminal,
};

