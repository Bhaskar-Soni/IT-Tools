import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'ntsdutil',
  title: 'Ntsdutil',
  description: 'A collection of ntsdutil resources and tools',
  keywords: ['ntsdutil'],
  category: 'Tool Commands',
  component: () => import('./ntsdutil.vue'),
  icon: Terminal,
};

