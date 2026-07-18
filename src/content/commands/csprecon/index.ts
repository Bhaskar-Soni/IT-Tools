import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'csprecon',
  title: 'Csprecon',
  description: 'A collection of csprecon resources and tools',
  keywords: ['csprecon'],
  category: 'Tool Commands',
  component: () => import('./csprecon.vue'),
  icon: Terminal,
};

