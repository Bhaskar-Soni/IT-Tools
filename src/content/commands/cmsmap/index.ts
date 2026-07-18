import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'cmsmap',
  title: 'Cmsmap',
  description: 'A collection of cmsmap resources and tools',
  keywords: ['cmsmap'],
  category: 'Tool Commands',
  component: () => import('./cmsmap.vue'),
  icon: Terminal,
};

