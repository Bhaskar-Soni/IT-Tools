import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'onedriveenum',
  title: 'Onedriveenum',
  description: 'A collection of onedriveenum resources and tools',
  keywords: ['onedriveenum'],
  category: 'Cloud Commands',
  component: () => import('./onedriveenum.vue'),
  icon: Terminal,
};


