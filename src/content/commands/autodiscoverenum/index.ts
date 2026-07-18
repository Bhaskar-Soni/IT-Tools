import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'autodiscoverenum',
  title: 'Autodiscoverenum',
  description: 'A collection of autodiscoverenum resources and tools',
  keywords: ['autodiscoverenum'],
  category: 'Cloud Commands',
  component: () => import('./autodiscoverenum.vue'),
  icon: Terminal,
};

