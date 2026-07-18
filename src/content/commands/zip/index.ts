import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'zip',
  title: 'Zip',
  description: 'A collection of zip resources and tools',
  keywords: ['zip'],
  category: 'Linux Commands',
  component: () => import('./zip.vue'),
  icon: Terminal,
};

