import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'nmap',
  title: 'Nmap',
  description: 'A collection of nmap resources and tools',
  keywords: ['nmap'],
  category: 'Tool Commands',
  component: () => import('./nmap.vue'),
  icon: Terminal,
};

