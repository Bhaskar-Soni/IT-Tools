import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'pywsus',
  title: 'Pywsus',
  description: 'A collection of pywsus resources and tools',
  keywords: ['pywsus'],
  category: 'Hunting Commands',
  component: () => import('./pywsus.vue'),
  icon: Terminal,
};


