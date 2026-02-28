import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'accesschk',
  title: 'Accesschk',
  description: 'A collection of accesschk resources and tools',
  keywords: ['accesschk'],
  category: 'Tool Commands',
  component: () => import('./accesschk.vue'),
  icon: Terminal,
};

