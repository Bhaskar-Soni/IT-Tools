import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'ip',
  title: 'Ip',
  description: 'A collection of ip resources and tools',
  keywords: ['ip'],
  category: 'Hunting Commands',
  component: () => import('./ip.vue'),
  icon: Terminal,
};

