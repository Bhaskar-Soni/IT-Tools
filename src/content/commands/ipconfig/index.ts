import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'ipconfig',
  title: 'Ipconfig',
  description: 'A collection of ipconfig resources and tools',
  keywords: ['ipconfig'],
  category: 'Network Commands',
  component: () => import('./ipconfig.vue'),
  icon: Terminal,
};

