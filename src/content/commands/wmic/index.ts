import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'wmic',
  title: 'Wmic',
  description: 'A collection of wmic resources and tools',
  keywords: ['wmic'],
  category: 'PowerShell Commands',
  component: () => import('./wmic.vue'),
  icon: Terminal,
};

