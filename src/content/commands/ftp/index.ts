import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'ftp',
  title: 'Ftp',
  description: 'A collection of ftp resources and tools',
  keywords: ['ftp'],
  category: 'Linux Commands',
  component: () => import('./ftp.vue'),
  icon: Terminal,
};

