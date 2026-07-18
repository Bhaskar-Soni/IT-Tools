import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'osquery',
  title: 'Osquery',
  description: 'A collection of osquery resources and tools',
  keywords: ['osquery'],
  category: 'Tool Commands',
  component: () => import('./osquery.vue'),
  icon: Terminal,
};

