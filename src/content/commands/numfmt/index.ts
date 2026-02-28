import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'numfmt',
  title: 'Numfmt',
  description: 'A collection of numfmt resources and tools',
  keywords: ['numfmt'],
  category: 'Linux Commands',
  component: () => import('./numfmt.vue'),
  icon: Terminal,
};

