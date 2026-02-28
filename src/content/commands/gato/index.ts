import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'gato',
  title: 'Gato',
  description: 'A collection of gato resources and tools',
  keywords: ['gato'],
  category: 'Tool Commands',
  component: () => import('./gato.vue'),
  icon: Terminal,
};

