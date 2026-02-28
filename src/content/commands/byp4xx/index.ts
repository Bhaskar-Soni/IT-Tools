import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'byp4xx',
  title: 'Byp4xx',
  description: 'A collection of byp4xx resources and tools',
  keywords: ['byp4xx'],
  category: 'Tool Commands',
  component: () => import('./byp4xx.vue'),
  icon: Terminal,
};

