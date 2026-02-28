import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'azurehound-usefull-queries',
  title: 'Azurehound Usefull Queries',
  description: 'A collection of azurehound usefull queries resources and tools',
  keywords: ['azurehound-usefull-queries'],
  category: 'Cloud Commands',
  component: () => import('./azurehound-usefull-queries.vue'),
  icon: Terminal,
};

