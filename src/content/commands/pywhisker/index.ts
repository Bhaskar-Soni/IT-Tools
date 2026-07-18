import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'pywhisker',
  title: 'Pywhisker',
  description: 'A collection of pywhisker resources and tools',
  keywords: ['pywhisker'],
  category: 'Hunting Commands',
  component: () => import('./pywhisker.vue'),
  icon: Terminal,
};


