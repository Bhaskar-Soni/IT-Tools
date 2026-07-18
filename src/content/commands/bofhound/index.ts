import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'bofhound',
  title: 'Bofhound',
  description: 'A collection of bofhound resources and tools',
  keywords: ['bofhound'],
  category: 'Tool Commands',
  component: () => import('./bofhound.vue'),
  icon: Terminal,
};

