import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'crontab',
  title: 'Crontab',
  description: 'A collection of crontab resources and tools',
  keywords: ['crontab'],
  category: 'Linux Commands',
  component: () => import('./crontab.vue'),
  icon: Terminal,
};

