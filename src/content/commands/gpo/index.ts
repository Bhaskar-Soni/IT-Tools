import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'gpo',
  title: 'Gpo',
  description: 'A collection of gpo resources and tools',
  keywords: ['gpo'],
  category: 'Tool Commands',
  component: () => import('./gpo.vue'),
  icon: Terminal,
};

