import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'vssadmin',
  title: 'Vssadmin',
  description: 'A collection of vssadmin resources and tools',
  keywords: ['vssadmin'],
  category: 'Windows Commands',
  component: () => import('./vssadmin.vue'),
  icon: Terminal,
};

