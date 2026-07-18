import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'sendmail',
  title: 'Sendmail',
  description: 'A collection of sendmail resources and tools',
  keywords: ['sendmail'],
  category: 'Tool Commands',
  component: () => import('./sendmail.vue'),
  icon: Terminal,
};

