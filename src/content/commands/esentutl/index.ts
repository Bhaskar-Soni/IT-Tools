import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'esentutl',
  title: 'Esentutl',
  description: 'A collection of esentutl resources and tools',
  keywords: ['esentutl'],
  category: 'Windows Commands',
  component: () => import('./esentutl.vue'),
  icon: Terminal,
};

