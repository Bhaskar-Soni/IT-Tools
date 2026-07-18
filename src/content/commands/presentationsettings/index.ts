import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'presentationsettings',
  title: 'Presentationsettings',
  description: 'A collection of presentationsettings resources and tools',
  keywords: ['presentationsettings'],
  category: 'Windows Commands',
  component: () => import('./presentationsettings.vue'),
  icon: Terminal,
};

