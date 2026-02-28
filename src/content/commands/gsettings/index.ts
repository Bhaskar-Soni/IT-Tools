import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'gsettings',
  title: 'Gsettings',
  description: 'A collection of gsettings resources and tools',
  keywords: ['gsettings'],
  category: 'Linux Commands',
  component: () => import('./gsettings.vue'),
  icon: Terminal,
};

