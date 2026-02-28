import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'fgpp',
  title: 'Fgpp',
  description: 'A collection of fgpp resources and tools',
  keywords: ['fgpp'],
  category: 'Tool Commands',
  component: () => import('./fgpp.vue'),
  icon: Terminal,
};

