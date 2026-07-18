import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'extrac32',
  title: 'Extrac32',
  description: 'A collection of extrac32 resources and tools',
  keywords: ['extrac32'],
  category: 'Tool Commands',
  component: () => import('./extrac32.vue'),
  icon: Terminal,
};

