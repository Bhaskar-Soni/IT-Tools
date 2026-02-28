import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'burp',
  title: 'Burp',
  description: 'A collection of burp resources and tools',
  keywords: ['burp'],
  category: 'Tool Commands',
  component: () => import('./burp.vue'),
  icon: Terminal,
};

