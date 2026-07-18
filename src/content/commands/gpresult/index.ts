import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'gpresult',
  title: 'Gpresult',
  description: 'A collection of gpresult resources and tools',
  keywords: ['gpresult'],
  category: 'Tool Commands',
  component: () => import('./gpresult.vue'),
  icon: Terminal,
};

