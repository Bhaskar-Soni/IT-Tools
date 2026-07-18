import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'netwkstauserenum',
  title: 'Netwkstauserenum',
  description: 'A collection of netwkstauserenum resources and tools',
  keywords: ['netwkstauserenum'],
  category: 'Network Commands',
  component: () => import('./netwkstauserenum.vue'),
  icon: Terminal,
};

