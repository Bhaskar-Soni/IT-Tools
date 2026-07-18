import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'netsessionenum',
  title: 'Netsessionenum',
  description: 'A collection of netsessionenum resources and tools',
  keywords: ['netsessionenum'],
  category: 'Network Commands',
  component: () => import('./netsessionenum.vue'),
  icon: Terminal,
};

