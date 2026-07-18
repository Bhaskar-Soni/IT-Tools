import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'startup-folders',
  title: 'Startup Folders',
  description: 'A collection of startup folders resources and tools',
  keywords: ['startup-folders'],
  category: 'Windows Commands',
  component: () => import('./startup-folders.vue'),
  icon: Terminal,
};

