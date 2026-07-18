import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'sysctl',
  title: 'Sysctl',
  description: 'A collection of sysctl resources and tools',
  keywords: ['sysctl'],
  category: 'Linux Commands',
  component: () => import('./sysctl.vue'),
  icon: Terminal,
};

