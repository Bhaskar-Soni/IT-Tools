import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'metasploit',
  title: 'Metasploit',
  description: 'A collection of metasploit resources and tools',
  keywords: ['metasploit'],
  category: 'Tool Commands',
  component: () => import('./metasploit.vue'),
  icon: Terminal,
};


