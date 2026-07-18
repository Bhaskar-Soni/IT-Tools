import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'gobuster',
  title: 'Gobuster',
  description: 'A collection of gobuster resources and tools',
  keywords: ['gobuster'],
  category: 'Tool Commands',
  component: () => import('./gobuster.vue'),
  icon: Terminal,
};

