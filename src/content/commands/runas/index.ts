import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'runas',
  title: 'Runas',
  description: 'A collection of runas resources and tools',
  keywords: ['runas'],
  category: 'Windows Commands',
  component: () => import('./runas.vue'),
  icon: Terminal,
};

