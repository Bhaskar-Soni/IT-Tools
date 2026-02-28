import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'appcmd',
  title: 'Appcmd',
  description: 'A collection of appcmd resources and tools',
  keywords: ['appcmd'],
  category: 'Windows Commands',
  component: () => import('./appcmd.vue'),
  icon: Terminal,
};

