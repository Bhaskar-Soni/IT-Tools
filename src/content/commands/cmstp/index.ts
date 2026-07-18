import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'cmstp',
  title: 'Cmstp',
  description: 'A collection of cmstp resources and tools',
  keywords: ['cmstp'],
  category: 'Tool Commands',
  component: () => import('./cmstp.vue'),
  icon: Terminal,
};

