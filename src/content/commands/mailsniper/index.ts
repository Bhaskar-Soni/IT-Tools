import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'mailsniper',
  title: 'Mailsniper',
  description: 'A collection of mailsniper resources and tools',
  keywords: ['mailsniper'],
  category: 'Tool Commands',
  component: () => import('./mailsniper.vue'),
  icon: Terminal,
};

