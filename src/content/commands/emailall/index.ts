import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'emailall',
  title: 'Emailall',
  description: 'A collection of emailall resources and tools',
  keywords: ['emailall'],
  category: 'Tool Commands',
  component: () => import('./emailall.vue'),
  icon: Terminal,
};

