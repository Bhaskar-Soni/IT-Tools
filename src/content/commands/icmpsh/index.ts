import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'icmpsh',
  title: 'Icmpsh',
  description: 'A collection of icmpsh resources and tools',
  keywords: ['icmpsh'],
  category: 'Tool Commands',
  component: () => import('./icmpsh.vue'),
  icon: Terminal,
};

