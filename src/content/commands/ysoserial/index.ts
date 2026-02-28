import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'ysoserial',
  title: 'Ysoserial',
  description: 'A collection of ysoserial resources and tools',
  keywords: ['ysoserial'],
  category: 'Linux Commands',
  component: () => import('./ysoserial.vue'),
  icon: Terminal,
};

