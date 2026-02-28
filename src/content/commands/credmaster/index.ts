import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'credmaster',
  title: 'Credmaster',
  description: 'A collection of credmaster resources and tools',
  keywords: ['credmaster'],
  category: 'Tool Commands',
  component: () => import('./credmaster.vue'),
  icon: Terminal,
};

