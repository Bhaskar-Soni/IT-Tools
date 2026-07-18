import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'ipinfo',
  title: 'Ipinfo',
  description: 'A collection of ipinfo resources and tools',
  keywords: ['ipinfo'],
  category: 'Linux Commands',
  component: () => import('./ipinfo.vue'),
  icon: Terminal,
};

