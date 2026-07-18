import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'icacls',
  title: 'Icacls',
  description: 'A collection of icacls resources and tools',
  keywords: ['icacls'],
  category: 'Tool Commands',
  component: () => import('./icacls.vue'),
  icon: Terminal,
};

