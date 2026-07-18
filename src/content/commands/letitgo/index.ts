import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'letitgo',
  title: 'Letitgo',
  description: 'A collection of letitgo resources and tools',
  keywords: ['letitgo'],
  category: 'Linux Commands',
  component: () => import('./letitgo.vue'),
  icon: Terminal,
};

