import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'gmsadumper',
  title: 'Gmsadumper',
  description: 'A collection of gmsadumper resources and tools',
  keywords: ['gmsadumper'],
  category: 'Hunting Commands',
  component: () => import('./gmsadumper.vue'),
  icon: Terminal,
};


