import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'wget',
  title: 'Wget',
  description: 'A collection of wget resources and tools',
  keywords: ['wget'],
  category: 'Linux Commands',
  component: () => import('./wget.vue'),
  icon: Terminal,
};

