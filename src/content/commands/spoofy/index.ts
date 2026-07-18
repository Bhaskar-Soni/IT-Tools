import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'spoofy',
  title: 'Spoofy',
  description: 'A collection of spoofy resources and tools',
  keywords: ['spoofy'],
  category: 'Linux Commands',
  component: () => import('./spoofy.vue'),
  icon: Terminal,
};

